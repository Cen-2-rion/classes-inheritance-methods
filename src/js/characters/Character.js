// базовый класс
export default class Character {
  constructor(name, type, _health, _level, attack, defence) {
    // массив с типами персонажей
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    // проверка имени на строку и количество символов
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    } else {
      this.name = name;
    }

    // проверка типа персонажа на строку и её наличие
    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Такого типа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  // метод увеличения уровня персонажа
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень мёртвого персонажа');
    }
  }

  // метод уменьшения здоровья персонажа
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мёртв!');
    }
  }
}
