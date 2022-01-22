const express = require('express')
const router = express.Router();

//Actor Model
const Actor = require('../../models/Actor')

// @route   GET api/actors
// @desc    Get all actors
// @access  Public
router.get('/', (req, res) => {
  Actor.findAll({
    order: [['actor_id', 'DESC']]
  })
    .then(actors => {
      res.json(actors)
    })
    .catch(err => console.log(err))
})

// @route   POST api/actors
// @desc    Create an actor
// @access  Public
router.post('/', (req, res) => {
  Actor.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    .then(actor => res.json({
      status: res.statusCode,
      actor: actor
    }))
    .catch(err => console.log(err))
})

//@route DELETE api/actors/:id
//@desc         Delete an actor by id
//@access       Public
router.delete('/:id', (req, res) => {
  Actor.findByPk(req.params.id)
    .then(actor => actor.destroy().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;