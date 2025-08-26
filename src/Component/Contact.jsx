import React from "react";

function Contact() {
	return (
		<section id="contact" className="py-16 bg-blue-50">
			<div className="max-w-xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
				<p className="mb-8 text-gray-700 text-center">Have questions or want to plan your next adventure? Reach out to us!</p>
				<form className="space-y-6">
					<div>
						<label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
						<input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
						<input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
					</div>
					<div>
						<label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
						<textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
					</div>
					<button type="submit" className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;