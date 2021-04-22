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

export const WebTwo = () => {
  const [stock, getStock] = useState([]);
  const [herdStock, getHerdStock] = useState([]);

  const currentStock = async (number) => {
    try {
      const response = await axios.get(`http://localhost:5000/web-shop/stock/${number}`);
      getStock(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  const currentHerdStock = async (number) => {
    try {
      const response = await axios.get(`http://localhost:5000/web-shop/herd/${number}`);
      getHerdStock(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <WebStyle>
      <Heading>Web-2</Heading>
      <Container>
        <Button onClick={() => currentStock(13)}>Current Stock 13</Button>
        <Button onClick={() => currentStock(14)}>Current Stock 14</Button>
        <Content>
          {stock ? (
            <ContentDataBlock>
              <ContentDataText>Milk: {stock.milk}</ContentDataText>
              <ContentDataText>Skins: {stock.skins}</ContentDataText>
            </ContentDataBlock>
          ) : (<div>>No Data</div>)
          }
        </Content>
      </Container>

      <Container>
        <Button onClick={() => currentHerdStock(13)}>Current Herd Stock 13</Button>
        <Button onClick={() => currentHerdStock(14)}>Current Herd Stock 14</Button>
        <Content>
          {herdStock ? (
            herdStock.map((herd, index) => (
              <ContentDataBlock key={index}>
                <ContentDataText>{herd.name}</ContentDataText>
                <ContentDataText>{herd.age}</ContentDataText>
                <ContentDataText>{herd.age_last_shaved}</ContentDataText>
              </ContentDataBlock>
            ))) : (<NoData>No Data</NoData>)
          }
        </Content>
      </Container>
    </WebStyle>
  )
}