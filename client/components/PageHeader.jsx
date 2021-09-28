import React from 'react';

const PageHeader = ({title, leftAction, rightAction}) => {
    return (
      <div className="page-header">
        <div className="actions">
          <div>{leftAction}</div>
          <div>{rightAction}</div>
        </div>
        <h1>{title}</h1>
      </div>
    );
}

export default PageHeader;
