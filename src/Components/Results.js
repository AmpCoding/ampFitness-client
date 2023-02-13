import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image1 from '../images/eZy Watermark_26-07-2019_05-55-02PM.jpg';
import Image2 from '../images/eZy Watermark_26-07-2019_06-10-03PM.jpg';
import Image3 from '../images/eZy Watermark_28-07-2019_04-51-11PM.jpg';
import Image4 from '../images/eZy Watermark_28-07-2019_04-53-31PM.jpg';
import Image5 from '../images/eZy Watermark_04-08-2019_05-29-51PM.jpg';
import Image6 from '../images/eZy Watermark_04-08-2019_05-31-23PM.jpg';
import Image7 from '../images/eZy Watermark_05-10-2019_09-57-30PM.jpg';
import Image8 from '../images/eZy Watermark_06-10-2019_11-09-56PM.jpg';
import Typography from '@mui/material/Typography';

export default function Results() {
  return (
    <div>
    <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Results
          </Typography>
    <ImageList sx={{ width: 600, height: 1200 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="top"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    img: Image1,
    title: 'FRONT VIEW',
    // author: '@bkristastucchio',
  },
  {
    // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    img: Image2,
    title: 'BACK VIEW',
    // author: '@rollelflex_graphy726',
  },
  {
    // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    img: Image3,
    title: 'FRONT VIEW',
    // author: '@helloimnik',
  },
  {
    // img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    img: Image4,
    title: 'LEFT SIDE VIEW',
    // author: '@nolanissac',
  },
  {
    // img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    img: Image5,
    title: 'FRONT VIEW',
    // author: '@hjrc33',
  },
  {
    // img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    img: Image6,
    title: 'RIGHT SIDE VIEW',
    // author: '@arwinneil',
  },
  {
    // img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    img: Image7,
    title: 'RIGHT SIDE VIEW',
    // author: '@tjdragotta',
  },
  {
    // img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    img: Image8,
    title: 'RIGHT SIDE VIEW',
    // author: '@katie_wasserman',
  },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
];

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Results() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Results;