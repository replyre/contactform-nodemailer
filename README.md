# Contact Form with Node.js, Express, and Nodemailer

This is a simple Node.js web application built with Express, allowing users to submit a contact form. The application uses **Nodemailer** to send form submissions via email, and sensitive information such as email credentials are managed using environment variables.
   ![Screenshot (500)](https://github.com/user-attachments/assets/4c3cfcfe-ddf8-445c-b4c8-9d0f6a5d8478)
## Features
- **Contact Form**: A web-based contact form where users can submit their name, email, subject, and message.
- **Email Notifications**: Submissions are sent via email using **Nodemailer**.
- **Environment Variables**: Sensitive information like email and password are stored in an `.env` file for security.
- **Express**: A lightweight web server to handle form submissions.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: You can download and install Node.js [here](https://nodejs.org/).
- **npm**: Comes pre-installed with Node.js.
- **Gmail Account**: You need a Gmail account to send emails from the form. If you're using Gmail with **2-Factor Authentication (2FA)** enabled, you will need to create an **App Password**.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/replyre/contactform-nodemailer.git
   cd contactform-nodemailer
   ```

2. **Install Dependencies**:
   Install the required npm packages by running:
   ```bash
   npm install
   ```

3. **Create `.env` File**:
   In the root directory of your project, create a `.env` file to store your environment variables securely.

   Add the following lines to your `.env` file:
   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

   - **EMAIL_USER**: Your Gmail address.
   - **EMAIL_PASS**: Your Gmail password or app-specific password (if 2FA is enabled).
   - **PORT**: The port number where the application will run (default: 5000).

4. **Enable Less Secure Apps** (if not using 2FA):
   If you're not using **2-Factor Authentication (2FA)**, you need to enable less secure apps in your Google account:
   - Go to [Google's Less Secure App Access page](https://myaccount.google.com/lesssecureapps) and enable it.

5. **Generate an App Password** (if using 2FA):
   If your Gmail account has **2FA** enabled, you need to generate an **App Password**:
   - Go to [Google's App Passwords page](https://myaccount.google.com/apppasswords) and create an app password for this application.

## Usage

1. **Run the Server**:
   Start the application by running:
   ```bash
   npm run dev // developer mode (nodemon)
   ```
   or
   ```bash
   npm start
   ```

   By default, the application will run on `http://localhost:5000`.

3. **Access the Contact Form**:
   Open your web browser and go to `http://localhost:5000`. You will see a contact form with fields for name, email, subject, and message.

4. **Submit the Form**:
   Fill out the form and submit it. The form data will be sent via email to the address configured in the `.env` file. 

5. **Check Your Email**:
   You will receive an email with the form submission. The sender will be your Gmail account.
   ![Screenshot 2024-09-07 224339](https://github.com/user-attachments/assets/6a97dc38-8863-4127-a8f2-32cf17a7b7f5)

## File Structure

```
├── public
│   └── contactForm.html  # The front-end HTML form
├── .env                  # Environment variables (not included in the repository)
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation
```

## Example `.env` File

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

## License

This project is licensed under the MIT License. Feel free to modify and use it for your own projects.
