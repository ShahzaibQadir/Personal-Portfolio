import React from "react";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <label className="company-name">{item.designation}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
        {item.demo && (
            <a className="project-link" href={item.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                GameWorkDemo1
              </div>
            </a>
          )}
        {item.demo1 && (
            <a className="project-link" href={item.demo1}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                DragDropGameWorkDemo2
              </div>
            </a>
          )}
      </div>
    </div>
  );
}

export default WorkCard;
