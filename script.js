// 1. Nội dung bức thư
const letterContent = `Chào bạn nữ xinh đẹp của C3-K41!
Nhân ngày Phụ nữ Việt Nam 20/10, thay mặt cho toàn thể các nam sinh trong lớp, chúc các bạn luôn luôn xinh đẹp, tràn ngập niềm vui, đạt điểm cao trong mọi kỳ thi và luôn là những mảnh ghép rực rỡ nhất của tập thể lớp chúng ta! 
Cảm ơn bạn đã đến với C3-K41, giúp đỡ và làm cho không khí lớp học mỗi ngày đều ngập tràn tiếng cười. CHÚC MỪNG NGÀY 20/10! 🌸✨

`;
const gift = 'Vào ngày mai chúng mình sẽ có món quà "nho nhỏ" dành cho bạn, đừng bỏ lỡ cơ hội nhé<3';
const Author = 'Website được tạo bởi N.D.T.Anh'

// Lắng nghe sự kiện khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function () {
    const btnOpen = document.getElementById("btn-open");
    if (btnOpen) {
        btnOpen.addEventListener("click", startExperience);
    }
});

// Hàm bắt đầu chạy
function startExperience() {
    const sound = new Audio('Sound/nhac.mp3');
    sound.volume = 1;
    sound.play().catch(error => {
        console.log("Không thể phát tự động:", error);
    });
    const startScreen = document.getElementById('start-screen');
    const contentScreen = document.getElementById('content-screen');
    const container = startScreen ? startScreen.parentElement : null;

    if (!startScreen || !contentScreen) return;
    
    startScreen.classList.add('animate-shrink-out');

    // Sau khi màn hình 1 thu nhỏ & ẩn xong (500ms)
    setTimeout(() => {
        startScreen.classList.add('hidden');
        
        // Bước 2: Hiển thị màn 2 và chạy hiệu ứng mở rộng gợn sóng
        contentScreen.classList.remove('hidden');
        contentScreen.classList.add('animate-ripple-expand');
        if (container) {
            container.classList.add('ripple-border');
        }

        // Bước 3: Đợi khối mở rộng xong thì bắt đầu gõ chữ
        setTimeout(() => {
            typeWriter(letterContent, 'letter-text', 35, () => {
                celebrate();
                typeWriter(gift, 'gift', 35, () => {
                    typeWriter(Author, 'TacGia', 35, () => {});
                });
            });
        }, 600);

    }, 450);

    // Đổ danh sách bạn nữ
    // const girlsContainer = document.getElementById('girls-list');
    // girls.forEach(girl => {
    // const card = document.createElement('div');
    // card.className = "bg-white p-3 rounded-xl shadow border border-pink-100 hover:border-pink-400 transition transform hover:-translate-y-1 cursor-pointer";
    // card.innerHTML = `
    //     <div class="font-bold text-pink-600">${girl.name}</div>
    //     <div class="text-xs text-gray-500 mt-1">${girl.title}</div>
    // `;
    // girlsContainer.appendChild(card);
    // });
}

// Hiệu ứng gõ chữ Typewriter
function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const elem = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    type();
}

// Hàm bắn pháo hoa khi nhận quà
function celebrate() {
    const sound = new Audio('Sound/ken.mp3');
    sound.volume = 1;
    sound.play().catch(error => {
        console.log("Không thể phát tự động:", error);
    });

    let count = 200;
    let defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // alert("🎁 Quà tặng 20/10 dành cho các bạn nữ: Hôm nay các nam sinh sẽ bao trọn gói công việc trực nhật và chuẩn bị trà sữa cho cả lớp! 🧋✨");
}