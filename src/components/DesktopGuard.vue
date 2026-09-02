<template>
  <div class="desktop-guard">
    <div class="desktop-guard-content">
      <div class="desktop-guard-rings">
        <span class="ring ring-1"></span>
        <span class="ring ring-2"></span>
        <span class="ring ring-3"></span>
      </div>

      <div class="desktop-guard-text">
        <h1 class="desktop-guard-title">Priscila & Daniel</h1>
        <p class="desktop-guard-subtitle">20 · XI · 2026</p>
        <div class="desktop-guard-divider"></div>
        <p class="desktop-guard-message">
          Esta invitación fue diseñada<br />
          con mucho cariño para<br />
          <strong>teléfono móvil</strong>
        </p>
        <div class="desktop-guard-phone-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        <p class="desktop-guard-hint">
          Por favor ábrela desde tu celular
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.desktop-guard {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--seashell, #fff4ec);
  background-image: url('../assets/img/background.webp');
  background-repeat: repeat;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .desktop-guard {
    display: flex;
  }
}

.desktop-guard-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
  padding: 3em;
  max-width: 480px;
}

/* Decorative animated rings */
.desktop-guard-rings {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--pomp-and-power-middle, #805976);
  animation: pulse-ring 3s ease-out infinite;
}

.ring-1 { width: 60px;  height: 60px;  animation-delay: 0s; }
.ring-2 { width: 90px;  height: 90px;  animation-delay: 0.6s; opacity: 0.6; }
.ring-3 { width: 120px; height: 120px; animation-delay: 1.2s; opacity: 0.3; }

@keyframes pulse-ring {
  0%   { transform: scale(0.85); opacity: 0.8; }
  50%  { transform: scale(1);    opacity: 1; }
  100% { transform: scale(0.85); opacity: 0.8; }
}

.desktop-guard-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
  color: var(--text-color-primary, #414042);
}

.desktop-guard-title {
  font-family: 'Parisienne', cursive;
  font-size: 3em;
  font-weight: 400;
  line-height: 1;
  color: var(--pomp-and-power-dark, #724c75);
  margin: 0;
}

.desktop-guard-subtitle {
  font-family: 'Merienda', cursive;
  font-size: 0.85em;
  letter-spacing: 4px;
  color: var(--pomp-and-power-middle, #805976);
  margin: 0;
}

.desktop-guard-divider {
  width: 60px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--pomp-and-power-middle, #805976),
    transparent
  );
  margin: 0.5em 0;
}

.desktop-guard-message {
  font-family: 'Aleo', Helvetica, sans-serif;
  font-size: 1.05em;
  line-height: 1.8;
  color: var(--text-color-primary, #414042);
  margin: 0;

  strong {
    color: var(--pomp-and-power-dark, #724c75);
  }
}

.desktop-guard-phone-icon {
  width: 40px;
  height: 40px;
  color: var(--pomp-and-power-middle, #805976);
  animation: float 2.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.desktop-guard-hint {
  font-size: 0.8em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--pomp-and-power-middle, #805976);
  opacity: 0.75;
  margin: 0;
}
</style>
