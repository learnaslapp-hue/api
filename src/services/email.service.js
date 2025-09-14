import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from '../config/env.js';
import { hashPassword } from '../utils/utils.js';

// ESM helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local dev: read from the filesystem under project-root/public/<file>
function resolveLocal(file) {
  return path.join(process.cwd(), 'public', file);
}

function isProd() {
  return process.env.VERCEL === '1' || !!process.env.VERCEL_URL || process.env.NODE_ENV === 'production';
}

// Build the absolute base URL for production fetches.
// Prefer Vercel's injected domain, otherwise let users set APP_BASE_URL.
function getProdBaseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.APP_BASE_URL) return process.env.APP_BASE_URL.replace(/\/+$/, '');
  return '';
}

// Try to fetch a template from the live site. We try both "/<file>" and "/public/<file>"
async function fetchTemplateFromProd(file) {
  const base = getProdBaseUrl();
  if (!base) throw new Error('Missing base URL for template fetch (set APP_BASE_URL or rely on VERCEL_URL in Vercel).');

  const candidates = [
    `${base}/${file}`,           // normal public path on Vercel
    `${base}/public/${file}`     // fallback in case routes require explicit /public
  ];

  let lastStatus = 0;
  let lastText = '';
  for (const url of candidates) {
    const res = await fetch(url);
    lastStatus = res.status;
    if (res.ok) return await res.text();
    try { lastText = await res.text(); } catch { /* ignore */ }
  }
  throw new Error(`Failed to fetch template ${file}: ${lastStatus} ${lastText || 'Error'}`);
}

async function loadTemplate(file) {
  if (!isProd()) {
    // Local dev: read from filesystem
    return await readFile(resolveLocal(file), 'utf-8');
  }
  // Production: fetch from static site
  return await fetchTemplateFromProd(file);
}

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env?.evEmail || process.env.EV_EMAIL,
      pass: (env?.evPass || process.env.EV_PASS)?.toString().trim(),
    },
  });
}

export async function sendEmailVerification(recipient, otp) {
  const transporter = createTransporter();

  const evEmail = env?.evEmail || process.env.EV_EMAIL;
  const evAddress = env?.evAddress || process.env.EV_ADDRESS;
  const evSubject = env?.evSubject || process.env.EV_SUBJECT;
  const evCompany = env?.evCompany || process.env.EV_COMPANY;
  const evVerifyURL = env?.evUrl || process.env.EV_URL;

  // Load HTML template
  let html = await loadTemplate('email-verification.html');

  // Replace tokens
  html = html.replace('{{_OTP_}}', otp);
  const hashedOTP = await hashPassword(otp);
  const verifyUrl = `${evVerifyURL}?email=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`;
  html = html.replace('{{_URL_}}', verifyUrl);
  html = html.replace('{{_YEAR_}}', String(new Date().getFullYear()));
  html = html.split('{{_COMPANY_}}').join(evCompany ?? '');

  // Send
  await transporter.sendMail({
    from: evAddress || evEmail,
    to: recipient,
    subject: evSubject,
    html,
  });
  return true;
}

export async function sendResetPasswordOtp(recipient, otp) {
  const transporter = createTransporter();

  const evEmail = env?.evEmail || process.env.EV_EMAIL;
  const evAddress = env?.evAddress || process.env.EV_ADDRESS;
  const evSubject = env?.evResetSubject || process.env.EV_RESET_SUBJECT;
  const evCompany = env?.evCompany || process.env.EV_COMPANY;
  const evVerifyURL = env?.evUrl || process.env.EV_URL;

  // Load HTML template
  let html = await loadTemplate('reset-password.html');

  // Replace tokens
  html = html.replace('{{_OTP_}}', otp);
  const hashedOTP = await hashPassword(otp);
  const resetUrl = `${evVerifyURL}?user=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`;
  html = html.replace('{{_URL_}}', resetUrl);
  html = html.replace('{{_YEAR_}}', String(new Date().getFullYear()));
  html = html.split('{{_COMPANY_}}').join(evCompany ?? '');

  // Send
  await transporter.sendMail({
    from: evAddress || evEmail,
    to: recipient,
    subject: evSubject,
    html,
  });
  return true;
}
