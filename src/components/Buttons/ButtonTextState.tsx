import React, { FC, useState } from 'react';

const ButtonTextState: FC = () => {
  const [text, setText] = useState('Click me please');
  return (
    <button onClick={() => setText('Thank you')}>
      {text}
    </button>
  );
};

export default ButtonTextState;