import React from 'react';

const arrComment = [
  { cont: '코멘트1', date: '2024.11.11' },
  { cont: '코멘트2', date: '2024.11.12' },
  { cont: '코멘트3', date: '2024.11.13' },
];

const Comment = () => {
  return (
    <>
      {arrComment.map((item, index) => (
        <CommentItem
          key={index}
          cont={item.cont}
          date={item.date}
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
  // };

  return (
    <div>
      <strong>{props.cont}</strong>
      <span>{props.date}</span>
    </div>
  );
};

export default Comment;
