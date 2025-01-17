module.exports = {
  siteMetadata: {
    title: "Knowit Academy Norway",
    siteUrl: "https://academy.knowit.no/",
    description:
      "Knowit Academy Norway er Knowits kompetanseutviklingsprogram for ansatte i alle norske enheter. Planleggingen av programmet for 2019-2020 er i gang, og mer informasjon vil bli lagt ut så snart det er klart.",
    ogImage: "https://academy.knowit.no/assets/knowit_academy_banner_green.png",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
  ],
}
