import LeftBar from "./_components/leftbar";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RiArrowDropDownFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiRuby,
  SiExpress,
  SiReact,
  SiUnrealengine
} from "react-icons/si";
import { useChecklist } from "react-checklist";
import { useEffect, useState } from "react";
import createWindowandRedirect from "./_func/redirect";
import axios from "axios";
import JsxParser from "react-jsx-parser";
import React from "react";

export default function Projects() {
  const data = [
    {
      name: "react",
      icon: <SiReact />,
    },
    {
      name: "express",
      icon: <SiExpress />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "typescript",
      icon: <SiTypescript />,
    },
    {
      name: "ruby",
      icon: <SiRuby />,
    },
    {
      name: "ue5",
      icon: <SiUnrealengine/>
    }
  ];
  const [projects, setProjects] = useState([]);
  const fetchProject = () => {
    axios.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  };
  useEffect(() => {
    fetchProject();
  }, []);
  const { handleCheck, checkedItems } = useChecklist(data, {
    key: '_id',
    keyType: 'number',
  });
  let items = Array.from(checkedItems);
  return (
    <>
      <div
        className="container"
        style={{
          justifyContent: "flex-start",
        }}
      >
        <LeftBar width={"22vw"}>
          <Menu className="flex leftbar-text">
            <SubMenu
              title="projects"
              icon={<RiArrowDropDownFill />}
              id="border-bottom"
              className="no-width-15"
            >
              {data.map((v, i) => (
                <MenuItem key={i} className="no-padding">
                  <input
                    type="checkbox"
                    data-key={v.name.toLowerCase()}
                    onChange={handleCheck}
                    checked={checkedItems.has(v.name.toLowerCase())}
                    className="projects-input"
                  />
                  <label className="no-width">{v.icon}</label>
                  <label>{v.name[0].toUpperCase() + v.name.slice(1)}</label>
                </MenuItem>
              ))}
            </SubMenu>
          </Menu>
        </LeftBar>
        <div
          className="container"
          style={{
            flexWrap: "wrap",
            overflow: "auto",
            justifyContent: "space-evenly",
            borderLeft: "none",
            borderRight: "none",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          {projects.projects &&
            projects.projects.map((v, i) => {
              if (items.includes(v.category.name.toLowerCase())) {
                return (
                  <div key={i} className={`project ${v.category.name}`}>
                    <div
                      className="flex project-title"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <h2>Project {v._id + 1}</h2>
                      <p>
                        {"//"} _{v.name}
                      </p>
                    </div>
                    <div className="project-card">
                      <div
                        className="project-image"
                        style={{
                          backgroundImage: `url(${v.image})`,
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: v.category.color,
                          }}
                          onClick={() =>
                            createWindowandRedirect(v.category.link)
                          }
                        >
                          <JsxParser
                            jsx={v.category.icon}
                            components={{
                              RiArrowDropDownFill,
                              SiReact,
                              SiExpress,
                              SiNextdotjs,
                              SiTypescript,
                              SiRuby,
                              SiUnrealengine
                            }}
                          />
                        </span>
                      </div>
                      <p>{v.description}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          {Array.isArray(items) && items.length <= 0 ? (
            <h1 className="project-notselected">
              You need to select a project
            </h1>
          ) : null}
        </div>
      </div>
    </>
  );
}
