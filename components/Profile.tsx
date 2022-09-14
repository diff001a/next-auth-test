import styled from "@emotion/styled";

type ProfileType = {
  user: any;
  provider: any;
  dashboard?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.7;
  margin: 20px 0;
  h1 {
    font-size: 1.5em;
    padding: 10px 0;
  }
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = ({ user, provider, dashboard, ...props }: ProfileType) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={user.image} className="img" />
      </ImageWrapper>
      <h1>Hello, {user.name}!!</h1>
      {dashboard ? <span>id: {user.id}</span> : ""}
      {dashboard ? <span>provider: {provider}</span> : ""}
    </Wrapper>
  );
};

export default Profile;
