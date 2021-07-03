import { useState, useEffect, useCallback } from 'react';
import xml2js from 'xml2js';
import SearchBar from './searchBar';
import Sitemap from './sitemap';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [urls, setUrls] = useState([]);

  const filteredUrls = urls.filter(url => {
    if (searchTerm === "")
      return url;
    else {
      return (
        url.loc.toString().includes(searchTerm)
      );
    }
  });

  const fetchSitemap = useCallback(() =>{
    fetch("https://www.smu.edu.sg/sitemap.xml")
    .then(res => res.text())
    .then((data) => {
      var parser = new xml2js.Parser();
      var jsondata = '';
    
      parser.parseString(data, function (err, result) {
          jsondata = result;
      }); 
      setUrls(jsondata.urlset.url);
    });
  },[]);

  useEffect(() =>{  
    fetchSitemap();
  }, [fetchSitemap]);
  
  /*
  useEffect(() =>{   
      setFilteredUrls(urls.filter(url => {
        console.log("searchTerm",searchTerm);
        if (searchTerm == "")
        return url;
        else {
          return (
            url.loc.toString().includes(searchTerm)
          );
        }
      }));  
  },[fetchSitemap,urls,searchTerm]);
*/
  return (
      <>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Sitemap urls={filteredUrls} />
      </>
    );

}

export default App;
