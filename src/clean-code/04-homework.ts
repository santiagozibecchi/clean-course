(() => {
   // Resolver sin la triple condicional dentro del if
   // includes? arrays?
   function isRedFruit(fruit: string): boolean {
      const validFruits = ["manzana", "cereza", "ciruela"];

      return validFruits.includes(fruit);
   }

   // Simplificar esta función
   // switch? Object literal? validar posibles colores

   //    function validColors(color: string): boolean {
   //       return ["red", "yellow", "purple"].includes(color);
   //    }

   type FruitColor = "red" | "yellow" | "purple";

   function getFruitsByColor(color: FruitColor): string[] {
      // Salta los bloques de codigo hasta coincidir con el color, en cambio en un else if pasa por todo el scope de codigo
      //   switch (color) {
      //      case "red":
      //         return ["manzana", "fresa"];
      //      case "yellow":
      //         return ["piña", "banana"];
      //      case "purple":
      //         return ["moras", "uvas"];
      //      default:
      //         throw Error("the color must be: red, yellow, purple");
      //   }

      const fruitsByColor = {
         red: ["manzana", "fresa"],
         yellow: ["piña", "banana"],
         purple: ["moras", "uvas"],
      };

      // Regresa un arreglo con las llaves/prodiedades/keys
      if (!Object.keys(fruitsByColor).includes(color)) {
         throw Error("the color must be: red, yellow, purple");
      }

      return fruitsByColor[color];
   }

   // Simplificar esta función
   let isFirstStepWorking = true;
   let isSecondStepWorking = true;
   let isThirdStepWorking = true;
   let isFourthStepWorking = false;

   function workingSteps() {
      let steps = [
         { name: "First", isWorking: isFirstStepWorking },
         { name: "Second", isWorking: isSecondStepWorking },
         { name: "Third", isWorking: isThirdStepWorking },
         { name: "Fourth", isWorking: isFourthStepWorking },
      ];

      const isWorkingStep = steps.find((step) => !step.isWorking);
      return isWorkingStep
         ? `${isWorkingStep.name} step is broken`
         : "Working properly!";

      // * Codigo más sencillo que funcionaría
      //   if (!isFirstStepWorking) return "First step broken.";
      //   if (!isFirstStepWorking) return "Second step broken.";
      //   if (!isFirstStepWorking) return "Third step broken.";
      //   if (!isFirstStepWorking) return "Fourth step broken.";

      //   return  "Working properly!";

      // ! Codigo dificil de leer
      //   if (isFirstStepWorking === true) {
      //      if (isSecondStepWorking === true) {
      //         if (isThirdStepWorking === true) {|
      //            if (isFourthStepWorking === true) {
      //               return "Working properly!";
      //            } else {
      //               return "Fourth step broken.";
      //            }
      //         } else {
      //            return "Third step broken.";
      //         }
      //      } else {
      //         return "Second step broken.";
      //      }
      //   } else {
      //      return "First step broken.";
      //   }
   }

   // isRedFruit
   console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
   console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

   //getFruitsByColor
   console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
   console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
   console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
   //    console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

   // workingSteps
   console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
