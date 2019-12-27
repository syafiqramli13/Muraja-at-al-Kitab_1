import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {removeBook} from '../services/DataService';
import {Alert} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  List,
  IconNB,
} from 'native-base';
import {db} from '../config/db';
import BookAtBooklist from '../components/BookAtBooklist';
import * as firebase from 'firebase';

let booksRef = db.ref('/books');

export default class ListScreen extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    booksRef.on('value', snapshot => {
      let data = snapshot.val();
      if (data) {
        let firebaseData = Object.values(data);
        this.setState({books: firebaseData});
        console.log(this.state.books);
      }
    });
  }

  deleteConfirmation = barcode => {
    Alert.alert(
      'Status',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => removeBook(barcode)},
      ],
      {cancelable: false},
    );
  };

  goToScanner = () => {
    Actions.CodeScanner();
  };

  goToAddBook = () => {
    Actions.AddBook();
  };

  goToLoginScreen = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        Actions.LoginScreen();
      })
      .catch(function(error) {
        Alert.alert('Status', error.toString(error));
      });
  };

  render() {
    return (
      <Container style={{backgroundColor: '#e2e2e2'}}>
        <Content padder>
          <Text
            style={{
              textAlign: 'center',
              height: 40,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Book List
          </Text>

          <List vertical={true}>
            <BookAtBooklist
              books={this.state.books}
              onPress={barcode => {
                Actions.BookReview({barcode: barcode});
              }}
              onLongPress={barcode => {
                this.deleteConfirmation(barcode);
              }}
            />
          </List>
          <Text>{this.props.barcode}</Text>
        </Content>

        <Footer>
          <FooterTab>
            {/* <Button vertical onPress={this.goToScanner}>
              <IconNB name="ios-camera" />
              <Text>Scanner</Text>
            </Button> */}
            <Button vertical onPress={this.goToLoginScreen}>
              <Icon name="log-out" />
              <Text>Log Out</Text>
            </Button>
            <Button vertical onPress={this.goToAddBook}>
              <Icon name="ios-add-circle-outline" />
              <Text>Add book</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
