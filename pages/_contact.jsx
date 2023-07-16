import React, { useRef, useState } from "react";
import LeftBar from "./_components/leftbar";
import { RiArrowDropDownFill, RiMailFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import axios from "axios";
import ReactDOM from "react-dom/client";
import createWindowandRedirect from "./_func/redirect";
import { Textbox, Textarea } from "react-inputs-validation";
import list from "badwords-list";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isAllValid, setIsAllValid] = useState({
    name: false,
    email: false,
    message: false,
  });

  const code = `const button = document.querySelector('#sendBtn');

const message = {
	name: "${message.name}",
	email: "${message.email}",
	message: "${message.message}",
	date: "${new Date().toLocaleDateString("fr-FR")}"
}

button.onclick = () => {
  form.send(message);
}`;
  const sendEmail = (e) => {
    if (isAllValid.name && isAllValid.email && isAllValid.message) {
      e.preventDefault();
      const data = {
        name: message.name,
        email: message.email,
        message: message.message,
        date: new Date().toLocaleDateString("fr-FR"),
      };
      axios.post("/api/contact", data).then((res) => {
        const messageSent = (
          <div className="message-sent">
            <span>Thank you! 🤘</span>
            <p>
              Your message has been accepted. You will recieve answer really
              soon!
            </p>
            <button id="sendBtn" onClick={() => window.location.reload()}>
              send-new-message
            </button>
          </div>
        );

        const root = ReactDOM.createRoot(document.querySelector(".contact-form"));
        root.render(messageSent);
      });
    }
  };
  const data = [
    {
      title: "Github profile",
      link: "https://www.github.com/Sopow",
    },
    {
      title: "Twitter page",
      link: "https://www.twitter.com/GSopow",
    },
  ];
  return (
    <>
      <div className="container" style={{ width: "100%" }}>
        <LeftBar width={"22vw"}>
          <Menu className="flex leftbar-text">
            <SubMenu
              title="contacts"
              icon={<RiArrowDropDownFill />}
              id="border-bottom"
              className="border-top"
              style={{ width: "22vw" }}
            >
              <MenuItem icon={<RiMailFill />} className="no-margin-left">
                contact@sopow.fr
              </MenuItem>
              <MenuItem icon={<SiDiscord />} className="no-margin-left">
                gsopow
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="find-me-also-in"
              icon={<RiArrowDropDownFill />}
              id="border-bottom"
              className="border-top"
              style={{ width: "22vw" }}
            >
              {data.map((v, i) => {
                return (
                  <MenuItem
                    key={i}
                    icon={<BiLinkExternal />}
                    className="no-margin-left"
                    onClick={() => {
                      createWindowandRedirect(v.link);
                    }}
                  >
                    {v.title}
                  </MenuItem>
                );
              })}
            </SubMenu>
          </Menu>
        </LeftBar>
        <div className="container" style={{ borderLeft: "none" }}>
          <section className="contact-container">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">_name:</label>
                  <Textbox
                    attributesInput={{
                      type: "text",
                      name: "name",
                    }}
                    classNameInput="form-control"
                    value={message.name}
                    onBlur={(e) =>
                      setMessage({ ...message, name: e.target.value })
                    }
                    validationOption={{
                      name: "name",
                      check: true,
                      required: true,
                      customFunc: (value) => {
                        if (value.length < 3) {
                          return "Your name is too short";
                        } else {
                          setIsAllValid({ ...isAllValid, name: true });
                          return true;
                        }
                      },
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">_email:</label>
                  <Textbox
                    attributesInput={{ type: "email", id: "email" }}
                    classNameInput="form-control"
                    value={message.email}
                    onBlur={(e) =>
                      setMessage({ ...message, email: e.target.value })
                    }
                    validationOption={{
                      name: "email",
                      check: true,
                      required: true,
                      customFunc: (email) => {
                        const reg =
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (reg.test(String(email).toLowerCase())) {
                          setIsAllValid({ ...isAllValid, email: true });
                          return true;
                        } else {
                          return "Please enter a valid email address";
                        }
                      },
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">_message:</label>
                  <Textarea
                    attributesInput={{
                      type: "text",
                      id: "message",
                    }}
                    classNameInput="form-control"
                    id="message"
                    value={message.message}
                    onBlur={(e) =>
                      setMessage({ ...message, message: e.target.value })
                    }
                    validationOption={{
                      name: "message",
                      check: true,
                      required: true,
                      customFunc: (value) => {
                        if (value.length < 10) {
                          return "Your message is too short";
                        } else if (value.match(list.regex)) {
                          return "Your message contains bad words";
                        } else {
                          setIsAllValid({ ...isAllValid, message: true });
                          return true;
                        }
                      },
                    }}
                  />
                </div>
              </form>
              <button id="sendBtn" onClick={(e) => sendEmail(e)}>
                submit-message
              </button>
            </div>
          </section>
          <section className="contact-preview">
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              showLineNumbers={true}
            >
              {code}
            </SyntaxHighlighter>
          </section>
        </div>
      </div>
    </>
  );
}
