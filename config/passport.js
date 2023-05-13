import passportLib from "passport"
import {User} from "../models/User.js"
import LocalStrategy from "passport-local"
import bcrypt from "bcrypt"


function isValidPassword (password, user){
  return bcrypt.compareSync(password, user.password)
}


passportLib.use(new LocalStrategy( 
  async function(username, password, done) {
    await User.findOne({ username: username })
    .then((user) => {
      if (!user) { 
        return done(null, false, {message: "Incorrect username"}); 
      }
      if (!isValidPassword(password, user)) { 
        return done(null, false, {message: "Incorrect password"}); 
      } else {
        return done(null, user);
      }
    })
    .catch((err) => { 
      return done(err); 
    })
  }
));
     

passportLib.serializeUser(function (user, done) {
  done(null, user.id);
})


passportLib.deserializeUser(function (id, done) {
  User.findById(id).then(function (user, err) {
    done(err, user);
  });
});


export {passportLib}