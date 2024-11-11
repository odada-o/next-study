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
  { cont: '코멘트1 코멘트1코멘트1코멘트1코멘트1코멘트1코멘트1', date: '2024.11.11', user: user1 },
  { cont: '코멘트2', date: '2024.11.12', user: user2 },
  { cont: '코멘트3', date: '2024.11.13', user: user1 },
];

const Comment = () => {
  return (
    <div className='flex flex-col gap-10'>
      {arrComment.map((item, index) => (
        <CommentItem
          key={index}
          cont={item.cont}
          date={item.date}
          user={item.user}
        />
      ))}
    </div>
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
    <CommentItemStyled>
      <UserInfo user={user} />
      <strong>{cont}</strong>
      <span>{date}</span>
    </CommentItemStyled>
  );
};

const CommentItemStyled = styled.div`
  strong {
    display: block;
    font-size: 1.2rem;
    color: red;
  }
  span {
    font-size: 1rem;
    color: #999;
  }
`;

const UserInfo = ({ user }) => {
  // const { user } = props;
  // console.log(props);
  return (
    <UserInfoStyled>
      <Image
        src={user.avatarUrl}
        alt={user.name}
        width='100'
        height={100}
      />
      <UserNameStyled>{user.name}</UserNameStyled>
    </UserInfoStyled>
  );
};

const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const UserNameStyled = styled.em`
  color: yellow;
  text-decoration: none;
`;

export default Comment;
