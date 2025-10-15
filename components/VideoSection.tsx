import React from "react";
import HeroScrollVideo from "./ui/scroll-animated-video";

const VideoSection: React.FC = () => {
  return (
    <div id="video-showcase" className="relative">
      <HeroScrollVideo
        title="Crafting Digital Experiences"
        subtitle="Where Code Meets Creativity"
        meta="2025 • Portfolio"
        credits={
          <>
            <p>Developed by</p>
            <p>Aditya Kumar</p>
          </>
        }
        media="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
        overlay={{
          caption: "SHOWCASE • 2025",
          heading: "Building the Future, One Line at a Time",
          paragraphs: [
            "Transforming ideas into elegant, performant web applications.",
            "Specializing in MERN stack development with modern design principles.",
          ],
          extra: (
            <div className="flex gap-4 mt-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 bg-orange text-white rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          ),
        }}
        initialBoxSize={300}
        targetSize="fullscreen"
        scrollHeightVh={250}
        showHeroExitAnimation={true}
        sticky={true}
        overlayBlur={12}
        overlayRevealDelay={0.4}
        smoothScroll={false} // Disable internal Lenis since we already have it in FullExperience
        eases={{
          container: "expo.out",
          overlay: "expo.out",
          text: "power3.inOut",
        }}
      />
    </div>
  );
};

export default VideoSection;
