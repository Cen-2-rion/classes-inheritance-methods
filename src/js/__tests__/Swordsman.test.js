import Swordsman from '../characters/Swordsman';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Swordsman('Gimli', 'Swordsman')).toEqual({
    name: 'Gimli',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
