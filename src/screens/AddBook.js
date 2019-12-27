import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Alert,
  Image,
  View,
  StyleSheet,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
} from 'react-native';
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
import ImagePicker from 'react-native-image-picker';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

export default class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      booktitle: '',
      barcode: '',
      category: '',
      author: '',
      publisher: '',
      year: '',
      // imagebook: '',
      filePath: {},
      qrvalue: '',
      openScanner: false,
    };
  }
  // for scanner
  // for scanner
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({qrvalue: qrvalue});
    this.setState({openScanner: false});
  }
  onOpneScanner() {
    var that = this;
    //To Start Scanning
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'CameraExample App Camera Permission',
              message: 'CameraExample App needs access to your camera ',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({qrvalue: ''});
            that.setState({openScanner: true});
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    } else {
      that.setState({qrvalue: ''});
      that.setState({openScanner: true});
    }
  }
  // for image upload
  // for image upload
  chooseFile = () => {
    var options = {
      title: 'Upload Book Cover',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

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

  // setImageBook = value => {
  //   this.setState({imagebook: value});
  // };

  saveData = () => {
    if (
      this.state.booktitle &&
      this.state.barcode &&
      this.state.category &&
      this.state.author &&
      this.state.publisher &&
      this.state.year
      // this.state.imagebook
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
          // this.state.imagebook,
        );
      }
    } else {
      Alert.alert('Status', 'Empty Field(s)!');
    }
  };

  render() {
    if (!this.state.openScanner) {
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
              Add Book Details
            </Text>
            <Form>
              <Item fixedLabel rounded style={{marginBottom: 5}} last>
                <Label>Barcode No </Label>
                {/* <Input
                  onChangeText={() =>
                    this.setState({barcode: this.state.barcode})
                  }
                  value={this.state.qrvalue}
                /> */}
                <Input
                  onChangeText={this.setBarcode}
                  value={this.state.qrvalue}
                />
                {/* <Text>{this.state.qrvalue}</Text> */}
              </Item>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button
                  style={{marginBottom: 5}}
                  rounded
                  info
                  small
                  onPress={() => this.onOpneScanner()}>
                  <Text>Scan Barcode</Text>
                </Button>
              </View>

              <Item fixedLabel rounded style={{marginBottom: 5}} last>
                <Label>Book Title</Label>
                <Input onChangeText={this.setBookTitle} />
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
              <Item fixedLabel picker rounded style={{marginBottom: 5}} last>
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

              {/* <Item fixedLabel regular style={{marginBottom: 5}} last>
              <Label>Image Book</Label>

              <Input onChangeText={this.setImageBook} />
            </Item> */}
            </Form>

            {/* imagedisplay */}

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Button
                style={{marginBottom: 5}}
                rounded
                info
                small
                onPress={this.chooseFile.bind(this)}>
                <Text>Upload Image</Text>
              </Button>
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{
                  width: 200,
                  height: 300,
                }}
              />
              {/* <Image
            source={{uri: this.state.filePath.uri}}
            style={{width: 250, height: 250}}
          /> */}

              {/* <Text style={{alignItems: 'center'}}>{this.state.filePath.uri}</Text> */}
            </View>

            <Button
              block
              success
              last
              style={{marginTop: 50}}
              onPress={this.saveData}>
              <Text style={{fontWeight: 'bold'}}>Save</Text>
            </Button>
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

    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'monospace',
            backgroundColor: 'yellow',
          }}>
          Place and scan barcode here
        </Text>
        <CameraKitCameraScreen
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
