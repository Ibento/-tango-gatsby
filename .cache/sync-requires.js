const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-archive-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/templates/archive.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/templates/page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/pages/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/pages/404.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/oyvinddahl/Prosjekter/Noroff/21 - Project Exam 2/gatsby/tango/src/pages/page-2.js")))
}

