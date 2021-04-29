import './styles/headline.css';
import avatar from './images/avatar-1.png';
import base_img from './images/base.svg';
function Header(props) {
  const getClassName = (name, minCap, maxCap) => {
    let val = props.page;
    if (minCap && val < minCap)
      val = minCap;
    if (maxCap && val > maxCap)
      val = maxCap;
    return `${name}-${val}`;
  }
  return (
    <div className={getClassName("headline", 0,1)}>
      <div className={getClassName("title", 0,1)}>
        Software Developer, Problem Solver & Mentor
      </div>
      <div className={getClassName("sub-title", 0,1)}>
        A full stack developer who specializes in Javascript technologies
      </div>
      <div className={getClassName("avatar", 0,1)}>
        <img className='avatar-img' alt='avatar' src={avatar}></img>
      </div>
      <div className={getClassName("my-name", 0,1)}>Ashish Jha</div>
      <div className={getClassName("base", 0,1)}>
        <img className={getClassName("base_img", 0,1)} alt='base_img' src={base_img}></img>
        <div className={getClassName("baseline", 0,1)} />
      </div>
    </div>
  );
}

export default Header;
