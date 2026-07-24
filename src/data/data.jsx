export const data = {
  tr: {
    header: {
      logo: "Ibrahim Halil Ozdemir",
      langButton: [
        { text: "SWITCH TO ", type: "rest" },
        { text: "ENGLISH", type: "highlight" },
      ],
      themeDark: "KARANLIK MOD",
      themeLight: "AYDINLIK MOD",
    },
    hero: {
      title: "Ben bir Frontend Geliştiricisiyim...",
      description:
        "...harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir frontend ürünleri üretmeyi seviyorum.",
      buttons: [
        { id: 1, text: "Github", link: "https://github.com/ibrahimhozdemir" },
        { id: 2, text: "LinkedIn", link: "https://www.linkedin.com/in/ihalil/" },
      ],
      image: "/hero.png",
      imageAlt: "İbrahim'in profil fotoğrafı",
    },
    skills: {
      title: "Yetenekler",
      items: [
        { id: 1, name: "JS", logo: "https://skillicons.dev/icons?i=js" },
        { id: 2, name: "NODE", logo: "https://skillicons.dev/icons?i=nodejs" },
        { id: 3, name: "REACT", logo: "https://skillicons.dev/icons?i=react" },
        { id: 4, name: "VS CODE", logo: "https://skillicons.dev/icons?i=vscode" },
        { id: 5, name: "REDUX", logo: "https://skillicons.dev/icons?i=redux" },
        { id: 6, name: "FIGMA", logo: "https://skillicons.dev/icons?i=figma" },
      ],
    },
    profile: {
      title: "Profil",
      basicTitle: "Temel Bilgiler",
      basicInfo: [
        { id: 1, label: "Doğum tarihi", value: "01.08.1995" },
        { id: 2, label: "İkamet Ülkesi", value: "Türkiye" },
        { id: 3, label: "Eğitim Durumu", value: "Beykent Üniversitesi, İnşaat Mühendisliği, 2020" },
        { id: 4, label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      ],
      image: "/profile.png",
      imageAlt: "Çalışırken bir fotoğrafım",
      aboutTitle: "Hakkımda",
      aboutText:
        "3 yıl Silikon Vadisi'nde yaşadıktan sonra bu mesleği seçmeye karar verdim. Bu güne kadar birçok farklı meslek denedim, ama sonunda kendime en uygun olanı yazılım geliştirme alanında buldum. İnşaat mühendisliği geçmişimden gelen problem çözme yaklaşımımı şimdi frontend geliştirme tutkumla birleştiriyorum.",
    },
    projects: {
      title: "Projeler",
      items: [
        {
          id: 1,
          name: "JavaScript",
          description: "JavaScript ile temel algoritma ve fonksiyon çalışmaları, Jest ile test edilmiş.",
          image: "/project1.png",
          imageAlt: "JavaScript Tekrar proje görseli",
          tags: ["javascript", "jest"],
          siteText: "Siteyi Gör",
          githubText: "Github",
          siteLink: "",
          githubLink: "https://github.com/ibrahimhozdemir/FSWeb-S2G4-JavaScript-tekrar",
        },
        {
          id: 2,
          name: "Kişisel Portfolyo",
          description:
            "React ve Tailwind CSS ile geliştirdiğim, dark mode ve çoklu dil desteği içeren kişisel portfolyo sitem.",
          image: "/project2.png",
          imageAlt: "Kişisel portfolyo sitesi görseli",
          tags: ["react", "tailwind", "vercel"],
          siteText: "Siteyi Gör",
          githubText: "Github",
          siteLink: "",
          githubLink: "https://github.com/ibrahimhozdemir/kisisel-web-sitesi",
        },
      ],
    },
    footer: {
      title: "Bana bir mesaj gönder!",
      text: "Bir sorun mu var, yoksa sadece merhaba mı demek istiyorsun? Çekinme.",
      email: "ibrahimhaozdemir@gmail.com",
      socials: [
        { id: 1, name: "mail", link: "mailto:ibrahimhaozdemir@gmail.com" },
        { id: 2, name: "instagram", link: "https://instagram.com/ibrahimhozdemir" },
        { id: 3, name: "youtube", link: "https://www.youtube.com/@Ibrahimhozdemirr" },
      ],
    },
  },
  en: {
    header: {
      logo: "Ibrahim Halil Ozdemir",
      langButton: [
        { text: "TÜRKÇE", type: "highlight" },
        { text: "'YE GEÇ", type: "rest" },
      ],
      themeDark: "DARK MODE",
      themeLight: "LIGHT MODE",
    },
    hero: {
      title: "I am a Frontend Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      buttons: [
        { id: 1, text: "Github", link: "https://github.com/ibrahimhozdemir" },
        { id: 2, text: "LinkedIn", link: "https://www.linkedin.com/in/ihalil/" },
      ],
      image: "/hero.png",
      imageAlt: "Profile photo of İbrahim",
    },
    skills: {
      title: "Skills",
      items: [
        { id: 1, name: "JS", logo: "https://skillicons.dev/icons?i=js" },
        { id: 2, name: "NODE", logo: "https://skillicons.dev/icons?i=nodejs" },
        { id: 3, name: "REACT", logo: "https://skillicons.dev/icons?i=react" },
        { id: 4, name: "VS CODE", logo: "https://skillicons.dev/icons?i=vscode" },
        { id: 5, name: "REDUX", logo: "https://skillicons.dev/icons?i=redux" },
        { id: 6, name: "FIGMA", logo: "https://skillicons.dev/icons?i=figma" },
      ],
    },
    profile: {
      title: "Profile",
      basicTitle: "Basic Information",
      basicInfo: [
        { id: 1, label: "Date of Birth", value: "01.08.1995" },
        { id: 2, label: "Country of Residence", value: "Turkey" },
        { id: 3, label: "Education", value: "Beykent University, Civil Engineering, 2020" },
        { id: 4, label: "Preferred Role", value: "Frontend, UI" },
      ],
      image: "/profile.png",
      imageAlt: "A photo of me while working",
      aboutTitle: "About Me",
      aboutText:
        "After living in Silicon Valley for 3 years, I decided to pursue this profession. I tried out many different professions before finally finding the one that truly fits me: software development. I now combine the problem-solving mindset from my civil engineering background with my passion for frontend development.",
    },
    projects: {
      title: "Projects",
      items: [
        {
          id: 1,
          name: "JavaScript",
          description: "Basic algorithm and function practice in JavaScript, tested with Jest.",
          image: "/project1.png",
          imageAlt: "JavaScript Practice project image",
          tags: ["javascript", "jest"],
          siteText: "View Site",
          githubText: "Github",
          siteLink: "",
          githubLink: "https://github.com/ibrahimhozdemir/FSWeb-S2G4-JavaScript-tekrar",
        },
        {
          id: 2,
          name: "Personal Portfolio",
          description:
            "My personal portfolio site built with React and Tailwind CSS, featuring dark mode and multi-language support.",
          image: "/project2.png",
          imageAlt: "Personal portfolio site image",
          tags: ["react", "tailwind", "vercel"],
          siteText: "View Site",
          githubText: "Github",
          siteLink: "",
          githubLink: "https://github.com/ibrahimhozdemir/kisisel-web-sitesi",
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      text: "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "ibrahimhaozdemir@gmail.com",
      socials: [
        { id: 1, name: "mail", link: "mailto:ibrahimhaozdemir@gmail.com" },
        { id: 2, name: "instagram", link: "https://instagram.com/ibrahimhozdemir" },
        { id: 3, name: "youtube", link: "https://www.youtube.com/@Ibrahimhozdemirr" },
      ],
    },
  },
};