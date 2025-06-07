"use client";

import LogoutButton from "./LogoutButton";

export default function Topbar() {


  return (
    <div className="navbar bg-zinc-800 text-white shadow-sm ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PreTest</a>
      </div>
      <div className="flex gap-2">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
