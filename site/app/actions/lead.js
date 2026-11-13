'use server';

import { ContactUs } from '../../lib/cms-kit/contact-us.js';

export async function submitLead(formData) {
  try {
    // 1. Anti-spam honeypot checks (bot trap)
    const honeypot = formData.get('website_hp') || formData.get('company_url');
    if (honeypot) {
      return { success: true, message: 'Inquiry received.' };
    }

    const formType = formData.get('formType') || 'contact';
    const email = formData.get('email')?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: 'Please provide a valid email address.' };
    }

    if (formType === 'newsletter') {
      // Store in CMS ContactUs table with category: 'newsletter' (FLAG-07 resolution)
      await ContactUs.submit({
        firstName: 'Newsletter',
        lastName: 'Subscriber',
        email,
        phone: '+917999934815',
        message: 'Newsletter subscription',
        status: 'pending',
        metadata: {
          category: 'newsletter',
          source: formData.get('source') || 'footer-newsletter',
          formType: 'newsletter',
          submittedAt: new Date().toISOString(),
        },
      });
      return {
        success: true,
        message: "You're subscribed! We'll send our next engineering digest soon.",
      };
    }

    // Contact brief submission
    const rawName = (formData.get('name') || formData.get('agency_name') || 'Agency Lead').trim();
    const nameParts = rawName.split(' ').filter(Boolean);
    const firstName = nameParts[0] || 'Agency';
    const lastName = nameParts.slice(1).join(' ') || 'Lead';

    const agencyName = formData.get('agency_name') || formData.get('agencyName') || '';
    const teamSize = formData.get('team_size') || '';
    const workType = formData.get('work_type') || formData.get('scopePlatform') || 'Websites & Web Apps';
    const monthlyRequests = formData.get('monthly_requests') || '';
    const projectScope = formData.get('project_scope') || formData.get('message') || '';
    const phone = formData.get('phone') || '+917999934815';

    const composedMessage = [
      `Agency: ${agencyName || 'Not specified'}`,
      `Team Size: ${teamSize || 'Not specified'}`,
      `Work Type / Platform: ${workType}`,
      `Monthly Requests: ${monthlyRequests || 'Not specified'}`,
      `Project Scope: ${projectScope || 'No brief text provided'}`,
    ].join('\n');

    await ContactUs.submit({
      firstName,
      lastName,
      email,
      phone: String(phone).trim(),
      message: composedMessage,
      status: 'pending',
      metadata: {
        category: 'agency-lead',
        tags: ['agency-inquiry', workType],
        agencyName,
        teamSize,
        workType,
        monthlyRequests,
        source: formData.get('source') || 'contact-brief-form',
        formType: 'contact',
        submittedAt: new Date().toISOString(),
      },
    });

    return {
      success: true,
      message: 'Brief received! We will review your requirements and respond within 24 hours.',
    };
  } catch (err) {
    console.error('[submitLead] Error submitting inquiry:', err);
    return {
      error: 'Unable to submit your brief right now. Please email us directly at contact@nextwebworks.in or message on WhatsApp.',
    };
  }
}
