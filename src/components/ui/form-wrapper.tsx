"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";
import { SendHorizonal } from "lucide-react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form"
import { ContactFormSchema } from "@/lib/types"
import { sendEmail } from "@/lib/actions";


export function FormWrapper() {

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    mode : "onChange",
    resolver : zodResolver(ContactFormSchema),
    defaultValues  : {
      firstName : "",
      lastName : "",
      email : "",
      phone : "",
      message : ""
    }
  })

  const formIsLoading = form.formState.isLoading

  const submitForm = async (values : z.infer<typeof ContactFormSchema>) => {
    try {
      const response = await sendEmail({...values})
      console.log("your email was sent successfully :", response)
    } catch (error) {
      console.log("error from sending email :", error)
    }
  };


  return (
    <div className="relative z-30 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-zinc-900">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Want to contact us?
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Have questions or need our services? Reach out to us today by sending us a message bellow
      </p>
      <Form  {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(submitForm)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <FormField 
                control={form.control}
                name="firstName"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="firstname">First name</Label>
                    <FormControl>
                      <Input id="firstname" placeholder="John" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}  
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <FormField 
                control={form.control}
                name="lastName"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="lastName">Last name</Label>
                    <FormControl>
                      <Input id="lastName" placeholder="Doe" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}  
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <FormField 
                control={form.control}
                name="email"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="email">Email Address</Label>
                    <FormControl>
                      <Input id="email" placeholder="example@gmail.com" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}  
              />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <FormField 
                control={form.control}
                name="phone"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="phone">Phone Number</Label>
                    <FormControl>
                      <Input id="phone" placeholder="07........" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}  
              />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
             <FormField 
                control={form.control}
                name="message"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="message">Message</Label>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}  
              />
          </LabelInputContainer>

          <button
            className="flex items-center justify-center gap-2  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-950 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send 
            <SendHorizonal className="relative" size={15}/>  
            <BottomGradient />
          </button>
        </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#00CC00] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#00CC00] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
