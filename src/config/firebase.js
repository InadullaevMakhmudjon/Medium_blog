import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENTID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.RecaptchaVerifier = app.auth.RecaptchaVerifier;
  }

  signInWithPhoneNumber(phone, recaptcha) {
    return this.auth.signInWithPhoneNumber(phone, recaptcha);
  }

  setUpRecaptcha(name, options) {
    return new this.RecaptchaVerifier(name, options);
  }
}

export default {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }
};
