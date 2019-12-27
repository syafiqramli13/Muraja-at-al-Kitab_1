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
  Textarea,
  IconNB,
} from 'native-base';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {addReview} from '../services/DataService';
import {db} from '../config/db';
let studentsRef = db.ref('/books');

export default class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      barcode: '',
      Default_Rating: 1,
      //To set the default Star Selected
      Max_Rating: 5,
      //To set the max number of Stars
    };
    //Filled Star. You can also give the path from local
    this.Star =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    //Empty Star. You can also give the path from local
    this.Star_With_Border =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }
  UpdateRating(key) {
    this.setState({Default_Rating: key});
    //Keeping the Rating Selected in state
  }
  setReview = value => {
    this.setState({review: value});
  };
  // setRate = value => {
  //   this.setState({rate: value});
  // };
  saveData = () => {
    if (this.state.review && this.state.Default_Rating) {
      let query = studentsRef
        .orderByChild('barcode')
        .equalTo(this.props.barcode);
      query.once(addReview(this.state.review, this.state.Default_Rating));
      // Actions.BookList();
    } else {
      Alert.alert('Status', 'Empty Field(s)!');
    }
  };
  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? {uri: this.Star}
                : {uri: this.Star_With_Border}
            }
          />
        </TouchableOpacity>,
      );
    }
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
            Add book review & rate this book.
          </Text>
          <Form>
            <Textarea
              bordered
              rowSpan={5}
              onChangeText={this.setReview}
              placeholder="Add your review/comment here..."
            />

            <View style={styles.MainContainer}>
              {/*View to hold our Stars*/}
              <View style={styles.childView}>{React_Native_Rating_Bar}</View>
              <Text style={styles.textStyle}></Text>
              {/* <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => alert(this.state.Default_Rating)}>
                Clicking on button will show the rating as an alert
                <Text>Get Selected Value</Text>
              </TouchableOpacity> */}
            </View>
          </Form>

          <Button
            block
            last
            style={{marginTop: 50}}
            onPress={() => Actions.BookList()}>
            <Text style={{fontWeight: 'bold'}}>Save Submit</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
});
