import React from "react";

export default function Route({path, children}) {
  const pathname = window.location.pathname;
  
  if (pathname !== path) {
    return null;
  }

  return children;
}
