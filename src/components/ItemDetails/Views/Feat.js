import React from 'react';
import ReactMarkdown from 'react-markdown';

export default (props) => {
  const prereqs = JSON.parse(props.item["data-tierPrereq"]);

  let effects;
  if(props.item["data-tierEffect"]){
    effects = JSON.parse(props.item["data-tierEffect"]);
  }

  return (
    <div className="item-details item-details--feat">
      <div className="item-details--cost">
        <span className="post-sub-header">Cost:</span> <span>{props.item.Cost}</span>
      </div>
      <div className="item-details--prereqs">
        <span className="post-sub-header">Prerequisites:</span>
        <ul>
          {prereqs.map((prereq,i) => {
            const key = Object.keys(prereq)[0];
            const value = prereq[key];
            return <li key={i}><span>{key}:</span> {value}</li>
          })}
        </ul>
      </div>
      <div className="item-details--description">
        <span className="post-sub-header">Description:</span> <span>{props.item["data-description"]}</span>
      </div>
      <div className="item-details--effect">
        <span className="post-sub-header">Effect:</span> <span>{<ReactMarkdown source={props.item["data-effect"]} />}</span>
      </div>
      { effects 
        ? (
          <div className="item-details--tier-effect">
            <span className="post-sub-header">Effect:</span>
            <ul>
              {effects.map((effect,i) => {
                const key = Object.keys(effect)[0];
                const value = effect[key];
                return <li key={i}><span>{key}</span> - <ReactMarkdown source={value} escapeHtml={false} /></li>
              })}
            </ul>
          </div>
        )
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