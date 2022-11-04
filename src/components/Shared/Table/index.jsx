import React from "react";

export default function Table() {

    const data = {
        headers : ["Header 1", "Header 2", "Header 3"],
        content : [["Content 1", "Content 2", "Content 3"],["Content 1", "Content 2", "Content 3"],["Content 1", "Content 2", "Content 3"]]
    }

    return (
    <div className="main-table">
      <div className="table-header">
        {data.headers.map((item, index) => (
          <div index={index} className="table-head">{item}</div>
        ))}
      </div>
      <div className="table-body">
        {data.content.map((item, index) => (
          <div index={index} className="table-body-row">
            {item.map((i, index2) => (
                <div index={index2} className="table-row-content">
                    {i}
                </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
