import React from 'react';

export default (props) => {
  return (
    <div className="item-details item-details--perk">
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
    </div>
  )
}