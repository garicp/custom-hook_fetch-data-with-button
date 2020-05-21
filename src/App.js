import React, { useState, useEffect } from "react";

import useCustomFetch from "./hooks/useCustomFetch";

import "./App.css";

const App = () => {
  const [url, setUrl] = useState(null);
  const dataFetchOne = useCustomFetch(url);
  const { data, loading } = dataFetchOne;

  const [urlTwo, setUrlTwo] = useState(null);
  const dataFetchTwo = useCustomFetch(urlTwo);
  const { data: dataTwo, loading: loadingTwo } = dataFetchTwo;

  useEffect(() => {
    setUrlTwo("https://jsonplaceholder.typicode.com/users");
    console.log(dataTwo);
  }, []);

  function handleFetch() {
    setUrl("https://sheltered-earth-84596.herokuapp.com/articles");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hook_fetch data</h1>
        {!loadingTwo && !data && (
          <button onClick={handleFetch}>Fetch Data One</button>
        )}
        {loading && url && <div className="data-container">Loading...</div>}
        {data && (
          <div className="data-container">
            {!loading && data && <h2>Data One fetched</h2>}
            {!loading &&
              data &&
              data.map(item => (
                <div className="data-field" key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
          </div>
        )}

        <div className="data-container">
          {loadingTwo && urlTwo && <div>Loading...</div>}
          {!loadingTwo && <h2>Data Two</h2>}
          {!loadingTwo &&
            dataTwo &&
            dataTwo.map(item => (
              <div className="data-field" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default App;
