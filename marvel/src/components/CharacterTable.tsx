import React from 'react';
import { Character } from './Character';

interface TableProps {
  characters: Character[];
  onDelete: (id: number) => void;
  onEdit: (character: Character) => void;
}

export const CharacterTable: React.FC<TableProps> = ({ 
  characters, 
  onDelete, 
  onEdit 
}) => {
  if (characters.length === 0) {
    return <p className="no-characters">Aucun personnage à afficher</p>;
  }

  return (
    <table className="marvel-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Vrai Nom</th>
          <th>Univers</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((char) => (
          <tr key={char.id}>
            <td>{char.id}</td>
            <td>{char.name}</td>
            <td>{char.realName || '-'}</td>
            <td>{char.universe}</td>
            <td className="action-buttons">
              <button 
                onClick={() => onEdit(char)} 
                className="edit-btn"
                aria-label="Modifier"
              >
                <span role="img" aria-hidden="true"></span> Update
              </button>
              <button 
                onClick={() => onDelete(char.id)} 
                className="delete-btn"
                aria-label="Supprimer"
              >
                <span role="img" aria-hidden="true"></span> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};