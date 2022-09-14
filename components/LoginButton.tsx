//@ts-nocheck
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Image from "@/components/Image";
import Button from "@/components/Button";

type Props = {
  label: string;
  mode: string;
  className?: string;
  pathname?: string;
};

function LoginButton({ label, mode, pathname, className }: Props) {
  const route = useRouter();
  return (
    <Button
      onClick={() => {
        signIn(mode, {
          redirect: true,
          callbackUrl: `${pathname ? pathname : route.pathname}`
        });
      }}
      className={`${className} login-button`}
      variant="contained"
      color="secondary"
      height="48px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        span: {
          width: "calc(100% - 30px)",
          fontSize: "13px",
          fontWeight: 600
        }
      }}
    >
      {mode === "google" ? (
        <Image src="/google.png" width="25px" className="image" />
      ) : (
        ""
      )}
      {mode === "line" ? (
        <Image src="/line.png" width="25px" className="image" />
      ) : (
        ""
      )}
      <span>{label}</span>
    </Button>
  );
}

export default LoginButton;
