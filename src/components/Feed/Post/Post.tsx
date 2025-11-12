import { Reaction } from "./Reaction/Reaction";

export const Post = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[32px] p-8">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Theresa Webb"
              className="w-16 h-16 rounded-[20px]"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Theresa Webb
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">5 mins ago</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Reaction emoji="😊" ariaLabel="Smile" />
            <p className="text-gray-900 text-lg leading-[1.7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
