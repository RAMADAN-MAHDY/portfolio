"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpiderWeb = ({ width = '100%', height = '100%' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return; // تأكيد وجود العنصر قبل المتابعة

    // إعداد مشهد Three.js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x121431);

    // استخدام الأبعاد الفعلية للعنصر المرجعي
    const computedWidth = mount.clientWidth;
    const computedHeight = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, computedWidth / computedHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(computedWidth, computedHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // تحسين الدقة بناءً على الشاشة
    mount.appendChild(renderer.domElement);

    // إعداد النجوم
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 50;

    // بدء الأنيميشن مباشرة بعد تحميل الصفحة
    const animate = () => {
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      // استدعاء الرسوميات بشكل مستمر
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(); // بدء الأنيميشن فورًا

    // استخدام ResizeObserver لضبط حجم المشهد عند تغيير حجم العنصر
    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    });

    resizeObserver.observe(mount);

    // تنظيف عند إلغاء التحميل
    return () => {
      resizeObserver.disconnect();
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div style={{ width, height, position: 'relative' }} ref={mountRef}></div>;
};

export default SpiderWeb;
