import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  position: 'fixed',
  top: '50%',
  left: '40%',
  /* bring your own prefixes */
  transform: 'translate(-30%, -50%)',
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    abc
    {props.children}
  </div>
);

export default Layout;
