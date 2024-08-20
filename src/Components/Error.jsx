import React, { useState } from "react";

const Error = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const specilaCharacterexp = /[^A-Za-z0-9]/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("This field can't be blank.");
    } else if (/\s/.test(email)) {
      setError("Email can't contian space");
    } else if (/\d/.test(email)) {
      setError("Email can't contian number.");
    } else if (specilaCharacterexp.test(email)) {
      setError("Email can't contain special character.");
    } else {
      setError("The email is good to go.");
    }
  };
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center   ">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" flex flex-col w-[30%] px-[20px] justify-center "
        >
          <label htmlFor="email">Your email </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Your email"
            className="outline-none pl-[24px] border-[2px] border-[#b6b6b6] rounded-[100px] flex items-center justify-center   "
          />
          <p className="min-h-[24px] text-[red]   "> {error} </p>
          <button type="submit">Sing up</button>
        </form>
      </div>
    </div>
  );
};

export default Error;
