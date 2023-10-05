import './styles.css';

const Highlight = ({ url, quantity, title, subtitle }) => (
<div className="highlight">
  <div className="highlight-image">
    <img src={url} alt="" className="image" />
  </div>
  <p className="quantity">
    {quantity} tracks
  </p>
  <div className="highlight-info">
    <h3 className="title">{title}</h3>
    <h4 className="subtitle">{subtitle}</h4>
  </div>
</div>

);

export { Highlight };
