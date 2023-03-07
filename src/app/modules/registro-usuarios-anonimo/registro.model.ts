/**
 * @class Person
 */
export class Person {

    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public dni: string,
        public direccion: string,
        public size: string,
        public payMode: string,
        public runningClub?:string
     ) {  }
}