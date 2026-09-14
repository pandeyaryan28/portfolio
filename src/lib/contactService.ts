import { SITE_LINKS } from '../data/links';

export interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  usedFallback?: boolean;
}

/**
 * Dispatches contact message.
 * Supports Web3Forms, Formspree, or custom webhook endpoint via environment variables,
 * with graceful fallback to pre-filled mailto.
 */
export async function sendContactMessage(data: ContactSubmission): Promise<ContactResponse> {
  const customEndpoint = import.meta.env.VITE_CONTACT_API_URL;
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // 1. If custom endpoint is provided
  if (customEndpoint) {
    try {
      const res = await fetch(customEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          to: SITE_LINKS.profile.email,
        }),
      });

      if (res.ok) {
        return { success: true, message: 'Your message has been sent successfully.' };
      }
    } catch (err) {
      console.warn('Custom contact endpoint failed, proceeding with fallback:', err);
    }
  }

  // 2. If Web3Forms key is configured
  if (web3formsKey) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: data.name,
          email: data.email,
          subject: data.subject || `Portfolio Inquiry from ${data.name}`,
          message: data.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await res.json();
      if (result.success) {
        return { success: true, message: 'Your message has been delivered to Aryan.' };
      }
    } catch (err) {
      console.warn('Web3Forms dispatch failed:', err);
    }
  }

  // 3. If Formspree ID is configured
  if (formspreeId) {
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: data.subject || `New Portfolio Contact from ${data.name}`,
        }),
      });

      if (res.ok) {
        return { success: true, message: 'Your message has been sent via Formspree.' };
      }
    } catch (err) {
      console.warn('Formspree dispatch failed:', err);
    }
  }

  // 4. Client-side mailto trigger fallback (always works offline or online)
  return {
    success: true,
    message: 'Message ready to send.',
    usedFallback: true,
  };
}

export function openMailtoFallback(data: ContactSubmission) {
  const subject = encodeURIComponent(data.subject || `Collaboration Inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  );
  window.location.href = `mailto:${SITE_LINKS.profile.email}?subject=${subject}&body=${body}`;
}
