const signUp = (req, res) => {
    res.render('auth/signup.ejs', {title: 'Sign up'})
}

module.exports = {
    signUp,
}