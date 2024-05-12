"use client";
import axios from "axios";
import React, { useState } from "react";
// import { POST } from "../api/route";

// const express = require("express");
const Add = () => {
  // const app = express();

  // // HTTP POST so'rovlarni qabul qilish uchun yo'lni aniqlang
  // app.post(
  //   "/table/api",
  //   async (
  //     req: Request,
  //     res: {
  //       status: (arg0: number) => {
  //         (): any;
  //         new (): any;
  //         send: { (arg0: string | Response): void; new (): any };
  //       };
  //     }
  //   ) => {
  //     try {
  //       const response = await POST(req);
  //       res.status(200).send(response);
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).send("Serverning ichki xatosi");
  //     }
  //   }
  // );

  // // Serverni ishga tushiring
  // app.listen(3000, () => {
  //   console.log("Server 3000-portda ishga tushdi");
  // });

  const [formData, setFromData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  // const addData = async () => {};

  // console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/table/api", formData);

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex max-w-7xl container mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto gap-3 w-[400px] mt-[100px]"
      >
        <label htmlFor="name" className="cursor-pointer font-bold">
          FullName
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          required
          onChange={handleChange}
          placeholder="Full name"
          className="flex font-sm font-semibold w-full border p-2 rounded-md outline-none"
        />
        <label htmlFor="username" className="cursor-pointer font-bold">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={handleChange}
          value={formData.username}
          placeholder="Username"
          className="flex font-sm font-semibold w-full border p-2 rounded-md outline-none"
        />
        <label htmlFor="email" className="cursor-pointer font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          required
          placeholder="email"
          className="flex font-sm font-semibold w-full border p-2 rounded-md outline-none"
        />
        <label htmlFor="phone" className="cursor-pointer font-bold">
          Phone
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={handleChange}
          value={formData.phone}
          required
          placeholder="phone"
          className="flex font-sm font-semibold w-full border p-2 rounded-md outline-none"
        />
        <button
          type="submit"
          className="flex py-2 px-2 justify-center items-center rounded-md active:bg-green-400 duration-150 bg-green-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
