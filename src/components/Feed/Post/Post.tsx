import { Heart, MessageCircle, Send } from "lucide-react";

import { IconButton } from "../../IconButton/IconButton";
import { Reaction } from "./Reaction/Reaction";
import { ReactionType } from "./Reaction/constants";

type PostProps = {
  author: {
    name: string;
    imageUrl: string;
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
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={author.imageUrl}
              alt={author.name}
              className="w-16 h-16 rounded-[20px] object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {author.name}
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">{timestamp}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            {reaction && <Reaction reaction={reaction} />}
            <p className="text-gray-900 text-lg leading-[1.7]">{content}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6 ml-2" aria-label="Post actions">
        {actions.map(({ icon, label, onClick }) => (
          <IconButton
            key={label}
            icon={icon}
            onClick={onClick}
            ariaLabel={label}
          />
        ))}
      </div>
    </div>
  );
};
