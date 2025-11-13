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
  Trash2,
  Underline,
  Video,
} from "lucide-react";

export const Composer = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <div className="w-full flex gap-5 justify-between">
          <div
            className="
          flex items-center gap-3 p-3 border-b
          animate-fadeIn
        "
          >
            <select
              className="
            border rounded-md px-3 py-1.5 text-sm 
            bg-gray-50 hover:bg-gray-100 transition
            cursor-pointer
          "
            >
              <option>Paragraph</option>
              <option>Heading</option>
            </select>
            <div className="flex gap-5">
              <button>
                <Bold size={18} />
              </button>
              <button>
                <Italic size={18} />
              </button>
              <button>
                <Underline size={18} />
              </button>
            </div>
            <div className="flex gap-5">
              <button>
                <List size={18} />
              </button>
              <button>
                <ListOrdered size={18} />
              </button>
            </div>
            <div className="flex gap-5">
              <button>
                <Quote size={18} />
              </button>
              <button>
                <Code size={18} />
              </button>
            </div>
          </div>
          <button>
            <Trash2 className="bg-red-100 text-red-600 hover:bg-red-200" />
          </button>
        </div>
        <textarea
          className="p-2 w-full text-[15px] resize-none"
          rows={5}
          placeholder="How are you feeling today?"
        />
        <div className="flex justify-between">
          <div className="flex gap-3">
            <button type="button">
              <Plus size={20} />
            </button>
            <button type="button">
              <Mic size={20} />
            </button>
            <button type="button">
              <Video size={20} />
            </button>
          </div>
          <button>
            <SendHorizontal size={20} className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
