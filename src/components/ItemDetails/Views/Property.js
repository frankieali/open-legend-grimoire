import React from 'react';

/**
 * TODO: Better suited for a table layout for stats
 * data-special is not always an object
 */

export default (props) => {
  return (
    <div className="item-details item-details--property">
      <div className="item-details--tags">
        <span className="post-sub-header">Tags:</span> <span>{props.item.Tags}</span>
      </div>
      {props.item["Wealth Modifier"] !== undefined && (
      <div className="item-details--wealth">
        <span className="post-sub-header">Wealth Modifier:</span> <span>{props.item["Wealth Modifier"]}</span>
      </div>
      )}
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
    </div>
  )
}