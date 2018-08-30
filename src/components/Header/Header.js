//@flow
import React from 'react';

const Header = () => (
  <div className="container fixed-top nvx-header nvx-font-size-xs nvx-bg-white">
    <div className="row justify-content-between">
      <div className="d-flex nvx-logo mt-1 mb-1 mr-3 ml-3">
      </div>

      <div className="text-center d-flex flex-column justify-content-center mr-1 nvx-login-button ">
        <span>Login</span>
      </div>
    </div>
  </div>
);

export default Header;
