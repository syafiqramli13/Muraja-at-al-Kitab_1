import {db} from '../config/db';
import {Actions} from 'react-native-router-flux';

export const addBook = (
  booktitle,
  barcode,
  category,
  author,
  publisher,
  year,
  // imagebook,
) => {
  db.ref('/books')
    .child(barcode)
    .set(
      {
        booktitle: booktitle,
        barcode: barcode,
        category: category,
        author: author,
        publisher: publisher,
        year: year,
        // imagebook: imagebook,
      },
      () => Actions.BookList(),
    );
};

export const addReview = (Default_Rating, review) => {
  db.ref('/books')
    .ref.child(barcode)
    .set(
      {
        Default_Rating: Default_Rating,
        review: review,
      },
      () => Actions.BookList(),
    );
};
export const updateStudent = (
  booktitle,
  barcode,
  category,
  author,
  publisher,
  year,
  // imagebook,
) => {
  db.ref('/books')
    .child(barcode)
    .update(
      {
        booktitle: booktitle,
        barcode: barcode,
        category: category,
        author: author,
        publisher: publisher,
        year: year,
        // imagebook: imagebook,
      },
      () => Actions.BookList(),
    );
};

export const removeBook = barcode => {
  db.ref('/books')
    .child(barcode)
    .remove();
  Actions.BookList();
};
