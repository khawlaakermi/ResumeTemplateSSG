module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Khaoula AKERMI`,
    role: `Software Developer`,
    email: `khaoula.akremi@etudiant-isi.utm.tn`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/khawlaakermi",
      },
      { name: "linkedin", link: "https://linkedin.com/khawlaakermi" },
      { name: "facebook", link: "https://www.facebook.com/akermi.khawla.33" },
      { name: "twitter", link: "https://twitter.com/khawlaakermi" },
      { name: "instagram", link: "https://instagram.com" },
    ],
    about: `
      <p>I am an engineering student, passionate about the world of dev.</p>
       <p>I have created web applications using Angular and JEE.</p>
       <p> I am comfortable with databases and the object-oriented world.</p>
      `,
    education: [
      {
        degree: "Student",
        major: "Computer Software Engineering",
        when: "2018-2021",
        school: "ISI University",
        where: "ARIANA, TUNISIA",
 	moreInfo: `<p></p>`,
      },
      {
        degree: "Student",
        major: "Fundamental License in IT MANAGMENT",
        when: "2015-2018",
        school: "ISG University",
        where: "TUNIS, TUNISIA",
 	moreInfo: `<p></p>`,
      },
      {
        degree: "Student",
        major: "Mathematics baccalaureate",
        when: "2014-2015",
        school: "SIDI THABET High school",
        where: "Ariana, Tuisia",
 	moreInfo: `<p></p>`,
      },
    ],
    experience: [
      {
        role: "Intern Web Developer",
        when: "2020",
        company: "BRI-tech",
        where: "Tunis",
        moreInfo: `<p>
Design and production of a timesheet</p>.`,
      },
      {
        role: "Intern Web Developer",
        when: "2018",
        company: "BIAT",
        where: "Tunis",
        moreInfo: `<p>Design and creation of a web portal</p>`,
      },
      {
        role: "Intern Software Developer",
        when: "2017-2018",
        company: "Geant ",
        where: "Ariana",
      }
    ],
    skills: [
      {
        name: "Angular",
        level: "85",
        experience: "1 year",
      },
      {
        name: "Springboot",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Java",
        level: "90",
        experience: "4 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Machine learning",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Watching TEDx vedios",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}