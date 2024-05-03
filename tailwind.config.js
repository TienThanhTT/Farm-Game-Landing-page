/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        title_background: "url('/src/assets/components/title-background.png')",

        section1: "url('/src/assets/section/section1/background.png')",

        section2:
          "linear-gradient(360deg, #0F0606 31.02%, #23741C 80.54%, #629816 100%)",
        section2_content:
          "url('/src/assets/section/section2/content-background.png')",

        section3: "url('/src/assets/section/section3/background.png')",

        section4:
          "linear-gradient(360deg, #033A12 0%, #0A1F23 50%, #6C3021 100%)",
        card_background:
          "url('/src/assets/section/section4/card_background.png')",

        section5: "linear-gradient(180deg, #033B13 0%, #000000 100%)",
        item_background:
          "url('/src/assets/section/section5/item_background.png')",
        section5_bottom_background:
          "url('/src/assets/section/section5/bottom-background.png')",

        section6: "linear-gradient(360deg, #1F9623 0%, #003925 79.87%)",
        section6_bottom_background:
          "url('/src/assets/section/section6/bottom_background.png')",

        footer: "url('/src/assets/footer/background.png')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
