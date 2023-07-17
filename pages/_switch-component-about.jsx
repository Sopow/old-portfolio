import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import axios from "axios";
import React from "react";

export default class SwitchComponent extends React.Component {
  state = {
    about: [],
    text: "",
    isFetched: false,
  };

  fetchAbout() {
    axios.get("/api/about").then((res) => {
      this.setState({ about: res.data.about, isFetched: true });
    });
  }

  setTextState() {
    this.state.about.map((v) => {
      if (
        v.title === this.props.info.title &&
        v.category === this.props.info.category
      ) {
        this.setState({ text: v.content });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (!this.state.isFetched) {
      this.fetchAbout();
    }

    if (
      prevProps.info.title !== this.props.info.title ||
      prevProps.info.category !== this.props.info.category
    ) {
      this.fetchAbout();
      this.setTextState();
    }
  }

  render() {
    return (
      <div className="about_components-container">
        {this.props?.info?.category && (
          <p className="about_components-details" style={{ display: "flex"}}>
            <span style={{ marginRight: "10px", color: "white" }} className="about_components-displayable-mobile">{"//"}</span>
            <span style={{ marginRight: "10px" }} className="about_components-color-mobile">
              {this.props.info.title}
            </span>
            <div className="about_components-displayable-mobile">
              <span style={{ marginRight: "10px" }}>{"/"}</span>
              <span>{this.props.info.category}</span>
            </div>
          </p>
        )}
        <SyntaxHighlighter
          language="javascript"
          style={hybrid}
          showLineNumbers={true}
        >
          {this.state.text}
        </SyntaxHighlighter>
      </div>
    );
  }
}
