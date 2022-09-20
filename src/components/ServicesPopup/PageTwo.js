import React from "react";
import Counter from "../Counter/Counter";
import {
  PopupSection,
  // Para,
  // OpenPopup,
  PopupWrapper,
  PopupHeader,
  PopupNavbar,
  PageNumberWrapper,
  PageDescriptionsWrapper,
  PageNumber,
  Line,
  PageDescription,
  PopupBody,
  Form,
  OrderSection,
  Title,
  OrderRadioWrapper,
  OrderRadioInput,
  OrderRadioLabel,
  WriterSection,
  WriterContainer,
  WriterRadioWrapper,
  WriterRadioInput,
  WriterRadioLabel,
  TextArea,
    CounterWrapper,
    CounterDescription,
  FormatingSection,
  Label,
  Select,
  Option,
  BtnsContainer,
  NextBtn,
} from "./PageTwoStyles";

const PageTwo = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <PopupSection>
        <PopupWrapper>
          <PopupHeader>
            <PopupNavbar>
              <PageNumberWrapper>
                <PageNumber>1</PageNumber>
                <Line />
                <PageNumber>2</PageNumber>
                <Line />
                <PageNumber>3</PageNumber>
                <Line />
                <PageNumber>4</PageNumber>
              </PageNumberWrapper>

              <PageDescriptionsWrapper>
                <PageDescription>Place Order</PageDescription>
                <PageDescription>Choose Writer</PageDescription>
                <PageDescription>Review Order</PageDescription>
                <PageDescription>Add Funds</PageDescription>
              </PageDescriptionsWrapper>
            </PopupNavbar>
          </PopupHeader>

          <PopupBody>
            <Form>
              <OrderSection>
                <Title>Order Type</Title>
                <OrderRadioWrapper>
                  <OrderRadioInput
                    type="radio"
                    value="writing"
                    name="orderRadio"
                    id="orderRadio1"
                  />
                  <OrderRadioLabel for="orderRadio1">Writing</OrderRadioLabel>

                  <OrderRadioInput
                    type="radio"
                    value="rewriting"
                    name="orderRadio"
                    id="orderRadio2"
                  />
                  <OrderRadioLabel for="orderRadio2">Rewriting</OrderRadioLabel>

                  <OrderRadioInput
                    type="radio"
                    value="editing"
                    name="orderRadio"
                    id="orderRadio3"
                  />
                  <OrderRadioLabel for="orderRadio3">Editing</OrderRadioLabel>
                </OrderRadioWrapper>
              </OrderSection>

              <WriterSection>
                <Title>Writer Level</Title>

                <WriterContainer>
                  <WriterRadioWrapper>
                    <WriterRadioInput
                      type="radio"
                      value="allLevels"
                      name="writerRadio"
                      id="writerRadio1"
                    />
                    <WriterRadioLabel for="writerRadio1">
                      All Levels
                    </WriterRadioLabel>

                    <WriterRadioInput
                      type="radio"
                      value="gold"
                      name="writerRadio"
                      id="writerRadio2"
                    />
                    <WriterRadioLabel for="writerRadio2">Gold</WriterRadioLabel>

                    <WriterRadioInput
                      type="radio"
                      value="premium"
                      name="writerRadio"
                      id="writerRadio3"
                    />
                    <WriterRadioLabel for="writerRadio3">
                      Premium
                    </WriterRadioLabel>
                  </WriterRadioWrapper>
                  <TextArea />
                </WriterContainer>
              </WriterSection>

              <CounterWrapper>
                <Counter />
                <CounterDescription>
                  500 Words
                  <br />
                  double spacing
                </CounterDescription>
              </CounterWrapper>

              <FormatingSection>
                <Label>Formating Style</Label>
                <Select>
                  <Option>Other</Option>
                  <Option>Mother</Option>
                  <Option>Father</Option>
                </Select>
              </FormatingSection>
            </Form>
            <BtnsContainer>
              <NextBtn onClick={Previous}>Back</NextBtn>
              <NextBtn onClick={Continue}>Next</NextBtn>
            </BtnsContainer>
          </PopupBody>
        </PopupWrapper>
      </PopupSection>
    </>
  );
};

export default PageTwo;
