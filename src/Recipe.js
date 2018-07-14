class Recipe {
  constructor(name, image, description, ingredients, directions) {
    this.name = name;
    this.image = image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
    this.description = description || '';
    this.ingredientes = ingredients || [];
    this.directions = directions || '';
  }
}

export default Recipe;
