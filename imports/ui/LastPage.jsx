import React, { useState } from "react";

const colorArray = [
  "rgba(221, 255, 220, 1)",
  "rgba(212, 255, 247, 1)",
  "rgba(255, 242, 208, 1)",
  "rgba(207, 218, 255, 1)"
  
];


function getColorByIndex(index) {
  const colorIndex = index % colorArray.length;
  return colorArray[colorIndex];
}

const LastPage = ({ item, onClickEdit, onClickDelete,index }) => {
 
  const colorIndex = index;
  const color = getColorByIndex(colorIndex);

  return (
    <div>
      <div className="last-main" style={{ backgroundColor: color }}>
        <h1 className="last-title">{item.Tittle}</h1>
        <p className="last-text">{item.Text}</p>
        <div className="Last-common">
          <img
            className="last-img"
            src="/image 59.png"
            onClick={() => onClickEdit(item)}
            alt="edit"
          />
          <img
            className="last-img"
            src="/image 53.png"
            onClick={() => onClickDelete(item._id)}
            alt="delete"
          />
        </div>
      </div>
    </div>
  );
};

export default LastPage;




  
