(() => {
   // ! Sin aplicar el principio de responsabilidad única

   type Gender = "M" | "F";

   class Person {
      constructor(
         public name: string,
         public gender: Gender,
         public birthday: Date
      ) {}
   }

   const newPerson = new Person("Santiago", "M", new Date("1995-01-18"));

   class User extends Person {
      public lastAccess: Date;

      constructor(
         public email: string,
         public role: string,
         name: string,
         gender: Gender,
         birthday: Date
      ) {
         super(name, gender, birthday);
         this.lastAccess = new Date();
      }

      checkCredentials() {
         return true;
      }
   }

   class UserSettings extends User {
      constructor(
         public workingDirectory: string,
         public lastOpenFolder: string,
         email: string,
         role: string,
         name: string,
         gender: Gender,
         birthday: Date
      ) {
         super(email, role, name, gender, birthday);
      }
   }

   // const userSettings = new UserSettings()
})();
