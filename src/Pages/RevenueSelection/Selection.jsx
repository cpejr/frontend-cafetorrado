/* eslint-disable */

import React, { useState, useCallback, useRef } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import "./Selection.css";
import { MemoryRouter } from 'react-router-dom';
import { Backspace, ColorLensOutlined } from '@material-ui/icons';
import { colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

function Selection () {
  
const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.nome.indexOf(value) === 0,
    sorter: (a, b) => a.nome.length - b.nome.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Data',
    dataIndex: 'data',
  
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.data - b.data,
  },
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.descricao.length - b.descricao.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    nome: 'Café-arábica',
    data: '20/08/2020',
    descricao: 'Um café perfeito',
  },
  {
    key: '2',
    nome: 'Café Robusta',
    data: '17/02/2021',
    descricao: 'Café queimou',
  },
  {
    key: '3',
    nome: 'Café Excelsa',
    data: '27/10/2020',
    descricao: 'Torra média',
  },
  {
    key: '4',
    nome: 'Café',
    data: '02/12/2020',
    descricao: 'Torra clara',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

return (<div className= "table"><Table rowClassName={()=>(blue)} columns={columns} dataSource={data} onChange={onChange} /> </div>)

}
export default Selection;
