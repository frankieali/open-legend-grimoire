import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * TODO: Better suited for a table layout for stats
 */

export default (props) => {
  return (
    <div className="item-details item-details--weapon">
      <div className="item-details--type">
        <span className="post-sub-header">Type:</span> <span>{props.item.Type}</span>
      </div>
      <div className="item-details--wealth">
        <span className="post-sub-header">Wealth Level:</span> <span>{props.item["Wealth Level"]}</span>
      </div>
      <div className="item-details--properties">
        <span className="post-sub-header">Properties:</span> <span>{props.item.Properties}</span>
      </div>
      <div className="item-details--banes">
        <span className="post-sub-header">Banes:</span> <span>{props.item.Banes}</span>
      </div>

      {/* For Legendary Equipment */ }
      {props.item.Attributes && (
      <div className="item-details--attributes">
        <span className="post-sub-header">Attributes:</span> <span>{props.item.Attributes}</span>
      </div>
      )}
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["Description"]}</span>
      </div>
      {props.item.Similar && (
        <div className="item-details--similar">
          {/* TODO: make similar items linkable */}
          <span className="post-sub-header">Similar:</span> <span>{props.item.Similar}</span>
        </div>
      )}
      { props.item["Special"] && (
        <div className="item-details--tier-special">
          <span className="post-sub-header">{props.item["Special"]}:</span> <span><ReactMarkdown source={props.item["Special Description"]} escapeHtml={false} /></span>
        </div>
      )}
    </div>
  )
}