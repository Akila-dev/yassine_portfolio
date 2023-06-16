import React from "react";
import contactVisual from "../assets/img/contact-visual.svg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		// data.preventDefault();
		const { name, email, message } = data;

		try {
			const templateParams = {
				name,
				email,
				message,
			};
			await emailjs
				.send(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					templateParams,
					process.env.REACT_APP_USER_ID
				)
				.then(reset())
				.then(navigate("/thank-you"))
				.then(
					setTimeout(() => {
						navigate("/");
					}, 3000)
				);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<section id="contact" className="contact">
			<h2
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				className="contact__heading title"
			>
				Contact Me
			</h2>
			<div className="contact__wrapper wrapper--large">
				<div className="contact__visual">
					<img src={contactVisual} alt="Email" />
				</div>
				{/* Simple form setup */}
				<form
					className="contact__form"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<input
						className="contact__form-el contact__form-el--name"
						type="text"
						name="name"
						{...register("name", {
							required: { value: true, message: "Please enter your name" },
							maxLength: {
								value: 30,
								message: "Please use 30 characters or less",
							},
						})}
						placeholder="Your Name"
						spellCheck="false"
						required
					/>
					<input
						className="contact__form-el contact__form-el--email"
						type="email"
						name="email"
						{...register("email", {
							required: true,
							pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
						placeholder="Your Email"
						spellCheck="false"
						required
					/>
					<textarea
						className="contact__form-el contact__form-el--message"
						name="message"
						{...register("message", {
							required: true,
						})}
						placeholder="Your Message"
					></textarea>
					<input
						className="contact__form-el contact__form-el--submit"
						type="submit"
						value="Send"
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
