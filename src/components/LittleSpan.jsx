import { useContext, useEffect, useState } from "react";
import { CountContext } from "../context/CountContext";

const LittleSpan = () => {
  const { count } = useContext(CountContext);
  const [localCount, setLocalCount] = useState(count);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setLocalCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", localCount);
  }, [localCount]);

  return <span>Dynamic count: {localCount}</span>;
};

export default LittleSpan;
