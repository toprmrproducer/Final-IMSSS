import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const videos = [
  {
    id: "1041570617",
    title: "Short-form Video 1",
    aspectRatio: "177.78%"
  },
  {
    id: "1041570652",
    title: "Short-form Video 2",
    aspectRatio: "56.67%"
  },
  {
    id: "1041570666",
    title: "Short-form Video 3",
    aspectRatio: "56.67%"
  },
  {
    id: "1041570704",
    title: "Short-form Video 4",
    aspectRatio: "56.67%"
  }
];

export default function VideoPortfolio() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-[#FF0000]/10 rounded-xl">
              <Video className="w-6 h-6 text-[#FF0000]" />
            </div>
          </div>
          
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Short-form </span>
            <span className="gradient-text">Video Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Engaging content crafted for maximum impact on social media 🎥
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
          >
            <div style={{ padding: `${video.aspectRatio} 0 0 0`, position: 'relative' }}>
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title={video.title}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}