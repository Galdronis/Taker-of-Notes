const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;
const idgenerater = require('./idgenerater')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// const writenote = (body, savednotesArray) => {
//     const note = body;
//     savednotesArray.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, './db/Notes.json'),
//       JSON.stringify({ savednotes: savednotesArray })
//     );
//     return note;
//   };


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
  