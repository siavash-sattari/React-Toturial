import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

export default function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
