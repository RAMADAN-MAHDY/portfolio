"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpiderWeb = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check if WebGL is supported
    const isWebGLSupported = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!isWebGLSupported()) {
      console.warn('WebGL is not supported. Skipping SpiderWeb animation.');
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // لون السماء الأزرق

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      mount.appendChild(renderer.domElement);
    } catch (error) {
      console.error('Failed to create WebGLRenderer:', error);
      return;
    }

    // تحميل صورة سحابة شفافة (ممكن تغير اللينك حسب ما تحب)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/pngegg.png', (cloudTexture) => {
      const cloudMaterial = new THREE.SpriteMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.6,
      });

      const cloudCount = 10;
      const clouds = [];

      for (let i = 0; i < cloudCount; i++) {
        const cloud = new THREE.Sprite(cloudMaterial);
        cloud.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 50
        );
        const scale = Math.random() * 10 + 5;
        cloud.scale.set(scale, scale, 1);
        scene.add(cloud);
        clouds.push(cloud);
      }

      const animate = () => {
        clouds.forEach(cloud => {
          cloud.position.x += 0.02;
          if (cloud.position.x > 60) {
            cloud.position.x = -60;
          }
        });

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    });

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    });
    resizeObserver.observe(mount);

    return () => {
      resizeObserver.disconnect();
      mount.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SpiderWeb;











// "use client";

// import { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const SpiderWeb = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87ceeb); // سماوي

//     const width = mount.clientWidth;
//     const height = mount.clientHeight;

//     const camera = new THREE.PerspectiveCamera(750, width / height, 0.1, 1000);
//     camera.position.z = 50;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mount.appendChild(renderer.domElement);

//     // دالة لإنشاء سحابة مكونة من كرات
//     const createCloud = (x, y, z) => {
//       const cloud = new THREE.Group();
//       const geometry = new THREE.SphereGeometry(5, 32, 32);
//       const material = new THREE.MeshStandardMaterial({
//         color: 0xF5F5EC,
//         roughness: 0.8,
//         metalness: 0.1,
//       });

//       const positions = [
//         [0, 0, 0],
//         [4, 1, 0],
//         [-4, 1, 0],
//         [2, -1, 0],
//         [-2, -1, 0],
//       ];

//       positions.forEach(([dx, dy, dz]) => {
//         const sphere = new THREE.Mesh(geometry, material);
//         sphere.scale.setScalar(Math.random() * 0.6 + 0.8);
//         sphere.position.set(dx, dy, dz);
//         cloud.add(sphere);
//       });

//       cloud.position.set(x, y, z);
//       return cloud;
//     };

//     // إضاءة
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(10, 10, 10);
//     scene.add(directionalLight);

//     // سحب متعددة تتحرك
//     const clouds = [];
//     for (let i = 0; i < 5; i++) {
//       const cloud = createCloud(
//         Math.random() * 100 - 50,
//         Math.random() * 30 - 15,
//         Math.random() * -30
//       );
//       scene.add(cloud);
//       clouds.push(cloud);
//     }

//     const animate = () => {
//       clouds.forEach(cloud => {
//         cloud.position.x += 0.03;
//         if (cloud.position.x > 60) {
//           cloud.position.x = -60;
//         }
//       });

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     const resizeObserver = new ResizeObserver(() => {
//       const { clientWidth, clientHeight } = mount;
//       camera.aspect = clientWidth / clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(clientWidth, clientHeight);
//     });
//     resizeObserver.observe(mount);

//     return () => {
//       resizeObserver.disconnect();
//       mount.innerHTML = '';
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         pointerEvents: 'none',
//       }}
//     />
//   );
// };

// export default SpiderWeb;
