import { Button } from '../utils/StyledComponents/Button';
import { SearchInput } from '../utils/StyledComponents/SearchBar';
import { SearchFormStyled } from '../utils/StyledComponents/StyledForm';
import { useQuery, useQueryUpdate } from '../Context/QueryContext';
// import { useNavigate } from "react-router-dom";


const SearchForm = ({ getVideoResult }) => {
  // const navigate = useNavigate();

  const term = useQuery();
  const changeQuery = useQueryUpdate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    getVideoResult(term);
    // navigate("/")  
  };



  return (
    
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
  );
};

export default SearchForm;