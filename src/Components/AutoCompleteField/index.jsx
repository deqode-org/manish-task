import React from "react";
import { debounce } from "lodash";
import OnOutsiceClick from "react-outclick";
import styles from "./autoCompleteField.module.css";
import { KEYS_MAPPING } from "../../constants";
import getSuggestions from "../../Api/index";

class AutoCompleteField extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      options: [],
      activeIndex: 0,
      searchedWord: "",
      showOptions: false,
    };

    this.inputRef = React.createRef();
    this.debouncedSearch = debounce(this.getWordSuggestions, 400);
  }

  // On change of input value we have to search suggestions
  onInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue })

    // Do not show suggestions if input value is empty string
    if (inputValue !== "") {
      const lastCharacter = inputValue.slice(-1);
      // Do not show suggestions if last character is space(" ")
      if (lastCharacter === " ") {
        this.setState({ options: [], activeIndex: 0 });
        return;
      }

      // Find suggestions based on last word
      const inputs = inputValue.split(" ").filter((word) => word !== "");
      const wordToBeSearched = inputs.pop();

      this.setState({ searchedWord: wordToBeSearched });
      this.debouncedSearch(wordToBeSearched);
    } else {
      this.setState({ options: [], activeIndex: 0 });
    }
  }

  getWordSuggestions = (word) => {
    getSuggestions(word)
      .then((suggestions) => {
        this.setState({ options: suggestions, activeIndex: 0, showOptions: true });
      })
      .catch(console.error);
  }

  onSelectOption = (inputOption) => {
    const { inputValue } = this.state;
    // If API does not return any result and value is selected, setting the typed value with space
    if (inputOption === undefined) {
      this.setState({ inputValue: inputValue.concat(" ") });
    } else {
      // Append suggestion and update  input value
      const option = inputOption + " ";

      let updatedValue = inputValue;

      if (inputValue !== "") {
        const words = inputValue.split(" ").slice(0, -1);
        words.push(option);
        updatedValue = words.join(" ");
      } else {
        updatedValue.concat(option);
      }
      this.setState({ inputValue: updatedValue, activeIndex: 0, options: [] });
    }

    // Set focus to input on select
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  // Highlights the matched characters in suggestions
  highlightOption = (option) => {
    return option.replace(
      new RegExp(this.state.searchedWord, "gi"),
      (match) => `<span class="${styles.highlight}">${match}</span>`
    );
  };

  // Selecting suggestions through key press
  handleKeyPress = (event) => {
    const { activeIndex, options } = this.state;
    if (event.keyCode === KEYS_MAPPING.ENTER) {
      this.onSelectOption(options[activeIndex]);
    } else if (event.keyCode === KEYS_MAPPING.UP_ARROW) {
      event.preventDefault();
      if (activeIndex === 0) {
        return;
      }
      this.setState({ activeIndex: activeIndex - 1 });
    } else if (event.keyCode === KEYS_MAPPING.DOWN_ARROW) {
      event.preventDefault();
      if (activeIndex === options.length - 1) {
        return;
      }
      this.setState({ activeIndex: activeIndex + 1 });
    }
  };

  onOutsideClick = () => {
    this.setState({ showOptions: false })
  }

  render() {
    return (
    <OnOutsiceClick onOutsideClick={this.onOutsideClick}>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputInnerContainer}>
            <input
              className={styles.inputSearch}
              ref={this.inputRef}
              type="text"
              onChange={this.onInputChange}
              onKeyDown={this.handleKeyPress}
              value={this.state.inputValue}
            />
          </div>
        </div>
        {this.state.showOptions && this.state.options.length !== 0 && (
          <div className={styles.optionsContainer}>
            {this.state.options.map((option, index) => (
              <div
                key={option}
                className={
                  index === this.state.activeIndex ? styles.activeOption : styles.option
                }
                onClick={() => this.onSelectOption(option)}
                dangerouslySetInnerHTML={{ __html: this.highlightOption(option) }}
              />
            ))}
          </div>
        )}
      </div>
    </OnOutsiceClick>
    );
  }
}

export default AutoCompleteField;
