import React from 'react';
import {Link} from 'react-router-dom';

const LeftNav = () => (
  <div id="left-nav">
    <Link color="inherit" href="https://www.linkedin.com/in/burnsmich/">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="linkedin icon"
      />
    </Link>
    <Link color="inherit" href="https://github.com/michslush">
      <img
        className="logo"
        src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
        alt="GitHub icon"
      />
    </Link>
    <a href="mailto:michaelaburns0@gmail.com?Subject=Hi%20Michaela!">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
        alt="email icon"
      />
    </a>
  </div>
);

export default LeftNav;
