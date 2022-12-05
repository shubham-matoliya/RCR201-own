import React from "react";

const GitIntro = () => {
  return (
    <div className="git-intro">
      <div>
        <img src="https://avatars.githubusercontent.com/u/20564304?v=4" />
        <h2>Shubham Matoliya</h2>
        <h3>@Shubham</h3>
      </div>
      <div>
        <p>Full-stack Developer | FOSS |</p>
        <p>Deno | ReactJS | HTML | CSS | Chakra-</p>
        <p>UI | MUI</p>
      </div>
      <div>
        <button>Resume</button>
        <button style={{ backgroundColor: "#62b3ed" }}>Follow</button>
      </div>
    </div>
  );
};

export default GitIntro;
