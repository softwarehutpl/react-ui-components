import React, { useState }from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import { KEY_CODES } from '../../../common/consts/consts';

export interface AutocompleteProps {
  options: string[];
  className?: string;
  placeholder?: string;
};

export const Wrapper = styled.div``;

export const OptionListWrapper = styled.ul``;
export const OptionItem = styled.li``;
export const NoOption = styled.div``;

const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  options,
  className,
  placeholder,
}) => {

  const [activeOption, setActiveOption] = useState<number>(0);
  const [filteredOption, setFilteredOption] = useState<any>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const filteredOptions = options.filter(option => 
      option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    setFilteredOption(filteredOptions);
    setInputValue(inputValue);
    setShowOptions(true);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const inputValue = e.currentTarget.innerText;
    setFilteredOption([]);
    setInputValue(inputValue);
    setShowOptions(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.keyCode) {
      case KEY_CODES.ENTER_KEY: 
        setActiveOption(0);
        setShowOptions(false);
        setInputValue(filteredOption[activeOption]);
      break;
      case KEY_CODES.ARROW_UP: 
        if (activeOption === 0) {
          return;
        }
        setActiveOption((activeOption) =>  activeOption - 1);
      break;
      case KEY_CODES.ARROW_DOWN: 
        if (activeOption - 1 === filteredOption.length) {
          return;
        }
        setActiveOption((activeOption) => activeOption + 1)
      break;
      default: 
      return null;
    }
  };

  return (
    <Wrapper className={className}>
      <Input 
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={inputValue}
        placeholder={placeholder}
        showPlaceholderOnFocus
      />
      {showOptions && inputValue && (
        <>
          {filteredOption.length ? (
             <OptionListWrapper>
               {filteredOption.map((option: string,index: number) => (
                 <OptionItem
                    key={option}
                    onClick={onClick}
                 >
                   {option}
                  </OptionItem>
               ))}
             </OptionListWrapper>
          ) : (
            <NoOption>No options found</NoOption>
          )}
        </>
      )}
    </Wrapper>
  );
}
export default Autocomplete;
