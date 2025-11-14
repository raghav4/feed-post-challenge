type IconButtonProps = {
  ariaLabel?: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    size?: number;
  }>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const IconButton = ({
  icon: Icon,
  ariaLabel,
  onClick,
}: IconButtonProps) => (
  <button
    type="button"
    className="transition-transform hover:scale-110"
    aria-label={ariaLabel ?? "post action"}
    onClick={onClick}
  >
    <Icon className="w-7 h-7 text-gray-800" strokeWidth={1.5} size={10} />
  </button>
);
