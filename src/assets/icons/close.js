export const CloseIcon = (props) => {
  return (
    <svg
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="white"
        fillOpacity="0.08"
        stroke="#727272"
      />
      <path
        d="M20 20L25 25M15 15L20 20L15 15ZM20 20L25 15L20 20ZM20 20L15 25L20 20Z"
        stroke="#727272"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
