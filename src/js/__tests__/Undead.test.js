import Undead from '../characters/Undead';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Undead('Saruman', 'Undead')).toEqual({
    name: 'Saruman',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
