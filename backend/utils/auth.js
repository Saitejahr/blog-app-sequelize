// // Middleware to verify JWT token
// exports.verifyToken = (req, res, next) => {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.sendStatus(403); // Forbidden if token is not provided
//   }
// };

// // Middleware to check admin authentication
// exports.checkAdminAuth = async (req, res, next) => {
//   try {
//     // Verify the JWT token
//     jwt.verify(req.token, 'secretkey', async (err, decodedToken) => {
//       if (err) {
//         return res.sendStatus(403); // Forbidden if token is invalid
//       }

//       // Fetch admin details from the database based on the token information
//       const admin = await Admin.findOne({ where: { username: decodedToken.username } });

//       if (!admin) {
//         return res.sendStatus(403); // Forbidden if admin not found
//       }

//       // Attach admin details to the request object for further processing if needed
//       req.admin = admin;
//       next();
//     });
//   } catch (error) {
//     console.error('Error checking admin authentication:', error);
//     res.sendStatus(500); // Internal server error if something goes wrong
//   }
// };









const jwt = require('jsonwebtoken')

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}


// Middleware to check admin authentication
exports.checkAdminAuth = (req, res, next) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      next()
    }
  })
}
