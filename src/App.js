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
      <section className="sectionTwo">
      <h1 className="sectionTwo--title">Newest reads</h1>

      <div className='cards--wrapper'>
        {artCards}
      </div>
      </section>
    </div>
  );
}

export default App;
