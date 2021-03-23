import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField, Checkbox } from 'final-form-material-ui';

import { validate } from 'utils/validate';
import { schema } from './schema';

import { FormControlLabel } from '@material-ui/core';

const focusOnErrors = createDecorator();

function UserForm({ onSubmit, footer = () => {}, initialValues = {} }) {
  const options = [
    {
      name: 'Administrador',
      id: 1,
    },
    {
      name: 'Usuário',
      id: 2,
    },
  ];

  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      initialValues={{ status: true, ...initialValues }}
      render={props => {
        const { handleSubmit } = props;
        return (
          <form onSubmit={handleSubmit} noValidate>
            <FormControlLabel
              control={
                <Field
                  name="status"
                  type="checkbox"
                  component={Checkbox}
                  variant="outlined"
                  color="primary"
                />
              }
              label="Ativo"
            />
            <Field
              name="username"
              autoFocus
              type="text"
              component={TextField}
              label="Nome"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Field
              name="email"
              type="email"
              component={TextField}
              label="E-mail"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Field
              name="profiles"
              variant="outlined"
              options={options}
              label="Perfis de acesso"
              fullWidth
              labelAttr="name"
              valueAttr="id"
              margin="normal"
            />
            {footer(props)}
          </form>
        );
      }}
    />
  );
}

export default UserForm;
