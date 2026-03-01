// تحديد العناصر من DOM
const btnBrides = document.getElementById('btn-brides');
const btnDaily = document.getElementById('btn-daily');
const sectionBrides = document.getElementById('section-brides');
const sectionDaily = document.getElementById('section-daily');
const modal = document.getElementById('booking-modal');
const modalTitle = document.getElementById('modal-title');

// تعيين تاريخ اليوم افتراضياً في حقل التاريخ
document.getElementById('current-date-picker').valueAsDate = new Date();

// وظيفة التبديل بين الواجهات (الأزرار العلوية)
btnBrides.addEventListener('click', () => {
    // تفعيل زر العرسان
    btnBrides.classList.add('active');
    btnDaily.classList.remove('active');
    
    // إظهار قسم العرسان وإخفاء قسم اليوم
    sectionBrides.classList.remove('hidden');
    sectionDaily.classList.add('hidden');
});

btnDaily.addEventListener('click', () => {
    // تفعيل زر اليوم والتاريخ
    btnDaily.classList.add('active');
    btnBrides.classList.remove('active');
    
    // إظهار قسم اليوم وإخفاء قسم العرسان
    sectionDaily.classList.remove('hidden');
    sectionBrides.classList.add('hidden');
});

// وظيفة فتح النافذة المنبثقة (Modal) عند الضغط على خانة حجز
function openBookingModal(bookingNumber) {
    modalTitle.innerText = `تفاصيل الحجز رقم (${bookingNumber})`;
    modal.style.display = 'flex';
}

// وظيفة إغلاق النافذة المنبثقة
function closeModal() {
    modal.style.display = 'none';
    // تفريغ الحقول عند الإغلاق (اختياري)
    document.getElementById('total-amount').value = '';
    document.getElementById('paid-amount').value = '';
    document.getElementById('remaining-amount').value = '';
}

// إغلاق النافذة عند الضغط خارج المربع الأبيض
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// وظيفة حساب "الباقي" تلقائياً
function calculateRemaining() {
    // جلب القيم من الحقول وتحويلها إلى أرقام، وفي حال كانت فارغة نعتبرها 0
    let total = parseFloat(document.getElementById('total-amount').value) || 0;
    let paid = parseFloat(document.getElementById('paid-amount').value) || 0;
    
    // حساب المتبقي
    let remaining = total - paid;
    
    // وضع الناتج في حقل الباقي
    document.getElementById('remaining-amount').value = remaining;
}
