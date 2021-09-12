import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

const ComboBox = (props) => {
  return (
    <Autocomplete
      {...props}
      options={props.data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

function App() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setList(top100Films);
    }, 3000);
  });

  return (
    <div style={{ margin: 50 }}>
      <header className="App-header">
        <ComboBox id="combo" data={list} />
      </header>
    </div>
  );
}

export default App;
