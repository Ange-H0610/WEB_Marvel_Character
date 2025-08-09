import React, { useState } from 'react';
import { Character } from './components/Character';
import { CharacterTable } from './components/CharacterTable';
import { AddCharacterForm } from './components/AddCharacterForm';
import './styles.css';

const initialCharacters: Character[] = [
  { id: 1, name: 'Spider-Man', realName: 'Peter Parker', universe: 'Marvel' },
  { id: 2, name: 'Iron Man', realName: 'Tony Stark', universe: 'Marvel' }
];

export const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [editing, setEditing] = useState<Character | null>(null);

  const handleAdd = (newChar: Omit<Character, 'id'>) => {
    setCharacters([...characters, { ...newChar, id: Date.now() }]);
  };

  const handleUpdate = (updatedChar: Omit<Character, 'id'>) => {
    if (!editing) return;
    
    setCharacters(characters.map(c => 
      c.id === editing.id ? { ...updatedChar, id: editing.id } : c
    ));
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    setCharacters(characters.filter(c => c.id !== id));
  };

  return (
    <div className="app">
      <h1>Gestion des Personnages</h1>
      
      <CharacterTable
        characters={characters}
        onDelete={handleDelete}
        onEdit={setEditing}
      />
      
      <h2>{editing ? 'Modifier' : 'Ajouter'} un personnage</h2>
      <AddCharacterForm
        initialData={editing || undefined}
        onSubmit={editing ? handleUpdate : handleAdd}
        onCancel={() => setEditing(null)}
      />
    </div>
  );
};