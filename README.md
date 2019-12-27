# Muraja-at-al-Kitab

# Muraja-at-al-Kitab_1

### Group Members (At-Taqwa)

| Name                               | Matric No |
| ---------------------------------- | :-------: |
| Muhammad Naim Bin Haris `(Leader)` |  1618279  |
| Muhammad Syafiq Bin Ramli          |  1610687  |
| Muhammad Hanif Bin Mohd Sapiai     |  1610923  |
| Mohamad Ramdaan Bin Jalani         |  1610439  |

### INTRODUCTION

Muraja-at-al-Kitab is a mobile app developed using react native. It is created to help future users to give books ratings and comments.
This feature can be seen by all users when they look up upon the book title. Thus, helping users that are looking for that specific books
to know what people that have read the book think of it, whether it is worth while or the opposite.

### OBJECTIVE

The main objective of this app is to allow users to give ratings and comments for books that they have read. Be it a negative feedback or
a positive one, the system will portray the feedbacks from users to give a more balanced platform for other users to see which brings to
the second objective, which is to help users to look on the type of books they wish to read or buy beforehand, allowing them to read the comments and ratings which will help them gauge whether the book is worth having or not. Last but not least, to promote the hobby of reading
among the society indirectly as it makes users easier to find out what books they specifically look for through comments of other people.

### FEATURES & FUNCTIONALITIES

Features

- Barcode Scanner
- Authentication
- Add Book
- display book
- Add review
- display book review

API used

- firebase
- barcode scanner
- camera
- rating

Functionalities

- CRUD operation using firebase
- Saved books, reviews & ratings
- Copy/Paste/Cut functionalities

### SCREEN NAVIGATION

1. Get Started
   User would be introduced to the app and its features and functionality.

   ![Get Started](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/getstart.jpg)

2. Login Page
   User need to sign in before the Home Page is prompted. If user does not have any account, they need to click to Sign Up button to be redirected to Sign Up page.

   ![login](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/login.jpg)

3) Book List
   After login, user would be prompted to this screen where the user can see all the books that have been added and reviewed. If the user click on one of the books that is on list, the user will be brought to the 'Review' the user can see the reviews and ratings that have been given to that book.

   ![booklist](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/booklist.jpg)

4) Add Book
   The user would need to add the details of the book the user want to add. The barcode need to be scan by the user to add book. The user also need to insert the image of the front cover of the book. After finishing inserting the details and the image of the front cover of the book, the user need to click the 'add book' button and the book will be added into the list of books.

![addbook](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/addbook.jpg)

5. Review
   The screen will be filled with the image of the front cover of the book. under that image would be the details of the book. The reviews that have been made on the books would be here. The user need to click the 'add review' button to add their reviews and ratings of the book.

![review](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/review.jpg)

6. Add Review & Rating
   The title of the book that needed to be review would be pop out. There would be a textbox that require the user to fill it with the user opinion on that book. Besides that, the user need to click the stars underneath that textbox to rate the book from 1 to 5 stars. After that, the user need to click the 'submit' button.

![addreview](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/addreview.jpg)

### SEQUENCE DIAGRAM

1. Login Sequence

   ![Login Sequence](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/3.jpeg)

2. Logout Sequence

   ![Logout Sequence](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/1.jpeg)

3. Sign Up Sequence

   ![Sign Up Sequence](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/2.jpeg)

4. Book Review Sequence

   ![Book Review Sequence](https://raw.githubusercontent.com/syafiqramli13/Muraja-at-al-Kitab_1/master/screenshot/4.jpeg)
