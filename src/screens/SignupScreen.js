import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Alert, View, Image} from 'react-native';
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
} from 'native-base';
import * as firebase from 'firebase';

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  setEmail = value => {
    this.setState({email: value});
  };

  setPassword = value => {
    this.setState({password: value});
  };

  signUp = () => {
    try {
      if (this.state.email && this.state.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => {
            console.log(user);
            Alert.alert('Status', 'Sign Up Successful');
            Actions.LoginScreen();
          })
          .catch(error => {
            Alert.alert('Status', error.toString(error));
          });
      } else {
        Alert.alert('Status', 'Invalid Email or Password!');
      }
    } catch (error) {
      Alert.alert({errorMessage: error.message});
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
            Sign Up
          </Text>

          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../images/signupMan.png')}
              style={{
                width: 150,
                height: 150,
                margin: 20,
              }}
            />
          </View>

          <Form>
            <Item fixedLabel rounded last style={{marginBottom: 5}}>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setEmail}
              />
            </Item>
            <Item fixedLabel rounded last style={{marginBottom: 5}}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setPassword}
              />
            </Item>
          </Form>

          <Button
            rounded
            success
            block
            style={{marginTop: 50}}
            onPress={this.signUp}>
            <Text style={{fontWeight: 'bold'}}>sign Up</Text>
          </Button>

          <View style={{alignItems: 'center'}}>
            <Button
              transparent
              small
              style={{marginTop: 10}}
              onPress={() => {
                Actions.LoginScreen();
              }}>
              <Text>Go back to Log In...</Text>
            </Button>
          </View>
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => {
                Actions.LoginScreen();
              }}>
              <Icon name="log-in" />
              <Text>Go To Log In</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}
