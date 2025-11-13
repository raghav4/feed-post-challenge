export const REACTION_MAP = {
  smile: { emoji: "😊", label: "Smiling" },
  laugh: { emoji: "😄", label: "Laughing" },
  love: { emoji: "😍", label: "Heart eyes" },
  sad: { emoji: "😢", label: "Sad" },
  angry: { emoji: "😠", label: "Angry" },
  wow: { emoji: "😮", label: "Surprised" },
} as const;

export type ReactionType = keyof typeof REACTION_MAP;
