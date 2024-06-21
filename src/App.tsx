import React from 'react';
import Ecosystem from './sections/Ecosystem'
import Faqs from './sections/Faqs'
import Header from './sections/Header'
import Home from './sections/Home'
import Leveraging from './sections/Leveraging'
import Roadmap from './sections/Roadmap'
import Tokenomics from './sections/Tokenomics'
import Footer from './sections/Footer'
import LeftButtonGroup from './components/LeftButtonGroup';

function App() {

  return (
    <div className="App relative">
      <Header />
      <LeftButtonGroup />
      <Home />
      <Ecosystem />
      <Leveraging />
      <Roadmap />
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
