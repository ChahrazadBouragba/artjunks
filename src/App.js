import './App.css';
import Hero from './components/Hero';
import SectionTwo from './components/sectionTwo';
import data from './data';




function App() {

  const artCards = data.map(item => {
    return (
      <SectionTwo
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div className="artjunks">
      <Hero/>
      {artCards}
    </div>
  );
}

export default App;
