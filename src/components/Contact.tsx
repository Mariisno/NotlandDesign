import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { motion } from "motion/react";
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from "sonner@2.0.3";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-73fb5d31/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success(t('contact.form.success'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-white">{t('contact.title')}</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-slate-400">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/mari-svennevik-notland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    href="https://github.com/marinosve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                  >
                    <Github className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
