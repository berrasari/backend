module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: 'gd/YI82yMXYWXK1A+iUY8A==' 
    },
  })
