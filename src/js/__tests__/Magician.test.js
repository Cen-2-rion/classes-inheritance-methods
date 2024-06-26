import Magician from '../characters/Magician';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Magician('Gandalf', 'Magician')).toEqual({
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
