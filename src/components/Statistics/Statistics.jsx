import data from './data.json';
import PropTypes from 'prop-types';

export const Statistics = () => {
  return (
    <section>
      <ul className="stat-list">
        <h2 className="title">UPLOAD STATS</h2>
        {data.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.string,
  percentage: PropTypes.number,
  label: PropTypes.string,
};
