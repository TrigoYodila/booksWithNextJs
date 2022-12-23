import React from 'react'
import { sendBook } from '../api-helpers/frontend/utils';
import Form from './Form'

export default function Add() {
  const getFormData = (data) => {
    sendBook(data)
    .then((value)=>console.log(value))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <Form onSubmit={getFormData} />
    </div>
  );
}
