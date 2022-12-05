import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href={"/"}>
        <div>Shubham Matoliya</div>
      </Link>
      <Link href="/project">
        <div>Project</div>
      </Link>
      <Link href="/experience">
        <div>Experience</div>
      </Link>
    </div>
  );
};

export default Navbar;
