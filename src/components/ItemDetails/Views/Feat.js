import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { filterObj } from '../../../utilities/utilities';

export default (props) => {

  const prereqs = filterObj(props.item,"Prerequisites");
  const effects = filterObj(props.item,"Tier Effect");

  return (
    <div className="item-details item-details--feat">
      <div className="item-details--cost">
        <span className="post-sub-header">Cost:</span> <span>{props.item.Cost}</span>
      </div>
      <div className="item-details--prereqs">
        <span className="post-sub-header">Prerequisites:</span>
        <ul>
          {Object.keys(prereqs).map((val,i) => {
            return <li key={i}><span>Tier {val}:</span> {prereqs[val]}</li>
          })}
        </ul>
      </div>
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["Description"]}</span>
      </div>
      <div className="item-details--effect">
        <span className="post-sub-header">Effect:</span> <span>{<ReactMarkdown source={props.item["Effect"]} />}</span>
        { Object.keys(effects).length && 
          <div className="item-details--tier-effect">
            {Object.keys(effects).map((val,i) => {
              return <Fragment key={i}><span className="post-sub-header">Tier {val}</span><ReactMarkdown source={effects[val]} escapeHtml={false} /></Fragment>
            })}
          </div>
        }
      </div>
      { props.item["data-special"]
        ? (<div className="item-details--special">
          <span className="post-sub-header">Special:</span> <span>{props.item["data-special"]}</span>
        </div>)
        : null
      }
      
    </div>
  )
}