// ตั้งค่าเว็บไซต์ "ที่ดินตรง ขอนแก่น" — แก้เฉพาะไฟล์นี้ แล้ว deploy ใหม่
window.APP = {
  // 1) คัดลอกจาก Firebase Console > Project settings > Your apps > SDK setup and configuration (Config)
  firebaseConfig: {
    apiKey: "AIzaSyAx6tXnMU6v8N2yj0N29osXOksb4RthiZE",
    authDomain: "thidintrong-kk.firebaseapp.com",
    projectId: "thidintrong-kk",
    storageBucket: "thidintrong-kk.firebasestorage.app",
    messagingSenderId: "150263733683",
    appId: "1:150263733683:web:4498e412abaf8ed415bfc6"
  },

  // 2) Google Maps (ไม่บังคับ) — ว่างไว้ = ใช้แผนที่อำเภอแบบเดิม ใช้ได้ฟรี
  GOOGLE_MAPS_KEY: "",
  GOOGLE_MAP_ID: "",        // ว่างไว้ = ใช้ DEMO_MAP_ID สำหรับทดสอบ

  // 3) วิธีเข้าสู่ระบบ
  AUTH_GOOGLE: true,        // ใช้ได้ทั้งแพ็กเกจฟรี (Spark) และ Blaze
  AUTH_PHONE: false,        // OTP ทาง SMS — เปิดเมื่ออัปเกรดเป็น Blaze และเปิด Phone ใน Authentication แล้ว

  // 4) ดึงข้อมูลน้ำท่วม GISTDA อัตโนมัติ — เปิดเมื่อ deploy ฟังก์ชัน gistdaFlood แล้ว (ต้องใช้ Blaze)
  GISTDA_FUNCTION: false,

  // 5) รูป QR พร้อมเพย์สำหรับรับบริจาค (ไฟล์อยู่ในโฟลเดอร์ public)
  QR_URL: "donate-qr.png"
};
