import React from 'react';
import './Main.css';
import PageTitle from './PageTitle/PageTitle';
import DashBoard from './DashBoard/DashBoard';

function Main() {
  return (
    <main id-="main" className="main">
        <PageTitle page="Dashboard"/>
        <DashBoard/>
        </main>
  )
}

export default Main;