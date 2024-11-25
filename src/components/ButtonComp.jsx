/* eslint-disable react/prop-types */
const ButtonComp = ({ text, onClick }) => {
	return (
	  <button onClick={onClick}>
		{text}
	  </button>
	);
  };
  
  export default ButtonComp;
  