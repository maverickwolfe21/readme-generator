// returns license badge based on input, otherwise empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-green.svg";
    case "GNU General Public License v3.0":
      return "Https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    default:
      return "";
  }
}

// returns the license link, otherwise empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    default:
      return "";
  }
}
// returns the license section, otherwise empty string
function renderLicenseSection(license) {
  return `This application is covered under the ${license} license. See the [license file](${renderLicenseLink(license)}) for details.`;
}

// generates markdown
function generateMarkdown(data) {
  const licenseBadgeURL = renderLicenseBadge(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact Info](#contact-info)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license} - [![License](${licenseBadgeURL})](${renderLicenseLink(data.license)})

${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact Info
${data.contact}

`;
}

module.exports = generateMarkdown;
