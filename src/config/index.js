const development = {
  API_URL: 'https://localhost:5001/api/'
}

const production = {
  API_URL: 'https://hyppo-gip.herokuapp.com/api/'
}

const _env = {
  development,
  production
}

export default _env[process.env.NODE_ENV || 'development']
