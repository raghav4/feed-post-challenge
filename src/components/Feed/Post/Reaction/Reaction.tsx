type ReactionProps = {
  emoji: string;
  ariaLabel?: string;
};

export const Reaction = ({ emoji, ariaLabel }: ReactionProps) => {
  return (
    <div role="img" aria-label={ariaLabel ?? "Reaction"}>
      {emoji}
    </div>
  );
};
