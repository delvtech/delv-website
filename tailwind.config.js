import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
        mlg: "864px",
      },
      fontFamily: {
        blanka: ["f37blanka"],
        incise: ["f37incise"],
      },
      backgroundImage: {
        texture: "url('/texture.png')",
        grid: "url('/grid.svg')",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme, addComponents, addUtilities }) => {
      addComponents({
        ".circle-button": {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.3)",
          padding: "0px",
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.6)",
          },
        },
        ".gradient-text": {
          background: "linear-gradient(to bottom right, #71F8F8, #c5edff)",
          backgroundClip: "text",
          color: "transparent",
        },
      });

      addUtilities({
        /*
        Adds clipped corners that scale with the element without distorting. This is
        achieved by using polygon and calc() to get values that are relative to the
        element's width and height.
        */
        ".clip-corners": {
          clipPath: `polygon(
            0 53.28px,
            0.1px 52px,
            0.33px 51px,
            0.71px 50px,
            1.11px 49.22px,
            1.73px 48.32px,
            37.6px 3.03px,
            38px 2.56px,
            38.58px 2px,
            39.27px 1.45px,
            40px 1px,
            41px 0.53px,
            42px 0.22px,
            43px 0.05px,
            43.87px 0,
      
            calc(100% - 8px) 0,
            calc(100% - 7px) 0.06px,
            calc(100% - 5.8px) 0.31px,
            calc(100% - 4.5px) 0.8px,
            calc(100% - 3.5px) 1.38px,
            calc(100% - 2.71px) 2px,
            calc(100% - 1.75px) 3px,
            calc(100% - 1.07px) 4px,
            calc(100% - 0.58px) 5px,
            calc(100% - 0.25px) 6px,
            calc(100% - 0.06px) 7px,
            100% 8px,
      
            100% calc(100% - 53.28px),
            calc(100% - 0.1px) calc(100% - 52px),
            calc(100% - 0.33px) calc(100% - 51px),
            calc(100% - 0.71px) calc(100% - 50px),
            calc(100% - 1.24px) calc(100% - 49px),
            calc(100% - 1.73px) calc(100% - 48.32px),
            calc(100% - 37.6px) calc(100% - 3.03px),
            calc(100% - 38px) calc(100% - 2.56px),
            calc(100% - 39px) calc(100% - 1.65px),
            calc(100% - 40px) calc(100% - 1px),
            calc(100% - 41px) calc(100% - 0.53px),
            calc(100% - 42px) calc(100% - 0.22px),
            calc(100% - 43px) calc(100% - 0.05px),
            calc(100% - 43.87px) 100%,
      
            8px 100%,
            7px calc(100% - 0.06px),
            6px calc(100% - 0.25px),
            5px calc(100% - 0.58px),
            4.12px calc(100% - 1px),
            3px calc(100% - 1.75px),
            2px calc(100% - 2.71px),
            1.48px calc(100% - 3.36px),
            1.07px calc(100% - 4px),
            0.58px calc(100% - 5px),
            0.25px calc(100% - 6px),
            0.06px calc(100% - 7px),
            0 calc(100% - 8px)
          )`,
          /*
          Adds a single clipped corner in the top left that scales with the element
          without distorting. This is achieved by using polygon and calc() to get
          values that are relative to the element's width and height.
          */
          ".clip-drawer": {
            clipPath: `polygon(
              0 89.53px,
              0.07px 88px,
              0.4px 86px,
              0.99px 84px,
              1.88px 82px,
              2.5px 80.95px,
              3.42px 79.65px,
              61.2px 6.11px,
              62.16px 5px,
              63.19px 4px,
              64.45px 3px,
              66px 2.02px,
              68px 1.08px,
              70px 0.45px,
              72px 0.1px,
              73.78px 0,
        
              calc(100% - 8px) 0,
              calc(100% - 7px) 0.06px,
              calc(100% - 5.8px) 0.31px,
              calc(100% - 4.5px) 0.8px,
              calc(100% - 3.5px) 1.38px,
              calc(100% - 2.71px) 2px,
              calc(100% - 1.75px) 3px,
              calc(100% - 1.07px) 4px,
              calc(100% - 0.58px) 5px,
              calc(100% - 0.25px) 6px,
              calc(100% - 0.06px) 7px,
              100% 8px,
        
              100% calc(100% - 8px),
              calc(100% - 0.06px) calc(100% - 7px),
              calc(100% - 0.25px) calc(100% - 6px),
              calc(100% - 0.58px) calc(100% - 5px),
              calc(100% - 1.07px) calc(100% - 4px),
              calc(100% - 1.75px) calc(100% - 3px),
              calc(100% - 2.35px) calc(100% - 2.34px),
              calc(100% - 3px) calc(100% - 1.75px),
              calc(100% - 4px) calc(100% - 1.07px),
              calc(100% - 5px) calc(100% - 0.58px),
              calc(100% - 6px) calc(100% - 0.25px),
              calc(100% - 7px) calc(100% - 0.06px),
              calc(100% - 8px) 100%,
        
              8px 100%,
              7px calc(100% - 0.06px),
              6px calc(100% - 0.25px),
              5px calc(100% - 0.58px),
              4.12px calc(100% - 1px),
              3px calc(100% - 1.75px),
              2px calc(100% - 2.71px),
              1.48px calc(100% - 3.36px),
              1.07px calc(100% - 4px),
              0.58px calc(100% - 5px),
              0.25px calc(100% - 6px),
              0.06px calc(100% - 7px),
              0 calc(100% - 8px)
            )`,
          },
        },
      });

      // Adds support for defining background gradient angles
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: {
            ...theme("bgGradientDeg"),
            10: "10deg", // bg-gradient-10
            15: "15deg",
            20: "20deg",
            25: "25deg",
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            120: "120deg",
            135: "135deg",
          },
        },
      );
    }),
  ],
};
