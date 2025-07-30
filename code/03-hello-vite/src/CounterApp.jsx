import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [ counter, setCouter ] = useState(value);
  const handleAdd = () => setCouter(c => c+1 );
  const handleSubtract = () => setCouter(c => c-1 );
  const handleReset = () => setCouter(value);

  return (
    <>
      <h1>Counter App</h1>
      <p>{ counter }</p>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset} aria-label="btn-reset"> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};