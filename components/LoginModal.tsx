import styled from "@emotion/styled";

import { useSession, signIn, signOut } from "next-auth/react";
import Modal from "./Modal";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "./Image";
import LoginButton from "./LoginButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@/components/Button";

const Wrapper = styled.div`
  .button {
    font-weight: 600;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 35px;
  padding-bottom: 30px;
  padding-right: 25px;
  padding-left: 25px;
  justify-content: center;
  align-items: center;
  .close-button {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 30px;
    width: 30px;
    opacity: 0.7;
  }
  .logo {
    margin-bottom: 5px;
  }
  .signin-button {
    width: 270px;
  }
  p {
    font-size: 12px;
    opacity: 0.8;
    line-height: 1.7;
    margin-bottom: 10px;
  }
`;

const LoginModal = ({ variant = "text", pathname, ...props }: any) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <Wrapper {...props}>
      {session ? (
        <Button
          variant={variant}
          onClick={() => signOut()}
          size="large"
          className="button"
          {...props}
        >
          ログアウト
        </Button>
      ) : (
        ""
      )}
      {session === null ? (
        <Button
          variant={variant}
          onClick={() => setOpen(true)}
          size="large"
          className="button"
          {...props}
        >
          サインイン
        </Button>
      ) : (
        ""
      )}

      <Modal open={open} handleOpen={setOpen} className="box-modal">
        <ModalWrapper className="box">
          <CloseIcon className="close-button" onClick={() => setOpen(false)} />
          <Image src="/next.svg" width="150px" className="logo" />
          <p>
            利用規約、プライバシーポリシーに同意した上でサインインしてください
          </p>
          <LoginButton
            mode="google"
            label="Googleアカウントでサインイン"
            className="signin-button"
            pathname={pathname}
          />
          <LoginButton
            mode="line"
            label="Lineアカウントでサインイン"
            className="signin-button"
            pathname={pathname}
          />
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};

export default LoginModal;
