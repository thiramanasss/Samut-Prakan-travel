function showDetails(place, element) {
    // ลบคลาส active จากทุกสถานที่
    var items = document.querySelectorAll('.highlight-item');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    // เพิ่มคลาส active ให้กับสถานที่ที่ถูกคลิก
    element.classList.add('active');

    var detailsContent = document.getElementById('details-content');

    // เปลี่ยนรายละเอียดตามสถานที่ที่คลิก
    if (place === 'place1') {
        detailsContent.innerHTML = `รายละเอียดของสถานที่ 1`;
    } else if (place === 'place2') {
        detailsContent.innerHTML = `รายละเอียดของสถานที่ 2`;
    }
    // เพิ่ม else if สำหรับสถานที่อื่นๆ ตามต้องการ

    // แสดงรายละเอียดสถานที่
    var detailsSection = document.getElementById('place-details');
    detailsSection.classList.add('show'); // เพิ่มคลาส .show เพื่อแสดงรายละเอียด
}