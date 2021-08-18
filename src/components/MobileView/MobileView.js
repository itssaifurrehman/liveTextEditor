import React from "react";
import "./MobileView.css";

const MobileView = ({ textMarkdown, title }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-wrapper">
        <div className="title">{title}</div>
        <div className="mobile-container-padding"
          dangerouslySetInnerHTML={{ __html: textMarkdown }}
        >     
        </div>
      </div>
    </div>
  );
};

export default MobileView;
