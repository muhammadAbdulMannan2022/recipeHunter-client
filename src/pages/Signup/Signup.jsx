import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
  const {
    signupWithGoogle,
    signupWithEmailPassword,
    signupWithGithub,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, url } = e.target;

    if (!password.value.match(/.*[0-9].*/)) {
      console.log("password must contain a number");
    } else if (
      !password.value.match(/.*[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?].*/)
    ) {
      console.log("password must contain a special character");
    } else if (!name.value && !url.value && !email.value) {
      console.log("fill up all fild");
    } else {
      signupWithEmailPassword(email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, { displayName: name.value, photoURL: url.value });
          setLoading(false);
          setName("");
          setEmail("");
          setName("");
          setPassword("");
          setPhotoUrl("");
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          // ..
        });
    }
  };
  const googleSignin = () => {
    signupWithGoogle()
      .then((userCradi) => {
        setUser(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const githubSignin = () => {
    signupWithGithub()
      .then((userCradi) => {
        setUser(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-full py-10 bg-blue-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="photoUrl"
            >
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoUrl"
              type="text"
              name="url"
              placeholder="Enter your photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between flex-col">
            <span>
              alray have an account{" "}
              <Link className="underline text-blue-500" to="/1/login">
                Login{" "}
              </Link>
            </span>

            <button
              className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={googleSignin}
            className="bg-white w-full mt-3 text-black border shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            login with google
          </button>
          <button
            onClick={githubSignin}
            className="bg-black w-full mt-3 text-white border shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            login with gitgub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
