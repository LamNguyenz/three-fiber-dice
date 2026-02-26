# Three Fiber Dice

An interactive 3D dice application built with React Three Fiber, featuring realistic dice rolling physics and stunning visual effects.

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Three.js & React Three Fiber** - 3D graphics and rendering
- **React Three Drei** - Useful helpers and abstractions for React Three Fiber
- **React Three Postprocessing** - Advanced visual effects
- **Zustand** - Lightweight state management
- **Vite** - Fast development and build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd three-fiber-dice
```

2. Install dependencies:

```bash
pnpm install
```

### Running the Application

Start the development server:

```bash
pnpm dev
```

The application will open at `http://localhost:5173` (or the next available port).

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 🎮 Usage

1. **Roll the Dice**: Click the neon button to roll the dice
2. **Interactive 3D**: Use your mouse to rotate and zoom the 3D view
3. **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📁 Project Structure

```
src/
├── components/
│   ├── Dice/          # 3D dice component
│   └── NeonButton/    # Interactive button component
├── store/             # Zustand state management
├── assets/            # Static assets
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for making 3D in React amazing
- [Three.js](https://threejs.org/) for the powerful 3D library
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
