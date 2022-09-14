import { NextPage } from "next";
import Head from "next/head";
import { Layout, Meta } from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta title="NOT FOUND" robots="noindex,nofollow" />
      <main>
        <h1>NOT FOUND</h1>
      </main>
    </Layout>
  );
};

export default Home;
