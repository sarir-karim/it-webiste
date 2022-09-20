import React from "react";
import {
  PopupSection,
  PopupWrapper,
  PopupHeader,
  HeaderTitle,
  PopupNavbar,
  PageNumberWrapper,
  PageDescriptionsWrapper,
  PageNumber,
  Line,
  PageDescription,
  PopupBody,
  Form,
  PaperTypeSection,
  TopicSection,
  SubjectSection,
  CounterWrapper,
  CounterDescription,
  DeadlineSection,
  Label,
  Select,
  Option,
  Input,
  DeadlineContainer,
  DeadlineSelect,
  BtnsContainer,
  NextBtn,
} from "./PageOneStyles";
import Counter from "../Counter/Counter";

const PageOne = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <PopupSection>
        <PopupWrapper>
          <PopupHeader>
            <HeaderTitle>
              Just 3 steps and your <br /> order will be on its way to
              completion!
            </HeaderTitle>

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
              <PaperTypeSection>
                <Label>Paper Type</Label>
                <Select>
                  <Option>Essay (Any Type)</Option>
                  <Option>Wesay (Keny Type)</Option>
                  <Option>Kesay (Sheny Type)</Option>
                </Select>
              </PaperTypeSection>
              <TopicSection>
                <Label>Topic</Label>
                <Input type="text" placeholder="Main Idea" />
              </TopicSection>
              <SubjectSection>
                <Label>Subject</Label>
                <Select>
                  <Option>Other</Option>
                  <Option>Mother</Option>
                  <Option>Father</Option>
                </Select>
              </SubjectSection>
              <CounterWrapper>
                <Counter />
                <CounterDescription>
                  500 Words
                  <br />
                  double spacing
                </CounterDescription>
              </CounterWrapper>
              <DeadlineSection>
                <Label>Deadline: 12 days left</Label>
                <DeadlineContainer>
                  <DeadlineSelect>
                    <Option>20 June</Option>
                    <Option>30 June</Option>
                    <Option>40 June</Option>
                  </DeadlineSelect>
                  <DeadlineSelect>
                    <Option>3 PM</Option>
                    <Option>4 PM</Option>
                    <Option>5 PM</Option>
                  </DeadlineSelect>
                </DeadlineContainer>
              </DeadlineSection>
            </Form>
            <BtnsContainer>
              <NextBtn onClick={Continue}>Next</NextBtn>
            </BtnsContainer>
          </PopupBody>
        </PopupWrapper>
      </PopupSection>
    </>
  );
};

export default PageOne;
