import React, {Component} from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Card,
  CardItem,
  IconNB,
  Left,
  Body,
  View,
  Accordion,
  List,
  ListItem,
  Separator,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {db} from '../config/db';
import {updateStudent} from '../services/DataService';

let studentsRef = db.ref('/books');
const deviceWidth = Dimensions.get('window').width;
let logo;
const cardImage = require('../images/book.jpg');

// const dataArray = [
//   {
//     title: 'Information',
//     content: 'this.state.category',
//   },
//   {
//     title: 'Reviews',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!',
//   },
// ];

export default class BookReview extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      booktitle: null,
      barcode: null,
      category: '',
      author: '',
      publisher: '',
      year: '',
      // imagebook: '',
      review: '',
    };
  }
  componentDidMount() {
    let query = studentsRef.orderByChild('barcode').equalTo(this.props.barcode);
    query.once('value', snapshot => {
      let data = snapshot.val();
      if (data) {
        let firebaseData = Object.values(data);
        this.setState({books: firebaseData}, () => {
          this.state.books.map(element => {
            this.setState({
              booktitle: element.booktitle,
              barcode: element.barcode,
              category: element.category,
              author: element.author,
              publisher: element.publisher,
              year: element.year,
              review: element.review,
              Default_Rating: element.Default_Rating,

              // imagebook: element.imagebook,
            });
          });
        });
      }
    });
  }
  render() {
    return (
      <Container style={{backgroundColor: '#e2e2e2'}}>
        <Content padder>
          <Card style={{marginBottom: 15}}>
            <CardItem
              bordered
              style={{justifyContent: 'center', backgroundColor: '#adc9e0'}}>
              <Text
                style={{
                  textAlign: 'center',
                  height: 20,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}>
                {this.state.booktitle}
              </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: 'center',
                    height: 200,
                    resizeMode: 'cover',
                    width: deviceWidth / 1.18,
                    marginVertical: 5,
                  }}
                  source={cardImage}
                />
              </Body>
            </CardItem>
            <View style={{alignItems: 'center'}}>
              <Button
                last
                info
                small
                style={{marginBottom: 15}}
                onPress={() => {
                  Actions.AddReview();
                }}>
                <Text style={{fontWeight: 'bold'}}>Review Me!</Text>
              </Button>
            </View>

            {/* <Accordion
              style={{padding: 10}}
              dataArray={dataArray}
              animation={true}
              expanded={0}
              headerStyle={{backgroundColor: '#ddecf8'}}
              contentStyle={{backgroundColor: '#f4f4f4'}}></Accordion> */}

            <View>
              <Card style={{padding: 5}}>
                <Collapse>
                  <CollapseHeader>
                    <Separator bordered>
                      <Text>BOOK INFORMATION</Text>
                    </Separator>
                  </CollapseHeader>
                  <CollapseBody style={{margin: 20}}>
                    <Text>Book Title: {this.state.booktitle}</Text>
                    <Text>Category: {this.state.category}</Text>
                    <Text>Author: {this.state.author}</Text>
                    <Text>Publisher: {this.state.publisher}</Text>
                    <Text>Year Publish: {this.state.year}</Text>
                  </CollapseBody>
                </Collapse>

                <Collapse>
                  <CollapseHeader>
                    <Separator bordered>
                      <Text>REVIEW</Text>
                    </Separator>
                  </CollapseHeader>
                  <CollapseBody style={{margin: 20}}>
                    <Text>Review: {this.state.review}</Text>
                  </CollapseBody>
                </Collapse>
              </Card>
            </View>

            {/* <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem> */}
          </Card>
        </Content>

        <Footer>
          <FooterTab>
            {/* <Button
              vertical
              onPress={() => {
                Actions.CodeScanner();
              }}>
              <IconNB name="ios-camera" />
              <Text>Scanner</Text>
            </Button> */}
            <Button
              vertical
              onPress={() => {
                Actions.LoginScreen();
              }}>
              <Icon name="log-out" />
              <Text>Log Out</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                Actions.BookList();
              }}>
              <Icon name="book" />
              <Text>Book List</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
