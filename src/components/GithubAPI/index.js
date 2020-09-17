// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import MessageDiv from 'src/components/MessageDiv';
import ReposResults from 'src/components/ReposResults';
import Header from 'src/components/Header';

// == Import
import './GithubAPI.scss';

// == Composant
const GithubAPI = () => {
  const Onsubmit = (valueInput) => {
    
    console.log('je suis dans le parent', valueInput);
  };
  return(
  <div className="app">
    <Header />
    <SearchBar Onsubmit={Onsubmit} />
    <MessageDiv />
    <ReposResults />
  </div>
);
}

// == Export
export default GithubAPI;
