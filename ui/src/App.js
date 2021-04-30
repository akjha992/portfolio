import './styles/App.css';
import Home from './components/Home_2/home';
import displayImage from './images/displayImage.png';
function App() {
  const data = {
    headline: 'Software Developer, Problem Solver & Mentor',
    subheader: 'I am a full stack developer who specializes in Javascript technologies',
    displayImage,
    displayName: 'Ashish Jha',
    companies: [
      // {
      //   title: 'Software Developer',
      //   companyName: 'Microsoft',
      //   link: 'https://www.microsoft.com/'
      // },
      {
        title: 'Software Developer',
        companyName: 'Goldman Sachs',
        link: 'https://www.goldmansachs.com/'
      }
    ]
  }
  return (
    <div className="App">
      <Home profile={data}/>
    </div>
  );
}

export default App;
