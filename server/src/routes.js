const router = require('express').Router()
const db = require('./connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//generate jwt token
const genJwtToken = (email) => jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '24h'})

//register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, contact_id } = req.body
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, response) => {
      if(err) {
        return  res.send({err})
      }
      else if(response.length){
				return  res.send({err: 'user already exist'})
			}

      const hash = await bcrypt.hash(password, 8)
      const token = genJwtToken(email)

      db.query('INSERT INTO users(name, email, password, token, contact_id) VALUES(?, ?, ?, ?, ?)', [name, email, hash, token, contact_id], (err, user) => {
        if (err){
					return  res.send({err})
				}
        res.send({
          user
        })
      })
    })
  } catch (err) {
    res.send({err})
  }
})

//get user by email
router.get('/user', async (req, res) => {
  try {
    const { email } = req.query
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err})
			}
			else if(!user.length){
				return  res.send({err: 'no user found'})
			}

      res.send({
        user
      })
	
		})
  } catch (err) {
    res.send({err})
  }
})

//update user details
router.post('/update', async () => {
  try {
    const {email} = req.query
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err})
			}
			else if(!user.length){
				return  res.send({err: 'no user found'})
			}
    })
    
    res.send({msg: 'updating...'})

  } catch (err) {
    res.send({err})
  }
})

//login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err})
			}
			else if(!user.length){
				return  res.send({err: 'no user found'})
			}

			const isCorrectPassword = await bcrypt.compare(password, user[0].password)
			if(!isCorrectPassword) {
				return  res.send({err: 'incorrect password'})
			}

			const token = genJwtToken(email)
      db.query('UPDATE users SET token = ? WHERE email = ?', [token, email], (err, response) => {
        res.send({
          user
        })
      })
	
		})
  } catch (err) {
    res.send({err})
  }
})

module.exports = router