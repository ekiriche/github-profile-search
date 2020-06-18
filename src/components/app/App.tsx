import React, {useEffect, useState} from 'react';
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import "./App.sass";

interface usersProfile {
    avatar_url: string;
    login: string;
    html_url: string;
}

const App = () => {
  const [activePage, changeActivePage] = useState(1);
  const [profiles, changeProfiles] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
      axios.get("https://api.github.com/users").then((results: any) => {
          if (results && results.data) {
              changeProfiles(results.data);
          }
      }).catch(() => {
          return null;
      });
  }, []);

    return (
      <div className="app-wrapper">
          <div className="app-profiles-container">
              {profiles && profiles.map((item: usersProfile, index: number) => {
                  if (index < activePage * itemsPerPage && index >= activePage * itemsPerPage - itemsPerPage)
                    return <Card login={item.login} imageSrc={item.avatar_url} linkToProfile={item.html_url} key={`card-${index}`} />;
                  return null;
              })}
          </div>
          <div className="app-pagination-container">
              <Pagination activePage={activePage} onChange={changeActivePage} totalItems={profiles.length} itemsPerPage={itemsPerPage} />
          </div>
      </div>
  );
};

export default App;
