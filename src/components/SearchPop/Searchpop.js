import React from "react";
import { IoMdSearch } from "react-icons/io";

import {
  SearchContainer,
  Icon,
  CloseIcon,
  SearchWrapper,
  SerachTop,
  Heading,
  Form,
  KeyWord,
  AllDropdowns,
  CityDrop,
  Button,
  Left,
  Rigth,
  Option,
  Label,
  Select,
  Input,
} from "./SearchpopE";

const Searchpop = ({ isOpenone, toggleone }) => {
  return (
    <SearchContainer isOpenone={isOpenone}>
      <Left></Left>
      <Rigth>
        {" "}
        <SerachTop>
          <Icon>
            <CloseIcon onClick={toggleone} />
          </Icon>

          <Heading>Search Property</Heading>
        </SerachTop>
        <SearchWrapper>
          <Form>
            <KeyWord class="Form-group">
              <Label class="" for="Type">
                Keyword
              </Label>
              <Input type="text" placeholder="Keyword" />
            </KeyWord>
            <AllDropdowns>
              <CityDrop>
                <Label>type</Label> <br></br>
                <Select>
                  <Option>All City</Option>
                  <Option>City one</Option>
                  <Option>City two</Option>
                  <Option>City three</Option>
                </Select>
              </CityDrop>
              <CityDrop>
                <Label>City</Label> <br></br>
                <Select>
                  <Option>All City</Option>
                  <Option>City one</Option>
                  <Option>City two</Option>
                  <Option>City three</Option>
                </Select>
              </CityDrop>
              <CityDrop>
                <Label>Bedrooms</Label> <br></br>
                <Select>
                  <Option>Any</Option>
                  <Option>02</Option>
                  <Option>02</Option>
                  <Option>03</Option>
                </Select>
              </CityDrop>
              <CityDrop>
                <Label>Garages</Label> <br></br>
                <Select>
                  <Option>Any</Option>
                  <Option>o1</Option>
                  <Option>02</Option>
                  <Option>03</Option>
                </Select>
              </CityDrop>
              <CityDrop>
                <Label>Bathrooms</Label> <br></br>
                <Select>
                  <Option>Any</Option>
                  <Option>01</Option>
                  <Option>02</Option>
                  <Option>02</Option>
                </Select>
              </CityDrop>
              <CityDrop>
                <Label>Mine Price</Label> <br></br>
                <Select>
                  <Option>unlimited</Option>
                  <Option>$50,000</Option>
                  <Option>$50,000,000</Option>
                  <Option>$50,000,000,00</Option>
                </Select>
              </CityDrop>
            </AllDropdowns>
            <Button>Search Property</Button>
          </Form>
        </SearchWrapper>
      </Rigth>
    </SearchContainer>
  );
};

export default Searchpop;
