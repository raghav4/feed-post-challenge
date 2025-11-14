type IconButtonProps = {
  ariaLabel?: string;
  icon: React.ComponentType<
    Partial<{
      className: string;
      strokeWidth: number;
      size: number;
    }>
  >;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconClassName?: string;
};

export const IconButton = ({
  icon: Icon,
  ariaLabel,
  onClick,
}: IconButtonProps) => (
  <button
    type="button"
    className="h-10 w-10 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-100 active:bg-gray-200"
    aria-label={ariaLabel}
    onClick={onClick}
  >
    <Icon className="text-gray-700" strokeWidth={1.5} size={22} />
  </button>
);
