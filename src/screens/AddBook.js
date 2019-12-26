import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Alert} from 'react-native';
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
import {addBook} from '../services/DataService';

export default class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      booktitle: null,
      barcode: null,
      category: '',
      author: '',
      publisher: '',
      year: '',
      imagebook: '',
    };
  }

  setBookTitle = value => {
    this.setState({booktitle: value});
  };

  setBarcode = value => {
    this.setState({barcode: value});
  };

  selectCategory = value => {
    this.setState({category: value});
  };

  setAuthor = value => {
    this.setState({author: value});
  };

  setPublisher = value => {
    this.setState({publisher: value});
  };

  setYear = value => {
    this.setState({year: value});
  };

  setImageBook = value => {
    this.setState({imagebook: value});
  };

  saveData = () => {
    if (
      this.state.booktitle &&
      this.state.barcode &&
      this.state.category &&
      this.state.author &&
      this.state.publisher &&
      this.state.year &&
      this.state.imagebook
    ) {
      if (isNaN(this.state.barcode)) {
        Alert.alert('Status', 'Invalid Barcode No!');
      } else {
        addBook(
          this.state.booktitle,
          this.state.barcode,
          this.state.category,
          this.state.author,
          this.state.publisher,
          this.state.year,
          this.state.imagebook,
        );
      }
    } else {
      Alert.alert('Status', 'Empty Field(s)!');
    }
  };

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
            Add Book Details
          </Text>
          <Form>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Book Title</Label>
              <Input onChangeText={this.setBookTitle} />
            </Item>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Barcode No </Label>
              <Input onChangeText={this.setBarcode} />
            </Item>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Author</Label>
              <Input onChangeText={this.setAuthor} />
            </Item>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Publisher</Label>
              <Input onChangeText={this.setPublisher} />
            </Item>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Year</Label>
              <Input onChangeText={this.setYear} />
            </Item>
            <Item fixedLabel picker regular style={{marginBottom: 5}} last>
              <Label>Category</Label>
              <Picker
                // mode="dropdown"
                // iosIcon={<Icon name="arrow-down" />}
                style={{width: 120}}
                placeholder="Select Category"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={this.selectCategory}
                Title="Category">
                <Picker.Item label="Education" value="Education" />
                <Picker.Item label="Business" value="Business" />
                <Picker.Item label="Mystery" value="Mystery" />
                <Picker.Item label="Fantasy" value="Fantasy" />
                <Picker.Item label="Horror" value="Horror" />
                <Picker.Item label="Romance" value="Romance" />
                <Picker.Item label="History " value="History" />
                <Picker.Item label="Science" value="Science" />
                <Picker.Item label="Journal" value="Journal" />
                <Picker.Item label="Religion" value="Religion" />
                <Picker.Item label="Biography" value="Biography" />
              </Picker>
            </Item>
            <Item fixedLabel rounded style={{marginBottom: 5}} last>
              <Label>Image Book</Label>
              <Input onChangeText={this.setImageBook} />
            </Item>
          </Form>

          <Button block last style={{marginTop: 50}} onPress={this.saveData}>
            <Text style={{fontWeight: 'bold'}}>Save</Text>
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
            {/* <Button
              vertical
              onPress={() => {
                Actions.LoginScreen();
              }}>
              <Icon name="log-out" />
              <Text>Log Out</Text>
            </Button> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
