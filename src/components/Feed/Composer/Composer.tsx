import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  Mic,
  Plus,
  Quote,
  SendHorizontal,
  Smile,
  Trash2,
  Underline,
  Video,
} from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

type ComposerProps = {
  onClickPost: (content: string) => void;
};

type ToolbarButtonProps = {
  icon: React.ReactNode;
  tooltip?: string;
  className?: string;
};

const onClickNotImplemented = () => alert("Functionality not implemented");

const ToolbarButton = ({
  icon,
  tooltip,
  className = "",
}: ToolbarButtonProps) => (
  <button
    className={`p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-110 active:scale-95 ${className}`}
    onClick={onClickNotImplemented}
    title={tooltip}
  >
    {icon}
  </button>
);

export const Composer = ({ onClickPost }: ComposerProps) => {
  const [postContent, setPostContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { isAuthenticated } = useAuthentication();

  const onInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      e.key === "Enter" &&
      postContent.trim().length > 1
    ) {
      onClickPost(postContent);
      setPostContent("");
    }
  };

  const textFormattingButtons = [
    {
      icon: <Bold size={18} className="text-gray-600" />,
      tooltip: "Bold",
      type: "bold",
    },
    {
      icon: <Italic size={18} className="text-gray-600" />,
      tooltip: "Italic",
      type: "italic",
    },
    {
      icon: <Underline size={18} className="text-gray-600" />,
      tooltip: "Underline",
      type: "underline",
    },
  ];

  const listButtons = [
    {
      icon: <List size={18} className="text-gray-600" />,
      tooltip: "Bullet List",
      type: "Bullet List",
    },
    {
      icon: <ListOrdered size={18} className="text-gray-600" />,
      tooltip: "Numbered List",
      type: "Numbered List",
    },
  ];

  const quoteCodeButtons = [
    {
      icon: <Quote size={18} className="text-gray-600" />,
      tooltip: "Quote",
      type: "Quote",
    },
    {
      icon: <Code size={18} className="text-gray-600" />,
      tooltip: "Code",
      type: "Code",
    },
  ];

  const bottomToolbarButtons = [
    { icon: <Plus size={20} className="text-gray-700" />, type: "add file" },
    { icon: <Mic size={20} className="text-gray-700" />, type: "audio record" },
    {
      icon: <Video size={20} className="text-gray-700" />,
      type: "video record",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mb-12 transition-all duration-300 ease-out">
      <div className="bg-gray-100 rounded-2xl p-2 transition-all duration-200">
        <div
          className={`bg-white rounded-2xl border p-3 transition-all duration-300 ${
            isFocused
              ? "border-blue-400 shadow-lg"
              : "border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 bg-gray-100 px-2 py-1 rounded-xl transition-all duration-200">
              <select
                className="px-3 py-1.5 text-sm bg-white rounded-md border border-gray-300 outline-none focus:outline-none transition-all duration-200 hover:border-gray-400 focus:border-blue-400 cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onClickNotImplemented();
                }}
              >
                <option>Paragraph</option>
                <option>Heading</option>
              </select>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                {textFormattingButtons.map(({ type, ...btnProps }) => (
                  <ToolbarButton key={type} {...btnProps} />
                ))}
              </div>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                {listButtons.map(({ type, ...btnProps }) => (
                  <ToolbarButton key={type} {...btnProps} />
                ))}
              </div>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                {quoteCodeButtons.map(({ type, ...btnProps }) => (
                  <ToolbarButton key={type} {...btnProps} />
                ))}
              </div>
            </div>

            <button
              className="p-3 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Delete"
              onClick={onClickNotImplemented}
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="flex items-start gap-2 mb-3">
            <button
              type="button"
              onClick={onClickNotImplemented}
              className="transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <Smile size={20} className="text-gray-500" />
            </button>
            <textarea
              className="w-full text-[15px] resize-none outline-none bg-transparent transition-all duration-200"
              rows={5}
              placeholder="How are you feeling today?"
              value={postContent}
              onChange={({ target }) => {
                if (isAuthenticated) {
                  setPostContent(target.value);
                }
              }}
              onKeyDown={onInputKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          <div className="w-full h-px bg-gray-200 mb-2 transition-colors duration-200" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {bottomToolbarButtons.map(({ type, ...btnProps }) => (
                <ToolbarButton key={type} {...btnProps} />
              ))}
            </div>

            <button
              className={`p-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${
                postContent.trim().length > 0
                  ? "hover:bg-blue-50"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                onClickPost(postContent);
                setPostContent("");
              }}
              aria-label="Publish content"
              title="Publish"
              disabled={postContent.trim().length === 0}
            >
              <SendHorizontal
                size={22}
                className={`transition-colors duration-200 ${
                  postContent.trim().length > 0
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
