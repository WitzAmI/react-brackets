import React from 'react';
import { Seed, SeedItem, SeedTeam, SeedTime, SeedWins, SeedNumber } from '../components/seed';
import { RoundTitle } from '../components/round';
import { IRenderSeedProps } from '../types/Seed';

/* ------------------------- default title component ------------------------ */
export const renderTitle = (title: string | JSX.Element) => <RoundTitle>{title}</RoundTitle>;

/* ------------------------- default seed component ------------------------- */
export const renderSeed = ({ seed, breakpoint }: IRenderSeedProps) => {
  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem>
        <div>
          <SeedNumber>{seed.teams?.[0]?.seedNumber || "-"}</SeedNumber><SeedTeam>{seed.teams?.[0]?.name || '-----------'}</SeedTeam><SeedWins>{seed.teams?.[0]?.wins || "-"}</SeedWins>
          <SeedNumber>{seed.teams?.[1]?.seedNumber || "-"}</SeedNumber><SeedTeam>{seed.teams?.[1]?.name || '-----------'}</SeedTeam><SeedWins>{seed.teams?.[0]?.wins || "-"}</SeedWins>
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint}>{seed?.date}</SeedTime>
    </Seed>
  );
};