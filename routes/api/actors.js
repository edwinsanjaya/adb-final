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

router.post('/filter', (req, res, next) => {
  const filter = {}
  if (req.body?.firstName) {
    filter.firstName = req.body.firstName
  }
  if (req.body?.lastName) {
    filter.lastName = req.body.lastName
  }
  Actor.findAll({
    where: { ...filter }
  })
    .then(actors => res.json(actors))
    .catch(err => next(err))
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

router.put('/:id', (req, res) => {
  Actor.findByPk(req.params.id)
    .then(actor => {
      if (!actor) {
        throw "actor not exist"
      }
      return actor
    }).then(actor => actor.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })).then(actor => res.json({
      success: true,
      actor: actor,
      status: res.statusCode
    }))
    .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;