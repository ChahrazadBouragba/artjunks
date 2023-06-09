import './App.css';
import Hero from './components/Hero';
import SectionTwo from './components/sectionTwo';
import data from './components/data';




function App() {

  const artCards = data,map(item => {
    return ()
  })
  return (
    <div className="artjunks">
      <Hero/>
      <SectionTwo/>
    </div>
  );
}

export default App;
