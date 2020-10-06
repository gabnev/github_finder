class GitHub {
  constructor() {
    this.client_id = '94622e79b976fcbde130';
    this.client_secret = '9a7e08a5f4c682e81ae142c62c25d5e78e122c94';
  }

  async getUser(user) {
    const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }    
  }
}