export interface Character {
  id: number;
  name: string;
  realName: string;
  universe: 'Marvel' | 'DC' | 'Autre'; // Limite les univers possibles
}