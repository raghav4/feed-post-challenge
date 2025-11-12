type IconButtonProps = {
  ariaLabel: string;
  icon: React.ReactNode;
};

export const IconButton = ({ icon, ariaLabel }: IconButtonProps) => (
  <button
    type="button"
    className="transition-transform hover:scale-110"
    aria-label={ariaLabel}
  >
    {icon}
  </button>
);
