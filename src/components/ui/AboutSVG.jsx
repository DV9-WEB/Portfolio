
// eslint-disable-next-line react/prop-types
const AboutSVG = ({isActive}) => {
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
      className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-sky-500': ""}`}
    >
      <path d="M8 9h8"></path>
      <path d="M8 13h6"></path>
      <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
    </svg>
  );
}

export default AboutSVG
