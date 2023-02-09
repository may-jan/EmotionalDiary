import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="Diary">
      <h2>이곳은 일기 페이지 {id}입니다</h2>
    </div>
  );
};

export default Diary;
