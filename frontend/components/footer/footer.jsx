import React from "react";
import { ExternalLink } from "react-external-link";

const NavFooter = () => (
  <div className="footer">
    <div className="github-link-box">
      <ExternalLink className="github-link" href='https://github.com/Peterkim88/congobasin/wiki'>
        <img className="footer-github-image" src={window.githubImageURL} alt="github-icon" />
        Github
      </ExternalLink>
    </div>
    <div className="linkedin-link-box">
      <ExternalLink className="linkedin-link" href='https://www.Linkedin.com/in/peter-kim-898aa223a'>
        <img className="footer-linkedin-image" src={window.linkedinImageURL} alt="linkedin-icon" />
        Linkedin
      </ExternalLink>
    </div>
    <div className="angellist-link-box">
      <ExternalLink className="angellist-link" href='https://angel.co/u/hyun-il-peter-kim'>
        <img className="footer-angellist-image" src={window.angellistImageURL} alt="angellist-icon" />
        AngelList
      </ExternalLink>
    </div>
    <div className="angellist-link-box">
      <ExternalLink className="angellist-link" href='https://angel.co/u/hyun-il-peter-kim'>
        <img className="footer-angellist-image" src={window.resumeImageURL} alt="angellist-icon" />
        Resume
      </ExternalLink>
    </div>
  </div>
)

export default NavFooter;