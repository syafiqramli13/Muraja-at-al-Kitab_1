import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import GetStart from './src/screens/GetStart';
import BookList from './src/screens/BookList';
import BookReview from './src/screens/BookReview';
import AddBook from './src/screens/AddBook';
import AddReview from './src/screens/AddReview';
import CodeScanner from './src/screens/codescanner';
// import ImageUpload from './src/screens/imageupload';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* <Scene
            key="ImageUpload"
            component={ImageUpload}
            left={() => null}
            title="Muraja'at al-Kitab"
            initial={true}
          /> */}
          <Scene
            key="GetStart"
            component={GetStart}
            left={() => null}
            title="Muraja'at al-Kitab"
            // initial={true}
          />
          <Scene
            key="LoginScreen"
            component={LoginScreen}
            left={() => null}
            title="Muraja'at al-Kitab"
            // initial={true}
          />
          <Scene
            key="SignupScreen"
            component={SignupScreen}
            left={() => null}
            title="Muraja'at al-Kitab"
          />
          <Scene
            key="BookList"
            component={BookList}
            left={() => null}
            title="Muraja'at Al-Kitab"
            initial={true}
          />
          <Scene
            key="BookReview"
            component={BookReview}
            left={() => null}
            title="Muraja'at Al-Kitab"
          />
          <Scene
            key="CodeScanner"
            component={CodeScanner}
            left={() => null}
            title="Muraja'at Al-Kitab"
          />
          <Scene
            key="AddBook"
            component={AddBook}
            left={() => null}
            title="Muraja'at Al-Kitab"
          />
          <Scene
            key="AddReview"
            component={AddReview}
            left={() => null}
            title="Muraja'at Al-Kitab"
          />
        </Scene>
      </Router>
    );
  }
}
