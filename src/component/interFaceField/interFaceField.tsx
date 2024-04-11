// import React from "react";

import Comment from "../icon/comment";

interface item {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type props = {
  filtered: item[];
};

export default function InterFaceField({ filtered }: props) {
  return (
    <ul className=" m-[0_20px] mt-[-20px] overflow-scroll shadow-2xl rounded-xl">
      {filtered.map((item) => {
        return (
          <li
            key={item.id}
            className="bg-white group box-border p-[0_1rem] hover:scale-105 hover:shadow-[0_0px_80px_-1px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center justify-between gap6 p-3 border-[0.1px] border-[#fff0] border-b-[#3f3f3f15] border-t-[#00000030] cursor-pointer">
              <img
                src={item.avatar}
                alt="image"
                className="w-[80px] h-[80px] object-cover object-center rounded-full"
              />
              <div className="flex flex-col items-start ">
                <p className="text-[14px] text-slate-900 font-bold	">
                  {item.first_name} {item.last_name}
                </p>
                <p className="text-[12px] text-gray-500">{item.email}</p>
              </div>
              <Comment className="w-8 h-8 stroke-neutral-300 group-hover:stroke-neutral-500" />
            </div>
          </li>
        );
      })}{" "}
    </ul>
  );
}
