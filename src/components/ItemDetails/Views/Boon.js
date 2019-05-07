import React from 'react';
import ReactMarkdown from 'react-markdown';

export default (props) => {
  const powerLevels = props.item["Power Level"].split(", ");
  return (
    <div className="item-details item-details--boon">
      <div className="item-details--power-level">
        <span className="post-sub-header">Power Level:</span> <span>{props.item["Power Level"]}</span>
      </div>
      <div className="item-details--duration">
        <span className="post-sub-header">Duration:</span> <span>{props.item.Duration}</span>
      </div>
      <div className="item-details--invocation-time">
        <span className="post-sub-header">Invocation Time:</span> <span>{props.item["Invocation Time"]}</span>
      </div>
      <div className="item-details--attributes">
        <span className="post-sub-header">Attributes:</span> <span>{props.item.Attribute}</span>
      </div>
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["Description"]}</span>
      </div>
      <div className="item-details--effect">
        <span className="post-sub-header">Effect:</span> <span>{<ReactMarkdown source={props.item["Effect"]} />}</span>
      </div>
      { powerLevels.length > 0 && props.item.hasOwnProperty(`Effect (${powerLevels[0]})`)
        ? (<div className="item-details--power-level-effect">
          {powerLevels.map((val,i) => {
            const index = `Effect (${val})`;
            return <div key={i}><span className="post-sub-header">Power Level {val}</span> - {props.item[index]}</div>
          })}
        </div>)
        : null
      }
      { props.item["data-special"]
        ? (<div className="item-details--special">
          <span className="post-sub-header">Special:</span> <span>{props.item["data-special"]}</span>
        </div>)
        : null
      }
    </div>
  )
}
