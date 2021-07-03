function searchBar({ searchTerm, onSearch}) {
    return (
        <div className="form-group">
            <label htmlFor="keyword">Search Keyword</label>
            <input type="text" value={searchTerm} onChange={(event) => {onSearch(event.target.value)}} className="form-control" id="keyword" aria-describedby="keywordHelp" placeholder="Search partial URL" />
            <small id="keywordHelp" className="form-text text-muted">Enter part of the URL you are looking for</small>
        </div>
    )
}

export default searchBar;