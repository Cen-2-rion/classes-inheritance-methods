import Bowman from '../characters/Bowman';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Bowman('Legolas', 'Bowman')).toEqual({
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
