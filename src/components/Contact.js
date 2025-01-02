import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) {
            return "Name is required.";
        } else if (name.length < 3) {
            return "Name must be at least 3 characters.";
        }
        return ""; // No error
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            return "Email is required.";
        } else if (!emailRegex.test(email)) {
            return "Invalid email format.";
        }
        return ""; // No error
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return "Message is required.";
        } else if (message.length < 10) {
            return "Message must be at least 10 characters.";
        }
        return ""; // No error
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate input
        let error = "";
        if (name === "name") error = validateName(value);
        if (name === "email") error = validateEmail(value);
        if (name === "message") error = validateMessage(value);

        // Update errors
        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const messageError = validateMessage(formData.message);

        if (nameError || emailError || messageError) {
            setErrors({
                name: nameError,
                email: emailError,
                message: messageError,
            });
            return;
        }


    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Contact Me</h1>
                    <p>Have a project in mind? Let’s connect!<br /> Fill out the form below, and I'll get back to you soon.</p>

                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'input-error' : 'input-valid'}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'input-error' : 'input-valid'}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'input-error' : 'input-valid'}
                        ></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>

                    <button>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
