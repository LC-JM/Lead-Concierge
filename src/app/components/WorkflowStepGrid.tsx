import { motion } from "motion/react";
import { LucideIcon, ArrowRight, ArrowDown } from "lucide-react";

interface WorkflowStepGridProps {
  number: number;
  title: string;
  description: string | string[];
  icon: LucideIcon;
  delay: number;
  showArrowRight?: boolean;
  showArrowDown?: boolean;
}

export function WorkflowStepGrid({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  delay,
  showArrowRight = false,
  showArrowDown = false
}: WorkflowStepGridProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        className="h-full"
      >
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-gray-400">STEP {number}</span>
              <h3 className="font-bold text-base mt-1 text-gray-900 leading-tight">{title}</h3>
            </div>
          </div>
          <div className="space-y-1 flex-1">
            {descriptionArray.map((line, index) => (
              <p key={index} className="text-gray-600 text-xs leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
      
      {showArrowRight && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
        >
          <ArrowRight className="w-8 h-8 text-purple-400" />
        </motion.div>
      )}
      
      {showArrowDown && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ArrowDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      )}
    </div>
  );
}
