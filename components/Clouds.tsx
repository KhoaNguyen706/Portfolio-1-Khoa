export default function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-white/40">
      {/* Cloud 1 */}
      <svg
        className="absolute top-[15%] left-[10%] h-24 w-32 animate-cloud-1 drop-shadow-lg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.5 19C19.985 19 22 16.985 22 14.5C22 12.15 20.195 10.22 17.9 10.02C17.275 6.645 14.33 4 10.8 4C7.03 4 3.96 6.95 3.82 10.66C1.655 11.23 0 13.16 0 15.5C0 18.015 2.03 20 4.5 20H17.5V19Z" />
      </svg>

      {/* Cloud 2 */}
      <svg
        className="absolute top-[35%] left-[40%] h-32 w-48 animate-cloud-2 opacity-70 drop-shadow-md"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.5 19C19.985 19 22 16.985 22 14.5C22 12.15 20.195 10.22 17.9 10.02C17.275 6.645 14.33 4 10.8 4C7.03 4 3.96 6.95 3.82 10.66C1.655 11.23 0 13.16 0 15.5C0 18.015 2.03 20 4.5 20H17.5V19Z" />
      </svg>

      {/* Cloud 3 */}
      <svg
        className="absolute top-[65%] left-[20%] h-20 w-28 animate-cloud-3 opacity-90 drop-shadow-lg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.5 19C19.985 19 22 16.985 22 14.5C22 12.15 20.195 10.22 17.9 10.02C17.275 6.645 14.33 4 10.8 4C7.03 4 3.96 6.95 3.82 10.66C1.655 11.23 0 13.16 0 15.5C0 18.015 2.03 20 4.5 20H17.5V19Z" />
      </svg>
    </div>
  );
}
