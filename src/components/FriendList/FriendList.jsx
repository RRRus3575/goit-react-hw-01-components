import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ events }) => {
  return (
    <ul className={css.friend_list}>
      {events.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <span className={isOnline ? css.status : css.status_false}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
