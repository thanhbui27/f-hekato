import React, { forwardRef } from 'react';
import './styles.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string;
}

const Input = forwardRef<HTMLInputElement,InputProps>(({label,...rest},refs) => {
  return (
    <div className="input-data">
      <input required {...rest} ref={refs}/>
      <div className="underline"></div>
      <label>{label}</label>
    </div>
  );
});

export default Input

