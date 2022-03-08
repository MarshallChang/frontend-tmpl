import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
export default (props) => {
  return (
    <div style={{ width: '100%' }}>
      <Toaster
        containerStyle={{
          top: '40px',
        }}
        toastOptions={{
          style: {
            borderRadius: '25px',
          },
          success: {
            icon: null,
          },
          error: {
            icon: null,
            style: {
              background: '#AE1839',
              color: '#fff',
            },
          },
        }}
      />
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  );
};
