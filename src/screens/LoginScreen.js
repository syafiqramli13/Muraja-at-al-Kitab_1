import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Alert, StyleSheet, View, Image} from 'react-native';
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

export default class LoginScreen extends Component {
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

  getLogin = () => {
    try {
      if (this.state.email && this.state.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            Actions.BookList();
          })
          .catch(error => {
            Alert.alert('Status', error.toString(error));
          });
      } else {
        Alert.alert('Status', 'Invalid Email & Password!');
      }
    } catch (error) {
      console.log(error.toString(error));
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
            Log In
          </Text>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../images/loginGirl.png')}
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
            block
            success
            style={{marginTop: 50}}
            onPress={this.getLogin}>
            <Text alignItems="center" style={{fontWeight: 'bold'}}>
              Log In
            </Text>
          </Button>

          <View style={{alignItems: 'center'}}>
            <Button
              transparent
              small
              style={{marginTop: 10}}
              onPress={() => {
                Actions.SignupScreen();
              }}>
              <Text>Sign Up now!</Text>
            </Button>
          </View>
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => {
                Actions.SignupScreen();
              }}>
              <Icon name="person-add" />
              <Text>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
