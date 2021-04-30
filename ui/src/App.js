import './styles/App.css';
import Home from './components/Home_2/home';
import displayImage from './images/displayImage.png';
import p1 from './images/projects/c_code_compare.png';
import p2 from './images/projects/qtv.png';
function App() {
  const data = {
    home:{
      headline: 'Software Developer, Problem Solver & Mentor',
      subheader: 'I am a full stack developer who specializes in Javascript technologies',
      displayImage,
      displayName: 'Ashish Jha',
      title: `Software Developer - Goldman Sachs`,
    },
    projects: [
      {
        title: 'C++ Code Compare',
        description: 'A web application to regressively compare two c++ programs until they produce different output.',
        posterImage: p1
      },
      {
        title: 'Q-TV Movie Streaming',
        description: 'A web application to stream popular movies and tv series scraped from online free sources.',
        posterImage: p2
      },
    ]
    // title: `Software Developer - Microsoft | Ex - Goldman Sachs`
  }
  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;
