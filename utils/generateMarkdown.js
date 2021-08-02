// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge = "";
  switch (data) {
    case "MIT License":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache 2.0 License":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "Boost Software License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
      break;
    case "The Unlicense":
      licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      break;
    case "The Perl License":
      licenseBadge = "https://img.shields.io/badge/License-Perl-0298c3.svg";
      break;
    case "The Artistic License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      break;
    case "ISC License (ISC)":
      licenseBadge = "https://img.shields.io/badge/License-ISC-blue.svg";
      break;
    case "Eclipse Public License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
      break;
    default:
      licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = "";
  switch (data) {
    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0 License":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
      break;
    case "The Perl License":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "The Artistic License 2.0":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "ISC License (ISC)":
      licenseLink = "https://opensource.org/licenses/ISC";
      break;
    case "Eclipse Public License 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licenses !== undefined) {
    let licenseBadges = "";
    for (var i = 0; i < data.licenses.length; i++) {
      licenseBadges += `[![License](${renderLicenseBadge(
        data.licenses[i]
      )})](${renderLicenseLink(data.licenses[i])})
`;
    }
    return licenseBadges;
  } else {
    return "";
  }
}

function renderTechnologies(technologies) {
  let techRender = "";
  technologies.split("/").forEach(technology => {
    techRender += `
- ${technology}.`;
  });
  return techRender;
}
function renderScreenShots(data) {
  let screenShotRenders = "";
  if (data.screenShots.length > 1){
    screenShotRenders += `### Here are screen shots of my deployed ${data.title}!`
  data.screenShots.split(" ").forEach(screenShot => {
    screenShotRenders += `![ScreenShot](${screenShot})`;
  });
}
  return screenShotRenders;
}

function renderCreditors(creditors) {
  let creditorsRender = "";
  if(creditors.length > 1){
    creditorsRender += `## Credits
`
  creditors.split("/").forEach(creditor => {
    creditorsRender += `
- https://github.com/${creditor}`
  })}
  return creditorsRender;
}

function renderContributions (contribution){
  let contributionRender = ""
  if(contribution === "Yes"){
    contributionRender += `Contributions, issues, and feature requests are welcome!
    Give a ⭐️ if you like this project!`
  }
  return contributionRender;
}

function renderLiveLink (data) {
  let liveLinkRender = "";
  if(data.liveLink.length > 1){
    liveLinkRender += `[Click here to see the running ${data.title}!](${data.liveLink})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description : 
${data.description}

## licenses :
${renderLicenseSection(data)}

${renderLiveLink(data)}

## Installation : 
To install this App use the commands bellow &#8595;
\```
${data.installation}
\```

## Usage : 
${data.usage}

## technologies : 
${renderTechnologies(data.technologies)}

## screenShots : 
${renderScreenShots(data.screenShots)}

${renderCreditors(data.creditors)}

${renderContributions(data.contribution)}

[The Demo Video](${data.video})

&copy; 2021 [${data.title}](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
