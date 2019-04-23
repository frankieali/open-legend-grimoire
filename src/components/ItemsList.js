import React from 'react';
import { Link } from 'react-router-dom';
import { caseConverter, convertStringToKebab } from '../utilities/utilities';

const ListItems = (props) => (
  <section>
    <h2 id={caseConverter(props.section).toLowerCase()} className="post-list-head">{props.title}</h2>
    <ul className="post-list">
      {props.items && props.items.map((item, i) => {
        return (
          <li key={i}><Link className="post-link" to={`/item/${props.section}/${i}/${convertStringToKebab(item.name)}`}>{item.name}</Link></li>
        )
      })}
    </ul>
  </section>
);

export default ListItems;