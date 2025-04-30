import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Video schema
export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  views: text("views").notNull(),
  likes: text("likes").notNull(),
  comments: text("comments").notNull(),
  shares: text("shares").notNull(),
  thumbnailUrl: text("thumbnailUrl").notNull(),
});

export const insertVideoSchema = createInsertSchema(videos).omit({
  id: true,
});

export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type Video = typeof videos.$inferSelect;

// App schema
export const apps = pgTable("apps", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  details: text("details").notNull(),
  linkUrl: text("linkUrl").notNull(),
  iconType: text("iconType").notNull(),
  color: text("color").notNull(),
});

export const insertAppSchema = createInsertSchema(apps).omit({
  id: true,
});

export type InsertApp = z.infer<typeof insertAppSchema>;
export type App = typeof apps.$inferSelect;

// Social media schema
export const socials = pgTable("socials", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  username: text("username").notNull(),
  url: text("url").notNull(),
  iconName: text("iconName").notNull(),
  color: text("color").notNull(),
});

export const insertSocialSchema = createInsertSchema(socials).omit({
  id: true,
});

export type InsertSocial = z.infer<typeof insertSocialSchema>;
export type Social = typeof socials.$inferSelect;
