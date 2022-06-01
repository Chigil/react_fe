import React from 'react';

const ButtonTextProps = (props: { text: string, setText: (text: string) => void}) => {
  return (
    <button onClick={() => props.setText('New text')}>
      { props.text }
    </button>
  );
};

export default ButtonTextProps;