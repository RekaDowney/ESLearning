class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validateUsername() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                let len;
                if (!this.username || (len = this.username.length) < 4 || len > 20) {
                    reject('invalid username');
                } else {
                    resolve('username is legal');
                }
            }, 100);
        }));
    }


    validatePassword() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                let len;
                if (!this.password || (len = this.password.length) < 6 || len > 20 || this.password.includes('|')) {
                    reject('invalid password');
                } else {
                    resolve('password is legal');
                }
            }, 100);
        }));
    }

}

let user = new User('reka', '123456');

user.validateUsername()
    .then(result => {
        return user.validatePassword();
    })
    .then(result => {
        console.log('validate success');
    })
    .catch(errorReason => {
        console.error(errorReason);
    });