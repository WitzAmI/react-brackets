import { IRoundProps } from './Rounds';

export type ISeedProps = {
  id: number | string;
  teams: Array<{ 
      name?: string;
      seedNumber?: number;
      wins?: number;
      winner?: boolean; 
      [key: string]: any 
    }>;
  date?: string;
  mobileBreakpoint?: number;
  [key: string]: any;
};

export interface IRenderSeedProps {
  seed: ISeedProps;
  breakpoint: number;
  roundIndex: number;
  seedIndex: number;
  rounds?: IRoundProps[];
}