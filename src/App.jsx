import Section from './components/Section/Section.jsx';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from 'components/Friends/Friends.jsx';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Section title={'Task-1 Social network profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={'Task-2 Statistics section'}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section title={'Task-3 Friend list section'}>
        <FriendList friends={friends} />
      </Section>
      <Section title={'Task-4 Transaction History'}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
