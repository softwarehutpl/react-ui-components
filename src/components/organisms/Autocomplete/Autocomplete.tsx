import React, { useState, useRef }from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import { KEY_CODES } from '../../../common/consts/consts';
import useOutsideClick from '../../../common/hooks/clickOutside';
import AutocompleteOptions from './AutocompleteOptions';
import styles from './Autocomplete.module.scss';

export interface WrapperProps {
  width?: number;
};

export interface AutocompleteProps extends WrapperProps {
  options: string[];
  className?: string;
  placeholder?: string;
  noOptionText?: string;
  color?: string;
  showOptionsAfterNumbersOfLetters?: number;
  showMaxNumberOfOptions?: number | null;
  onSelect?: () => void;
  openOnFocus?: boolean;
  disabled?: boolean;
  height?: number;
};

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%' )};
  display: flex;
  flex-direction: column;
`;

export const NoOption = styled.div`
  padding-top: 15px;
`;

const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  options,
  className,
  placeholder,
  noOptionText,
  color,
  onSelect,
  showOptionsAfterNumbersOfLetters,
  showMaxNumberOfOptions,
  disabled,
  openOnFocus,
  width,
  height,
}) => {

  const wrapperRef: React.MutableRefObject<any> = useRef(null);
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filteredOption, setFilteredOption] = useState<any>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [hover, setHover] = useState<any | null>(0);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const filteredOptions = options.filter(option => 
      option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    const showOpions = showMaxNumberOfOptions
    ? filteredOptions.slice(0, showMaxNumberOfOptions)
    : filteredOptions;

      setFilteredOption(showOpions);
      setInputValue(inputValue);
    
    if (showOptionsAfterNumbersOfLetters 
      && showOptionsAfterNumbersOfLetters <= inputValue.length) {
      setShowOptions(true);
    };
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const inputValue = e.currentTarget.innerText;
    setFilteredOption([]);
    setInputValue(inputValue);
    setShowOptions(false);

    if (onSelect) {
      onSelect();
    }
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const onFocus = () => {
    if (openOnFocus && options) {
      setFilteredOption(options);
      setShowOptions(true);
    };
  };

  const onMouseEnter = (e: any, i: number) => {
    setHover(i);
    setActiveOption(i);
  };

  const onMouseLeave = () => {
    setHover(null);
    setActiveOption(0);
  };

  useOutsideClick(wrapperRef, closeOptions);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.keyCode) {
      case KEY_CODES.ENTER_KEY: 
        setActiveOption(0);
        setShowOptions(false);
        if (activeOption) {
          setInputValue(filteredOption[activeOption]);
        }
      break;
      case KEY_CODES.ARROW_UP: 
        if (activeOption === 0) {
          return;
        }
        setActiveOption((activeOption) =>  activeOption - 1);
        setHover(null);
      break;
      case KEY_CODES.ARROW_DOWN: 
        if (activeOption && activeOption - 1 === filteredOption.length) {
          return;
        }
        setActiveOption((activeOption) => activeOption + 1)
        setHover(null);
      break;
      default: 
      return null;
    }
  };

  return (
    <Wrapper 
      className={className} 
      ref={wrapperRef}
      width={width}
    >
      <Input 
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        value={inputValue}
        placeholder={placeholder}
        containerClassName={styles.InputContainer}
        className={styles.Input}
        showPlaceholderOnFocus
        color={color}
        disabled={disabled}
      />
      {showOptions && (
        <>
          {filteredOption.length ? (
            <AutocompleteOptions 
              options={filteredOption} 
              onClick={onClick} 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              activeOption={activeOption}
              color={color}
              height={height}
              hoverOption={hover}
            /> 
          ) : (
            <NoOption>{noOptionText}</NoOption>
          )}
        </>
      )}
    </Wrapper>
  );
}

Autocomplete.defaultProps = {
  noOptionText: 'No options found',
  color: 'primary',
  showOptionsAfterNumbersOfLetters: 3,
  showMaxNumberOfOptions: null,
  placeholder: 'Search',
  disabled: false,
  openOnFocus: false,
};

export default Autocomplete;
