import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const Login = () => {
  const {
    loginWithEmailPassword,
    signupWithGoogle,
    signupWithGithub,
    setLoading,
    setUser,
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    // Handle form submission here
    loginWithEmailPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        setEmail("");
        setErr("");
        setPassword("");
        navigate(from);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage.split(":")[1]);
      });
  };
  const googleSignin = () => {
    signupWithGoogle()
      .then((userCradi) => {
        setLoading(false);
        setErr("");
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message.split(":")[1]);
      });
  };
  const githubSignin = () => {
    signupWithGithub()
      .then((userCradi) => {
        setLoading(false);
        setErr("");
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message.split(":")[1]);
      });
  };
  return (
    <div className="flex justify-center items-center my-auto py-10 bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
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
          <p className="text-red-700">{err}</p>
          <div className="flex items-center justify-between flex-col">
            <span>
              don't have an account{" "}
              <Link className="underline text-blue-500" to="/1/signup">
                Register{" "}
              </Link>
            </span>
            <button
              className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
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

export default Login;
