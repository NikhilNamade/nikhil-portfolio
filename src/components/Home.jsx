import { Canvas } from "@react-three/fiber";
import Desktop_PC from "../pages/DesktopPC.jsx";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        frameloop="demand"
        dpr={1}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Desktop_PC />
        </Suspense>
      </Canvas>

      <div className="z-10 flex items-center absolute top-[80px] sm:top-[100px] left-0">
        <div className="ml-4 sm:ml-8 md:ml-16 flex gap-4 sm:gap-6">
          
          {/* LINE */}
          <div className="flex flex-col items-center mt-3">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <div className="w-1 h-32 sm:h-40 bg-gradient-to-b from-purple-500 to-transparent" />
          </div>

          {/* TEXT */}
          <div>
            <h1
              className="
                text-white
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              Hi, I&apos;m <span className="text-purple-500">Nikhil</span>
            </h1>

            <p
              className="
                mt-3
                sm:mt-4
                text-gray-300
                max-w-xs
                sm:max-w-md
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
              "
            >
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
