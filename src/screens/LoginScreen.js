import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Alert, StyleSheet} from 'react-native';
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
            Sign In
          </Text>
          <Form>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setEmail}
              />
            </Item>
            <Item floatingLabel last>
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
            onPress={this.getLogin}>
            <Text alignItems="center" style={{fontWeight: 'bold'}}>
              Sign In
            </Text>
          </Button>
          {/* <Button
            bordered
            info
            small
            style={{marginTop: 20}}
            onPress={() => {
              Actions.SignupScreen();
            }}>
            <Text>Sign Up</Text>
          </Button> */}
        </Content>

        <Footer>
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
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
