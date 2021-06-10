import React, { useState } from 'react';

import SignIn from './Signin';

export default () => {
  const [name, setName] = useState('');
  return <SignIn />;
};


