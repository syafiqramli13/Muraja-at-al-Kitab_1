import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Picker,
  IconNB,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {db} from '../config/db';
import {updateStudent} from '../services/DataService';

let studentsRef = db.ref('/students');

export default class BookReview extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text
            style={{
              textAlign: 'center',
              height: 40,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Book Review
          </Text>

          <Button
            block
            last
            style={{marginTop: 50}}
            onPress={() => {
              Actions.AddReview();
            }}>
            <Text style={{fontWeight: 'bold'}}>Review Me!</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => {
                Actions.CodeScanner();
              }}>
              <IconNB name="ios-camera" />
              <Text>Scanner</Text>
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
