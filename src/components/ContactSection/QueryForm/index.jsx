import React from 'react';
import { Button, Div, Form, Input, Label, TextArea } from './styles';

export const QueryForm = () => {
  return (
    <Form>
      <Div>
        <Label>Nombre (Obligatorio)</Label>
        <Input />
      </Div>
      <Div>
        <Label>Email (Obligatorio)</Label>
        <Input />
      </Div>
      <Div>
        <Label>Asunto (Obligatorio)</Label>
        <Input />
      </Div>
      <Div>
        <Label>Consulta</Label>
        <TextArea></TextArea>
      </Div>
      <Button>Envía tu mensaje</Button>
    </Form>
  );
};
