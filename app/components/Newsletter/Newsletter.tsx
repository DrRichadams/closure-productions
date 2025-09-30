"use client";

import Image from "next/image";
import { FcOk } from "react-icons/fc";
import { BiSolidErrorCircle } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { db } from "@/app/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function clearNotification() {
    setEmail("");
    setError("");
    setSuccess("");
  }

  function auto_clear_notification() {
    setTimeout(() => {
      setEmail("");
      setError("");
      setSuccess("");
    }, 5000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      // Save to Firestore "emails" collection
      await addDoc(collection(db, "newsletters"), {
        email: email,
        createdAt: new Date(),
      });
      setSuccess("Thank you for your submission, email submitted");
      setEmail("");
      setError("");
      auto_clear_notification();
    } catch (err) {
      console.error("Error adding document: ", err);
      setEmail("");
      setSuccess("");
      setError("Failed to save email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="-mt-32 relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <Image
                src={"/assets/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute top-10 right-0">
                <Image
                  src={"/assets/newsletter/leaf.svg"}
                  alt="leafimg"
                  width={81}
                  height={81}
                />
              </div>
              <div className="absolute bottom-8 left-2">
                <Image
                  src={"/assets/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
              Sign up to our newsletter.
            </h3>
            <h4 className="text-base font-normal mb-7 text-offwhite">
              Be the first to know about our latest updates and offers.
            </h4>
            <form className="flex gap-0" onSubmit={(e) => submitEmail(e)}>
              <input
                type="Email"
                className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
                placeholder="Enter your email address"
                autoComplete="off"
                required
                value={email}
                onChange={handleChange}
              />
              <button className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg">
                <Image
                  src={"/assets/newsletter/plane.svg"}
                  alt="plane-img"
                  width={20}
                  height={20}
                />
              </button>
            </form>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "1rem",
                marginTop: "10px",
                display: error || success ? "flex" : "none",
                alignItems: "center",
                gap: "8px",
                position: "relative",
              }}
            >
              {/* {success ? <FcOk size={30} /> : ""} */}
              {success ? (
                <Image src={"/success.png"} alt="ICO" width={25} height={25} />
              ) : (
                ""
              )}
              {/* {error ? <BiSolidErrorCircle size={30} color="red" /> : ""} */}
              {error ? (
                <Image src={"/error.png"} alt="ICO" width={25} height={25} />
              ) : (
                ""
              )}
              {success ? <p>Thank you for submitting your email</p> : ""}
              {error ? <p>Error submitting your email, try again</p> : ""}
              {/* <button
                style={{
                  position: "absolute",
                  right: "15px",
                  cursor: "pointer",
                }}
                onClick={() => clearNotification()}
              >
                <IoCloseCircleSharp size={30} color="red" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
