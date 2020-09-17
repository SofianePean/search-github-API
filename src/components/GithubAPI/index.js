// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// == Import
import './GithubAPI.scss';

// == Composant
const GithubAPI = () => {

  return(
  <div className="app">
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);
}

// == Export
export default GithubAPI;
