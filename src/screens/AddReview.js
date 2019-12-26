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

export default class AddReview extends Component {
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
            Add Book Review Rating
          </Text>

          <Button
            block
            last
            style={{marginTop: 50}}
            onPress={() => {
              Actions.BookList();
            }}>
            <Text style={{fontWeight: 'bold'}}>Save Submit</Text>
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
