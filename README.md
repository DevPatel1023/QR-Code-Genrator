# QR Code Generator

QR Code Generator is a simple Node.js script that allows users to generate QR codes from URLs and save them as images. Additionally, it saves the URL to a text file.

## Features

- Generate QR codes from user-entered URLs.
- Save the QR code images as PNG files.
- Save the entered URLs to a text file.

## Installation

1. Clone the repository to your local machine:
# QR Code Generator

QR Code Generator is a simple Node.js script that allows users to generate QR codes from URLs and save them as images. Additionally, it saves the URL to a text file.

## Features

- Generate QR codes from user-entered URLs.
- Save the QR code images as PNG files.
- Save the entered URLs to a text file.

## Installation

1. Clone the repository to your local machine:
git clone https://github.com/DevPatel1023/QR-Code-Genrator.git

2. Navigate to the project directory:
cd QR-Code-Genrator

3. Install dependencies:
npm install

## Usage

1. Run the script:
node index.js

2. Follow the prompts to enter the URL.

3. The script will generate a QR code image and save it as `domainname.png`. It will also save the URL to a text file named `URL.txt`.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - For user prompts.
- [qr-image](https://www.npmjs.com/package/qr-image) - For generating QR codes.
- [fs](https://nodejs.org/api/fs.html) - Node.js built-in module for file system operations.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
