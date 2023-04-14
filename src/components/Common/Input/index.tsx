import './styles.scss';

interface InputProps {
    label : string;
}

const Input : React.FC<InputProps> = ({label,...rest}) => {
  return (
    <div className="input-data">
      <input type="text" required {...rest}/>
      <div className="underline"></div>
      <label>{label}</label>
    </div>
  );
};

export default Input

