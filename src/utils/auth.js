const users = [
  {
    firstname: 'JAMAL',
    lastname: 'SAID',
    username: '0600000000',
    role: 'admin',
    img: ''
  },
  {
    firstname: 'USER',
    lastname: 'TEST',
    username: '0600000001',
    role: 'user',
    img: ''
  }
]

export const isLogged = () => {
  return !!(localStorage.getItem('logged') && localStorage.getItem('logged') === 'true')
}

export const userData = () => {
  if (isLogged()) {
    return users.find(user => user.username.toString() === localStorage.getItem('username'))
  }
  return {}
}

export const login = (username) => {
  if (users.find(user => user.username === username)) {
    return 'success Login'
  }
  return 'error user not found'
}
