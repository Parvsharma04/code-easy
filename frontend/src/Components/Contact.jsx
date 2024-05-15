import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme, settheme }) => {
  const themeClass =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      toast.success("Message sent successfully!");
      // Clear the form inputs
      setName("");
      setEmail("");
      setMessage("");

      let res = await fetch("https://formcarry.com/s/TRDpuAxVBKn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      res = await res.json();
      if (res.code == 200) {
        toast.success(res.message, {
          position: "top-left",
          autoClose: 1100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(res.message, {
          position: "top-left",
          autoClose: 1100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Fill all the fields", {
        position: "top-left",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar theme={theme} settheme={settheme} />
      <section
        className={`body-font flex justify-center items-center h-screen relative ${themeClass}`}
      >
        <div className="container mx-auto my-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${themeClass}`}
            >
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to ask your query here
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded border focus:outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${themeClass}`}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded border focus:outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${themeClass}`}
                    />
                  </div>
                </div>
                <div className={`p-2 w-full ${themeClass}`}>
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full rounded border-2 focus:outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${themeClass}`}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className={`flex mx-auto py-2 px-8 focus:outline-none rounded text-lg ${
                      theme === "dark"
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500 text-white hover:bg-indigo-600"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer theme={theme} settheme={settheme} />
    </>
  );
};

export default Contact;
