(() => {
   type Gender = "M" | "F";

   class Person {
      public name: string;
      public gender: Gender;
      public birthday: Date;

      constructor(name: string, gender: Gender, birthday: Date) {
         this.name = name;
         this.gender = gender;
         this.birthday = birthday;
      }
   }

   const newPerson = new Person("Santiago", "M", new Date("1995-01-18"));

   console.log(newPerson);
})();
