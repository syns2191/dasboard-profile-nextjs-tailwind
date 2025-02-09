
export default function CircleGap() {
  const circumference = 251.2; // Full circle perimeter

  // Percentage for each segment
  const purplePercent = 20;
  const yellowPercent = 30;
  const orangePercent = 30;

  // Convert percentages to stroke-dasharray values
  const purpleStroke = (purplePercent / 100) * circumference;
  const yellowStroke = (yellowPercent / 100) * circumference;
  const orangeStroke = (orangePercent / 100) * circumference;

  return (
    <div className="flex items-center justify-center h-40 w-40 relative">
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        {/* Purple Arc (20%) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="indigo"
          strokeWidth="8"
          strokeDasharray={`${purpleStroke} ${circumference}`}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        {/* Yellow Arc (30%) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="yellow"
          strokeWidth="8"
          strokeDasharray={`${yellowStroke} ${circumference}`}
          strokeDashoffset={`-${purpleStroke + 3 * 5}`}
          strokeLinecap="round"
        />
        {/* Orange Arc (25%) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="orange"
          strokeWidth="8"
          strokeDasharray={`${orangeStroke} ${circumference}`}
          strokeDashoffset={`-${purpleStroke + yellowStroke + 6 * 5}`}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center">
        <p className="text-3xl font-bold text-gray-800">74</p>
        <p className="text-xs text-gray-500">Main skillpoints</p>
      </div>
    </div>
  );
}
