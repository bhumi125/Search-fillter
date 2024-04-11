import React from "react";

type Props = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export default function Formfield({ keyword, setKeyword }: Props) {
  return (
    <form className="flex flex-col gap-2 p-[20px_20px] pb-9">
      <div>
        <p className="text-[16px] text-white font-bold">Your Name</p>
        <p className="text-[12px]">Bangkok, Thailand</p>
      </div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search..."
        className="w-full p-[5px_8px] rounded-[6px] bg-white text-black"
      />
    </form>
  );
}
