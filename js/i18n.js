// i18n.js — 多语言支持（中/英）
const translations = {
  zh: {
    // Nav
    'nav.about': '关于我',
    'nav.skills': '技能',
    'nav.projects': '项目',
    'nav.experience': '经历',
    'nav.blog': '文章',
    'nav.contact': '联系',

    // Hero
    'hero.name': '林祥兴',
    'hero.desc': '热衷于用代码创造优雅的用户体验',
    'hero.roles': ['iOS 开发工程师', '前端开发者', 'Objective-C 老兵', '混合开发实践者'],

    // About
    'about.title': '关于我',
    'about.subtitle': 'About Me',
    'about.p1': '一名拥有 10 年以上经验的移动端开发工程师，以 iOS 开发为核心方向，精通 Objective-C，熟悉 Swift/SwiftUI，同时深耕 Vue 系前端技术领域。擅长原生与 Hybrid 混合开发，具备丰富的跨平台项目（React Native、Flutter）实战经验。',
    'about.p2': '追求代码的简洁与优雅，注重产品细节和用户体验。热爱开源社区，乐于分享技术见解。在工作中始终保持对新技术的热情，不断探索移动端和前端领域的最佳实践。',
    'about.stat1': '年开发经验',
    'about.stat2': '完成项目',
    'about.stat3': '技术栈',

    // Skills
    'skills.title': '技能',
    'skills.subtitle': 'Skills',
    'skills.ios': 'iOS 开发',
    'skills.frontend': '前端开发',
    'skills.primary': '主方向',
    'skills.secondary': '辅方向',

    // Projects
    'projects.title': '项目经历',
    'projects.subtitle': 'Projects',
    'projects.all': '全部',
    'projects.ios': 'iOS',
    'projects.web': 'Web',
    'projects.viewMore': '查看详情',
    'projects.p1.name': '智慧生活 App',
    'projects.p1.desc': '一款集成智能家居控制、健康管理、生活服务的综合性 iOS 应用，服务超过 10 万用户。',
    'projects.p2.name': '金融理财助手',
    'projects.p2.desc': '提供实时行情、资产管理、投资分析等功能的金融类 App，注重数据安全与性能优化。',
    'projects.p3.name': '企业管理后台',
    'projects.p3.desc': '基于 React + Ant Design 的企业级中后台管理系统，包含权限管理、数据可视化等模块。',
    'projects.p4.name': '电商 H5 商城',
    'projects.p4.desc': '面向移动端的电商 H5 应用，支持商品浏览、购物车、在线支付，使用 Vue 3 构建。',

    // Experience
    'exp.title': '工作经历',
    'exp.subtitle': 'Experience',
    'exp.e1.company': '某科技有限公司',
    'exp.e1.date': '2022 — 至今',
    'exp.e1.role': '高级 iOS 开发工程师',
    'exp.e1.desc': '负责核心 App 的架构设计与开发，主导 OC 项目向 Swift 渐进式迁移，推动 Hybrid 混合开发方案落地，优化应用性能和用户体验。参与团队代码规范制定和技术选型。',
    'exp.e2.company': '某互联网公司',
    'exp.e2.date': '2020 — 2022',
    'exp.e2.role': 'iOS 开发工程师 / 前端开发',
    'exp.e2.desc': '负责多款 iOS 应用的 Objective-C 开发与维护，同时参与 Vue 管理后台、H5 活动页及小程序等前端项目开发。',
    'exp.e3.company': '某软件公司',
    'exp.e3.date': '2015 — 2020',
    'exp.e3.role': '初级 iOS 开发工程师',
    'exp.e3.desc': '参与公司主力产品的 iOS 端开发，负责功能模块的实现与 Bug 修复，积累了扎实的 UIKit 开发经验。',

    // Blog
    'blog.title': '技术文章',
    'blog.subtitle': 'Blog',
    'blog.readMore': '阅读全文 →',
    'blog.b1.title': 'SwiftUI 动画系统深度解析',
    'blog.b1.desc': '探索 SwiftUI 中的隐式动画、显式动画和过渡动画的实现原理与最佳实践。',
    'blog.b2.title': 'iOS 项目架构演进：从 MVC 到 TCA',
    'blog.b2.desc': '分享我们团队在大型 iOS 项目中从 MVC 逐步演进到 The Composable Architecture 的实践经验。',
    'blog.b3.title': 'React 性能优化实战指南',
    'blog.b3.desc': '从 useMemo、useCallback 到虚拟列表，总结前端项目中常见的性能优化手段。',

    // Contact
    'contact.title': '联系我',
    'contact.subtitle': 'Get In Touch',
    'contact.desc': '如果你有任何合作机会、技术交流或只是想打个招呼，都欢迎随时联系我。',
    'contact.email': '邮箱',
    'contact.location': '地点',
    'contact.city': '中国',

    // Footer
    'footer.rights': '保留所有权利。',
    'footer.built': '使用 HTML / CSS / JavaScript 构建',
  },

  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'hero.name': 'Xiangxing Lin',
    'hero.desc': 'Passionate about creating elegant user experiences with code',
    'hero.roles': ['iOS Developer', 'Frontend Developer', 'Objective-C Veteran', 'Hybrid Dev Practitioner'],

    'about.title': 'About Me',
    'about.subtitle': 'About Me',
    'about.p1': 'A mobile development engineer with 10+ years of experience, focused on iOS as the core direction. Proficient in Objective-C with solid Swift/SwiftUI skills, while deeply engaged in Vue-based frontend development. Experienced in native & hybrid development, with hands-on cross-platform (React Native, Flutter) project experience.',
    'about.p2': 'Pursuing clean and elegant code, focusing on product details and user experience. Passionate about open source community and sharing technical insights. Always maintaining enthusiasm for new technologies and exploring best practices in mobile and frontend development.',
    'about.stat1': 'Years Experience',
    'about.stat2': 'Projects Done',
    'about.stat3': 'Tech Stacks',

    'skills.title': 'Skills',
    'skills.subtitle': 'Skills',
    'skills.ios': 'iOS Development',
    'skills.frontend': 'Frontend Development',
    'skills.primary': 'Primary',
    'skills.secondary': 'Secondary',

    'projects.title': 'Projects',
    'projects.subtitle': 'Projects',
    'projects.all': 'All',
    'projects.ios': 'iOS',
    'projects.web': 'Web',
    'projects.viewMore': 'View Details',
    'projects.p1.name': 'Smart Life App',
    'projects.p1.desc': 'A comprehensive iOS app integrating smart home control, health management, and lifestyle services, serving over 100K users.',
    'projects.p2.name': 'Finance Assistant',
    'projects.p2.desc': 'A financial app providing real-time quotes, asset management, and investment analysis, with focus on data security and performance.',
    'projects.p3.name': 'Enterprise Admin Dashboard',
    'projects.p3.desc': 'An enterprise-level admin system built with React + Ant Design, featuring permission management and data visualization.',
    'projects.p4.name': 'E-commerce H5 Store',
    'projects.p4.desc': 'A mobile-first e-commerce H5 app supporting product browsing, shopping cart, and online payment, built with Vue 3.',

    'exp.title': 'Experience',
    'exp.subtitle': 'Experience',
    'exp.e1.company': 'Tech Company',
    'exp.e1.date': '2022 — Present',
    'exp.e1.role': 'Senior iOS Developer',
    'exp.e1.desc': 'Leading core app architecture design and development, driving gradual OC-to-Swift migration, implementing hybrid development solutions, optimizing app performance and UX. Contributing to team code standards and technology decisions.',
    'exp.e2.company': 'Internet Company',
    'exp.e2.date': '2020 — 2022',
    'exp.e2.role': 'iOS Developer / Frontend Developer',
    'exp.e2.desc': 'Developed and maintained multiple iOS apps with Objective-C, while participating in Vue admin dashboards, H5 campaign pages, and mini-program frontend projects.',
    'exp.e3.company': 'Software Company',
    'exp.e3.date': '2015 — 2020',
    'exp.e3.role': 'Junior iOS Developer',
    'exp.e3.desc': 'Participated in developing the company\'s main iOS products, responsible for feature implementation and bug fixes, building solid UIKit development experience.',

    'blog.title': 'Blog',
    'blog.subtitle': 'Blog',
    'blog.readMore': 'Read More →',
    'blog.b1.title': 'Deep Dive into SwiftUI Animation System',
    'blog.b1.desc': 'Exploring implicit animations, explicit animations, and transitions in SwiftUI with best practices.',
    'blog.b2.title': 'iOS Architecture Evolution: From MVC to TCA',
    'blog.b2.desc': 'Sharing our team\'s journey of evolving from MVC to The Composable Architecture in large-scale iOS projects.',
    'blog.b3.title': 'React Performance Optimization Guide',
    'blog.b3.desc': 'From useMemo, useCallback to virtual lists — summarizing common performance optimization techniques in frontend projects.',

    'contact.title': 'Contact Me',
    'contact.subtitle': 'Get In Touch',
    'contact.desc': 'Whether you have a collaboration opportunity, want to discuss tech, or just say hello — feel free to reach out anytime.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.city': 'China',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with HTML / CSS / JavaScript',
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'zh';
  }

  get(key) {
    return translations[this.currentLang]?.[key] || translations['zh']?.[key] || key;
  }

  getRoles() {
    return translations[this.currentLang]?.['hero.roles'] || translations['zh']['hero.roles'];
  }

  toggle() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', this.currentLang);
    this.apply();
    return this.currentLang;
  }

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.get(key);
      if (text) {
        el.textContent = text;
      }
    });

    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

    // Dispatch event for typewriter to pick up new roles
    window.dispatchEvent(new CustomEvent('langChanged', { detail: this.currentLang }));
  }
}

window.i18n = new I18n();