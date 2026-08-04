/**
 * Sungy Landing Page i18n & Auto-Language Detection
 */

const translations = {
  en: {
    nav: {
      apps: "About Sungy",
      about: "Why Sungy",
      support: "Support Center",
      contact: "Contact Us"
    },
    hero: {
      badge: "🌟 Educational App for Children",
      title: 'Empowering Kids Through <span class="highlight">Interactive Play</span>',
      subtitle: "Sungy builds joyful, ad-free, and safe learning experiences designed to nurture early language skills, creativity, and cognitive development.",
      ctaPrimary: "Discover Sungy",
      ctaSecondary: "Support & Legal"
    },
    featured: {
      badge: "🚀 Featured Application",
      title: "Sungy",
      tagline: "Fun & Interactive Early English Learning",
      desc: "Sungy turns vocabulary building into an exciting adventure! Designed specifically for young learners, children explore interactive themes, master natural English pronunciations, and earn fun reward stickers.",
      f1Title: "27+ Curated Lessons",
      f1Desc: "Spanning everyday topics: daily routines, outdoor discovery, body & emotions.",
      f2Title: "Dual Native Audio",
      f2Desc: "Authentic US and UK English accents with clear, natural pronunciation.",
      f3Title: "Interactive Play",
      f3Desc: "Listen, tap, drag, and matching games tailored for developing fine motor skills.",
      f4Title: "100% Kid-Safe",
      f4Desc: "Zero third-party ads, zero tracking, and COPPA-compliant privacy standard.",
      storeAppStoreSmall: "Download on the",
      storeGooglePlaySmall: "GET IT ON"
    },
    values: {
      title: 'Why Families Trust <span class="highlight">Sungy</span>',
      subtitle: "We design with passion, safety, and child pedagogy at the heart of everything we create.",
      v1Title: "Privacy & Safety First",
      v1Desc: "We believe kids deserve a clean, distraction-free environment. No pop-up ads, no behavioral tracking, and transparent parent settings.",
      v2Title: "Vibrant & Expressive Art",
      v2Desc: "Rich visual aesthetics, charming character animations, and custom sound design that spark joy and maintain focused engagement.",
      v3Title: "Growth & Positive Reinforcement",
      v3Desc: "Every step forward is celebrated with encouraging feedback, sticker collections, and gentle progression tailored to young minds."
    },
    supportBanner: {
      title: "Need Assistance or Have Questions?",
      subtitle: "Visit our Support Center to access Privacy Policies, Terms of Use, and Account Management options.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      deleteAccount: "Delete Account",
      contact: "Contact Support"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      account: "Account Management",
      contact: "Contact",
      copy: "© 2026 Sungy by Sang Ngo. All rights reserved."
    }
  },
  vi: {
    nav: {
      apps: "Về Ứng dụng",
      about: "Vì sao chọn Sungy",
      support: "Trung tâm Hỗ trợ",
      contact: "Liên hệ"
    },
    hero: {
      badge: "🌟 Ứng dụng Giáo dục cho Trẻ em",
      title: 'Ươm mầm tri thức qua <span class="highlight">Học tập Tương tác</span>',
      subtitle: "Sungy sáng tạo các trải nghiệm học tập vui nhộn, không quảng cáo và an toàn, giúp trẻ phát triển ngôn ngữ, tư duy và sự sáng tạo từ sớm.",
      ctaPrimary: "Khám phá Sungy",
      ctaSecondary: "Hỗ trợ & Pháp lý"
    },
    featured: {
      badge: "🚀 Ứng dụng Nổi bật",
      title: "Sungy",
      tagline: "Học tiếng Anh Mầm non Tương tác & Vui nhộn",
      desc: "Sungy biến việc học từ vựng thành một cuộc phiêu lưu thú vị! Thiết kế dành riêng cho lứa tuổi mầm non, bé sẽ khám phá các chủ đề sinh động, luyện phát âm chuẩn bản xứ và sưu tầm nhãn dán phần thưởng.",
      f1Title: "27+ Bài học Chọn lọc",
      f1Desc: "Bao gồm các chủ đề quen thuộc: sinh hoạt hàng ngày, khám phá ngoài trời, cơ thể & cảm xúc.",
      f2Title: "Giọng đọc Bản xứ Chuẩn",
      f2Desc: "Phát âm chuẩn cả hai chất giọng Anh-Mỹ (en-US) và Anh-Anh (en-GB).",
      f3Title: "Học qua Tương tác",
      f3Desc: "Các trò chơi Nghe, Chạm, Kéo thả và Lật hình rèn luyện tư duy & phản xạ.",
      f4Title: "100% An toàn cho Bé",
      f4Desc: "Không quảng cáo rác, không theo dõi hành vi, tuân thủ tiêu chuẩn an toàn cho trẻ.",
      storeAppStoreSmall: "Tải về trên",
      storeGooglePlaySmall: "TẢI VỀ TRÊN"
    },
    values: {
      title: 'Vì sao Phụ huynh Tin chọn <span class="highlight">Sungy</span>',
      subtitle: "Chúng tôi đặt tâm huyết, sự an toàn và phương pháp giáo dục mầm non làm trọng tâm trong từng sản phẩm.",
      v1Title: "An toàn & Bảo mật Hàng đầu",
      v1Desc: "Trẻ em cần môi trường học tập thuần khiết, không quảng cáo phiền phức, không thu thập dữ liệu cá nhân.",
      v2Title: "Hình ảnh & Âm thanh Sinh động",
      v2Desc: "Đồ họa rực rỡ, nhân vật hoạt hình ngộ nghĩnh cùng hiệu ứng âm thanh lôi cuốn tạo cảm hứng cho bé.",
      v3Title: "Khích lệ & Phát triển Tích cực",
      v3Desc: "Mỗi tiến bộ của bé đều được ghi nhận bằng lời khen ngợi tích cực và bộ sưu tập huy hiệu/sticker độc đáo."
    },
    supportBanner: {
      title: "Bạn cần Hỗ trợ hoặc có Thắc mắc?",
      subtitle: "Ghé thăm Trung tâm Hỗ trợ để xem Chính sách Quyền riêng tư, Điều khoản sử dụng hoặc Quản lý Tài khoản.",
      privacy: "Chính sách Quyền riêng tư",
      terms: "Điều khoản Sử dụng",
      deleteAccount: "Xóa Tài khoản",
      contact: "Liên hệ Hỗ trợ"
    },
    footer: {
      privacy: "Chính sách Quyền riêng tư",
      terms: "Điều khoản Sử dụng",
      account: "Quản lý Tài khoản",
      contact: "Liên hệ",
      copy: "© 2026 Sungy bởi Sang Ngo. Tất cả quyền được bảo lưu."
    }
  }
};

/**
 * Detect user language:
 * 1. Saved preference in localStorage
 * 2. Navigator browser language (if starts with 'vi', use 'vi', else 'en')
 */
function getInitialLanguage() {
  const saved = localStorage.getItem('sungy_lang');
  if (saved && (saved === 'en' || saved === 'vi')) {
    return saved;
  }
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  return browserLang.startsWith('vi') ? 'vi' : 'en';
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;
  localStorage.setItem('sungy_lang', lang);

  const dict = translations[lang];

  // Helper to safely get nested key
  function getNestedValue(obj, keyPath) {
    return keyPath.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(dict, key);
    if (val !== null) {
      el.innerHTML = val;
    }
  });

  // Update Language Toggle Button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = lang === 'en' ? '🌐 <strong>EN</strong> | VI' : '🌐 EN | <strong>VI</strong>';
    toggleBtn.setAttribute('title', lang === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang Tiếng Anh');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getInitialLanguage();
  setLanguage(currentLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeLang = document.documentElement.lang || 'en';
      const newLang = activeLang === 'en' ? 'vi' : 'en';
      setLanguage(newLang);
    });
  }
});
