import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, Zap, Bot, Calendar } from "lucide-react";
import { LeadConciergeLogoBadge } from "./LeadConciergeLogo";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered Lead Management
              </span>
            </motion.div>
            
            <div className="flex items-center gap-4 mb-14">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Lead Concierge
              </h1>
              <LeadConciergeLogoBadge size="lg" className="flex-shrink-0" />
            </div>
            
            <h2 className="text-2xl lg:text-3xl mb-8 text-blue-100">
              Hands-free, done-for-you, end-to-end lead conversion & life-cycle management.
            </h2>
            
            <h2 className="text-2xl lg:text-3xl mb-8 text-blue-100">
              Turn every lead into sales appointments or booked jobs, automatically.
            </h2>
            
            <h2 className="text-2xl lg:text-3xl mb-20 text-blue-100">
              Drive more revenue on money you're already spending on leads.
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all hover:scale-105 flex items-center gap-2"
              >
                15 min. Chat/Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Content - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">No missed calls</p>
                  <p className="text-blue-100 text-sm">No more lost revenue</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-white/20"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Instant engagement</p>
                  <p className="text-blue-100 text-sm">SMS (&lt;60 sec) • Email • Chatbot • AI receptionist</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-white/20"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Qualified leads</p>
                  <p className="text-blue-100 text-sm">Chatbot • AI receptionist • Email conversation</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-white/20"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Appointments or jobs booked</p>
                  <p className="text-blue-100 text-sm">Qualified • Scheduled • Confirmed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}