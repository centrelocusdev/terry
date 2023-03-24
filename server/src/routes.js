const router = require('express').Router()
const db = require('./connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//generate jwt token
const genJwtToken = (email) => jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '24h'})

//register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, response) => {
      if(err) {
        return  res.send({err: err.message})
      }
      else if(response.length){
				return  res.send({msg: 'user already exist'})
			}

      const hash = await bcrypt.hash(password, 8)
      const token = genJwtToken(email)

      db.query('INSERT INTO users(name, email, password, token) VALUES(?, ?, ?, ?)', [name, email, hash, token], (err, user) => {
        if (err){
					return  res.send({err: err.message})
				}
        res.send({
          user
        })
       res.send("user created succrssfully")
      })
    })
  } catch (err) {
    res.send({err: err.message})
  }
})

//get user by email
router.get('/user', async (req, res) => {
  try {
    const { email } = req.query
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err: err.message})
			}
			else if(!user.length){
				return  res.send({err: 'no user found'})
			}

      res.send({
        user
      })
	
		})
  } catch (err) {
    res.send({err: err.message})
  }
})

//update user details
router.post('/update', async () => {
  try {
    const {email} = req.query
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err: err.message})
			}
			else if(!user.length){
				return  res.send({err: 'no user found'})
			}
    })
    
    res.send({msg: 'updating...'})

  } catch (err) {
    res.send({err: err.message})
  }
})

//login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
			if(err) {
				return  res.send({err: err.message})
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
    res.send({err: err.message})
  }
})

module.exports = router