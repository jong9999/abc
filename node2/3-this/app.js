const fs = require('fs');

fs.rename('./text.txt', './text-new.txt', (error) => {
  console.log(error);
});

console.log('done!');