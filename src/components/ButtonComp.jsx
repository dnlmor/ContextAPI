/* eslint-disable react/prop-types */

const ButtonComp = ({ text, onClick }) => {
	return (
	  <button onClick={onClick} style={{ padding: "0.5em 1em", cursor: "pointer" }}>
		{text}
	  </button>
	);
  };
  
  export default ButtonComp;
  