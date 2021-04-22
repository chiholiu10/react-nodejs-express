import { useState } from 'react';
import axios from 'axios';
import {
  WebStyle,
  Container,
  Content,
  Heading,
  Button,
  NoData,
  ContentDataBlock,
  ContentDataText
} from '../../styles/General.styles';

export const WebOne = () => {
  const [load, setLoad] = useState([]);

  const loadHerd = async () => {
    const herd = {
      1: {
        name: "Betty-1",
        age: 4,
        sex: "f",
      },
      2: {
        name: "Betty-2",
        age: 8,
        sex: "f",
      },
      3: {
        name: "Betty-3",
        age: 9.5,
        sex: "f",
      }
    }
    try {
      const response = await axios.post("http://localhost:5000/web-shop/load", herd, { headers: { "Content-Type": "application/json" } });
      setLoad(JSON.parse(response.config.data));
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <WebStyle>
      <Heading>Web-1</Heading>
      <Container>
        <Button onClick={loadHerd}>Load Herd</Button>
        <Content>
          {load ? (
            Object.keys(load).map((herd, index) => (
              <ContentDataBlock key={index}>
                <ContentDataText>{load[herd].name}</ContentDataText>
                <ContentDataText>{load[herd].age}</ContentDataText>
                <ContentDataText>{load[herd].sex}</ContentDataText>
              </ContentDataBlock>
            ))) : (<NoData>>No Data</NoData>)
          }
        </Content>
      </Container>
    </WebStyle>
  )
}