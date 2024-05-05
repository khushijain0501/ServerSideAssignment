const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, // Fix incomplete object
];
function displayBookInfo(book) {
  const readingStatus = book.readingStatus ? "already read" : "not yet read";
  console.log(`${book.title} by ${book.author} - You have ${readingStatus}.`);
}
library.forEach(displayBookInfo); 