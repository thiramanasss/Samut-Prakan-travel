// เมื่อหน้าเว็บโหลดเสร็จให้แสดงประวัติความเป็นมาค่อยๆ ปรากฏทีละบรรทัด
window.onload = function() {
    var historySection = document.getElementById('history');
    historySection.classList.add('show');

    var paragraphs = historySection.querySelectorAll('p');
    var sentences = paragraphs[0].textContent.split('\n'); // แยกข้อความเป็นบรรทัดๆ

    // สร้าง span สำหรับแต่ละบรรทัด
    paragraphs[0].innerHTML = sentences.map(function(sentence) {
        return '<span>' + sentence + '</span>';
    }).join('');

    var spans = paragraphs[0].querySelectorAll('span');
    
    // แสดงข้อความทีละบรรทัด
    spans.forEach(function(span, index) {
        setTimeout(function() {
            span.classList.add('show');
        }, index * 500); // เพิ่มเวลา delay สำหรับแต่ละบรรทัด
    });
}
