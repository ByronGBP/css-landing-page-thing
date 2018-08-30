//@flow
import React from 'react';

import Carousel from './Carousel';
import Input from './Input';
import Slogan from './Slogan';

const Presentation = () => (
  <div className="container nvx-row-12 nvx-bg-presentation">
    <div className="nvx-row-6 d-flex align-items-center">
      <Slogan/>
    </div>
    <div className="nvx-row-2 d-flex align-items-center">
      <Input/>
    </div>
    <div className="nvx-row-4 d-flex justify-content-center align-items-center">
      <Carousel />
    </div>
  </div>
);

export default Presentation;
