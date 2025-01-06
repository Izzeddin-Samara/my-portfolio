import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from 'react-bootstrap/Spinner';
import { Modal, Button } from 'react-bootstrap';

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

    const [modalContent, setModalContent] = useState('loading'); // Tracks modal state ('loading' or 'success')
    const [showModal, setShowModal] = useState(false); // Controls modal visibility

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
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate input
        let error = "";
        if (name === "name") error = validateName(value);
        if (name === "email") error = validateEmail(value);
        if (name === "message") error = validateMessage(value);

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

        setShowModal(true); // Show the modal
        setModalContent('loading'); // Show spinner initially

        // Send email
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setModalContent('success'); // Switch to success message
                    setFormData({ name: '', email: '', message: '' }); // Clear the form
                },
                (error) => {
                    alert('Failed to send the message. Please try again later.');
                    setShowModal(false);
                }
            );

        // Auto-response email
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_AUTORESPONSE_TEMPLATE,
                {
                    from_name: formData.name,
                    to_email: formData.email,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => { }, () => { });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='form-container'>
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

                <button type="submit">Send Message</button>
            </form>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    {modalContent === 'loading' ? (
                        <div style={{ textAlign: 'center' }}>
                            <Spinner animation="border" role="status" />
                            <p style={{ marginTop: '10px' }}>Sending your message...</p>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <i className="bi bi-check-circle-fill" style={{ fontSize: '2rem', color: 'green' }}></i>
                            <p style={{ marginTop: '10px' }}>Your message has been sent successfully!</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {modalContent === 'success' && (
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contact;
