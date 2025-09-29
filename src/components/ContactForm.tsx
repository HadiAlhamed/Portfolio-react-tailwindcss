import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';
import { cn } from '../utils';
import { useToast } from '../hooks/use-toast';

// Create an interface for form data
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    // And use it with useRef:
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);
    const { toast } = useToast();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate env vars are present
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS environment variables are missing');
            alert('Configuration error. Please try again later.');
            setIsLoading(false);
            return;
        }

        try {
            if (!formRef.current) {
                throw new Error('Form reference is null');
            }

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );


            setIsSent(true);
            toast({
                title: "Message Sent!",
                description: "Message sent successfully! I'll get back to you soon."
            })
            formRef.current.reset();

            // Reset success message after 3 seconds
            setTimeout(() => setIsSent(false), 3000);
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
            toast({
                title: "Sending Message",
                description: "Failed to send message. Please try again.",
            })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            className='space-y-6'
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={cn(
                        'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden',
                        'focus:ring-2 focus:ring-primary'
                    )}
                    placeholder='Enter your name . . .'
                />
            </div>

            <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={cn(
                        'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden',
                        'focus:ring-2 focus:ring-primary'
                    )}
                    placeholder='Enter your Email . . .'
                />
            </div>

            <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={cn(
                        'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden',
                        'focus:ring-2 focus:ring-primary',
                        'resize-none'
                    )}
                    placeholder='Hello I would like to talk about . . .'
                />
            </div>

            <button
                type='submit'
                disabled={isLoading || isSent}
                className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                    (isLoading || isSent) && "opacity-50 cursor-not-allowed"
                )}
            >
                {isLoading ? (
                    <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                    </>
                ) : isSent ? (
                    "Message Sent!"
                ) : (
                    <>
                        Send Message
                        <Send size={16} />
                    </>
                )}
            </button>


        </form>
    );
}