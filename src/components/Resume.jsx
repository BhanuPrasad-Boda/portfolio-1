import React from "react";

const Resume = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="/resume_.pdf"
        title="My Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Resume;
