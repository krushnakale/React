

import React, { useState } from 'react';
import Text from './Text';
function ButtonClick() {
  const [open, setOpen] = useState(false);

  const handleChange=()=>{
    console.log('Called-'+open);
    setOpen(!open);
  }

  return (
    <div>
      {open ? (
        <Text name="Krushna" />
      ) : (
        <Text name="World!" />
      )}
      <button onClick={handleChange}>Click me </button>
    </div>
  );
}



export default ButtonClick;


