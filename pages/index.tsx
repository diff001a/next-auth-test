import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "@/components/Link";
import LoginButton from "../components/LoginButton";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { Layout, Meta } from "@/components/Layout";
import Profile from "@/components/Profile";
import { Box } from "@mui/material";
import LoginModal from "@/components/LoginModal";

const Home: NextPage = ({ user, provider }: any) => {
  const { data: session } = useSession();
  if (user) {
    return (
      <Layout>
        <Meta title="トップページ" />
        <Profile user={user} provider={provider} />
        <div>
          <Link href="/dashboard">dashboard</Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Meta title="トップページ" />
      <Box sx={{ margin: "15px 0" }}>Please Sign in</Box>
      <Box>
        <LoginModal variant="contained" width="180px" pathname="/dashboard" />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      user: session ? session.user : null,
      provider: session ? session.provider : null
    }
  };
}

export default Home;
