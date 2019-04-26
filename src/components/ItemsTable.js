import React from 'react';
import { Link } from 'react-router-dom';
import { caseConverter, convertStringToKebab } from '../utilities/utilities';
import { sections } from '../firebase/firebase';
import ReactMarkdown from 'react-markdown';

const ItemsTable = (props) => (
  <section>
    <h2 id={caseConverter(props.section).toLowerCase()} className="post-list-head">{props.title}</h2>
    <div className="post-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {sections[props.section].tableCols &&
              sections[props.section].tableCols.map((col,i) => {
                return (<th key={i}>{typeof col === 'string' ? col : col[1]}</th>)
              })
            }
          </tr>
        </thead>
        <tbody>
          {props.items && props.items.map((item, i) => {
            return (<tr key={i}>
                {/* // return (
                //   <div key={i}><Link className="post-link" to={`/item/${props.section}/${i}/${convertStringToKebab(item.name)}`}>{item.name}</Link></div>
                // ) */}
                {/* console.log("item",item) */}
                <td><Link className="post-link" to={`/item/${props.section}/${i}/${convertStringToKebab(item.name)}`}>{item.name}</Link></td>
                {sections[props.section].tableCols && sections[props.section].tableCols.map((col,j) => {
                  const key = typeof col === 'string' ? col : col[0];
                  const val = item.data[key] && typeof item.data[key] !== 'number' && item.data[key].startsWith("[{") ? JSON.parse(item.data[key]): item.data[key];
                  // console.log(item.name + ".data[" + col + "] = " + val)
                  if(typeof val === 'object') {
                    return (<td key={j}><ul>
                      {val.map((entry,i) => {
                        const key = Object.keys(entry)[0];
                        const value = entry[key];
                        return <li key={i}><strong>{key}</strong> - {value}</li>
                      })}
                    </ul></td>)
                  } else {
                    // const trimmedVal = val && val.length > 101 ? val.substring(0,101) + '...' : val;
                    const value = typeof val === 'number' ? val.toString() : val;
                    return (<td key={j}><ReactMarkdown source={value} escapeHtml={false} /></td>)
                  }
                })}
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  </section>
);

export default ItemsTable;