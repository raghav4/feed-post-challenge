import { REACTION_MAP, ReactionType } from "./constants";

type ReactionProps = {
  reaction: ReactionType;
  ariaLabel?: string;
};

export const Reaction = ({ reaction, ariaLabel }: ReactionProps) => {
  const { emoji, label } = REACTION_MAP[reaction];

  return (
    <div role="img" aria-label={label ?? "Reaction"}>
      {emoji}
    </div>
  );
};
