const router = require('express').Router()
const {savednotes} = require('../db/db.json');
const fs = require('fs')

// const writenote = (body, savednotesArray) => {
//     const note = body;
//     savednotesArray.push(note);
//     fs.writeFileSync(
//     'db/db.json',
//       JSON.stringify({ savednotes: savednotesArray })
//     );
//     return note;
//   };

router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        return err ? console.log(err) : res.json(JSON.parse(data))
    })
    // res.json(savednotes);
  });

router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        let jsonData = JSON.parse(data)
        let newNote = {
            title: req.body.title,
            text: req.body.text
        }
        jsonData.push(newNote)
        fs.writeFile('db/db.json', JSON.stringify(jsonData), err => {
            if (err) throw err
            res.redirect('/notes')
        })
    })
    // req.body.id = idgenerater();
    // const newnote = writenote(req.body, savednotes);
    // res.json(newnote);
  });

module.exports = router