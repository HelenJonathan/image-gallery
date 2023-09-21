import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Image Gallery</h1>
        <button type="button">Sign In</button>
      </div>

      {/* Search */}
      <div></div>
    </header>
  );
}
