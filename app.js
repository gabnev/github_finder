// app.js is the entry point

const github = new GitHub;
const ui = new UI;

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
          ui.showProfile(data.profile);
        }
      })
  } else {
    // clear profile
  }
})