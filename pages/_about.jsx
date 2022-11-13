import LeftBar from "./_components/leftbar";
import {
  RiTerminalBoxFill,
  RiUser4Fill,
  RiGamepadFill,
  RiFolder3Fill,
  RiMarkdownFill,
  RiArrowDropDownFill,
  RiMailFill,
} from "react-icons/ri";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import SwitchComponent from "./_switch-component-about";
import { SiDiscord } from "react-icons/si";
import axios from "axios";

export default class About extends React.Component {
  state = {
    items: [],
    isFetched: false,
    info: {
      title: "",
      category: "",
    },
  };

  fetchItems() {
    axios.get("/api/aboutItems").then((res) => {
      this.setState({ items: res.data, isFetched: true });
    });
  }

  componentDidMount() {
    if (!this.state.isFetched) {
      this.fetchItems();
    }
  }

  render() {
    return (
      <>
        <div className="container" style={{ justifyContent: "start" }}>
          <LeftBar width={"7vw"} className={"first-navbar-about"}>
            <div className="leftbar-about-content flex">
              <ul>
                <li>
                  <RiTerminalBoxFill />
                </li>
                <li>
                  <RiUser4Fill />
                </li>
                <li>
                  <RiGamepadFill />
                </li>
              </ul>
            </div>
          </LeftBar>
          <LeftBar width={"15vw"}>
            <Menu className="flex leftbar-text">
              <SubMenu
                title="personal-info"
                icon={<RiArrowDropDownFill />}
                id="border-bottom"
              >
                {this.state.isFetched &&
                  this.state.items.about.map((v, i) => {
                    return (
                      <SubMenu
                        title={v.title}
                        key={i}
                        icon={<RiFolder3Fill color={v.color} />}
                        id="margin-left-section"
                      >
                        {v.items.map((ve, i) => {
                          return (
                            <MenuItem
                              key={i}
                              onClick={() =>
                                this.setState({
                                  info: {
                                    title: ve.title,
                                    category: v.title,
                                  },
                                })
                              }
                              icon={<RiMarkdownFill />}
                            >
                              {ve.title}
                            </MenuItem>
                          );
                        })}
                      </SubMenu>
                    );
                  })}
              </SubMenu>
            </Menu>
            <Menu className="flex leftbar-text">
              <SubMenu
                title="contacts"
                icon={<RiArrowDropDownFill />}
                id="border-bottom"
                className="border-top"
              >
                <MenuItem icon={<RiMailFill />} className="no-margin-left">
                  sopowbs@gmail.com
                </MenuItem>
                <MenuItem icon={<SiDiscord />} className="no-margin-left">
                  sopow#7130
                </MenuItem>
              </SubMenu>
            </Menu>
          </LeftBar>
          <SwitchComponent info={this.state.info} />
        </div>
      </>
    );
  }
}
