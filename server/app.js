const router = require('express').Router();
const getData = require('./database/queries/get-data.js')



router.get("/", (req, res) => {
    getData()
    .then(data=>{
      console.log(data);
      res.json(data.rows)
    })
    .catch(error=>res.status(500).json({msg:'Internal server error' }) )
  });

module.exports = router;
