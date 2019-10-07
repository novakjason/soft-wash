import Layout from '../components/MyLayout.js';
import CardPic from '../components/CardPic';
import { makeStyles } from '@material-ui/core/styles';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';

const useStyles = makeStyles(theme => ({
    cardbox: {
      display: 'flex',
      alignItems: 'center',
    }
}));

export default function About() {

  const classes = useStyles();
  return (
   
    <Layout>
   
      <p>This is the about page</p>
      <div className={classes.cardbox}>
        <HouseOutlinedIcon />
      <CardPic 
        title="Clean House"
        about="This house, is clean. And it is pretty cause I washed it, dog"
        />
        <CardPic 
        title="Clean House"
        about="This house, is clean. And it is pretty cause I washed it, dog"
        />
      </div>
     
    </Layout>
  )
}
