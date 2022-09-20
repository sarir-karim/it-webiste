import styled from "styled-components";
import { FiUpload } from "react-icons/fi";

export const PopupSection = styled.div`
  width: 100%;
  height: 100vh;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupWrapper = styled.div`
  /* width: 40vw; */
  /* height: auto;  */
  border-radius: 8px;
  
  width: 415px;
  height: 98vh;
`;

export const PopupHeader = styled.div`
  background: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  /* padding: 50px 0; */

  padding: 35px 0;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PopupNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 90%;
`;

export const PageNumberWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const PageNumber = styled.li`
  /* width: 50px;
  height: 50px; */
  border-radius: 50%;
  border: 1px solid #ef7b50;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ef7b50;

  width: 40px;
  height: 40px;
`;

export const Line = styled.hr`
  /* width: 6vw; */
  border-top: 1px dotted #ef7b50;
  border-right: none;
  border-bottom: none;
  border-left: none;

  width: 15%;
`;

export const PageDescriptionsWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  gap: 3.5vw; */

  justify-content: space-between;
`;

export const PageDescription = styled.p`
  font-size: 0.85rem;
  color: #342e2e;
  /* font-weight: bold; */

  font-weight: 500;
`;

export const PopupBody = styled.div`
  width: 100%;
  /* height: auto;
  padding: 50px 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2e2e36;

  height: 75%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Form = styled.form`
  /* width: 30vw; */
  background: transparent;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */

  gap: 15px;
  width: 85%;
`;

export const InstructionSection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

  width: 100%;
  gap: 5px;
`;

export const Title = styled.p`
  color: #ffffff;
  /* font-size: 1rem; */

  width: fit-content;
  font-size: 1rem;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #ef7b50;
  border-radius: 8px;
`;

export const TextArea = styled.textarea`
  max-width: 100%;
  height: 100%;
  background: transparent;
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  border: none;
  padding: 10px;
`;

export const AttachFileContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ef7b50;
  border-radius: 8px;
`;
export const AttachFileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AttachFileInput = styled.input`
  display: none;
`;

export const AttachFileLabel = styled.label`
  color: #ef7b50;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const AttachFileIcon = styled(FiUpload)`
  color: #96969a;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const BtnsContainerS = styled.div`
  display: flex;
  gap: 5%;
`;

export const NextBtn = styled.button`
  /* width: 10vw;
  height: 8vh;
  margin-top: 40px; */
  background: #ef7b50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  /* font-size: 1rem; */
  letter-spacing: 1px;

  width: 100px;
  height: 6.5vh;
  font-size: 0.875rem;
  margin-top: 3.5vh;
`;
