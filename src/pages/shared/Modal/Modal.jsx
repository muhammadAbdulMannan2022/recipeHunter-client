import { useContext, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import ReactDOM from "react-dom";
import { AuthContext } from "../../../providers/Authprovider";
import { toast } from "react-hot-toast";
function Modal({ isOpen, onClose }) {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const updateUserPhotoAndName = (displayName, photoURL) => {
    console.log(displayName, photoURL);
    updateProfile(user, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        // Profile updated!
        console.log("Profile updated!");
        toast.success("Profile updated!");
        setImage("");
        setName("");
        onClose();
        // ...
      })
      .catch((error) => {
        console.log(error);
        toast.error("faild to update");
      });
  };
  // Render nothing if the modal is not open
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed z-10 inset-0 overflow-y-auto">
      {console.log(user)}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}

        <form className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Close button */}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal content */}
          {!user ? (
            <h1 className="text-center text-4xl py-24"> No User Logged in</h1>
          ) : (
            <>
              <div className="px-6 py-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="image url"
                  >
                    Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image_url"
                    type="text"
                    name="image_url"
                    placeholder="Image Url"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                      console.log(image);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="px-6 pb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="image url"
                  >
                    your name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          )}
          {/* Modal actions */}
          <div className="px-6 py-4 bg-gray-100 text-right">
            <button
              onClick={(e) => {
                e.preventDefault();
                updateUserPhotoAndName(name, image);
              }}
              className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mr-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export default Modal;
