import React, { Fragment, Children  } from "react";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>|</span>
        </Fragment>
      );
    }
    return child;
  });
  return (
    <nav className="">
      <ol className="flex items-center space-x-2">{childrenWithSeparator}</ol>
    </nav>
  );
};

export default Breadcrumb;
