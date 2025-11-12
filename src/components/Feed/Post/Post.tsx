export const Post = () => {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-xl mx-auto">
        <div>
          <div className="flex items-start gap-4">
            <img src="https://placehold.co/48" alt="avatar" />

            <div>
              <div>Theresa Webb</div>
              <div>5 mins ago</div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <div>😊</div>

            <p>
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
