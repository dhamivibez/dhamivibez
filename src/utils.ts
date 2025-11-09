import { createServerFn } from '@tanstack/react-start';
import z from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters').max(1000, 'Message is too long'),
});

export const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    try {
      const { name, email, message } = data;

      const { error } = await resend.emails.send({
        from: 'Contact Form <contact@dhamivibez.name.ng>',
        to: 'dhamivibez@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #9333ea;">New Contact Form Submission</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #9333ea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 14px;">This message was sent from your portfolio contact form.</p>
          </div>
        `,
      });

      if (error) {
        throw new Error('Failed to send email');
      }

      return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
      console.error('Contact form error:', error);
      throw new Error('Failed to send message. Please try again.');
    }
  });
