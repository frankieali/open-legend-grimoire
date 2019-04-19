import React, { Component, Fragment } from 'react';
import fetchData from '../../firebase/firebase';
import Boon from './Views/Boon';
import Bane from './Views/Bane';
import Feat from './Views/Feat';
import Perk from './Views/Perk';
import Flaw from './Views/Flaw';
import Weapon from './Views/Weapon';
import Armor from './Views/Armor';
import Item from './Views/Item';
import Transportation from './Views/Transportation';
import Property from './Views/Property';

/**
 * TODO:
 * Boons and Banes are almost the same except for Attack and Power Level
 * Perks and Flaws are essentially the same
 */


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        content: null,
        data: null
      }
    }
  }
  componentDidMount(prevProps, prevState, snapshot) {
    fetchData.then(data => {
      this.setState(state => ({
        item: data[this.props.match.params.section][this.props.match.params.id]
      }));
    })
  }

  renderHTML(item) {
    if (item) {
      return (
        <Fragment>
          {item.content}
        </Fragment>
      )
    }
  }

  renderItem(data) {
    switch(data.Category) {
      case 'Boons':
        return <Boon item={data} />
      case 'Banes':
        return <Bane item={data} />
      case 'Feats':
        return <Feat item={data} />
      case 'Perks':
        return <Perk item={data} />
      case 'Flaws':
        return <Flaw item={data} />
      case 'Weapons':
        return <Weapon item={data} />
      case 'Armor':
        return <Armor item={data} />
      case 'Items':
        return <Item item={data} />
      case 'Transportation':
        return <Transportation item={data} />
      case 'Properties':
        return <Property item={data} />
      default:
        return "Item not found"
    }
  }

  render() {
    let content = this.state.item ? this.state.item.content : '';
    console.log(this.state.item.data);
    return (
      <div className="page-content">
        <article className="post">
          <header className="post-header">
            <h1>{this.state.item.name}</h1>
          </header>
          {/* <div className="post-content" dangerouslySetInnerHTML={{__html: content}}> */}
          <div className="post-content">
            {this.state.item.data && this.renderItem(this.state.item.data)}
          </div>
        </article>
      </div>
    )
  }
}

export default ItemDetails;