import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * TODO: Better suited for a table layout for stats
 */

export default (props) => {
  return (
    <div className="item-details item-details--armor">
      <div className="item-details--type">
        <span className="post-sub-header">Type:</span> <span>{props.item.Type}</span>
      </div>
      <div className="item-details--wealth">
        <span className="post-sub-header">Wealth Level:</span> <span>{props.item["Wealth Level"]}</span>
      </div>

      {/* For Standard Equipment */}
      {props.item["Required Fortitude"] !== undefined && (
      <div className="item-details--fortitude">
        <span className="post-sub-header">Required Fortitude:</span> <span>{props.item["Required Fortitude"]}</span>
      </div>
      )}
      {props.item["Defense Bonus"] !== undefined && (
      <div className="item-details--defense-bonus">
        <span className="post-sub-header">Defense Bonus:</span> <span>{props.item["Defense Bonus"]}</span>
      </div>
      )}
      {props.item["Speed Penalty"] !== undefined && (
      <div className="item-details--speed-penalty">
        <span className="post-sub-header">Speed Penalty:</span> <span>{props.item["Speed Penalty"]}</span>
      </div>
      )}

      {/* For Legendary Equipment */ }
      {props.item.Attributes && (
      <div className="item-details--attributes">
        <span className="post-sub-header">Attributes:</span> <span>{props.item.Attributes}</span>
      </div>
      )}
      {props.item.Boons && (
      <div className="item-details--boons">
        <span className="post-sub-header">Boons:</span> <span>{props.item.Boons}</span>
      </div>
      )}
      {props.item.Banes && (
      <div className="item-details--banes">
        <span className="post-sub-header">Banes:</span> <span>{props.item.Banes}</span>
      </div>
      )}
      {props.item.Properties && (
      <div className="item-details--properties">
        <span className="post-sub-header">Properties:</span> <span>{props.item.Properties}</span>
      </div>
      )}
      {props.item["Description"] && (
        <div className="item-details--description">
          <span className="post-sub-header">Description:</span> <span>{props.item["Description"]}</span>
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