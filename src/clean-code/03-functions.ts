(() => {
   function getMovieById(movieId: string) {
      console.log({ movieId });
   }

   function getMovieCastById(id: string) {
      console.log({ id });
   }

   function getActorBioById(id: string) {
      console.log({ id });
   }

   interface Movie {
      cast: string[];
      description: string;
      rating: number;
      title: string;
   }
   function createMovie({ title, description, rating, cast }: Movie) {
      console.log({ title, description, rating, cast });
   }

   // * Principio de resposabilidad unica
   // * funcion solamente para checkear el fullName
   function checkFullName(fullName: string) {
      console.log(fullName);
      return true;
   }

   // * Esta funcion sólo se encarga de crear un actor
   function createActor(fullName: string, birthdate: Date): boolean {
      // Delegamos a otra funcion la de verificar el fullName
      if (checkFullName(fullName)) return false;

      console.log("Crear actor");
      return true;
   }
})();
