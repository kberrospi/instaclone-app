import { Link } from "react-router-dom";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";
import logo from '../../../assets/images/instaclone.png';
import '../../../scss/ui/header.scss'
import { Options } from "./Options";

export const Header = () => {
  return(
    <div className="header">
      <Container>
        <Grid>
          <GridColumn width={3} className="header__logo" >
            <Link to='/' >
              <Image src={ logo } alt='Instaclone' />
            </Link>
          </GridColumn>
          <GridColumn width={10}>
            <p> Buscador </p>
          </GridColumn>
          <GridColumn width={3}>
            <Options />
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
};

