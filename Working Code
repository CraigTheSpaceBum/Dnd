import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const DnDCharacterManager = () => {
  const [characters, setCharacters] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    backstory: '',
  });

  const races = [
    'Human', 'Elf', 'Dwarf', 'Halfling', 'Orc', 'Tiefling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc'
  ];
  const classes = [
    'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
  ];

  const handleChange = (field, value) => {
    setNewCharacter({ ...newCharacter, [field]: value });
  };

  const handleStatChange = (stat, value) => {
    setNewCharacter({
      ...newCharacter,
      stats: { ...newCharacter.stats, [stat]: value },
    });
  };

  const addCharacter = () => {
    if (editingIndex !== null) {
      const updatedCharacters = [...characters];
      updatedCharacters[editingIndex] = newCharacter;
      setCharacters(updatedCharacters);
      setEditingIndex(null);
    } else {
      setCharacters([...characters, newCharacter]);
    }
    resetForm();
  };

  const editCharacter = (index) => {
    setNewCharacter(characters[index]);
    setEditingIndex(index);
  };

  const resetForm = () => {
    setNewCharacter({
      name: '',
      race: '',
      class: '',
      level: 1,
      background: '',
      stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
      backstory: '',
    });
  };

  const rollStats = () => {
    const roll = () => Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    setNewCharacter({
      ...newCharacter,
      stats: {
        str: roll(),
        dex: roll(),
        con: roll(),
        int: roll(),
        wis: roll(),
        cha: roll(),
      },
    });
  };

  const randomizeRace = () => {
    const randomRace = races[Math.floor(Math.random() * races.length)];
    setNewCharacter({ ...newCharacter, race: randomRace });
  };

  const randomizeClass = () => {
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    setNewCharacter({ ...newCharacter, class: randomClass });
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">DnD Character Manager</h1>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">
            {editingIndex !== null ? 'Edit Character' : 'Create New Character'}
          </h2>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Input
              placeholder="Name"
              value={newCharacter.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Race</label>
            <select
              className="w-full p-2 border rounded"
              value={newCharacter.race}
              onChange={(e) => handleChange('race', e.target.value)}
            >
              <option value="" disabled>
                Select Race
              </option>
              {races.map((race) => (
                <option key={race} value={race}>
                  {race}
                </option>
              ))}
            </select>
            <Button onClick={randomizeRace}>Random Race</Button>
          </div>
          <div>
            <label className="block text-sm font-medium">Class</label>
            <select
              className="w-full p-2 border rounded"
              value={newCharacter.class}
              onChange={(e) => handleChange('class', e.target.value)}
            >
              <option value="" disabled>
                Select Class
              </option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
            <Button onClick={randomizeClass}>Random Class</Button>
          </div>
          <div>
            <label className="block text-sm font-medium">Level</label>
            <Input
              type="number"
              placeholder="Level"
              value={newCharacter.level}
              onChange={(e) => handleChange('level', parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Background</label>
            <Input
              placeholder="Background"
              value={newCharacter.background}
              onChange={(e) => handleChange('background', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Stats</h3>
            <Button onClick={rollStats}>Random Roll</Button>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(newCharacter.stats).map(([stat, value]) => (
                <div key={stat}>
                  <label className="block text-sm font-medium">{stat.toUpperCase()}</label>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => handleStatChange(stat, parseInt(e.target.value))}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Backstory</label>
            <Textarea
              placeholder="Backstory"
              value={newCharacter.backstory}
              onChange={(e) => handleChange('backstory', e.target.value)}
            />
          </div>
          <Button onClick={addCharacter}>
            {editingIndex !== null ? 'Update Character' : 'Add Character'}
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Characters</h2>
        {characters.map((char, index) => (
          <Card key={index}>
            <CardContent className="space-y-2">
              <h3 className="text-lg font-bold">{char.name}</h3>
              <p>Race: {char.race}</p>
              <p>Class: {char.class}</p>
              <p>Level: {char.level}</p>
              <p>Background: {char.background}</p>
              <p>Stats: STR {char.stats.str}, DEX {char.stats.dex}, CON {char.stats.con}, INT {char.stats.int}, WIS {char.stats.wis}, CHA {char.stats.cha}</p>
              <p>Backstory: {char.backstory}</p>
              <Button onClick={() => editCharacter(index)}>Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DnDCharacterManager;
