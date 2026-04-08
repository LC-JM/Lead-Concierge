import { motion } from "motion/react";
import { 
  Database, Zap, MessageSquare, Phone, ClipboardCheck, 
  Calendar, RefreshCw, RotateCcw, Star 
} from "lucide-react";

export function Services() {
  const services = [
    { title: "CRM + Pipeline Setup", icon: Database },
    { title: "Instant Response Automation", icon: Zap },
    { title: "SMS & Email Sequences", icon: MessageSquare },
    { title: "AI Phone Receptionist", icon: Phone },
    { title: "Lead Qualification", icon: ClipboardCheck },
    { title: "Appointment Booking", icon: Calendar },
    { title: "Follow-up Campaigns", icon: RefreshCw },
    { title: "Lead Recycling", icon: RotateCcw },
    { title: "White-Glove Service", icon: Star },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Services Included</h2>
          <p className="text-xl text-gray-600">Everything you need to capture, qualify, and convert leads</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}