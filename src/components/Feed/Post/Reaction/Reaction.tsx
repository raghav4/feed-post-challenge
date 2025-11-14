import { REACTION_MAP, ReactionType } from "./constants";

type ReactionProps = {
  reaction: ReactionType;
  ariaLabel?: string;
};

export const Reaction = ({ reaction, ariaLabel }: ReactionProps) => {
  if (!REACTION_MAP[reaction]) {
    console.warn(`Invalid reaction provided`, reaction);
    return null;
  }

  const { emoji, label } = REACTION_MAP[reaction];

  return (
    <div
      className="text-2xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full"
      role="img"
      aria-label={label ?? "Reaction"}
    >
      {emoji}
    </div>
  );
};
