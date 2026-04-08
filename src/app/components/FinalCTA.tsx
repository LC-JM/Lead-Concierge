import { motion } from "motion/react";
import { ArrowRight, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitStatus("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const openCalendar = () => {
    // Replace with your actual calendar booking link (Calendly, Cal.com, etc.)
    window.open("https://calendly.com/your-link", "_blank");
  };

  const callPhone = () => {
    // Replace with your actual phone number
    window.location.href = "tel:+1234567890";
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing leads to slow follow-up.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Invest in a system that captures, qualifies, and books appointments automatically—24/7.
          </p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 bg-green-500/20 border border-green-400/50 rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p className="text-green-100 font-semibold">Thank you! We'll be in touch soon.</p>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    errors.firstName ? "border-red-400" : "border-white/30"
                  } text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
                />
                {errors.firstName && (
                  <p className="text-red-300 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    errors.lastName ? "border-red-400" : "border-white/30"
                  } text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
                />
                {errors.lastName && (
                  <p className="text-red-300 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    errors.email ? "border-red-400" : "border-white/30"
                  } text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    errors.phone ? "border-red-400" : "border-white/30"
                  } text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
                />
                {errors.phone && (
                  <p className="text-red-300 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 mb-4"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Anything else you'd like us to know before we chat?"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 mb-4 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={submitStatus === "success"}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitStatus === "success" ? "Submitted!" : "Submit Form"}
            </button>
          </motion.form>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openCalendar}
              className="bg-white text-blue-700 px-10 py-5 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200 text-lg"
            >
              Book a Demo
              <ArrowRight className="w-6 h-6" />
            </button>
            <button
              onClick={callPhone}
              className="bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl text-lg hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}