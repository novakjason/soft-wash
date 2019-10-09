import Navbar from './Navbar';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


const layoutStyle = {
  margin: 20,
  padding: 20,
}

function Layout(props) {
  return (
      <div>
        <Head>
          <title>Virginia Soft Wash</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <Typography variant="body2">

        
      <Navbar />
      <Container maxWidth="lg">
        <div style={layoutStyle}>
            {props.children}
        </div>
      </Container>
      </Typography>
      <style jsx global>{`
        body{
          margin:0;
          background: #414242;
        }
        `}</style>
    </div>
  )
}

export default Layout;
