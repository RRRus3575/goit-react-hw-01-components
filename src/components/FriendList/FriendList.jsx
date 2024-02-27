import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ events }) => {
  return (
    <ul className={css.friend_list}>
      {events.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
