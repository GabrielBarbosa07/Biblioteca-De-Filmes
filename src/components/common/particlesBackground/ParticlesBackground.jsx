// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

// export const ParticlesBackground = () => {
//     const particlesInit = useCallback(async (engine) => {
        
       
//         await loadFull(engine);
//     }, []);


//     return (
//         <Particles
//             id="tsparticles"
//              init={particlesInit}
//             // loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "black",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     collisions: {
//                         enable: true,
//                     },
//                     move: {
//                         directions: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 2,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 500,
//                         },
//                         value: 20,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 4 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     );
// };
