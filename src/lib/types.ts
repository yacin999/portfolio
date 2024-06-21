import { z } from "zod";


const phoneValidation = /^(05|06|07)\d{8}$/

export const ContactFormSchema = z.object({
    firstName : z.string().min(2, {
      message : "Name must be at least 2 characters."
    }),
    lastName : z.string().min(2, {
      message : "Name must be at least 2 characters."
    }),
    email : z.string().email(),
    phone : z.string()
    .length(10, {
      message : "phone number must contain 10 characters"
    })
    .regex(phoneValidation, {
      message : "phone number must be a number and start either by 05 or 06 or 07"
    }),
    message : z.string().min(4)
  })




interface Card {
    description: string;
    button: string;
}

export interface ProjectsType {
    title: string;
    cards: Card[];
}
