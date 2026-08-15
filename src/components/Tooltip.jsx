import { cloneElement, useId } from "react";

const ALIGN_CLASSES = {
  center: "left-1/2 -translate-x-1/2",
  start: "left-0 translate-x-0",
  end: "right-0 left-auto translate-x-0",
};

const Tooltip = ({ text, children, align = "center", className = "" }) => {
  const tooltipId = useId();
  const trigger = cloneElement(children, { "aria-describedby": tooltipId });

  return (
    <span className={`group relative inline-flex ${className}`}>
      {trigger}
      <span
        role="tooltip"
        id={tooltipId}
        className={`pointer-events-none absolute bottom-full ${ALIGN_CLASSES[align]} z-20 mb-2 w-44 translate-y-1 rounded-lg bg-gray-900/95 px-3 py-2 text-center text-xs font-medium leading-snug text-white opacity-0 shadow-lg ring-1 ring-primary-500/30 backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:w-56`}
      >
        <span className="absolute inset-x-2 top-0 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        {text}
        <span
          className={`absolute top-full h-2 w-2 rotate-45 bg-gray-900/95 ${
            align === "start" ? "left-3" : align === "end" ? "right-3" : "left-1/2 -translate-x-1/2 -translate-y-1"
          }`}
        />
      </span>
    </span>
  );
};

export default Tooltip;
