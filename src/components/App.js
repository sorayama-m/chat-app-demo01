import React, { useState } from 'react';

import Main from './main';
import SignIn from './Signin';
import config from '../config.json'
// console.log({ config });

export default () => {
  const [name, setName] = useState('');
  // console.log({ name });

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />
  }
};
