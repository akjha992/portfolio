import './styles/header.css';
import logo from './images/logo.png';
function Header(props) {
  const changePage = (e)=>{
    props.changer(e.target.name);
  }
  return (
    <div className="header">
      <div className='logo'>
        <img alt='logo' src={logo}></img>
      </div>
      <div className='menu'>
        <a name='0' onClick={changePage} className={props.page==0?'active':''}>Home</a>
        <a name='1' onClick={changePage} className={props.page==1?'active':''}>Portfolio</a>
        <a name='2' onClick={changePage} className={props.page==2?'active':''}>Contact</a>
      </div>
    </div>
  );
}

export default Header;
