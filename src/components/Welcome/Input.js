//@flow
import React, { Component, createRef } from 'react';

import type { ElementRef } from 'react';

type Props = {}

type State = {
  placeholderClass: string
}

class Input extends Component<Props, State> {

  inputEl: ?HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.state = {placeholderClass: ''};
  }

  handlePlaceholderClick = () => {
    this.setState({ placeholderClass: 'nvx-placeholder-active'});
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  handleInputBlur = () => {
    if (this.inputEl && this.inputEl.value === '') {
      this.setState({ placeholderClass: ''});
    }
  }

  render() {
    const { placeholderClass } = this.state;
    return (
      <div className="col position-relative d-flex">
        <div className={`py-1 px-3 nvx-placeholder ${placeholderClass}`} onClick={this.handlePlaceholderClick}>
          <label className="m-0" htmlFor="search">SEARCH CHORDS</label>
        </div>
        <input type="text" className="nvx-input nvx-font-size-s" name="search" onBlur={this.handleInputBlur} ref={elem => this.inputEl=elem}/>
        <div className="d-flex flex-column justify-content-center nvx-search-button">
          <i className="material-icons">search</i>
        </div>
      </div>
    );
  }
}

export default Input;
