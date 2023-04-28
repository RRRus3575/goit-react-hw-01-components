import friends from './friends.json';
import PropTypes from 'prop-types';

export const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
