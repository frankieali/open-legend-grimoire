import React, { Component } from 'react';
import fetchData, { sections } from '../firebase/firebase';
import ItemsList from './ItemsList';
import ItemsTable from './ItemsTable';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OL_DATA: {},
      filtered_data: {}
    }

    this.nameSearch = this.nameSearch.bind(this);
  }
  componentDidMount(prevProps, prevState, snapshot) {
    fetchData.then(data => {
      this.setState(state => ({
        OL_DATA: data,
        filtered_data: data
      }));
    })
  }

  nameSearch(e) {
    const searchText = e.target.value.toLocaleLowerCase();
    let filtered_data = {};
    if(searchText) {
      Object.keys(this.state.OL_DATA).map((category,i) => {

        if(category !== 'timestamp'){
          filtered_data[category] = [];
          Object.keys(this.state.OL_DATA[category]).map((key, i) => {
            if(this.state.OL_DATA[category][key].name.toLocaleLowerCase().match(searchText)){
              filtered_data[category].push(this.state.OL_DATA[category][key]);
            }
          });
        }
      });

      this.setState({filtered_data});
    } else {
      this.setState(state => ({
        filtered_data: state.OL_DATA
      }));
    }
    

  }

  render() {
    const listView = false;
    const tableView = true;
    return (
      <div className="page-content">
        <p id="nameSearch">Search by Name: <input type="search" id="nameSearch" onKeyUp={this.nameSearch} /></p>
        {listView && Object.keys(sections).map((section, i) => {
          return (<ItemsList key={i} title={sections[section].value} section={section} items={this.state.filtered_data[section]} />)
        })}
        {tableView && Object.keys(sections).map((section, i) => {
          return (<ItemsTable key={i} title={sections[section].value} section={section} items={this.state.filtered_data[section]} />)
        })}
        
      </div>
    )
  }
}

export default LandingPage;