# Smart Travel (Popular tourist attractions)

โปรเจ็กต์เว็บรวมแหล่งท่องเที่ยวยอดนิยม พร้อมหน้าแนะนำสถานที่ รายการโปรด บทความ และแผนที่ แบบสแตติกโฮสต์ได้ผ่าน GitHub Pages

## ภาพรวม
- หน้าแรก `index.html` มี Hero พร้อมวิดีโอพื้นหลัง, ชื่อเรื่อง "SMART TRAVEL" และคำโปรย
- หน้า "เกี่ยวกับ" (`about.html`) มีหมายเหตุชี้แจงการใช้รูปเพื่อการศึกษา
- หน้าปลายทางในโฟลเดอร์ `destinations/` แต่ละสถานที่
- สไตล์หลักอยู่ที่ `assets/css/styles.css`
- สคริปต์หลักอยู่ที่ `assets/js/app.js`

## การรันแบบโลคัล
- ใช้ Python web server: `python -m http.server 8000`
- เปิดเบราว์เซอร์ไปที่ `http://localhost:8000/index.html`

## การดีพลอยผ่าน GitHub Pages
1. ไปที่หน้า Repository > Settings > Pages
2. เลือก Source เป็น `Deploy from a branch`
3. เลือก Branch `main` และโฟลเดอร์ `/ (root)`
4. กด Save แล้วรอสักครู่ จะได้ URL สำหรับเผยแพร่

> หมายเหตุ: หากต้องการใช้ `gh-pages` branch แทน ให้สร้าง branch และตั้งค่า Pages ให้ชี้ไปที่ branch นั้น

## ฟอนต์และการแสดงผล
- ใช้ `Inter`, `Poppins` เป็นหลัก และ `Kanit` เป็น fallback สำหรับภาษาไทย, `Roboto` เป็น fallback เพิ่มเติม
- วิดีโอพื้นหลังอยู่ที่ `assets/images/Thanapat Kinaboon.mp4` ทำงานแบบ `autoplay muted loop` เพื่อประสบการณ์ที่ราบรื่น

## คำชี้แจงการใช้สื่อ
- รูปภาพ/สื่อมัลติมีเดียทั้งหมดใช้เพื่อวัตถุประสงค์ทางการศึกษา/ทดสอบการออกแบบเท่านั้น
- ไม่ได้ใช้เพื่อแสวงหากำไรหรือการค้า
- หากพบปัญหาลิขสิทธิ์ โปรดติดต่อเพื่อให้ปรับแก้/นำออก

## โครงสร้างโปรเจ็กต์โดยสรุป
```
Popular tourist attractions/
├── index.html
├── about.html
├── articles.html
├── favorites.html
├── map.html
├── recommendations.html
├── destinations/
├── assets/
│   ├── css/styles.css
│   ├── js/app.js
│   └── images/* (รูปและวิดีโอ)
└── README.md
```

## เคล็ดลับเพิ่มเติม
- หากมีคำเตือน CRLF ใน Windows ได้ตั้งค่า `.gitattributes` เพื่อป้องกันแล้ว
- แนะนำให้ใช้ Git LFS หากจะเพิ่มไฟล์สื่อขนาดใหญ่จำนวนมาก
- สามารถปรับความเข้ม Overlay ของวิดีโอ, ขนาดตัวอักษร Hero, หรือซ่อนวิดีโอบนมือถือได้ผ่าน `assets/css/styles.css`