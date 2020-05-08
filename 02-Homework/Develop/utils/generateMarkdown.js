function generateMarkdown(data) {
  const LicLink = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`

  return `
### ${LicLink}

# ${data.title}
`;
}

module.exports = generateMarkdown;
