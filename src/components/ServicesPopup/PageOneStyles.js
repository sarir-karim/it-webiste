import styled from "styled-components";

export const PopupSection = styled.div`
  width: 100%;
  height: auto;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 3px solid red; */
`;

export const PopupWrapper = styled.div`
  /* width: 40vw; */
  /* height: auto; */
  border-radius: 8px;

/* ////////////////////////////////////////////////////////////////////////// */
  /* border: 3px solid greenyellow; */
  /* height: 98vh; */
  /* width: 30%; */
  height: auto;
  width: 40%;
`;

export const PopupHeader = styled.div`
  background: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 35px 0;

/* //////////////////////////////////////////////////////////////////////////////// */
  /* border: 2px dashed crimson; */
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const HeaderTitle = styled.div`
  /* font-size: 1.5rem; */
  font-weight: 500;
  text-align: center;
  /* margin-bottom: 25px; */

  /* ////////////////////////////////////////////////////////////////////////////// */
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
export const PopupNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content:center ;
  align-items: center;
  /* gap: 10px; */

  /* border: 1px solid; */
  width: 80%;
`;

export const PageNumberWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid; */
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
  width: 15%;
  border-top: 1px dotted #ef7b50;
  border-right: none;
  border-bottom: none;
  border-left: none;
`;

export const PageDescriptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 3vw; */
`;

export const PageDescription = styled.p`
  font-size: 0.85rem;
  color: #342e2e;
  font-weight: 500;
`;

export const PopupBody = styled.div`
  width: 100%;
  /* height: auto; */
  /* padding: 50px 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2e2e36;

/* //////////////////////////////////////////////////////////////////////////////////// */
  /* border: 2px dashed crimson; */
  height: 72%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  /* padding: 50px 0; */
`;
export const Form = styled.form`
  /* width: 30vw; */
  background: transparent;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */

/* /////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 2px solid blue; */
  gap: 15px;
  width: 85%;
  
`;

export const PaperTypeSection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

  /* ////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 1px solid grey; */
  width: 100%;
  gap: 5px;
`;

export const TopicSection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  
  /* ///////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 1px solid grey; */
  width: 100%;
  gap: 5px;
`;

export const SubjectSection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  
  /* /////////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 1px solid grey; */
  width: 100%;
  gap: 5px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  gap: 20px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CounterDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  /* line-height: 25px; */

  font-size: 0.875rem;
  line-height: 20px;
  text-align: start;
`;


export const DeadlineSection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

  /* ////////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 1px solid grey; */
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1rem;
  
/* /////////////////////////////////////////////////////////////////////////////////////////////// */
  /* border: 1px solid; */
  width: fit-content;
`;
export const Select = styled.select`
  width: 100%;
  /* height: 8vh; */
  padding: 0 10px;
  border-radius: 8px;
  outline: none;
  /* font-size: 1rem; */

  height: 6.5vh;
  font-size: 0.875rem;
`;
export const Option = styled.option`
  height: 30px;
  padding: 40px;
  /* font-size: 1rem; */

  font-size: 0.875rem;
`;
export const Input = styled.input`
  width: 100%;
  /* height: 8vh; */
  padding: 0 10px;
  border-radius: 8px;
  outline: none;

  height: 6.5vh;
  font-size: 0.875rem;
`;

export const DeadlineContainer = styled.div`
  display: flex;


  width: 100%;
  /* gap: 2vw; */
  justify-content: space-between;
`;
export const DeadlineSelect = styled.select`
  width: 45%;
  /* height: 8vh; */
  padding: 0 10px;
  border-radius: 8px;
  outline: none;
  /* font-size: 1rem; */

  height: 6.5vh;
  font-size: 0.875rem;
`;

export const BtnsContainer = styled.div`
  display: flex;
`;

export const NextBtn = styled.button`
  /* width: 10vw; */
  /* height: 8vh; */
  /* margin-top: 40px; */
  background: #ef7b50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  /* font-size: 1rem; */
  letter-spacing: 1px;

  /* width: 8vw; */
  width: 100px;
  height: 6.5vh;
  font-size: 0.875rem;
  margin-top: 3.5vh;
`;
