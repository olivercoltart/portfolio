"use client";

import { useActionState } from "react";
import { sendMessage } from "@/app/contact/actions";
import Button from "@/components/ui/Button";

interface ContactState {
  success: boolean;
  error: string;
}

const initialState: ContactState = { success: false, error: "" };

const inputClass =
  "w-full border border-stroke bg-background px-4 py-3 text-body focus:outline-none focus:border-foreground transition-colors";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState
  );

  if (state.success) {
    return (
      <div className="py-12">
        <p className="text-subhead font-bold mb-2">Message sent.</p>
        <p className="text-body text-muted">I'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <p className="text-label text-red-600 tracking-wide">{state.error}</p>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-label font-medium tracking-widest uppercase mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-label font-medium tracking-widest uppercase mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@example.co.uk"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-label font-medium tracking-widest uppercase mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${inputClass} resize-none`}
          placeholder="What's on your mind?"
        />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
