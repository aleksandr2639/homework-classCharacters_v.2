import Character from '../Character';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('invalid name length', () => {
  const result = new Character('FiremanHuman', 'Bowman', 100, 1, 25, 25);
  expect(() => result).toThrow('invalid name length');
});

test('invalid name length', () => {
  const result = new Character('G', 'Undead', 100, 1, 25, 25);
  expect(() => result).toThrow('invalid name length');
});

test('Invalid type', () => {
  const result = new Character('Petr', 'Wolfhound', 100, 1, 25, 25);
  expect(() => result).toThrow('Invalid type');
});

test('Bowerman', () => {
  const personBowman = new Bowerman('John');
  expect(personBowman).toEqual({
    name: 'John',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  const personZombie = new Zombie('Marie');
  expect(personZombie).toEqual({
    name: 'Marie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  const personUndead = new Undead('Alex');
  expect(personUndead).toEqual({
    name: 'Alex',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Daemon', () => {
  const personDaemon = new Daemon('Danny');
  expect(personDaemon).toEqual({
    name: 'Danny',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  const personMagician = new Magician('Julia');
  expect(personMagician).toEqual({
    name: 'Julia',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  const personSwordsman = new Swordsman('Cris');
  expect(personSwordsman).toEqual({
    name: 'Cris',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('method levelup successful', () => {
  const personBowman = new Character('John', 'Bowerman', 25, 25);
  personBowman.levelUp();
  expect(personBowman).toEqual({
    name: 'John',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('method levelup unsuccessful', () => {
  const personBowman = new Character('John', 'Bowerman', 25, 25);
  personBowman.health = 0;
  expect(() => personBowman.levelUp()).toThrow(
    'cannot raise the level!',
  );
});

test('method damage successful', () => {
  const personBowman = new Character('John', 'Bowerman', 25, 25);
  personBowman.damage(20);
  expect(personBowman).toEqual({
    name: 'John',
    type: 'Bowerman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('method damage unsuccessful', () => {
  const personBowman = new Character('John', 'Bowerman', 25, 25);
  personBowman.health = 0;
  personBowman.damage(30);
  expect(personBowman.health).toEqual(0);
});
