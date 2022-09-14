import styled from "@emotion/styled";

type ComponentType = {};

const Wrapper = styled.div``;

const AuthCheckButton = ({ ...props }: ComponentType) => {
  return (
    <Wrapper {...props}>
      <span>Hi.</span>
    </Wrapper>
  );
};

export default AuthCheckButton;
