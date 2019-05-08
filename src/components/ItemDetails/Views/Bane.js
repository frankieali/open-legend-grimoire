import React from 'react';
import ReactMarkdown from 'react-markdown';
import { filterObj } from '../../../utilities/utilities';

export default (props) => {
  const attacks = props.item["Attack"].split(", ");
  const compoundingEffects = filterObj(props.item,"Compounding Effect");
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
        { attacks.length > 0 && <ul>
            {attacks.map((val,i) => {
              return <li key={i}>{val}</li>
            })}
          </ul>
        }
      </div>
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["Description"]}</span>
      </div>
      <div className="item-details--effect">
        <span className="post-sub-header">Effect:</span> <span><ReactMarkdown source={props.item["Effect"]} escapeHtml={false} /></span>
      </div>
      {Object.keys(compoundingEffects).length && 
      <div className="item-details--compounding-effects">
        <span className="post-sub-header">Compounding Effects:</span>
          <ul className="item-details--compounding-effect">
            {Object.keys(compoundingEffects).map((val,i) => {
              return <li key={i}><span className="post-sub-header">Level {val}:</span> <ReactMarkdown source={compoundingEffects[val]} escapeHtml={false} /></li>
            })}
          </ul>
      </div>
      }
      { props.item["data-special"]
        ? (<div className="item-details--special">
          <span className="post-sub-header">Special:</span> <span><ReactMarkdown source={props.item["data-special"]} escapeHtml={false} /></span>
        </div>)
        : null
      }
    </div>
  )
}