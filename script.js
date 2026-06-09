// صوت اليوم | Sawt Al-Yawm - JavaScript بواسطة محمود ابو خبيزة

// مصفوفة الأخبار العاجلة
const breakingNews = [
    "🔴 زلزال يضرب سلسلة جبال الأطلس بقوة 5.5 درجة على مقياس ريختر",
    "⚽ الفريق الوطني يفوز على منافسه بنتيجة 3-1 في مباراة ودية مثيرة",
    "📈 ارتفاع أسعار النفط في الأسواق العالمية بنسبة 3% خلال ساعتين",
    "🎤 حفل توزيع الجوائز الفنية يقام الشهر المقبل في العاصمة بحضور نجوم",
    "🌧️ تحذيرات من أمطار غزيرة وسيول في مناطق شمالية خلال الساعات القادمة",
    "🏥 افتتاح مستشفى جديد متخصص في أمراض القلب والشرايين بمنطقة الوسطى"
];

// مؤشر للخبر الحالي
let currentNewsIndex = 0;

// وظيفة لتغيير الخبر العاجل
function changeBreakingNews() {
    const breakingTextElement = document.getElementById('breaking-text');
    
    if (breakingTextElement) {
        currentNewsIndex = (currentNewsIndex + 1) % breakingNews.length;
        breakingTextElement.textContent = breakingNews[currentNewsIndex];
        breakingTextElement.style.animation = 'none';
        breakingTextElement.offsetHeight;
        breakingTextElement.style.animation = 'slideIn 0.5s ease';
    }
}

// إضافة تأثيرات للبطاقات
function addCardEffects() {
    const cards = document.querySelectorAll('.news-card, .hero-main, .hero-side-item');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            alert('تم فتح الخبر! 📰');
        });
    });
}

// معالجة نموذج التواصل
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`شكراً لك يا ${name}! 🎉\nتم استلام رسالتك بنجاح وسنتواصل معك قريباً!`);
            form.reset();
        });
    }
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تشغيل تغيير الأخبار العاجلة كل 3 ثوانٍ
    setInterval(changeBreakingNews, 3000);
    addCardEffects();
    handleContactForm();
    
    console.log('%c✅ صوت اليوم - تم تحميل الموقع بنجاح!', 'color: #e63946; font-size: 20px; font-weight: bold;');
    console.log('%c👨‍💻 تصميم وتطوير: محمود ابو خبيزة', 'color: #1d3557; font-size: 16px;');
});
