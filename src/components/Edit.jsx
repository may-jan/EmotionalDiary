import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  // console.log(id);
  return (
    <div className="Edit">
      <h2>이곳은 일기 수정 페이지 입니다.</h2>
      <button onClick={() => setSearchParams({ who: "jaeeun" })}>
        주소 바꾸기
      </button>
      <button onClick={() => navigate("/home")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
