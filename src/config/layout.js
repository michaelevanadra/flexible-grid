// id         :   value
// direction  :   row|row-reverse|column|column-reverse|initial|inherit
// wrap       :   nowrap|wrap|wrap-reverse|initial|inherit
// border     :   1px solid red ; [width] [style] [color]
// width      :   auto|value|initial|inherit

// TODO:
// APPLICABLE ONLY FOR GRID CELLS WITH SIBLINGS
// grow       :   number * bigger than siblings
// shrink     :   number * bigger than siblings
// basis      :   number ; initial length
// order      :   number

export const featuredGames = {
  id: 'featured-games',
  direction: 'row-reverse',
  wrap: 'nowrap'
};

export const newGames = {
  direction: 'row',
  wrap: 'wrap',
  items: {
    width: '25%'
  }
};
