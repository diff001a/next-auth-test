import styled from "@emotion/styled";
import Navigation from "./Navigation";

type LayoutType = {
  children: any;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  main {
    width: var(--width);
    text-align: center;
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
`;

const Layout = ({ children, ...props }: LayoutType) => {
  return (
    <Wrapper {...props}>
      <Navigation />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
