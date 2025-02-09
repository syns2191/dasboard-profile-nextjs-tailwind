import { ArrowTrendingDownIcon } from "./icons/Arrow";

const defaultColors = {
  primary: "#4F46E5",
  secondary: "#818CF8",
  background: "#F3F4F6",
  text: "#1F2937",
  error: "#EF4444"
};

const colors = { ...defaultColors, ...{} };
export default function ProgresBar() {
  return (
    <div className="relative">
      <svg className="w-full h-40" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="12"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <circle
          className="text-primary stroke-current z-10"
          strokeWidth="12"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 * (1 - 80 / 100)}
          style={{ color: colors.secondary, transition: 'stroke-dashoffset 0.5s ease-in-out', zIndex: 9999}}

        />
         <circle
          className="text-primary stroke-current z-10"
          strokeWidth="12"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 * (1 - 60 / 100)}
          style={{ color: colors.primary, transition: 'stroke-dashoffset 0.5s ease-in-out', zIndex: 9999}}
        />
         <circle
          className="text-primary stroke-current z-9"
          strokeWidth="12"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 * (1 - 40 / 100)}
          style={{ color: colors.error, transition: 'stroke-dashoffset 0.5s ease-in-out', zIndex: 9 }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <ArrowTrendingDownIcon className="h-10 w-10 text-violet-700" />
      </div>
    </div>
  )
}
