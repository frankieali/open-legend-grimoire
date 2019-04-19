import React, { Component } from 'react';
import fetchData, { sections } from '../firebase/firebase';
import ListItems from './ListItems';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OL_DATA: {}
    }
  }
  componentDidMount(prevProps, prevState, snapshot) {
    fetchData.then(data => {
      this.setState(state => ({
        OL_DATA: data
      }));
    })
  }
  render() {
    return (
      <div className="page-content">
        {sections.map((section, i) => {
          return (<ListItems key={i} title={section.value} section={section.key} items={this.state.OL_DATA[section.key]} />)
        })}
      </div>
    )
  }
}

export default LandingPage;