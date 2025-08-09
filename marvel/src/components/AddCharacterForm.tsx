import React, { useState, useEffect } from 'react';
import { Character } from './Character';

interface FormProps {
  initialData?: Partial<Character>;
  onSubmit: (data: Omit<Character, 'id'>) => void;
  onCancel: () => void;
}

export const AddCharacterForm: React.FC<FormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel 
}) => {
  const [form, setForm] = useState<Omit<Character, 'id'>>({ 
    name: '',
    realName: '',
    universe: 'Marvel'
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || '',
        realName: initialData.realName || '',
        universe: initialData.universe || 'Marvel'
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="character-form">
      <label>
        Nom:
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
      </label>

      <label>
        Vrai nom:
        <input
          type="text"
          value={form.realName}
          onChange={(e) => setForm({...form, realName: e.target.value})}
        />
      </label>

      <label>
        Univers:
        <select
          value={form.universe}
          onChange={(e) => setForm({...form, 
            universe: e.target.value as Character['universe']})}
        >
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="Autre">Autre</option>
        </select>
      </label>

      <div className="form-actions">
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onCancel}>Annuler</button>
      </div>
    </form>
  );
};