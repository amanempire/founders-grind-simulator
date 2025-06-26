
import { Progress } from "@/components/ui/progress";
import { Clock, Users, DollarSign } from "lucide-react";

interface ResourceMeterProps {
  time: number;
  network: number;
  cash: number;
}

export const ResourceMeter = ({ time, network, cash }: ResourceMeterProps) => {
  const getResourceColor = (value: number) => {
    if (value >= 70) return 'text-green-600';
    if (value >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (value: number) => {
    if (value >= 70) return 'bg-green-500';
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="glass-effect p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Time</span>
              <span className={`text-sm font-bold ${getResourceColor(time)}`}>
                {Math.max(0, time)}
              </span>
            </div>
            <Progress 
              value={Math.max(0, time)} 
              className="h-2"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-purple-600" />
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Network</span>
              <span className={`text-sm font-bold ${getResourceColor(network)}`}>
                {Math.max(0, network)}
              </span>
            </div>
            <Progress 
              value={Math.max(0, network)} 
              className="h-2"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <DollarSign className="w-5 h-5 text-green-600" />
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Cash</span>
              <span className={`text-sm font-bold ${getResourceColor(cash)}`}>
                {Math.max(0, cash)}
              </span>
            </div>
            <Progress 
              value={Math.max(0, cash)} 
              className="h-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
