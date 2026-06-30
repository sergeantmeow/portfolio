<template>
  <div id="app">
    <nav id="main-navbar" class="navbar navbar-expand-md">
      <div class="container-fluid app-container">
        <router-link to="/" class="navbar-brand brand-logo">
          <span class="brand-mark">DA</span>
          <span class="brand-text">DAEHYUN AN</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="toggler-bar"></span>
          <span class="toggler-bar"></span>
          <span class="toggler-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/skill" class="nav-link">Skill</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/experience" class="nav-link">Experience</router-link>
            </li>
            <li id="language-dropdown" class="nav-item dropdown">
              <a id="language-dropdown-button" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ language }}
              </a>
              <ul id="language-menu" class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" @click.prevent="setKorean"><img src="@/assets/korflag.png" class="flagImg" alt="">한국어</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="setEnglish"><img src="@/assets/usflag.png" class="flagImg" alt="">English</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="app-main">
      <router-view :languageSetting="languageSetting" />
    </main>

    <footer id="footer-navbar">
      <div class="app-container footer-inner">
        <div class="footer-links">
          <a href="https://aturservice.tistory.com/category/Programming%20Language" target="_blank" rel="noopener" class="footer-link">
            <img src="@/assets/tistory.png" class="logoImg" alt="">
            <span>Blog</span>
          </a>
          <a href="https://github.com/sergeantmeow" target="_blank" rel="noopener" class="footer-link">
            <img src="@/assets/github.png" class="logoImg" alt="">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/daehyun-an-13186a242/" target="_blank" rel="noopener" class="footer-link">
            <img src="@/assets/linkedin.png" class="logoImg" alt="">
            <span>LinkedIn</span>
          </a>
        </div>
        <div class="footer-copy">
          Copyright © Daehyun An. All Rights Reserved.<br>
          Designed by Daehyun An.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageSetting: 'english',
      language: 'Language',
    }
  },
  methods: {
    setEnglish() {
      this.languageSetting = 'english'
      this.language = 'Language'
    },
    setKorean() {
      this.languageSetting = 'korean'
      this.language = '언어'
    },
  }
}
</script>

<style>
/* ============================================================
   Global design tokens
   ============================================================ */
:root {
  --bg: #0b1120;
  --bg-soft: #0f172a;
  --surface: #131c30;
  --surface-2: #1a253c;
  --border: rgba(148, 163, 184, 0.14);
  --border-strong: rgba(148, 163, 184, 0.28);
  --text: #e6edf6;
  --text-muted: #94a3b8;
  --accent: #6366f1;
  --accent-2: #22d3ee;
  --accent-grad: linear-gradient(120deg, #6366f1 0%, #22d3ee 100%);
  --shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.65);
  --radius: 16px;
  --radius-sm: 10px;
  --nav-h: 64px;
  --maxw: 1120px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
}

#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  background:
    radial-gradient(900px 500px at 12% -8%, rgba(99, 102, 241, 0.16), transparent 60%),
    radial-gradient(800px 520px at 100% 0%, rgba(34, 211, 238, 0.12), transparent 55%),
    var(--bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#app h1, #app h2, #app h3, #app h4 {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  letter-spacing: -0.01em;
}

.app-container {
  width: 100%;
  max-width: var(--maxw);
  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 32px);
}

.app-main {
  flex: 1;
  width: 100%;
}

/* ============================================================
   Navbar
   ============================================================ */
#main-navbar {
  position: sticky;
  top: 0;
  z-index: 1030;
  min-height: var(--nav-h);
  background: rgba(11, 17, 32, 0.72);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom: 1px solid var(--border);
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  background: var(--accent-grad);
  box-shadow: 0 6px 16px -6px rgba(99, 102, 241, 0.8);
}

.brand-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.14em;
  font-size: 0.95rem;
  color: var(--text);
}

#main-navbar .nav-link {
  position: relative;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-muted);
  padding: 0.4rem 0.9rem;
  transition: color 0.2s ease;
}

#main-navbar .nav-link:hover {
  color: var(--text);
}

#main-navbar .nav-link.router-link-exact-active {
  color: var(--text);
}

#main-navbar .nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: -2px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent-grad);
}

/* Custom hamburger */
.navbar-toggler {
  border: 1px solid var(--border-strong);
  border-radius: 10px;
  padding: 8px 10px;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.toggler-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition: background 0.2s ease;
}
.navbar-toggler:hover .toggler-bar {
  background: var(--accent-2);
}

/* Language dropdown */
#language-dropdown-button {
  color: var(--text-muted);
}
#language-dropdown-button:hover {
  color: var(--text);
}
#language-menu {
  min-width: 150px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
  padding: 6px;
}
#language-menu .dropdown-item {
  display: flex;
  align-items: center;
  border-radius: 7px;
  font-weight: 500;
  color: var(--text);
  padding: 8px 10px;
}
#language-menu .dropdown-item:hover {
  background: rgba(99, 102, 241, 0.16);
  color: #fff;
}
.flagImg {
  width: 20px;
  margin-right: 8px;
  border-radius: 3px;
}

/* ============================================================
   Footer
   ============================================================ */
#footer-navbar {
  margin-top: auto;
  border-top: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.6);
  padding-block: 22px;
}
.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.footer-link:hover {
  color: #fff;
  border-color: var(--border-strong);
  background: rgba(99, 102, 241, 0.12);
  transform: translateY(-1px);
}
.logoImg {
  width: 18px;
  height: 18px;
  object-fit: contain;
}
.footer-copy {
  color: var(--text-muted);
  font-size: 0.8rem;
  line-height: 1.6;
}

/* ============================================================
   Shared section card styling (used across views)
   ============================================================ */
.section-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: clamp(20px, 4vw, 36px);
  text-align: left;
}
.section-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(1.3rem, 3.5vw, 1.7rem);
  font-weight: 700;
  margin: 0 0 18px;
}
.section-title::before {
  content: '';
  width: 6px;
  height: 1.3em;
  border-radius: 3px;
  background: var(--accent-grad);
}

@media (max-width: 767.98px) {
  #main-navbar {
    background: rgba(11, 17, 32, 0.96);
  }
  #navbarSupportedContent {
    padding-top: 8px;
  }
  #main-navbar .nav-link.router-link-exact-active::after {
    display: none;
  }
  #language-dropdown {
    margin-top: 4px;
  }
}
</style>
