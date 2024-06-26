import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Zombie from './characters/Zombie';

const player1 = new Bowman('Legolas', 'Bowman');
const player2 = new Swordsman('Gimli', 'Swordsman');
const player3 = new Magician('Gandalf', 'Magician');
const player4 = new Daemon('Sauron', 'Daemon');
const player5 = new Undead('Saruman', 'Undead');
const player6 = new Zombie('Uruk-hai', 'Zombie');

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);
console.log(player6);
