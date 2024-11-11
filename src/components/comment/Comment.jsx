import Image from 'next/image';
import React from 'react';

const user1 = {
  name: 'Neytiri',
  avatarUrl: '/avatar-neytiri.jpeg',
};

const user2 = {
  name: 'Jake',
  avatarUrl: '/avatar-jake.jpeg',
};

const arrComment = [
  { cont: '코멘트1', date: '2024.11.11', user: user1 },
  { cont: '코멘트2', date: '2024.11.12', user: user2 },
  { cont: '코멘트3', date: '2024.11.13', user: user1 },
];

const Comment = () => {
  return (
    <>
      {arrComment.map((item, index) => (
        <CommentItem
          key={index}
          cont={item.cont}
          date={item.date}
          user={item.user}
        />
      ))}
    </>
  );
};

const CommentItem = props => {
  console.log(props);
  // const props = {
  //   cont: '코멘트1',
  //   date: '2024.11.11',
  //  user: { name: 'Neytiri', avatarUrl: '/avatar-neytiri.jpeg' },
  // };

  return (
    <div>
      <UserInfo user={props.user} />
      <strong>{props.cont}</strong>
      <span>{props.date}</span>
    </div>
  );
};

const UserInfo = props => {
  console.log(props);
  return (
    <div>
      <Image
        src={props.user.avatarUrl}
        alt={props.user.name}
        width='100'
        height={100}
      />
      <strong>{props.user.name}</strong>
    </div>
  );
};

export default Comment;
