import { useState, useEffect } from "react";
import { Users, AlertTriangle } from "lucide-react";

const LimitedSpotsCounter = () => {
  const [spots, setSpots] = useState(() => {
    // Get stored spots from localStorage or start with 47
    const stored = localStorage.getItem('limitedSpots');
    const storedTime = localStorage.getItem('limitedSpotsTime');
    
    if (stored && storedTime) {
      const timePassed = Date.now() - parseInt(storedTime);
      const spotsLost = Math.floor(timePassed / 45000); // Lose 1 spot every 45 seconds
      const currentSpots = Math.max(3, parseInt(stored) - spotsLost);
      return currentSpots;
    }
    
    localStorage.setItem('limitedSpots', '47');
    localStorage.setItem('limitedSpotsTime', Date.now().toString());
    return 47;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => {
        if (prev <= 3) return 3; // Never go below 3
        const newSpots = prev - 1;
        localStorage.setItem('limitedSpots', newSpots.toString());
        localStorage.setItem('limitedSpotsTime', Date.now().toString());
        return newSpots;
      });
    }, 45000); // Decrease every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const urgencyLevel = spots <= 10 ? 'critical' : spots <= 20 ? 'high' : 'medium';

  return (
    <div className="fixed top-20 right-4 z-40 animate-fade-in">
      <div className={`
        relative overflow-hidden rounded-xl border shadow-2xl backdrop-blur-sm
        ${urgencyLevel === 'critical' 
          ? 'bg-red-950/90 border-red-500/50 animate-pulse' 
          : urgencyLevel === 'high'
          ? 'bg-orange-950/90 border-orange-500/50'
          : 'bg-card/90 border-primary/30'
        }
      `}>
        {/* Glow effect */}
        <div className={`
          absolute inset-0 opacity-20
          ${urgencyLevel === 'critical' 
            ? 'bg-gradient-to-r from-red-500 to-red-600' 
            : urgencyLevel === 'high'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600'
            : 'bg-gradient-to-r from-primary to-accent'
          }
        `} />
        
        <div className="relative p-4">
          <div className="flex items-center gap-2 mb-2">
            {urgencyLevel === 'critical' ? (
              <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
            ) : (
              <Users className="w-4 h-4 text-primary" />
            )}
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Vagas Restantes
            </span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className={`
              text-3xl font-extrabold tabular-nums
              ${urgencyLevel === 'critical' 
                ? 'text-red-400' 
                : urgencyLevel === 'high'
                ? 'text-orange-400'
                : 'text-primary'
              }
            `}>
              {spots}
            </span>
            <span className="text-sm text-muted-foreground">/ 50</span>
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 h-2 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className={`
                h-full rounded-full transition-all duration-1000 ease-out
                ${urgencyLevel === 'critical' 
                  ? 'bg-gradient-to-r from-red-500 to-red-400' 
                  : urgencyLevel === 'high'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-400'
                  : 'bg-gradient-gold'
                }
              `}
              style={{ width: `${(spots / 50) * 100}%` }}
            />
          </div>
          
          {urgencyLevel === 'critical' && (
            <p className="mt-2 text-xs text-red-400 font-medium animate-pulse">
              🔥 Últimas vagas! Corra!
            </p>
          )}
          
          {urgencyLevel === 'high' && (
            <p className="mt-2 text-xs text-orange-400 font-medium">
              ⚠️ Vagas acabando rápido!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LimitedSpotsCounter;
