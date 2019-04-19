import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * TODO: Better suited for a table layout for stats
 * data-special is not always an object
 */

export default (props) => {
  let specials;
  if(props.item["data-special"] && props.item["data-special"].startsWith("[{")){
    specials = JSON.parse(props.item["data-special"]);
  }
  return (
    <div className="item-details item-details--item">
      <div className="item-details--type">
        <span className="post-sub-header">Type:</span> <span>{props.item.Type}</span>
      </div>
      <div className="item-details--wealth">
        <span className="post-sub-header">Wealth Level:</span> <span>{props.item["Wealth Level"]}</span>
      </div>
      <div className="item-details--speed">
        <span className="post-sub-header">Speed:</span> <span>{props.item.Speed}</span>
      </div>
      {props.item.Properties && (
      <div className="item-details--properties">
        <span className="post-sub-header">Properties:</span> <span>{props.item.Properties}</span>
      </div>
      )}
      <div className="item-details--attributes">
        <span className="post-sub-header">Attributes:</span> <span>{props.item.Attributes}</span>
      </div>
      {props.item.Feats && (
      <div className="item-details--feats">
        <span className="post-sub-header">Feats:</span> <span>{props.item.Feats}</span>
      </div>
      )}
      <div className="item-details--hp">
        <span className="post-sub-header">HP:</span> <span>{props.item.HP}</span>
      </div>
      <div className="item-details--dt">
        <span className="post-sub-header">DT:</span> <span>{props.item.DT}</span>
      </div>
      <div className="item-details--defenses">
        <span className="post-sub-header">Defenses:</span>
        <ul>
          <li><span>Guard:</span> {props.item.Guard}</li>
          <li><span>Toughness:</span> {props.item.Toughness}</li>
          <li><span>Resolve:</span> {props.item.Resolve}</li>
        </ul>
      </div>
      {props.item["data-description"] && (
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
      )}
    </div>
  )
}