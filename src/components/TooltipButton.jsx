const TooltipButton = ({ position = "bottom", colors = ["bg-red-700", "bg-green-700", "bg-blue-700"] }) => {
  const positionClasses = {
    bottom: {
      tooltip: "left-1/2 transform -translate-x-1/2 mb-3",
      arrow: "left-1/2 transform -translate-x-1/2 -bottom-2 border-1",
    },
  };
  return (
    <div className="relative group">
      <button className="relative  p-4 rounded-full bg-white/35 text-xl border"></button>
      <div
        className={`absolute hidden bottom-full  p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex ${positionClasses[position].tooltip}`}
      >
        {colors.map((color, index) => (
          <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
        ))}
        <div
          className={`absolute ${positionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}
        ></div>
      </div>
    </div>
  );
};

export default TooltipButton;
