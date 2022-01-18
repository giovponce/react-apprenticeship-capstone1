import { Button } from '../utils/StyledComponents/Button';
import { SearchInput } from '../utils/StyledComponents/SearchBar';
import { SearchFormStyled } from '../utils/StyledComponents/SearchForm';
import { useQuery, useQueryUpdate } from '../Context/QueryContext';
import { QueryProvider } from '../Context/QueryContext';

const SearchForm = ({ searchTerm, getVideoResult }) => {

  const term = useQuery();
  const changeQuery = useQueryUpdate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    getVideoResult(term);
  };



  return (
    <QueryProvider>
      <SearchFormStyled
        onSubmit={handleSubmit}
      >
        <SearchInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
          data-testid="search-input"
          onChange={(e) => changeQuery(e.target.value)}
        />
        <Button onClick={handleClick}>
          Search
        </Button>
      </SearchFormStyled>
    </QueryProvider>
  );
};

export default SearchForm;