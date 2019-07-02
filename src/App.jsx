import React from 'react';

import Page from './Page'

import BarChart from './graphs/BarChart'

const dataset = [[{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}],
[{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}]]

function App() {
  return (
    <Page>
      <BarChart dataset={dataset}/>
    </Page>
  );
}

export default App;
