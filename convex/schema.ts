import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    role: v.string(),
    state: v.optional(v.string()),
    painPoint: v.optional(v.string()),
    timestamp: v.number(),
  }).index("by_email", ["email"]),
  contacts: defineTable({
    email: v.string(),
    name: v.string(),
    message: v.string(),
    timestamp: v.number(),
  }),
});

