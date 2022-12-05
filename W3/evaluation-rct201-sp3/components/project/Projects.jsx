import Link from "next/link";
import React from "react";
import { AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
const Projects = ({ project_data }) => {
  // const { stargazers_count, forks_count, language, id, url } = data;
  console.log("project data is", project_data);
  const arr = [
    {
      id: "533002732",
      name: "github-issues",
      description: null,
      star: 0,
      fork: 0,
      language: "Kotlin",
    },
    {
      id: "82059682",
      name: "android-topeka",
      description:
        "A fun to play quiz that showcases material design on Android",
      star: 0,
      fork: 0,
      language: "Kotlin",
    },
    {
      id: "376832728",
      name: "Rx-learning",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "282669582",
      name: "problem-solving",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "75261427",
      name: "TaskHand",
      description: "",
      star: 0,
      fork: 2,
      language: "Java",
    },
    {
      id: "142395811",
      name: "reactive-learn",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "129040966",
      name: "mvp-rx-demo-jokeapp",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "128752422",
      name: "MVP-Rx-Demo",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "101173282",
      name: "Custom-Camera",
      description: "",
      star: 0,
      fork: 0,
      language: "Java",
    },
    {
      id: "89335936",
      name: "CustomContentProvider",
      description: "",
      star: 0,
      fork: 1,
      language: "Java",
    },
  ];
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="pro-container">
        {arr.map((el) => (
          <Link href="https://api.github.com/users/shubham" id={el.id}>
            <div className="card">
              <p className="fold">
                <AiOutlineFolder className="git-icon" /> {el.name}
              </p>
              <p>{el.description}</p>
              <div className="git">
                <div>
                  <div>
                    {" "}
                    <AiOutlineStar className="git-icon" />{" "}
                    <span>{el.star}</span>
                  </div>
                  <div>
                    <BiGitBranch className="git-icon" /> <span>{el.fork}</span>
                  </div>
                </div>
                <div className="lang">
                  <GoPrimitiveDot className="git-icon javascript" />{" "}
                  <span>{el.language}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:shubham+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  console.log("data is", data);
  // const { stargazers_count, forks_count, language, id, url } = data;
  return {
    props: { project_data: data },
  };
}

{
  /* <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Shubham.github.io
          </p>
          <p>Deno/fresh github profile</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>0</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>3</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon typescript" />{" "}
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Todo App Solution
          </p>
          <p>github profile</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>3</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>0</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> RCT 201
          </p>
          <p>advance react</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>20</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>3</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Counter App Solution
          </p>
          <p>-</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>2</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>0</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Blogs
          </p>
          <p>A sample project to learn fresh</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>2</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>3</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon typescript" />{" "}
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Shubhamf
          </p>
          <p>readme file</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>4</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>1</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon typescript" />{" "}
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> RCT 101
          </p>
          <p>create next app</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>8</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>2</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> B20-C2
          </p>
          <p>Boiler Plate</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>14</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>3</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon typescript" />{" "}
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> React ecommerce
          </p>
          <p>complete ecommerce app</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>4</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>1</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="fold">
            <AiOutlineFolder className="git-icon" /> Advance Javascript
          </p>
          <p>advance js app</p>
          <div className="git">
            <div>
              <div>
                {" "}
                <AiOutlineStar className="git-icon" /> <span>0</span>
              </div>
              <div>
                <BiGitBranch className="git-icon" /> <span>1</span>
              </div>
            </div>
            <div className="lang">
              <GoPrimitiveDot className="git-icon javascript" />{" "}
              <span>Javascript</span>
            </div>
          </div>
        </div> */
}
