// src/services/email.service.js
import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from '../config/env.js';
import { hashPassword } from '../utils/utils.js';

// ESM helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveLocal(file) {
  // point to project-root/public/file
  return path.join(process.cwd(), 'public', file);
}

function isProd() {
  return process.env.VERCEL === '1' || !!process.env.VERCEL_URL || process.env.NODE_ENV === 'production';
}

function buildTemplateUrl(file) {
  const base =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.APP_BASE_URL || '';
  return `${base}/${file}`;
}

async function loadTemplate(file) {
  if (!isProd()) {
    try {
      return await readFile(resolveLocal(file), 'utf-8');
    } catch (err) {
      console.error(`Local template not found: ${file}`, err);
      throw err;
    }
  }

  // Prod fetch
  const url = buildTemplateUrl(file);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch template ${file}: ${res.status} ${res.statusText}`);
  }
  return await res.text();
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

  let html = await loadTemplate('email-verification.html');
  html = html.replace('{{_OTP_}}', otp);

  const hashedOTP = await hashPassword(otp);
  const url = `${evVerifyURL}?email=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`;
  html = html.replace('{{_URL_}}', url);
  html = html.replace('{{_YEAR_}}', String(new Date().getFullYear()));
  html = html.split('{{_COMPANY_}}').join(evCompany ?? '');

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

  let html = await loadTemplate('reset-password.html');
  html = html.replace('{{_OTP_}}', otp);

  const hashedOTP = await hashPassword(otp);
  const url = `${evVerifyURL}?user=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`;
  html = html.replace('{{_URL_}}', url);
  html = html.replace('{{_YEAR_}}', String(new Date().getFullYear()));
  html = html.split('{{_COMPANY_}}').join(evCompany ?? '');

  await transporter.sendMail({
    from: evAddress || evEmail,
    to: recipient,
    subject: evSubject,
    html,
  });
  return true;
}
