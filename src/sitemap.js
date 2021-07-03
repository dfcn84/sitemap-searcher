function Sitemap({urls}) {
    return (
        <div className="sitemap-urls">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">URLs</th>
                        <th scope="col">Change Frequency</th>
                    </tr>
                </thead>
                <tbody>
                { urls.map((url, i) => (
                        <tr key={i}>
                            <td>{url.loc}</td>
                            <td>{url.changefreq}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default Sitemap;