
export function askPassword(ok, fail, password) {
	return (password === "rockstar")? ok(): fail();
}

export let user = {
	name: 'John',

  loginOk() {
    return `${this.name} logged in`;
	},
	loginFail() {
    return `${this.name} failed to log in`;
  }

};




export function askPassword2(ok, fail, password) {

	return (password === "rockstar")? ok(): fail();
}



export let user2 = {
	name: 'John',
	login(result) {
    return this.name + (result ? " logged in" : " failed to log in");
  }
};



