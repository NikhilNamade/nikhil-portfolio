import { Canvas } from "@react-three/fiber";
import Desktop_PC from "../pages/DesktopPC.jsx";
const Home = () => {
  return (
    <div className={`w-full h-screen relative`}>
      <Canvas id="canvas">
        <Desktop_PC />
      </Canvas>
      <div className="z-10  flex items-center absolute top-[100px] left-0">
        <div className="ml-16 flex gap-6">
          {/* LEFT LINE + DOT */}
          <div className="flex flex-col items-center mt-3">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <div className="w-1 h-40 bg-gradient-to-b from-purple-500 to-transparent" />
          </div>

          {/* TEXT CONTENT */}
          <div>
            <h1 className="text-white text-5xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-purple-500">Nikhil</span>
            </h1>

            <p className="mt-4 text-gray-300 max-w-md text-lg leading-relaxed">
              I develop 3D visuals, user <br />
              interfaces, App and web applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
