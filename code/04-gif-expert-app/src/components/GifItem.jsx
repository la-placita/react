import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} style={{ width: '200px'}}/>
      <p>{title}</p>
    </div>
  );
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
