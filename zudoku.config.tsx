import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  theme: {
    registryUrl: "https://tweakcn.com/r/themes/cmgahi2d9000c04jo6og9cjdu",
  },
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
                color: "red",
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
      path: "/api",
    },
  ],
};

export default config;
