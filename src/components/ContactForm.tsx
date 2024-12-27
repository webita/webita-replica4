import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  newsletter: boolean;
  privacy: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your server
    // For newsletter subscriptions, save to CSV
    if (formData.newsletter) {
      const csvData = `${formData.email}\n`;
      // In a real implementation, you would append this to a CSV file on your server
      console.log('Newsletter subscription:', csvData);
    }

    // For now, just log the form data
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Il tuo nome (richiesto)
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          La tua email (richiesto)
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Il tuo telefono (richiesto)
        </label>
        <input
          type="tel"
          id="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Oggetto
        </label>
        <input
          type="text"
          id="subject"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Il tuo messaggio
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
            Accetto di ricevere news e info tramite la newsletter di Webita
          </label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            checked={formData.privacy}
            onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
            Accetto la{' '}
            <a href="/privacy-policy" className="text-pink-500 hover:text-pink-600">
              politiche sulla privacy
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Invia
      </button>
    </form>
  );
};

export default ContactForm;
