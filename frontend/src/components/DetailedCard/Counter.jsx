import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ stock, onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      onCountChange(count + 1);
    }
  };

  return (
    <div className="d-flex flex-row w-25">
      <Button
        title="View product"
        variant="outline-transparent"
        className="p-0 mb-1"
        style={{ boxShadow: "none" }}
        onClick={handleDecrement}
      >
        <FontAwesomeIcon icon={faMinus} size="2xl" style={{ color: "#DF6A45" }} />
      </Button>
      <span className="mx-2">{count}</span>
      <Button
        title="View product"
        variant="outline-transparent"
        className="p-0 mb-1"
        style={{ boxShadow: "none" }}
        onClick={handleIncrement}
      >
        <FontAwesomeIcon icon={faPlus} size="2xl" style={{ color: "#DF6A45" }} />
      </Button>
    </div>
  );
};

export default Counter;
