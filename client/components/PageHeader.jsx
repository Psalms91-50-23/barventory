import React from 'react';

const PageHeader = ({title, leftAction, rightAction}) => {
    return (
      <div className="page-header">
        <div>{leftAction}</div>
        <h1>{title}</h1>
        <div>{rightAction}</div>
      </div>
    );
}

export default PageHeader;
