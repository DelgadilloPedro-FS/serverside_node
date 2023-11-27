const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());

// http://localhost:3000/api
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET - root",
    metadata: {
      hostname: req.hostname,
      DATA,
      method: req.method,
    },
  });
});

//get by id
router.get("/:id", (req, res) => {
    const {id} = req.params;

    const cat = DATA[id]
    res.status(200).json({
        message: "GET by ID for cat/id",
        metadata: {
          hostname: req.hostname,
          cat,
          method: req.method,
        },
      });
})


router.post("/", (req, res) => {
  const {data} = req.body;
  DATA.push(data)
  console.log(req.body)
  res.status(200).json({
    message: "POST to /cat",
    metadata: {
      hostname: req.hostname,
      DATA,
      method: req.method,
    },
  })
});
//update by id
router.put("/:id",(req, res)=>{
    const {id} = req.params;
    const {data} = req.body;
    DATA[id].catName = data.catName;
    res.status(200).json({
        message: "update id /api/:id",
        metadata: {
          hostname: req.hostname,
          DATA,
          method: req.method,
        },
      })
})
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;
    const deletedData = DATA.splice(id,1)
    res.status(200).json({
        message: "Delete by id /cat",
        metadata: {
          hostname: req.hostname,
          deletedData,
          method: req.method,
        },
      })
})
app.use("/cat", router);

module.exports = app;

const DATA = [
    {id:0,catName:"whiskers"},
    {id:1,catName:"ham"},
    {id:2,catName:"mittens"},
    {id:3,catName:"bacon"},
    {id:4,catName:"kitty"},
]