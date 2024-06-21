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
import { useTranslation } from "next-i18next";
import { useParams } from "next/navigation";
import { useToast } from "./use-toast";
import Loading from "../loading";


export function FormWrapper() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const { toast } = useToast()

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
      toast({
        title : "Success!",
        description : "your message has been sent."
      })

    } catch (error) {
      console.log("error from sending email :", error)
      toast({ 
        variant: "destructive",
        title : "Error",
        description : "Something went wrong, please type agpins."
      })
    }
  };


  return (
    <div className="relative z-30 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-zinc-900">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {t("contact.form.heading")}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      {t("contact.form.description")}
      </p>
      <Form  {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(submitForm)}>
          <div className="flex flex-col md:flex-row md:gap-2 space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <FormField 
                control={form.control}
                name="firstName"
                render={({field})=>(
                  <FormItem>
                    <Label htmlFor="firstname">{t("contact.form.firstName")}</Label>
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
                    <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
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
                    <Label htmlFor="email">{t("contact.form.emailAddress")}</Label>
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
                    <Label htmlFor="phone">{t("contact.form.phoneNumber")}</Label>
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
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
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
            className={cn("flex items-center justify-center gap-2  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]", {
              "dark:bg-zinc-950" : !formIsLoading,
              "dark:bg-zinc-500" : formIsLoading
            })}
            type="submit"
            disabled={true}
          >
            {formIsLoading ? <Loading/> : 
              <>
                {t("contact.form.send")}
                <SendHorizonal  
                  size={15}
                  className={cn("relative", {"rotate-180" : locale === "ar"})}
                />  
                <BottomGradient />
              </>
            }
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
