// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description of App
  ${data.description}

  # How to Install
  ${data.install}

  # What is the Usage?
  ${data.use}

  # Other Contributors
  ${data.contributors}

  # How to Start App
  ${data.test}

  # Licensing
  ${data.license}

  # GitHub Link: (https://github.com/${data.github})
  
  # Email: ${data.email}
  

`;
}

module.exports = generateMarkdown;
