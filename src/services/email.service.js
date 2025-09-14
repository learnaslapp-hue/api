import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import path from 'path';
import { env } from '../config/env.js';
import { hashPassword } from '../utils/utils.js';

// Helper: resolve template path relative to project root
function resolveTemplate(p) {
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p);
}

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail', // Or use host/port for other SMTP providers
    auth: {
      user: env?.evEmail || process.env.EV_EMAIL,
      pass: (env?.evPass || process.env.EV_PASS)?.toString().trim(),
    },
  });
}

/**
 * Send email verification with OTP
 */
export async function sendEmailVerification(recipient, otp) {
  const transporter = createTransporter();

  const evEmail = env?.evEmail || process.env.EV_EMAIL;
  const evAddress = env?.evAddress || process.env.EV_ADDRESS;
  const evSubject = env?.evSubject || process.env.EV_SUBJECT;
  const evTemplatePath = env?.evTemplatePath || process.env.EV_TEMPLATE_PATH;
  const evCompany = env?.evCompany || process.env.EV_COMPANY;
  const evVerifyURL = env?.evUrl || process.env.EV_URL;

  let emailTemplate = await readFile(resolveTemplate(evTemplatePath), 'utf-8');
  emailTemplate = emailTemplate.replace('{{_OTP_}}', otp);

  const hashedOTP = await hashPassword(otp);
  emailTemplate = emailTemplate.replace(
    '{{_URL_}}',
    `${evVerifyURL}?email=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`
  );
  emailTemplate = emailTemplate.replace('{{_YEAR_}}', new Date().getFullYear().toString());
  emailTemplate = emailTemplate.replace('{{_COMPANY_}}', evCompany);

  await transporter.sendMail({
    from: evAddress || evEmail,
    to: recipient,
    subject: evSubject,
    html: emailTemplate,
  });

  return true;
}

/**
 * Send reset password OTP
 */
export async function sendResetPasswordOtp(recipient, otp) {
  const transporter = createTransporter();

  const evEmail = env?.evEmail || process.env.EV_EMAIL;
  const evAddress = env?.evAddress || process.env.EV_ADDRESS;
  const evSubject = env?.evResetSubject || process.env.EV_RESET_SUBJECT;
  const evTemplatePath = env?.evResetTemplatePath || process.env.EV_RESET_TEMPLATE_PATH;
  const evCompany = env?.evCompany || process.env.EV_COMPANY;
  const evVerifyURL = env?.evUrl || process.env.EV_URL;

  let emailTemplate = await readFile(resolveTemplate(evTemplatePath), 'utf-8');
  emailTemplate = emailTemplate.replace('{{_OTP_}}', otp);

  const hashedOTP = await hashPassword(otp);
  emailTemplate = emailTemplate.replace(
    '{{_URL_}}',
    `${evVerifyURL}?user=${encodeURIComponent(recipient)}&code=${encodeURIComponent(hashedOTP)}`
  );
  emailTemplate = emailTemplate.replace('{{_YEAR_}}', new Date().getFullYear().toString());
  emailTemplate = emailTemplate.replace('{{_COMPANY_}}', evCompany);

  await transporter.sendMail({
    from: evAddress || evEmail,
    to: recipient,
    subject: evSubject,
    html: emailTemplate,
  });

  return true;
}
