"use server"

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';



type EmailData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message : string
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values : EmailData) => {

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [`${process.env.EMAIL_RECEIVER}`],
        subject: 'message from client',
        react: EmailTemplate({ 
            firstName: values.firstName , 
            lastName : values.lastName, 
            message : values.message
        }),
        text : ""
      });
    
      if (error) {
        return error
      }
    
      return data
};

