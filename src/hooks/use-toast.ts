// src/hooks/use-toast.ts - FINAL BUILD FIX

import * as React from "react";

import { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000; // Increased delay to keep toast visible

// Commented out unused type definition to fix build error
// type actionTypes = "ADD_TOAST" | "UPDATE_TOAST" | "DISMISS_TOAST" | "REMOVE_TOAST"

type State = {
  toasts: ToastProps[];
};

type Action =
  | {
      type: "ADD_TOAST";
      toast: ToastProps;
    }
  | {
      type: "UPDATE_TOAST";
      toast: Partial<ToastProps>;
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: string;
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: string;
    };

let count = 0;

function generateId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToTimer = (toast: ToastProps) => {
  if (toast.duration) {
    const timer = setTimeout(() => {
      dispatch({ type: "DISMISS_TOAST", toastId: toast.id });
    }, toast.duration);

    toastTimeouts.set(toast.id, timer);
  }
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // Without an ID we dismiss the oldest toast
      if (toastId) {
        toastTimeouts.forEach((_, id) => {
          if (id === toastId) {
            clearTimeout(toastTimeouts.get(id));
            toastTimeouts.delete(id);
          }
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) return state;

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

const listeners: Array<(state: State) => void> = [];

let state = {
  toasts: [] as ToastProps[],
};

function setState(data: State) {
  state = data;
  listeners.forEach((listener) => {
    listener(state);
  });
}

function dispatch(action: Action) {
  setState(reducer(state, action));
}

export function useToast() {
  const [toastState, setToastState] = React.useState(state);

  React.useEffect(() => {
    listeners.push(setToastState);
    return () => {
      const index = listeners.indexOf(setToastState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [toastState]);

  return {
    ...toastState,
    toast,
  };
}

type Toast = Omit<ToastProps, "id"> & {
  id?: string;
};

export function toast({ ...props }: Toast) {
  const id = generateId();

  const update = (props: Partial<ToastProps>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) {
          dismiss();
        }
      },
    },
  });

  addToTimer({
    ...props,
    id,
    open: true,
  });

  return {
    id: id,
    update,
    dismiss,
  };
}
