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
  Smile,
} from "lucide-react";

export const Composer = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-100 rounded-2xl p-2">
        <div className="bg-white rounded-2xl border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 bg-gray-100 px-2 py-1 rounded-xl">
              <select
                className="
                px-3 py-1.5 text-sm 
                bg-white 
                rounded-md 
                border border-gray-300 
                outline-none 
                focus:outline-none 
              "
              >
                <option>Paragraph</option>
                <option>Heading</option>
              </select>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <Bold size={18} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <Italic size={18} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <Underline size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <List size={18} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <ListOrdered size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="w-px h-5 bg-gray-300" />

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <Quote size={18} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-200">
                  <Code size={18} className="text-gray-600" />
                </button>
              </div>
            </div>

            <button className="p-3 rounded-xl bg-red-100 text-red-600 hover:bg-red-200">
              <Trash2 size={18} />
            </button>
          </div>

          <div className="flex items-start gap-2 mb-3">
            <Smile size={20} className="text-gray-500" />
            <textarea
              className="w-full text-[15px] resize-none outline-none bg-transparent"
              rows={5}
              placeholder="How are you feeling today?"
            />
          </div>

          <div className="w-full h-px bg-gray-200 mb-2" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                <Plus size={20} className="text-gray-700" />
              </button>
              <button className="p-2 rounded-xl hover:bg-gray-100">
                <Mic size={20} className="text-gray-700" />
              </button>
              <button className="p-2 rounded-xl hover:bg-gray-100">
                <Video size={20} className="text-gray-700" />
              </button>
            </div>

            <button className="p-2 rounded-xl hover:bg-gray-100">
              <SendHorizontal size={22} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
