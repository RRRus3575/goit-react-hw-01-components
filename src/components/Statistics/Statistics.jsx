import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Switch } from './Switch';

export const Statistics = ({ events }) => {
  return (
    <section>
      <ul className={css.stat}>
        <div className={css.head}>
          <h2 className={css.title}>UPLOAD STATS</h2>
        </div>
        <div className={css.list}>
          {events.map(({ id, label, percentage }) => (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: Switch(label) }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
