import { Heart, MessageCircle, Send } from "lucide-react";

import { IconButton } from "../../IconButton/IconButton";
import { Reaction } from "./Reaction/Reaction";
import { ReactionType } from "./Reaction/constants";

type PostProps = {
  author: {
    name: string;
    imageUrl?: string;
  };
  content: string;
  timestamp: string;
  reaction?: ReactionType;
};

export const Post = ({ content, timestamp, author, reaction }: PostProps) => {
  const actions = [
    { icon: Heart, label: "Like this post", onClick: () => {} },
    { icon: MessageCircle, label: "Comment on this post", onClick: () => {} },
    { icon: Send, label: "Share this post", onClick: () => {} },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="
          bg-gray-100
          rounded-2xl
          p-2
          
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            p-6
            shadow-sm
          "
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex flex-col items-center gap-2">
              <img
                src={author.imageUrl}
                alt={author.name}
                className="w-14 h-14 rounded-md object-cover ring-2 ring-white shadow-sm"
              />
              {reaction && (
                <div className="mt-1">
                  <Reaction reaction={reaction} />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {author.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">{timestamp}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-3 items-start">
                <p className="text-gray-800 text-base leading-7 whitespace-pre-line">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="flex gap-5">
            {actions.map(({ icon, label, onClick }) => (
              <IconButton icon={icon} ariaLabel={label} onClick={onClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
