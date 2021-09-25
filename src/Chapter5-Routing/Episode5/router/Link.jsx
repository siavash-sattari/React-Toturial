import React from "react";

export default function Link({to, children}) {
  function handleClick(e) {
    e.preventDefault();
    window.history.pushState({}, "", to);
  }
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
