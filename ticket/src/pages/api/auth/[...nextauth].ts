import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  cnpj: string;
  matricula: string;
  password: string;
};
export const authOptions = {
  pages: {
    signIn: "/pages/index",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENTE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize({ cnpj, matricula, password }: ICredentials) {
        const response = await fetch(
          "https://testemobile.smartinform.com.br/public/login",
          {
            method: "POST",
            body: new URLSearchParams({ cnpj, matricula, password }),
          }
        );

        const data = await response.json();

        if (data) {
          return { ...data, jwt: data.jwt };
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
