import DataTable from 'components/DataTable';
import React from 'react';
import AddButton from 'components/AddButton';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';

function Bebidas() {
  const history = useHistory();
  const columns = [
    {
      name: 'nome',
      label: 'Nome',
      options: {
        filter: false,
      },
    },

    {
      name: 'unidade',
      label: 'Unidade',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'marca',
      label: 'Marca',
      options: {
        filter: false,
      },
    },
  ];
  return (
    <Container>
      <DataTable columns={columns} />
      <AddButton onClick={() => history.push('/produtos/novo')} />
    </Container>
  );
}

export default Bebidas;
