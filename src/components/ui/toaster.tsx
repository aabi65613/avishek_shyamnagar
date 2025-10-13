// src/components/ui/toaster.tsx - FINAL FIX: Correcting the circular import path

"use client";

// FIX: Change the import path to import the components directly from the
// original file they were defined in, or remove the local import entirely
// as it often causes the circular dependency. 
// We rely on the components being exported correctly in toast.tsx.

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from "./toast"; // <-- CRITICAL: Changed from "@/components/ui/toast" to "./toast"

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
