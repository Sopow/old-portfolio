import { Component } from 'react';

export default class LeftBar extends Component {
  render() {
    const { children, width, className } = this.props;
    return (
      <div className={`leftbar ${className ?? ""}`} style={{ width: width ?? '10vw' }}>
        {children}
      </div>
    );
  }
}
