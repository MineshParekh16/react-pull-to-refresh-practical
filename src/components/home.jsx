import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React, { useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const bottomData = [
  {
    athlete: 'Total',
    age: '15 - 61',
    country: 'Ireland',
    year: '2020',
    date: '26/11/1970',
    sport: 'Synchronised Riding',
    gold: 55,
    silver: 65,
    bronze: 12,
  },
];

const Home = () => {

  const defaultColDef = useMemo(
    () => ({
      editable: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    }),
    []
  );

  const columnDefs = useMemo(
    () => [
      { field: 'athlete'},
      { field: 'age'},
      { field: 'country'},
      { field: 'year'},
      { field: 'date'},
      { field: 'sport'},
      {
        headerName: 'Total',
        field: 'total',
        valueGetter: 'data.gold + data.silver + data.bronze',
      },
      { field: 'gold'},
      { field: 'silver'},
      { field: 'bronze'},
    ],
    []
  );

  return (
    <div style={{ flex: 'none', height: '60px' }}>
        <AgGridReact
          rowData={bottomData}
          columnDefs={columnDefs}
        />
    </div>
  );
};

export default Home