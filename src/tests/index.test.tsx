import '@testing-library/jest-dom';
import React from 'react';
import { IRoundProps } from '../types/Rounds';
import { SingleElimination as Bracket } from '../brackets';
// import { render } from '@testing-library/react';
import { IRenderSeedProps, ISeedProps } from '../types/Seed';
import { createRoot } from 'react-dom/client';
const container = document.getElementById("app");
const root = createRoot(container); 

test('Works with empty rounds', () => {
  const rounds: IRoundProps[] = [];
  const { container } = root.render(<Bracket rounds={rounds} />);
  expect(container).toBeInTheDocument();
});

test('Works with multiple rounds', () => {
  const filledRounds: IRoundProps[] = [
    {
      title: 'Round 1',
      seeds: [
        {
          id: 1,
          teams: [{ name: 'Team 1', wins: 4, seedNumber: 1, winner: true }, { name: 'Team 2', wins: 1, seedNumber: 4, winner: false }],
        },
        {
          id: 2,
          teams: [{ name: 'Team 3', wins: 3, seedNumber: 2, winner: false }, { name: 'Team 4', wins: 4, seedNumber: 3, winner: true }],
        },
      ],
    },
    {
      title: 'Round 2',
      seeds: [
        {
          id: 3,
          teams: [{ name: 'Team 1', wins: 4, seedNumber: 1, winner: true }, { name: 'Team 4', wins: 2, seedNumber: 3, winner: false  }],
        },
      ],
    },
  ];

  const { getByText } = root.render(<Bracket rounds={filledRounds} />);

  expect(getByText('Round 1')).toBeInTheDocument();
  expect(getByText('Round 2')).toBeInTheDocument();
});

test('Works with custom seed', () => {
  const filledRounds: IRoundProps[] = [
    {
      title: 'Round 1',
      seeds: [
        {
          id: 1,
          teams: [{ name: 'Team 1' }, { name: 'Team 2' }],
        },
        {
          id: 2,
          teams: [{ name: 'Team 3' }, { name: 'Team 4' }],
        },
      ],
    },
    {
      title: 'Round 2',
      seeds: [
        {
          id: 3,
          teams: [{ name: 'Team 1' }, { name: 'Team 4' }],
        },
      ],
    },
  ];

  const RenderSeed = ({ seed }: IRenderSeedProps) => {
    return (
      <div>
        <div>{seed.teams?.[0]?.name}</div>
        <span>VS</span>
        <div>{seed.teams?.[1]?.name}</div>
      </div>
    );
  };

  const { getAllByText, getByText } = root.render(<Bracket rounds={filledRounds} renderSeedComponent={RenderSeed} />);

  console.log(getAllByText);
  expect(getAllByText('VS')[0]).toBeInTheDocument();
  // checking that Team 1 was rendered twice
  expect(getAllByText('Team 1').length).toBe(2);
  expect(getByText('Team 2')).toBeInTheDocument();
});
