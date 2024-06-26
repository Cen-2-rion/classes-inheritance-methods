import Daemon from '../characters/Daemon';

// проверка создания персонажа
test('character creation check', () => {
  expect(new Daemon('Sauron', 'Daemon')).toEqual({
    name: 'Sauron',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
