import React from "react";

function Them(WrappedComponent) {
  const theme = {
    light: {
      background: "#213547",
      color: "white",
      width: "100px",
      padding: "20px",
    },
    dark: {
      background: "#0d1315",
      padding: "10px",
      color: "white",
      width: "100px",
      padding: "20px",
    },
  };

  // HOC returns a new component
  return function ThemComponent({ mode = "light", ...props }) {
    const style = theme[props.theme] || theme.light;

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Them;
