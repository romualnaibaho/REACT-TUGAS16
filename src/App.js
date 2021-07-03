import React, { Component } from "react";
import { Slide, Caption, Slider, Card, Icon, CardTitle, Col, Row } from 'materialize-css';

class App extends Component {

  render(){
    return (
      <div>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
            <Caption placement="center">
              <h3>
                This is our big Tagline!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="left">
              <h3>
                Left Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="right">
              <h3>
                Right Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>

          <p>Hot List</p>
        <Row>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Audio</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Audio Technica - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 910 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Handphone</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Handphone Samsung - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 200 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Sequishy</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Sequishy - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 5,5 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Koleksi The Avenger</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Koleksi The Avenger - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 5,5 rb</span>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
