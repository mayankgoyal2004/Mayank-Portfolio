const MGLogo = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#gradient)" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="70"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        MG
      </text>
    </svg>
  );
};

export default MGLogo;
