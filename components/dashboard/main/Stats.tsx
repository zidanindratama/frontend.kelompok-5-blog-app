import { Book, SquareTerminal, Terminal, Users } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3">
      <div className="border rounded-md p-4 bg-white flex flex-row justify-between">
        <div className="">
          <h1 className="font-light text-sm">Total Users</h1>
          <h3 className="font-bold text-3xl">12</h3>
        </div>
        <Users className="w-8 h-8" />
      </div>
      <div className="border rounded-md p-4 bg-white flex flex-row justify-between">
        <div className="">
          <h1 className="font-light text-sm">Total Categories</h1>
          <h3 className="font-bold text-3xl">5</h3>
        </div>
        <SquareTerminal className="w-8 h-8" />
      </div>
      <div className="border rounded-md p-4 bg-white flex flex-row justify-between">
        <div className="">
          <h1 className="font-light text-sm">Total Blogs</h1>
          <h3 className="font-bold text-3xl">21</h3>
        </div>
        <Book className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Stats;
