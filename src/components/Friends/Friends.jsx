import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem/FriendsItem';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}