import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string | string[];
  icon: LucideIcon;
  delay: number;
  isLast?: boolean;
}

export function WorkflowStep({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  delay,
  isLast = false 
}: WorkflowStepProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-gray-400">STEP {number}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
              <div className="space-y-2">
                {descriptionArray.map((line, index) => (
                  <p key={index} className="text-gray-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-purple-400 my-4 origin-top"
        />
      )}
    </div>
  );
}
