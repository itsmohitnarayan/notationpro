import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: "notationpro-4059f.firebaseapp.com",
    projectId: "notationpro-4059f",
    storageBucket: "notationpro-4059f.appspot.com",
    messagingSenderId: "155353961279",
    appId: "1:155353961279:web:30af64042529e62129398a",
    measurementId: "G-87Y4YTNVK3"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return {
    provide: {
      auth: auth
    }
  };
});
