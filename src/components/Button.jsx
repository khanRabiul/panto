import btnIcon from '../assets/button-icon.png'

const Button = ({text}) => {
  return (
    <button className="text-primary text-sm flex items-center justify-center gap-2 cursor-pointer">
      {text} <img src={btnIcon} alt="button icon" />
    </button>
  );
};

export default Button;
