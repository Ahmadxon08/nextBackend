/* eslint-disable react/no-unescaped-entities */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";

export interface Data {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Table = () => {
  const [datas, setDatas] = useState<Data[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/table/api");
      const data = await res?.data;
      console.log(data.users);
      setDatas(data.users);
    } catch (error) {
      console.log(error, "Error fetching");
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (userId: number) => {
    try {
      setDatas((prevData) => prevData.filter((data) => data.id !== userId));
      await axios.delete(`http://localhost:3000/table/api/data${userId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);

      alert("Error deleting user. Please try again later.");
    }
  };

  return (
    <div className="flex container  mx-auto max-w-7xl flex-col pb-[30px] ">
      <div className="flex items-center justify-between mb-[80px] mt-[20px]">
        <h1 className=" flex font-bold text-[28px]">Users' information</h1>
        <button
          type="button"
          className="flex py-2 px-2 rounded-md hover:bg-green-400 duration-150 bg-green-500 text-white"
        >
       
          <IoPersonAdd size={34} />
        </button>
      </div>

      <table className="flex-col text-center mx-auto w-full ">
        <thead>
          <tr className="flex justify-between px-3 pr-[60px]">
            <th className="w-[20px]">#</th>
            <th className="w-[180px]">Name</th>
            <th className="w-[220px] pl-[100px] ">Username</th>
            <th className="w-[290px]">Email</th>
            <th className="w-[290px]">Phone</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody className=" w-full">
          {datas && datas?.map((data: Data) => (
            <tr
              key={data.id}
              className=" w-full  hover:bg-slate-100 du flex justify-between items-center px-3 border-b py-2 "
            >
              <td className="w-[20px] ">{data.id}</td>
              <td className="w-[30%]">{data.name}</td>
              <td className="w-[20%]  ">{data.username}</td>
              <td className="w-[30%]">{data.email}</td>
              <td className="w-[30%]">{data.phone}</td>

              <td className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex py-2 px-2 rounded-md hover:bg-yellow-400 duration-150 bg-yellow-500 text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(data.id)}
                  className="flex py-2 px-2 rounded-md hover:bg-red-400 bg-red-500 text-white "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
