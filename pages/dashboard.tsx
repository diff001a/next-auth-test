//@ts-nocheck

import { getSession } from "next-auth/react";
import { Layout, Meta } from "@/components/Layout";
import styled from "@emotion/styled";
import { useEffect } from "react";
import Profile from "@/components/Profile";
import Link from "@/components/Link";

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

export default function Dashboard({ user, token, provider }) {
  return (
    <Layout>
      <Meta title="ダッシュボード" robots="noindex.nofollow" />
      <Profile user={user} provider={provider} dashboard />
      <div>このページはログインしているユーザーのみアクセス可能です。</div>
      <div>
        <Link href="/">トップページ</Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      user: session.user,
      token: session.accessToken,
      provider: session.provider
    }
  };
}
