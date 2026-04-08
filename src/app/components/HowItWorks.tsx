import { motion } from "motion/react";
import { 
  Sparkles, Zap, Bot, ClipboardCheck, MessagesSquare, 
  Calendar, Bell, BarChart3, RefreshCw, RotateCcw, CheckCircle2 
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    { number: 1, title: "Lead comes in", icon: Sparkles },
    { number: 2, title: "Instant response", icon: Zap },
    { number: 3, title: "AI Qualification", icon: Bot },
    { number: 4, title: "Lead scored", icon: ClipboardCheck },
    { number: 5, title: "Follow-up campaign", icon: MessagesSquare },
    { number: 6, title: "Appointment booked", icon: Calendar },
    { number: 7, title: "Reminders sent", icon: Bell },
    { number: 8, title: "Analytics tracked", icon: BarChart3 },
    { number: 9, title: "Re-engagement", icon: RefreshCw },
    { number: 10, title: "Recycled leads", icon: RotateCcw },
    { number: 11, title: "Closed deal", icon: CheckCircle2 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">11 steps to turn leads into booked appointments automatically</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all hover:scale-105 transform duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-blue-600 mb-2">STEP {step.number}</span>
                  <p className="font-semibold text-gray-900">{step.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}