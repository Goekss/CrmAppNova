import React, { useState } from 'react';
import './App.css';


import Sidebar from './components/Sidebar';
import KundenList from './KundenList';
import PersonalList from './PersonalList';
import Wetter from './Wetter';
import Kanban from './Kanban';
import ConfusionMatrix from "./ConfusionMatrix";

function App() {
  const [selectedPage, setSelectedPage] = useState('kunden');

  const renderContent = () => {
    switch (selectedPage) {
      case 'kanban':
        return<Kanban/>;
      case 'kunden':
        return <KundenList />;
      case 'personal':
        return <PersonalList />;
      case 'wetter':
        return <Wetter />;
      case 'ai':
        return <ConfusionMatrix />;
      default:
        return <p>Bitte wählen Sie eine Seite aus.</p>;
    }
  };

  return (
    <div
      className="app-container"
      style={{
         backgroundImage: "url('/Background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // parallax
      }}
    >
      <Sidebar onSelect={setSelectedPage} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
