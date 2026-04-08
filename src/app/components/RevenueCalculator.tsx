import { motion } from "motion/react";
import { useState } from "react";

export function RevenueCalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(100);
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [followUpRate, setFollowUpRate] = useState(30);
  const [responseSpeed, setResponseSpeed] = useState(false);
  const [consistency, setConsistency] = useState(false);

  // Calculate results
  const missedLeads = (leadsPerMonth * followUpRate) / 100;
  const conversionRate = 0.3;
  const speedMultiplier = responseSpeed ? 1.4 : 1;

  const revenueLost = Math.round(missedLeads * conversionRate * avgJobValue);
  const recoveredRevenue = Math.round(revenueLost * 0.8);
  const speedGain = Math.round(leadsPerMonth * conversionRate * avgJobValue * (speedMultiplier - 1));

  // Consistency adds 15% of (leads per month × average job value × 30%) to total impact
  const consistencyBonus = consistency ? Math.round((leadsPerMonth * avgJobValue * 0.30) * 0.15) : 0;
  const totalImpact = Math.round(recoveredRevenue + speedGain + consistencyBonus);

  // Consistency adds 10 minutes per lead to time saved
  const baseTimeSaved = Math.round(missedLeads * 0.5);
  const consistencyTimeSaved = consistency ? (leadsPerMonth * 10) / 60 : 0; // Convert 10 min per lead to hours
  const timeSaved = Math.round(baseTimeSaved + consistencyTimeSaved);

  const results = {
    revenueLost,
    recoveredRevenue,
    speedGain,
    totalImpact,
    timeSaved,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            See How Much Revenue You're Losing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estimate how much revenue and time you can recover with an automated lead conversion system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Inputs</h3>

            {/* Slider 1 - Leads per Month */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-600">Leads per Month</label>
                <span className="text-sm font-semibold text-slate-900">{leadsPerMonth}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            {/* Slider 2 - Average Job Value */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-600">Average Job Value ($)</label>
                <span className="text-sm font-semibold text-slate-900">{avgJobValue}</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            {/* Slider 3 - Leads Not Followed Up */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-600">Leads Not Followed Up Properly (%)</label>
                <span className="text-sm font-semibold text-slate-900">{followUpRate}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={followUpRate}
                onChange={(e) => setFollowUpRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            {/* Response Speed */}
            <div className="mb-8">
              <label className="text-sm font-medium text-slate-600 block mb-3">Response Speed</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: true, label: "Instant" },
                  { value: false, label: "Next day" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setResponseSpeed(option.value as typeof responseSpeed)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      responseSpeed === option.value
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Follow-Up Consistency */}
            <div>
              <label className="text-sm font-medium text-slate-600 block mb-3">Follow-Up Consistency</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: true, label: "Consistent" },
                  { value: false, label: "Rare" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setConsistency(option.value as typeof consistency)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                      consistency === option.value
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Estimated Results</h3>

            {/* Card 1 - Revenue You're Losing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-red-50 rounded-2xl p-6 border border-red-100"
            >
              <p className="text-sm font-semibold text-red-900 mb-2">Revenue You're Losing</p>
              <p className="text-3xl font-bold text-slate-900">${results.revenueLost.toLocaleString()}/month</p>
            </motion.div>

            {/* Card 2 - Recovered Revenue */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-green-50 rounded-2xl p-6 border border-green-100"
            >
              <p className="text-sm font-semibold text-green-900 mb-2">Recovered Revenue</p>
              <p className="text-3xl font-bold text-slate-900">${results.recoveredRevenue.toLocaleString()}/month</p>
            </motion.div>

            {/* Card 3 - Speed-to-Lead Gain */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
            >
              <p className="text-sm font-semibold text-blue-900 mb-2">Speed-to-Lead Gain</p>
              <p className="text-3xl font-bold text-slate-900">+${results.speedGain.toLocaleString()}/month</p>
            </motion.div>

            {/* Card 4 - Total Monthly Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-slate-900 rounded-2xl p-6"
            >
              <p className="text-sm font-semibold text-blue-300 mb-2">Total Monthly Impact</p>
              <p className="text-4xl font-bold text-white">+${results.totalImpact.toLocaleString()}/month</p>
            </motion.div>

            {/* Card 5 - Time Saved */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
            >
              <p className="text-sm font-semibold text-slate-600 mb-2">Time Saved</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-slate-900">{results.timeSaved} hours/month</p>
                <p className="text-sm text-slate-600">~{Math.ceil(results.timeSaved / 8)} full working days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-slate-900 rounded-2xl p-8 text-center"
        >
          <p className="text-xl text-white">
            You don't need more leads — you need to convert the ones you already have.
          </p>
        </motion.div>
      </div>
    </section>
  );
}