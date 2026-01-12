import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitlist = mutation({
  args: {
    email: v.string(),
    role: v.string(),
    state: v.optional(v.string()),
    painPoint: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("This email is already on the waitlist");
    }

    const timestamp = Date.now();
    await ctx.db.insert("waitlist", {
      email: args.email,
      role: args.role,
      state: args.state,
      painPoint: args.painPoint,
      timestamp,
    });

    return { success: true };
  },
});

