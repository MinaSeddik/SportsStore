export class Product{

  // ? indicates optional parameters
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number) {
    // empty constructor
  }


}
