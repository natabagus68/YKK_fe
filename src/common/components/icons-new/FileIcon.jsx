export default function FlieIcon({ color = "#20519F", ...props }) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1306 13.333H4.8713C4.6673 13.333 4.5013 13.1837 4.5013 12.9997V2.99967C4.5013 2.81567 4.6673 2.66634 4.8713 2.66634H7.83464V5.43301C7.83464 6.48101 8.64597 7.33301 9.64397 7.33301H12.5013V12.9997C12.5013 13.1837 12.3346 13.333 12.1306 13.333ZM12.2673 5.99967H9.64397C9.3813 5.99967 9.16797 5.74567 9.16797 5.43301V2.66634H9.24264L12.2673 5.99967ZM13.6613 5.55167L10.032 1.55167C9.90597 1.41234 9.72664 1.33301 9.53797 1.33301H4.8713C3.93197 1.33301 3.16797 2.08101 3.16797 2.99967V12.9997C3.16797 13.9183 3.93197 14.6663 4.8713 14.6663H12.1306C13.07 14.6663 13.8346 13.9183 13.8346 12.9997V5.99967C13.8346 5.83367 13.7726 5.67434 13.6613 5.55167Z"
        fill={color}
      />
    </svg>
  );
}
