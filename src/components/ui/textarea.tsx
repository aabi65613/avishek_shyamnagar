// src/components/ui/textarea.tsx - FINAL FIX for Type Error

"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* This check makes the code safe: it only renders the description if it exists */}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
    </ToastProvider>
  );
}

// NOTE: It is unusual for this component to be in 'textarea.tsx'.
// We are naming the export 'Toaster' which is standard.
// If this file is meant to be a text area, you have pasted the wrong code into it.
// This fix assumes the goal is to make the toast system work.
