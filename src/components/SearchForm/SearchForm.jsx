import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const SearchForm = ({ getMovieOnSearch }) => {
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

    getMovieOnSearch(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// export const SearchForm = () => {
//     [searchQuery, setSearchQuery] = useState('')

//     const handleInputChange = event =>
//         setSearchQuery(event.currentTarget.value.toLowerCase());

//     const handleSubmit = event => {
//         event.preventDefault();

//         if (searchQuery.trim().replaceAll(/\s+/g, '+') === '') {
//             toast('Please, enter something to search');
//             return;
//         }

//         // onSubmit(searchQuery);
//         setInputQuery('');
//     };

//    return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//           value={searchQuery}
//           onChange={handleInputChange}
//         />

//         <button type="submit">Search</button>
//       </form>
//     </section>
//   );
// }
