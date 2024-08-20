import React, { useState } from "react";
import logo from "../assets/logo.png";
const Billingaddress = () => {
  // variable part start
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    const [zip, setZip] = useState("");
    
  const regex = /[a-zA-Z]/;
  const refexa = /[^0-9]/;
  // function part start
  if (firstName === "") {
     console.log("Blank!")
  } else if (/\d/.test(firstName)) {
    console.log("fName can't contian number!");
  }
  if (lastName === "") {
    console.log("lName can't be blank.");
  } else if (/\d/.test(lastName)) {
    console.log("lName can't contain number");
  }
  if (regex.test(zip)) {
    console.log("ZIP can't containt alphabet.");
  } else if (refexa.test(zip)) {
    console.log("ZIP can't containt special character.");
  }
  
  return (
    <div className="w-full h-screen bg-white  flex flex-col items-center justify-center     ">
      <div className="container flex flex-col items-center   ">
        <h2 className="font-nunito font-bold text-[42px] leading-[52px] text-[#1E0E62] text-center mb-[20px]   ">
          Create Billing Account
        </h2>
        <form
          action=""
          className="w-[770px] rounded-[10px] border-[1px] border-[#EBEAED] px-[100px] py-[50px]    "
        >
          <div className="flex  gap-[29px]  pb-[34px] ">
            <div>
              <label
                htmlFor="fname"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block "
              >
                FIRST NAME
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                name=""
                id=""
                className="w-[270px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px] "
              />
              <p>  </p>
            </div>
            <div>
              <label
                htmlFor="lname"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase  "
              >
                Last NAME
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="w-[270px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px]  "
              />
            </div>
          </div>

          <div>
            <div className="flex  gap-[29px]  pb-[34px] ">
              <div>
                <label
                  htmlFor="address"
                  className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase "
                >
                  Address
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[370px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none  pl-[24px] "
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block "
                >
                  POSTAL / ZIP
                </label>
                <input
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                  type="text"
                  className="w-[170px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px] "
                />
              </div>
            </div>
          </div>

          <div className="flex  gap-[29px]  pb-[34px] ">
            <div>
              <label
                htmlFor="city"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase "
              >
                City
              </label>
              <input
                type="text"
                className="w-[270px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px]  "
              />
            </div>
            <div>
              <label
                htmlFor="Country"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase "
              >
                Country
              </label>
              <input
                type="text"
                className="w-[270px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px]   "
              />
            </div>
          </div>

          <div className="flex  gap-[29px]  pb-[34px] ">
            <div>
              <label
                htmlFor="cardNumber"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase  "
              >
                CARD NUMBER
              </label>
              <input
                type="number"
                className="w-[270px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px] "
              />
            </div>
            <div>
              <label
                htmlFor="cardExperation"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase  "
              >
                EXPIRATION
              </label>
              <input
                type="date "
                className="w-[170px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px] "
              />
            </div>
            <div>
              <label
                htmlFor="CVV"
                className=" font-DMsans font-bold text-[14px] leading-[26px] tracking-[2px] text-[#1E0E62] mb-[7px] block uppercase  "
              >
                CVV
              </label>
              <input
                type="number"
                className="w-[68px] h-[50px] rounded-[100px] border-[2px] border-[#EBEAED] outline-none pl-[24px] "
              />
            </div>
          </div>
          <div className="flex justify-between items-center   ">
            <div className="flex items-center gap-[23px]   ">
              <img src={logo} alt="" />
              <p className="font-DMsans font-normal text-[16px] leading-[26px] text-[rgba(21,20,57,0.40)]   ">
                Use your debit or credit <br /> card to pay with PayPal
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-[120px] h-[50px] bg-[#25DAC5] rounded-[100px] text-white font-DMsans font-medium text-[18px] leading-[26px]    "
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Billingaddress;
