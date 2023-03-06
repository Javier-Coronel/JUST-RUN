/**
 * @class Person
 */
export class Person {

    constructor(
        public id: number,
        public name: string,
        public dni: string,
        public email: string,
        public password: string,
        public confirmPassword: string,
        public size: string,
        public payMode: string,
        public runningClub?:string
     ) {  }
}