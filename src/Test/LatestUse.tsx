import React, { useState } from "react";
import useLatest from "../hooks/useLatest";
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const latestCountRef = useLatest(like);
  function handleAlertClick() {
    setTimeout(() => {
      alert(`you clicked on ${latestCountRef.current}`);
    }, 3000);
  }
  return (
    <>
      <button onClick={() => setLike(latestCountRef.current + 1)}>
        {like}赞
      </button>
      <button onClick={handleAlertClick}>Alert</button>
    </>
  );
};
export default LikeButton;
