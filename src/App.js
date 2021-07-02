import xml2js from 'xml2js';
import SearchBar from './searchBar';
import Sitemap from './sitemap';

import { Component } from 'react';

class App extends Component {
  state = {
    urls: [],
    searchTerm: ""
  }

  onSearch = (event) => {
    let keyword = event.target.value;
    this.setState({ searchTerm: keyword} )
  }


  componentDidMount() {
    fetch("https://www.smu.edu.sg/sitemap.xml")
    .then(res => res.text())
    .then((data) => {
      var parser = new xml2js.Parser();
      var jsondata = '';
    
      parser.parseString(data, function (err, result) {
          jsondata = result;
      }); 
      this.setState({ urls: jsondata.urlset.url });
    });
  }  


  render () {
    const filteredUrls = this.state.urls.filter(url => {
      if (this.state.searchTerm == "")
      return url;
      else {

        return (
          url.loc.toString().includes(this.state.searchTerm)
        );
      }
    });

    return (
      <>
      <SearchBar searchTerm={this.state.searchTerm} onSearch={this.onSearch} />
      <Sitemap urls={filteredUrls} />
      </>
    );
  }  

}

export default App;
