'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactTime: '',
    contactMethod: '',
    robot: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add form submission logic here (e.g. API call)
  };

  return (
    <div id="contact" className="min-h-screen bg-blue-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-blue-100"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-900 mb-2">Get In Touch</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Simply fill out the brief fields below and Dr. Blake will be in touch with you soon,
          usually within one business day. This form is safe, private, and completely free.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="(555) 234-5678"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <textarea
            name="message"
            placeholder="How can I help you?"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <div>
            <input
              type="text"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              value={form.contactTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-1"
            />
            <p className="text-sm text-gray-500">
              Let us know when you&rsquo;re typically available for a call or consultation
            </p>

          </div>

          <select
            name="contactMethod"
            value={form.contactMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select preferred method</option>
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
            <option value="text">Text Message</option>
          </select>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="robot"
              checked={form.robot}
              onChange={handleChange}
              className="h-4 w-4"
              required
            />
            <label htmlFor="robot" className="text-sm text-gray-600">
              I'm not a robot
            </label>
          </div>

          {/* Placeholder for Google reCAPTCHA */}
          <div className="w-full bg-gray-100 text-center py-4 rounded text-gray-500 text-sm border border-gray-300">
            reCAPTCHA Placeholder
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Submit
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            ⓘ By clicking submit you consent to receive texts and emails from Dr. Serena Blake
          </p>
        </div>
      </form>

      {/* 👇 Footer Section Starts Here */}
      <div className="mt-16 pt-10 text-center text-gray-700 text-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Dr. Serena Blake, Psy.D., Licensed Clinical Psychologist
        </h2>

        <div className="space-y-1">
          <p>
            <strong>📍 Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>

          <p className="mt-2">
            <strong>📞 Contact:</strong>
          </p>
          <p>Phone: (323) 555-0192</p>
          <p>
            Email:{' '}
            <a
              href="mailto:serena@blakepsychology.com"
              className="underline text-blue-700"
            >
              serena@blakepsychology.com
            </a>
          </p>


          <div className="mt-6">
            <p className="text-xs text-gray-400">
              © 2025 Dr. Serena Blake, Psy.D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {/* 👆 Footer Section Ends */}
    </div>
  );
}
