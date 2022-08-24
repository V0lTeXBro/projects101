function fullName(name, lastName) {
    this.name = name;
    this.last_name = lastName;

    this.fname = function () {
        console.log('full name', this.name, this.last_name);
    }
}

const obj1 = new fullName('tmeer', 'kheir');
const obj2 = new fullName('yeet', 'yeetuss');

obj1.fname();
obj2.fname();


export default fullName;