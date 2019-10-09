import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import { styledToolbar } from './SharedStyles'

const Header = () => (
    <div>
      <Toolbar style={styledToolbar}>
        <Grid container justify="space-around" align="center" spacing={3}>
          <Grid item xs={3} style={{ textAlign: 'right'}}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Grid>
          <Grid item xs={3} style={{ textAlign: 'right'}}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
);

export default Header;