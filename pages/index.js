import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import SnipIt from '../components/SnipIt';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';

const Index = props => (
  <div class="container-fluid">

    <div class="card bg-dark text-white text-center mx-auto">
      <img src="/static/marko-blazevic-4ibyBpL6bBA-unsplash.jpg" style={{ height: " 450px" }} class="card-img" alt="..." />
      <div class="card-img-overlay d-flex justify-content-center align-items-center">
        <h5 class="display-4">Virginia Soft Wash</h5>
      </div>
    </div>
    <div class="row">
      <SnipIt
        h3="ipuhfiw"
        smTalk="udfouwdf"
      ><DoneOutlinedIcon />
      </SnipIt>
      <SnipIt
        h3="ipuhfiw"
        smTalk="udfouwdf"
      ><DoneOutlineOutlinedIcon />
      </SnipIt>
      <SnipIt
        h3="ipuhfiw"
        smTalk="udfouwdf"
      ><DoneAllOutlinedIcon />
      </SnipIt>
    </div>
    <div class="row mx-auto">
      <div class="col-5" style={{ backgroundColor: "#F2E9B7", height: "580px" }}>
      </div>
      <div class="col-7 text-center">
        <img src="/static/banter-snaps-sejLyCD2UQE-unsplash.jpg" style={{ height: "530px", width:" 100%"}} />
      </div>
    </div>
  </div>

);

export default Index;