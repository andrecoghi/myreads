# MyReads

---

## Project Purpose:

This app allows us to create shelves to organize the books we are currently reading, the ones we want to read and the ones we've already read.

## How to Load the App

```
git clone https://github.com/andrecoghi/myreads.git
npm install
```

Use the command below to launch the app

```
npm start
```
http://localhost:3000/ 

## Better performance with Debounce Input
As the user types to prevent of firing a lots of server requests, we can set it to fire only few times using [react-debounce-input] (https://www.npmjs.com/package/react-debounce-input).

## How to Use this App

- Books are organized into three shelves: Currently Reading, Want to Read and Read
- To interchange the books between shelves or remove a book we can click on the green button on the book cover

- To add new books, click on search button at the bottom of the page.
  Enter with a [search terms](#search-terms)

_Note: The backend API [BooksAPI] is limited to a fixed set of [search terms](#search-terms) as we can see below

#### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'