//@flow
import React, { Component } from 'react';

type Props = {}

type State = {
  messageClass: string
}

class Slogan extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {messageClass: ''};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ messageClass: 'nvx-slogan-loaded'});
    }, 1000);
  }

  render() { 

    const { messageClass } = this.state;

    return (
      <div className={`col-6 nvx-font-size-lg nvx-slogan nvx-line-height pt-5 ${messageClass}`}>Start jamming now!</div>
    );
  }
}

export default Slogan;
