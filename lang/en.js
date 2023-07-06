export default {
  welcome: 'Welcome',
  login: 'Log in',
  logout: 'Sign out',
  homePage: 'Home',
  admin: 'Admin',
  menu: {
    dashboard: 'Dashboard',
    invoices: 'Invoices',
    booking: 'Bookings',
    shop: 'Shop',
    settings: 'Settings',
    pending: 'Pending',
    paid: 'Paid'
  },
  dashboard: {
    invoice: {
      settings: 'Invoices settings',
      pending: 'Pending invoices',
      paid: 'Paid invoices'
    },
    booking: {
      settings: 'Booking settings',
      pending: 'Pending bookings',
      paid: 'Paid bookings'
    },
    shop: {
      settings: 'Shop settings',
      pending: 'Pending purchases',
      paid: 'Paid purchases'
    }
  },
  error: {
    pageNotFound: 'This page could not be found',
    unauthorized: 'Unauthorized',
    unauthenticated: 'Unauthenticated',
    somethingWentWrong: 'Something went wrong',
    backToTheHomePage: 'Back to the home page',
  },
  auth: {
    loginEmail: 'Login',
    magicLink: 'Send the magic link by email',
    magicLinkInstructions: 'No password is required.\n\nWe will send you a magic link to login by email.\n\nIf you use Slack, Notion or Wallet of Satoshi you may be familiar with this login method.\n\nTo keep your account safe, please enable 2FA on your email account.',
    emailSent: 'Email sent',
    checkEmail: 'Click the link sent by email to login your account',
    emailSubject: 'Sign in to {host}',
    emailContent: 'Sign in to your account at {host} by clicking the link:\n\n{url}\n\nIf you have not requested this email you can safely ignore it.'
  },
  customRules: {
    loginEmailRequired: 'The email is required',
    loginEmailValid: '{value} is not a valid email address'
  }
}