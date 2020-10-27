import React from "react";
import Autosuggest from "react-autosuggest";
import "../css/autocomplete.css";

var languages = [];

const escapeRegexCharacters = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");
  const suggestions = languages.filter((language) => regex.test(language));

  if (suggestions.length === 0) {
    return [{ isAddNew: true }];
  }

  return suggestions;
};

export default class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      suggestions: [],
      categories: props.cat,
      onCategoryChange: props.onCategoryChange
    };

    console.log(props)
  }

  componentDidMount() {
    languages = this.state.categories
    console.log(languages)
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
    this.state.onCategoryChange(this.state.value);
  };

  getSuggestionValue = (suggestion) => {
    if (suggestion.isAddNew) {
      return this.state.value;
    }

    return suggestion;
  };

  renderSuggestion = (suggestion) => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Nueva Categoría: <strong>{this.state.value}</strong>
        </span>
      );
    }

    return suggestion;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.isAddNew) {
      // console.log("Add new:", this.state.value);
      this.state.onCategoryChange(this.state.value);
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Categorías",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    );
  }
}
