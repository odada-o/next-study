function Section(props) {
  // console.log(props);

  // const props = {
  //   title: '섹션1',
  //   desc: '설명1'
  //   children: <ul></ul>
  // };

  // 객체 분해
  // const { title, desc, children } = props;

  return (
    <section>
      <div className='inner'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div>{props.children}</div>
      </div>
    </section>
  );
}

export default Section;
