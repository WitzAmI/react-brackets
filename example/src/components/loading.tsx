import React from 'react';
import { SingleElimination, Seed, SeedItem, SeedTeam, SeedTime } from 'tournaments-brackets';
import './loading.css';
const loadingData = [
  {
    title: 'Loading..',
    seeds: [
      {},
      {
        id: 1,
      },
      {},
      {
        id: 1,
      },
    ],
  },
  {
    title: 'Loading..',
    seeds: [...new Array(2)].fill({
      id: 1,
    }),
  },
  {
    title: 'Loading..',
    seeds: [...new Array(1)].fill({
      id: 1,
    }),
  },
];

const RenderLoadingSeed = (seed: any, breakpoint: number) => {
  return (
    <Seed
      // style={{
      //   minWidth: 175,
      //   fontSize: 11,
      // }}
      mobileBreakpoint={breakpoint}
      className='test'
    >
      <SeedItem
        className='skeleton-item'

      >
        <div>
          <SeedTeam>.</SeedTeam>
          <SeedTeam>.</SeedTeam>
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint} style={{ fontSize: 9 }}>
        {seed.date}
      </SeedTime>
    </Seed>
  );
};

const LoadingBracket = () => {
  return <SingleElimination rounds={loadingData} renderSeedComponent={RenderLoadingSeed} />;
};

export default LoadingBracket;
