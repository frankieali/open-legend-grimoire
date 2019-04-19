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
      {props.item.Type && (
      <div className="item-details--type">
        <span className="post-sub-header">Type:</span> <span>{props.item.Type}</span>
      </div>
      )}
      <div className="item-details--wealth">
        <span className="post-sub-header">Wealth Level:</span> <span>{props.item["Wealth Level"]}</span>
      </div>
      {props.item.Properties && (
      <div className="item-details--properties">
        <span className="post-sub-header">Properties:</span> <span>{props.item.Properties}</span>
      </div>
      )}
      {props.item.Banes && (
      <div className="item-details--banes">
        <span className="post-sub-header">Banes:</span> <span>{props.item.Banes}</span>
      </div>
      )}
      {props.item.Boons && (
      <div className="item-details--boons">
        <span className="post-sub-header">Boons:</span> <span>{props.item.Boons}</span>
      </div>
      )}

      {/* For Legendary Equipment */ }
      {props.item.Attributes && (
      <div className="item-details--attributes">
        <span className="post-sub-header">Attributes:</span> <span>{props.item.Attributes}</span>
      </div>
      )}
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
      { props.item["data-special"] &&
        (
          <div className="item-details--tier-special">
            <span className="post-sub-header">Special: </span>
            {specials
              ? (
                  <ul>
                    {/* Check if specials is an array, else render it as a string */}
                    {specials.map((special,i) => {
                      const key = Object.keys(special)[0];
                      const value = special[key];
                      return <li key={i}><span>{key}</span> - <ReactMarkdown source={value} escapeHtml={false} /></li>
                    })}
                  </ul>
              )
              : props.item["data-special"]
            } 
          </div>)
      }
    </div>
  )
}