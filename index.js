class User{
    constructor(email, password){ 
    this._email = email; 
    this._password = password 
}
        get password(){
            return this._password.toUpperCase();
        }
        set password(value){ 
            this._password = value 
        }   
};
const arpit = new User("chai@gmail.com", "abc");
console.log(arpit._password);
console.log(arpit._email);
// console.log(arpit.password)