import './styles/portfolio.css';
function Portfolio(props) {
  const getClassName = (name, minCap, maxCap) => {
    let val = props.page;
    if (minCap && val < minCap)
      val = minCap;
    if (maxCap && val > maxCap)
      val = minCap;
      console.log(val);
    return `${name}-${val}`;
  }
  return (
    <div className="portfolio">
      <div className={getClassName("ptitle",0,1)}>
        PORTFOLIO
      </div>
      <div className={getClassName("psub-title",0,1)}>
        See my works below. Unless explicitly stated otherwise, all their back-end and front-end parts were completely done by me.
        <hr/>
      </div>
    </div>
  );
}

export default Portfolio;
