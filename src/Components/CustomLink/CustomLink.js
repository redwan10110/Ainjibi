import React from "react";
import { Link, useMatch, useResolvedPath,LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

//   const linkStyle = {
//     textDecoration: "underline",
//     color: "blue",
//   };
  return (
    <div>
      <Link
        style={{ borderBottom: match ? "1px solid red" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
};

export default CustomLink;
