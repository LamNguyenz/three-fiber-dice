import { useDiceStore } from "../../store/useDiceStore";
import "./NeonButton.css";

export function NeonButton() {
  const { startRoll } = useDiceStore();
  return (
    <div class="btn-wrap" onClick={startRoll}>
      <svg
        width="260"
        height="62"
        viewBox="0 0 260 62"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="btnFill" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#6ad8f8" />
            <stop offset="30%" stop-color="#2ab4ec" />
            <stop offset="60%" stop-color="#1278c0" />
            <stop offset="100%" stop-color="#083870" />
          </radialGradient>

          <radialGradient id="cloudGlow" cx="50%" cy="35%" r="50%">
            <stop offset="0%" stop-color="rgba(200,240,255,0.38)" />
            <stop offset="50%" stop-color="rgba(100,200,255,0.15)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </radialGradient>

          <filter id="borderGlow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="haloGlow" x="-40%" y="-150%" width="180%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>

          <filter id="poolBlur" x="-50%" y="-300%" width="200%" height="700%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <polygon
          points="18,0 242,0 260,31 242,62 18,62 0,31"
          fill="#30b8f0"
          opacity="0.25"
          filter="url(#haloGlow)"
        />

        <polygon
          class="main-fill"
          points="18,0 242,0 260,31 242,62 18,62 0,31"
          fill="url(#btnFill)"
        />

        <polygon
          points="18,0 242,0 260,31 242,62 18,62 0,31"
          fill="url(#cloudGlow)"
        />

        <polygon
          points="18,0 242,0 260,31 242,62 18,62 0,31"
          fill="none"
          stroke="rgba(180,235,255,0.22)"
          stroke-width="7"
        />

        <polygon
          points="18,0 242,0 260,31 242,62 18,62 0,31"
          fill="none"
          stroke="#50d8ff"
          stroke-width="2.5"
          filter="url(#borderGlow)"
        />

        <line
          x1="20"
          y1="1.2"
          x2="240"
          y2="1.2"
          stroke="rgba(255,255,255,0.5)"
          stroke-width="1.2"
        />
      </svg>

      <div class="btn-label">QUAY</div>
    </div>
  );
}
