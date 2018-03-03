(() => {
  const div = ReactDOMFactories.div;
  const h1 = ReactDOMFactories.h1;
  function Timer(props) {
    const text = ['victimas de react', 'flores de yarn', 'ensalada de run, build y deploy ', 'frutas Reduxs']
    const background = Math.floor(Math.random() * 0xfff);
    const containerStyle = {
      backgroundColor: "#" + background,
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexdDrection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: "#0" + "45" + background,
    };
    return ReactDOMFactories.div({ style: containerStyle },
      h1(null,
        text[Math.floor(Math.random() * text.length)]),
    );
  }
  ReactDOM.render(
    Timer(),
    document.querySelector('.timer'),
  );
})();

