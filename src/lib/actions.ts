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
    const {firstName, lastName, message, email} = values
    const { data, error } = await resend.emails.send({
        from: 'Portfolio <noreply@kelalechomar.info>',
        to: [`${process.env.EMAIL_RECEIVER}`],
        subject: `message from ${firstName} ${lastName}`,
        react: EmailTemplate({ 
            firstName: firstName , 
            lastName : lastName, 
            email : email,
            message : message
        }),
        text : ""
      });
    
      if (error) {
        return Error(error.message)
      }
    
      return data
};

