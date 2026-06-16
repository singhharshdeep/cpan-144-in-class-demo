import { useRef } from "react";

// Uncontrolled Form
export default function ContactPage() {
    const ref1 = useRef<HTMLInputElement | null>(null);
    const ref2 = useRef<HTMLTextAreaElement | null>(null);

    console.log(ref1.current?.value);

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault();
        const email = ref1.current?.value || "";
        const message = ref2.current?.value || "";

        if (email === "") {
            alert("Email is required");
        } else if (message === "") {
            alert("A message is required");
        } else {
            alert(`Form submitted successfully
                    Email: ${email}
                    Message: ${message}
                `);
        }
    }

    return (
        <div>
            <h1>Contact Page</h1>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input ref={ref1} type="text" />
                </div>

                <div>
                    <label>Message:</label>
                    <textarea ref={ref2} />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}