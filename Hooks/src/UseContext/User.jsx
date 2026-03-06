import React, { useContext } from "react";

import ThemeContext from "./Component";

const User = () => {
  const theme = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div>
      <h1 style={style}>User</h1>
    </div>
  );
};

export default User;
