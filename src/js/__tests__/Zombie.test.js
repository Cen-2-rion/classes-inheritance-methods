import Zombie from '../characters/Zombie';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Zombie('Uruk-hai', 'Zombie')).toEqual({
    name: 'Uruk-hai',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
