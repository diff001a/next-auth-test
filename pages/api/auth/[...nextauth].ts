// @ts-nocheck
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LineProvider from "next-auth/providers/line";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET
    })
  ],
  // database: process.env.DATABASE_URL,
  callbacks: {
    async session({ session, user, token }) {
      session.user.id = token.sub;
      session.user.email = token.email;
      session.user.isNewUser = token.isNewUser;
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      session.provider = token.provider;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser, ...other }) {
      if (account) {
        token.sub = user.id;
        token.email = profile.email;
        token.isNewUser = isNewUser ? true : false;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.provider = account.provider;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  },
  events: {
    // signIn: async user => {
    //   console.log("signin");
    // },
    // createUser: async user => {
    //   console.log("create");
    // }
  },
  secret: "o7b/wxc1gzwOgQBwEL5GFPNCWSj4WcPzZ1oq4o1dgcc="
};

export default NextAuth(authOptions);
