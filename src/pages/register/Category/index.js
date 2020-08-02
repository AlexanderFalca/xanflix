import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryRegister() {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [key]: value, // nome: 'value'
    });
  }

  function handleChange(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL).then(async (severAnswer) => {
        if (severAnswer.ok) {
          const answer = await severAnswer.json();
          setCategories(answer);
          return;
        }
        throw new Error('Unable to load Data.');
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1> Category Registration</h1>

      <form
        onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategories([...categories, values]);

          setValues(initialValue);
        }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Add</Button>
      </form>

      {categories.length === 0 && <div>Loading... </div>}

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>
      <Link to="/">Back Home</Link>
    </PageDefault>
  );
}

export default CategoryRegister;
