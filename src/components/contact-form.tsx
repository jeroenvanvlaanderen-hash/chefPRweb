
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Link from "next/link";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  _gotcha: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormStatus = {
    submitted: boolean;
    success: boolean;
    message: string;
};

const contactMethods = [
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ,
        contact: "hello@example.com" // Replace with actual email
    },
    {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        ),
        isLink: true,
        contact: "https://www.linkedin.com/in/paula-rodriguez-rebollar-67187b373/",
        text: "LinkedIn Profile"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ,
        contact: "+1 (555) 000-0000" // Replace with actual phone
    },
]


export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<FormStatus>({ submitted: false, success: false, message: '' });
  
    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
    });

    async function onSubmit(values: FormData) {
        if (values._gotcha) {
          // Bot submission detected
          return;
        }
        
        setIsSubmitting(true);
        
        try {
          const response = await fetch("https://formspree.io/f/mjkardje", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              message: values.message,
            }),
          });
    
          if (response.ok) {
            setFormStatus({ submitted: true, success: true, message: "Thank you for your message. I will get back to you shortly." });
            form.reset();
          } else {
            throw new Error("Form submission failed");
          }
        } catch (error) {
            setFormStatus({ submitted: true, success: false, message: "There was a problem sending your message. Please try again later." });
        } finally {
          setIsSubmitting(false);
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto text-gray-600">
            <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                <div className="max-w-lg space-y-3">
                    <h3 className="text-primary font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Get in Touch
                    </p>
                    <p>
                        I'd love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to send me a message.
                    </p>
                    <div>
                        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                            {
                                contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-gray-400">
                                            {item.icon}
                                        </div>
                                        {item.isLink ? (
                                            <Link href={item.contact} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <p>{item.contact}</p>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="font-medium">Full name</FormLabel>
                            <FormControl>
                                <Input required {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="font-medium">Email</FormLabel>
                            <FormControl>
                                <Input type="email" required {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="font-medium">Message</FormLabel>
                            <FormControl>
                                <Textarea required className="h-36 resize-none" {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="_gotcha"
                        render={({ field }) => (
                            <FormItem className="hidden">
                            <FormControl>
                                <Input {...field} tabIndex={-1} autoComplete="off" />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                        </>
                        ) : (
                        "Submit"
                        )}
                    </Button>
                    </form>
                    </Form>
                </div>
            </div>

            <AlertDialog open={formStatus.submitted} onOpenChange={(isOpen) => !isOpen && setFormStatus({ submitted: false, success: false, message: '' })}>
                <AlertDialogContent className="backdrop-blur-sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>{formStatus.success ? "Message Sent!" : "Uh oh! Something went wrong."}</AlertDialogTitle>
                    <AlertDialogDescription>
                    {formStatus.message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
