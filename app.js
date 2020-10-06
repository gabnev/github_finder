// app.js is the entry point

const github = new GitHub;

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not found') {
          // show alert
        } else {
          // show profile
        }
      })
  } else {
    // clear profile
  }
})