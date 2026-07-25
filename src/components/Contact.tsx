"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Send, Calendar as CalendarIcon, Loader2 } from "lucide-react"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#000000" } }, hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Interested in working together or have a question? Reach out through the form or book a call directly.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form & Info */}
          <FadeIn direction="right" className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                    <Input id="name" name="name" placeholder="John Doe" required className="bg-muted/50 border-border/50 focus-visible:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-muted/50 border-border/50 focus-visible:ring-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                  <Textarea id="message" name="message" placeholder="How can I help you?" required className="min-h-[150px] bg-muted/50 border-border/50 focus-visible:ring-primary/50" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto min-w-[150px]">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                
                {submitStatus === "success" && (
                  <p className="text-sm text-green-500 font-medium">Message sent successfully! I'll get back to you soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again or use direct email.</p>
                )}
              </form>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <a href="mailto:mryuvrajsain@gmail.com" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Email</span>
                    <span className="text-sm truncate max-w-[200px]">mryuvrajsain@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:+919636336877" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Phone</span>
                    <span className="text-sm">+91 9636336877</span>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/yuvraj-sain" target="_blank" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group sm:col-span-2">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <Icons.linkedin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    <span className="text-sm">linkedin.com/in/yuvraj-sain</span>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Cal.com Embed */}
          <FadeIn direction="left">
            <Card className="h-full bg-background/50 border-border/50 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-border/50 bg-muted/20">
                <h3 className="text-xl font-semibold flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                  Book a 15-min Call
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Find a time that works for you in my calendar below.
                </p>
              </div>
              <div className="flex-grow min-h-[400px] w-full p-0">
                <Cal 
                  calLink="yuvraj-sain/15min"
                  style={{width:"100%", height:"100%", overflow:"hidden"}}
                  config={{layout: 'month_view', theme: 'dark'}}
                />
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
