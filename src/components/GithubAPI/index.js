// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from 'src/components/SearchBar';
import MessageDiv from 'src/components/MessageDiv';
import ReposResults from 'src/components/ReposResults';
import Header from 'src/components/Header';
import Spinner from 'src/components/Spinner';


// == Import
import './GithubAPI.scss';

// == Composant
const GithubAPI = () => {
  const [dataRepos, setdataRepos] = useState([]);
  const [nbDataRepo, setNbDataRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'https://api.github.com/search/repositories?q=';

  const getDataFromAPI = (valueInput) => {
    setLoading(true);
    axios
      .get(url + valueInput)
      .then((response) => {
        setdataRepos(response.data.items);
        setNbDataRepo(response.data.total_count);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log('Error message', e.message);
      });
  };
  const onSubmit = (valueInput) => {
    getDataFromAPI(valueInput);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmit={onSubmit} />
      <MessageDiv nbDataRepo={nbDataRepo} />
      {loading && <Spinner />}
      {!loading && (
        <ReposResults repositories={dataRepos} />
      )}
    </div>
  );
};

// == Export
export default GithubAPI;
