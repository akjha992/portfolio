import './styles/App.css';
import Home from './components/Home_2/home';
import displayImage from './images/displayImage.png';
function App() {
  const data = {
    headline: 'Software Developer, Problem Solver & Mentor',
    subheader: 'I am a full stack developer who specializes in Javascript technologies',
    displayImage,
    displayName: 'Ashish Jha',
    title: `Software Developer - Goldman Sachs`
    // title: `Software Developer - Microsoft | Ex - Goldman Sachs`
  }
  return (
    <div className="App">
      <Home profile={data}/>
    </div>
  );
}

export default App;
