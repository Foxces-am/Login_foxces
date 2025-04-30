import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Portfolio configuration data
const portfolioConfig = {
  profile: {
    username: "foxces_am",
    fullName: "FOXCES",
    bio: "صانع محتوى إبداعي على منصات التواصل الاجتماعي",
    avatarUrl: "/assets/profile.png"
  },
  social: {
    tiktok: "https://www.tiktok.com/@foxces_am",
    instagram: "https://www.instagram.com/foxces_official"
  },
  apps: [
    {
      id: 1,
      name: "Blurrr",
      description: "تطبيق تأثيرات بصرية متقدمة",
      details: "تطبيق للتحرير البصري بتأثيرات احترافية مميزة وفلاتر عالية الجودة.",
      linkUrl: "https://www.blurrr.app",
      iconType: "photo-film",
      color: "#FE2C55"
    },
    {
      id: 2,
      name: "Alight Motion",
      description: "برنامج تحريك وتأثيرات متحركة",
      details: "منصة متكاملة لتحرير الفيديو وإضافة تأثيرات الحركة والرسوم المتحركة.",
      linkUrl: "https://alightmotion.com",
      iconType: "film",
      color: "#25F4EE"
    }
  ],
  videos: [
    {
      id: 7258157261694074139,
      title: "تأثيرات فوكسيس المميزة",
      views: "530.2K",
      likes: "105.7K",
      comments: "1.5K",
      shares: "4.2K",
      thumbnailUrl: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg"
    },
    {
      id: 7267390978291919110,
      title: "أسرار تصميم الفيديو",
      views: "468.9K",
      likes: "92.3K",
      comments: "1.1K",
      shares: "3.5K",
      thumbnailUrl: "https://i.pinimg.com/564x/1e/d8/2a/1ed82a75d882264cef0367f475c2c659.jpg"
    },
    {
      id: 7289518285887733035,
      title: "إبداعات foxces الجديدة",
      views: "387.1K",
      likes: "78.6K",
      comments: "932",
      shares: "2.7K",
      thumbnailUrl: "https://i.pinimg.com/564x/85/bd/bf/85bdbf36db8f9851220dad991a4f98a1.jpg"
    },
    {
      id: 7274198736325610779,
      title: "كيف تصمم محتوى مميز",
      views: "321.5K",
      likes: "65.8K",
      comments: "814",
      shares: "2.3K",
      thumbnailUrl: "https://i.pinimg.com/564x/cf/96/cd/cf96cdade20e92d4d593cf015b6a9de9.jpg"
    },
    {
      id: 7296028227303554350,
      title: "أدوات صناعة المحتوى الإبداعي",
      views: "275.2K",
      likes: "56.9K",
      comments: "687",
      shares: "1.9K",
      thumbnailUrl: "https://i.pinimg.com/564x/0a/c5/6b/0ac56bc991551a5a92812a8d4607c7cd.jpg"
    }
  ]
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/profile', (req, res) => {
    res.json(portfolioConfig.profile);
  });
  
  app.get('/api/social', (req, res) => {
    res.json(portfolioConfig.social);
  });
  
  app.get('/api/apps', (req, res) => {
    res.json(portfolioConfig.apps);
  });
  
  app.get('/api/videos', (req, res) => {
    res.json(portfolioConfig.videos);
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
