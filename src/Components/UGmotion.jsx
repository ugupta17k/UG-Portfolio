import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const UGmotion = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    gsap.to(".UG", {
      scale: 12,
      duration: 2,
      delay: 0.5,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onComplete: () => {
        setShowContent(true);
      },
    });
  }, []);

  if (showContent) return null;

  return (
    <div className="Animebox fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black text-white">
      <h1 className="UG text-center text-[3rem]">UG</h1>
    </div>
  );
};

export default UGmotion;
