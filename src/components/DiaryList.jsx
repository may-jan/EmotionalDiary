import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

// 컨트롤 메뉴
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <>
      <select
        className="ControlMenu"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
      </select>
    </>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    // 감정 필터링 함수
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // 최신순, 오래된순 정렬을 위한 비교함수 compare
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date); // 최신순 : return 값이 음수
      } else {
        return parseInt(a.date) - parseInt(b.date); // 오래된순 : return 값이 양수
      }
    };

    // 기존 리스트 복사
    const copyList = JSON.parse(JSON.stringify(diaryList));

    // copyList에서 감정을 필터링
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    // 필터링을 마친 리스트를 정렬
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            // 최신순, 오래된순 옵션
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            // 감정에 따른 옵션
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
