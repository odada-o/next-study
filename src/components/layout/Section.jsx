function Section(props) {
  console.log(props);
  // const props = {
  //   title: '섹션1',
  //   desc: '설명1'
  // };

  return (
    <section>
      <div className='inner'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div>섹션 내용</div>
      </div>
    </section>
  );
}

export default Section;
