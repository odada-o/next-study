'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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

const CommentItem = ({ cont, date, user }) => {
  // const { cont, date, user } = props;

  // console.log(props);
  // const props = {
  //   cont: '코멘트1',
  //   date: '2024.11.11',
  //  user: { name: 'Neytiri', avatarUrl: '/avatar-neytiri.jpeg' },
  // };

  return (
    <div>
      <UserInfo user={user} />
      <strong>{cont}</strong>
      <span>{date}</span>
    </div>
  );
};

const UserInfo = ({ user }) => {
  // const { user } = props;
  // console.log(props);
  return (
    <div>
      <Image
        src={user.avatarUrl}
        alt={user.name}
        width='100'
        height={100}
      />
      <UserNameStyled>{user.name}</UserNameStyled>
    </div>
  );
};

const UserNameStyled = styled.strong`
  color: blue;
`;

export default Comment;
