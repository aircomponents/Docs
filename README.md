# AirComponents-Docs

This repository contains the documentation site for the **AirComponents** Web Components library. The site is built using Docusaurus and hosted on GitHub Pages.

## Overview

AirComponents is a lightweight, customizable Web Components library designed for modern web development. This documentation site provides comprehensive information about the components, usage guides, and API references.

## Features

- **Component Documentation**: Detailed descriptions of all AirComponents.
- **Guides**: Step-by-step tutorials for integrating and using the library.
- **API Reference**: Complete reference for developers.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 16 or later).
- **NPM or Yarn**: Use your preferred package manager.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SisyphusZheng/Aircomponents-docs.git
cd Aircomponents-docs
npm install
```

### Local Development

Start the development server:

```bash
npm run start
```

Visit `http://localhost:3000` to view the documentation site in development mode. Changes you make will automatically reload the page.

### Build for Production

Generate the static files for production:

```bash
npm run build
```

The built files will be located in the `build` directory.

### Deploy to GitHub Pages

This project uses GitHub Actions for automatic deployment. Ensure that the `GITHUB_TOKEN` or a personal access token is correctly configured in the repository secrets.

## File Structure

```plaintext
Aircomponents-docs/
├── blog/                  # Blog posts
├── docs/                  # Documentation files
├── src/                   # Custom components and styling
├── static/                # Static assets (images, icons, etc.)
├── docusaurus.config.js   # Docusaurus configuration
├── package.json           # Project dependencies
└── README.md              # Project overview (this file)
```

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author**: SisyphusZheng
- **Email**: freemanzheng@hotmail.com
- **GitHub**: [SisyphusZheng](https://github.com/SisyphusZheng)

For more information, visit the [AirComponents website](https://aircomponents.org).