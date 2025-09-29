import { useToast } from "../../hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

export function Toaster() {
  const { toasts } = useToast();

  // Map your toast types to the variant system used by the Toast component
  const mapTypeToVariant = (type?: string): "default" | "destructive" => {
    return type === "error" ? "destructive" : "default";
  };

  return (
    <ToastProvider>
      {toasts.map(function (toast) {
        const { id, title, description, action, type, ...props } = toast;
        const variant = mapTypeToVariant(type);
        
        return (
          <Toast key={id} {...props} variant={variant}>
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
      <ToastViewport />
    </ToastProvider>
  );
}