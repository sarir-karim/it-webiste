import React from "react";
import { BtnsContainer } from "./PageOneStyles";
import {
  PopupSection,
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
  InstructionSection,
  Title,
  TextAreaContainer,
  TextArea,
  AttachFileContainer,
  AttachFileWrapper,
  AttachFileInput,
  AttachFileLabel,
  AttachFileIcon,
  BtnsContainerS,
  NextBtn,
} from "./PageThreeStyles";

const PageThree = ({ prevStep, nextStep, values }) => {
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
              <InstructionSection>
                <Title>Detailed Instructions</Title>
                <TextAreaContainer>
                  <TextArea />
                </TextAreaContainer>
              </InstructionSection>

              <AttachFileContainer>
                <AttachFileWrapper>
                  <AttachFileInput
                    type="file"
                    value=""
                    name="fileUploader"
                    id="fileUploader1"
                  />
                  <AttachFileIcon />
                  <AttachFileLabel for="fileUploader1">
                    Attach File
                  </AttachFileLabel>
                </AttachFileWrapper>
              </AttachFileContainer>
              {/* <ToggleSwitch /> */}
            </Form>
            <BtnsContainerS>
              <NextBtn onClick={Previous}>Back</NextBtn>
              <NextBtn onClick={Continue}>Next</NextBtn>
            </BtnsContainerS>
          </PopupBody>
        </PopupWrapper>
      </PopupSection>
    </>
  );
};

export default PageThree;
