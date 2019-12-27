import React, {Component} from 'react';
import {Text, ListItem, Left, Right, Icon, Thumbnail} from 'native-base';
import PropTypes from 'prop-types';

export default class BookAtBooklist extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  onPress = barcode => {
    this.props.onPress(barcode);
  };

  onLongPress = barcode => {
    this.props.onLongPress(barcode);
  };

  render() {
    return this.props.books.map((data, index) => {
      return (
        <ListItem
          Thumbnail
          key={index}
          onPress={() => this.onPress(data.barcode)}
          onLongPress={() => this.onLongPress(data.barcode)}>
          <Left>
            <Text>{data.booktitle}</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    });
  }
}
