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
      <div className="flex flex-col bg-white p-3 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 bg-gray-50 px-3 py-2 rounded-xl border">
            <select className="px-3 py-1.5 text-sm bg-white rounded-md shadow-sm outline-none border">
              <option>Paragraph</option>
              <option>Heading</option>
            </select>

            <div className="w-px h-5 bg-gray-300" />

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bold size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Italic size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Underline size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="w-px h-5 bg-gray-300" />

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <List size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ListOrdered size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="w-px h-5 bg-gray-300" />

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Quote size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Code size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          <button className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition">
            <Trash2 size={18} />
          </button>
        </div>

        <textarea
          className="p-2 w-full text-[15px] resize-none outline-none"
          rows={5}
          placeholder="How are you feeling today?"
        />
        <div className="flex justify-between border-t border-gray-400 py-3 bg-white">
          <div className="flex gap-3">
            <button type="button">
              <Plus size={20} />
            </button>
            <button>
              <Mic size={20} />
            </button>
            <button>
              <Video size={20} />
            </button>
          </div>
          <button type="button">
            <SendHorizontal size={20} className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
