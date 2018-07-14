import Recipe from '../Recipe';

const recipes = [
  new Recipe (
    'Spaghetti carbonara',
    'https://www.jocooks.com/wp-content/uploads/2012/05/creamy-carbonara-1.jpg',
    'Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, guanciale (or pancetta), and pepper.',
    ['Pancetta', 'Pecorino cheese', 'Eggs'],
    [
      'Slice the bacon into 1/2" (1cm square) pieces. Put the pieces aside in an unheated frying pan.',
      'Bring water to boil in the heavy pot or saucepan for the pasta.',
      'Once the water is boiling, add the pasta in',
      'Cook the bacon'
    ]
  ),
  new Recipe (
    'Eggs with bacon',
    'https://realfood.tesco.com/media/images/031394-HERO-00ba5120-903b-444d-aff6-acb7825f40b7-0-472x310.jpg',
    'The bacon and egg pie is a savoury pie consisting of a crust containing bacon, egg and sometimes onion, peas, tomato and cheese.',
    ['Hard-cooked eggs, peeled.', 'Slices whole wheat or white toast', 'Dash hot sauce'],
    [
      'Cook bacon until crisp. I do it in the microwave to reduce fat. Crumble when cool',
      'In a small bowl, beat eggs with water, onion powder, salt and pepper.',
      'In a small frying pan, melt butter until bubbling.',
      'Add beaten eggs and crumbled bacon.'
    ]
  )
]

export default recipes;
