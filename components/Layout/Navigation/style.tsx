import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--headerHeight);
  width: 100%;
  .inner {
    width: var(--width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 780px) {
      width: 100%;
      padding: 0 15px;
    }
  }
`;

export default Wrapper;
