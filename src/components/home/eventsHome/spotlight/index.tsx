import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {
  CardGridStyle,
  CardStyle,
  CardMediaStyle,
  CardContentStyle,
} from "./styles";
import crown from "../../../../images/icons/crown.png";

const cards = [1];

const SpotlightPage: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <CardGridStyle>
          <Container maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <CardStyle>
                    <Card>
                      <CardMediaStyle>
                        <CardMedia image={crown} title="Image title" />
                      </CardMediaStyle>
                      <CardContentStyle>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Heading
                          </Typography>
                          <Typography>
                            This is a media card. You can use this section to
                            describe the content.
                          </Typography>
                        </CardContent>
                      </CardContentStyle>
                    </Card>
                  </CardStyle>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardGridStyle>
      </main>
    </React.Fragment>
  );
};

export default SpotlightPage;
