// المسار الصحيح: /api/config.js

export default function handler(request, response) {
  // هذه الدالة تقرأ متغيرات البيئة من Vercel وترسلها للواجهة الأمامية
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  // التأكد من أن جميع المتغيرات موجودة قبل إرسالها
  if (Object.values(firebaseConfig).some(value => !value)) {
    return response.status(500).json({ error: "بعض متغيرات بيئة Firebase غير معرفة في Vercel." });
  }

  response.status(200).json(firebaseConfig);
}
