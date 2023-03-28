import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { SearchBox,  Form, Searchbar, SearchBtn } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast('Please, enter something to search');
      return;
    }

   onSubmit(query);
    setQuery('');
  };

  return (
    <SearchBox>
      < Form onSubmit={handleSubmit}>
        <Searchbar
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieName"
          value={query}
          onChange={handleInputChange}
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </ Form>
    </SearchBox>
  );
};

