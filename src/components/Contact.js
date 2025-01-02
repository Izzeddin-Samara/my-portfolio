import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


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
                        />
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
                        />
                        
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
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
