"use client";
import Image from 'next/image'
import React from "react";

import { Inter } from 'next/font/google'
import { Grid } from "@nextui-org/react";
import { Modal, Card, Col, Input, Checkbox, Row, Button, Text } from "@nextui-org/react";
import { CardImg } from './CardImg';


import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const list = [
    {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia16613_orig.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/iss068e056415.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/579054main_pia14417_full.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_30dor_potw2305a_main.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_v372ori_potw2304a.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-01gq5chesabwmhrf5na60a6mpf_0.png",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_ngc1858.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-01gkmkkhkk7hr64v5hgx4gms9k_0.png",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_cb130-3_potw2246a.jpg",
    },
    {
      img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw1441a.jpg",
    },]
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Grid.Container gap={2} justify="center">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="cover"
                width={150}
                height={100}
                alt={"img"}
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={12}>
                    Click & See
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button flat auto rounded color="secondary" onPress={handler}>
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Check img
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>

          </Card>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            width={900}
            height={600}
            onClose={closeHandler}
          >
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
              <Image
                showSkeleton
                src={item.img}
                width={700}
                height={400}
              >
              </Image>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandler}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Grid>
      ))}
    </Grid.Container >

  );
}
