import type { ZudokuConfig } from "zudoku";
// import { createApiIdentityPlugin } from "zudoku/plugins";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/aml-icon.png", dark: "/aml-icon.png" },
      alt: "Zudoku",
      width: "130px",
    }
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "New",
                color: "purple",
              },
              label: "API Reference",
              to: "/api",
            },
          ],
        }
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      // input: "./apis/openapi.yaml",
      // input: "./apis/openapi_bk.yaml",
      // input: "./apis/rickandmorty.openapi.json",
      path: "/api",
    },
  ],
  // authentication: {
  //   type: "auth0",
  //   domain: "my-domain.auth0.com",
  //   clientId: "my-client-id",
  // },
  // plugins: [
  //   createApiIdentityPlugin({
  //     getIdentities: async (context) => [
  //       {
  //         id: "api-key-one",
  //         label: "My API Key",
  //         authorizeRequest: (request) => {
  //           // We get the access token from the
  //           // authentication provider (Auth0) and add it to the request headers
  //           const token = context.authentication?.getAccessToken();
  //           if (token) {
  //             request.headers.set("Authorization", `Bearer ${token}`);
  //           }
  //           return request;
  //         },
  //       },
  //     ],
  //   }),
  // ],
};

export default config;
