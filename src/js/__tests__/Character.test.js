import Character from '../characters/Character';
import Daemon from '../characters/Daemon';

// проверка длинны имени, если больше 10 символов
test('incorrect name length > 10', () => {
  expect(() => new Character('Mephistopheles', 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка длинны имени, если меньше 2 символов
test('incorrect name length < 2', () => {
  expect(() => new Character('M', 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка имени на строку
test('incorrect name type is not string', () => {
  expect(() => new Character(0, 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка типа персонажа на соответствие дефолтным типам и на строку
test('incorrect type', () => {
  expect(() => new Character('Belphegor', 'laziness')).toThrow('Такого типа не существует');
  expect(() => new Character('Beelzebub', 0)).toThrow('Такого типа не существует');
});

// проверка создания персонажа
test('character creation check', () => {
  expect(new Daemon('Asmodeus', 'Daemon')).toEqual({
    name: 'Asmodeus',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

// проверка характеристик при повышении уровня
test('checking characteristics when leveling up', () => {
  const Astaroth = new Daemon('Astaroth', 'Daemon');
  Astaroth.levelUp();
  expect(Astaroth).toEqual({
    name: 'Astaroth',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

// проверка повышения уровня мёртвого персонажа
test('leveling up dead character', () => {
  const Azazel = new Daemon('Azazel', 'Daemon');
  Azazel.health = 0;
  expect(() => Azazel.levelUp()).toThrow('Нельзя повысить уровень мёртвого персонажа');
});

// проверка здоровья персонажа при получении урона
test('check character health when taking damage', () => {
  const Veliar = new Daemon('Veliar', 'Daemon');
  Veliar.damage(10);
  expect(Veliar.health).toBe(94);
});

// проверка здоровья у мёртвого персонажа
test('check dead character health', () => {
  const Baal = new Daemon('Baal', 'Daemon');
  Baal.health = 0;
  expect(() => Baal.damage()).toThrow('Персонаж мёртв!');
});
