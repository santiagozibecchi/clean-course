type Size = "" | "S" | "M" | "XL";

class Product {
   constructor(
      public name: string = "",
      public price: number = 0,
      public size: Size = ""
   ) {}

   toString() {
      // No DRY
      if (this.name.length <= 0) throw Error("Name is empty");
      if (this.price <= 0) throw Error("Price is zero");
      if (this.size.length <= 0) throw Error("Size is empty");

      return `${this.name} (${this.price}), ${this.size}`;
   }
}

(() => {
   const bluePants = new Product("Pantalon negro", 100, "S");
   console.log(bluePants.toString());
})();
