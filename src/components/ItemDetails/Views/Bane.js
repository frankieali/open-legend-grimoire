import React from 'react';
import ReactMarkdown from 'react-markdown';

export default (props) => {
  const attacks = props.item["data-attack"].split(", ");
  return (
    <div className="item-details item-details--bane">
      <div className="item-details--power-level">
        <span className="post-sub-header">Power Level:</span> <span>{props.item["Power Level"]}</span>
      </div>
      <div className="item-details--duration">
        <span className="post-sub-header">Duration:</span> <span>{props.item.Duration}</span>
      </div>
      <div className="item-details--invocation-time">
        <span className="post-sub-header">Invocation Time:</span> <span>{props.item["Invocation Time"]}</span>
      </div>
      <div className="item-details--attack">
        <span className="post-sub-header">Attack:</span>
        { attacks.length > 0 && props.item.hasOwnProperty(`data-attack-0`)
          ? (<ul>
            {attacks.map((val,i) => {
              const index = `data-attack-${i}`;
              return <li key={i}>{props.item[index]}</li>
            })}
          </ul>)
          : null
        }
      </div>
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
      <div className="item-details--effect">
        <span className="post-sub-header">Effect:</span> <span><ReactMarkdown source={props.item["data-effect"]} /></span>
      </div>
      { props.item["data-special"]
        ? (<div className="item-details--special">
          <span className="post-sub-header">Special:</span> <span><ReactMarkdown source={props.item["data-special"]}/></span>
        </div>)
        : null
      }
    </div>
  )
}