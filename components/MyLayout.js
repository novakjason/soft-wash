import Header from './Header';
import Navbar from './Navbar';
import Head from 'next/head';
import { Container } from '@material-ui/core';


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

function Layout(props) {
  return (
      <div>
        <Head>
          <title>Virginia Soft Wash</title>
        </Head>
      <Navbar />
      <Container maxWidth="lg">
        <div style={layoutStyle}>
          <Header />
            {props.children}
        </div>
      </Container>
      <style jsx global>{`
        body{
          margin:0
        }
        `}</style>
    </div>
  )
}

export default Layout;
