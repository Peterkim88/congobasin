import React from "react";
import { ExternalLink } from "react-external-link";

const NavFooter = () => (
  <div className="footer">
    <div className="footer-link-box">
      <ExternalLink className="footer-link" href='https://github.com/Peterkim88/congobasin/wiki'>
        <img className="footer-image" src={window.githubImageURL} alt="github-icon" />
        Github
      </ExternalLink>
    </div>
    <div className="footer-link-box">
      <ExternalLink className="footer-link" href='https://www.Linkedin.com/in/peter-kim-898aa223a'>
        <img className="footer-image" src={window.linkedinImageURL} alt="linkedin-icon" />
        Linkedin
      </ExternalLink>
    </div>
    <div className="footer-link-box">
      <ExternalLink className="footer-link" href='https://angel.co/u/hyun-il-peter-kim'>
        <img className="footer-image" src={window.angellistImageURL} alt="angellist-icon" />
        AngelList
      </ExternalLink>
    </div>
    <div className="footer-link-box">
      <ExternalLink className="footer-link" href='https://angel.co/u/hyun-il-peter-kim'>
        <img className="footer-image" src={window.resumeImageURL} alt="angellist-icon" />
        Resume
      </ExternalLink>
    </div>
  </div>
)

export default NavFooter;