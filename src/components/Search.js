import { Button } from '../utils/StyledComponents/Button';
import { SearchInput } from '../utils/StyledComponents/SearchBar';
import { SearchFormStyled } from '../utils/StyledComponents/SearchForm';

const SearchForm = ({ searchTerm, updateSearchTerm, getVideoResult }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    getVideoResult(searchTerm);
  };

  return (
    <SearchFormStyled
      onSubmit={handleSubmit}
    >
      <SearchInput
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <Button onClick={handleClick}>
        Search
      </Button>
    </SearchFormStyled>
  );
};

export default SearchForm;