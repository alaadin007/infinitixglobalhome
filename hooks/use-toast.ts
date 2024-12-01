import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast";
import {
  useToast as useToastBase,
  type ToastOptions as ToastOptionsBase,
} from "@/components/ui/use-toast";

export type ToastData = Toast & {
  action?: ToastActionElement;
};

export type ToastOptions = Omit<ToastOptionsBase, keyof ToastProps> & {
  data?: ToastData;
};

export function useToast() {
  const { toast: toastBase, ...rest } = useToastBase();

  function toast(props: ToastOptions) {
    toastBase(props);
  }

  return {
    toast,
    ...rest,
  };
}