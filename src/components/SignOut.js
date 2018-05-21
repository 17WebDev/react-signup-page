import React from 'react';

import { auth } from '../firebase';

const divStyle = {
  background: "black",
  padding:'0 5px',

  

};
const SignOutButton = () =>
  <button
    style={divStyle}

    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
