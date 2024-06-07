
// eslint-disable-next-line react/prop-types
const HomeSVG = ({isActive}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 flex-shrink-0 ${isActive?"text-sky-500": ""}`}
    >
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
    </svg>
  );
}

export default HomeSVG
