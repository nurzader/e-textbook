import React from 'react';

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
};

export default Button;
