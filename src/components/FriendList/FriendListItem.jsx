import css from './FriendList.module.css';

const FriendListItem = ({ isOnline, name, avatar, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.status : css.status_false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
