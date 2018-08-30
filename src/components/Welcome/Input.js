//@flow
import React from 'react';

const Input = () => (
  <div className="col position-relative d-flex">
    <input type="text" className="nvx-input nvx-font-size-m" name="search" />
    <label className="nvx-placeholder nvx-font-size-m" htmlFor="search">Search chords for</label>
  </div>
);

export default Input;
