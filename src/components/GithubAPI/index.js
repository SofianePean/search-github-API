// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from 'src/components/SearchBar';
import MessageDiv from 'src/components/MessageDiv';
import ReposResults from 'src/components/ReposResults';
import Header from 'src/components/Header';

// == Import
import './GithubAPI.scss';

// == Composant
const GithubAPI = () => {
  const [dataRepos, setdataRepos] = useState([]);
  const url = 'https://api.github.com/search/repositories?q=';

  const getDataFromAPI = (valueInput) => {
    axios
      .get(url + valueInput)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log('Error message', e.message);
      });
  };

  const Onsubmit = (valueInput) => {
    getDataFromAPI(valueInput);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar Onsubmit={Onsubmit} />
      <MessageDiv />
      <ReposResults />
    </div>
  );
};

// == Export
export default GithubAPI;
