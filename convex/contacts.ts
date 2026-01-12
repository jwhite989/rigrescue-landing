import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitContact = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    await ctx.db.insert("contacts", {
      email: args.email,
      name: args.name,
      message: args.message,
      timestamp,
    });

    return { success: true };
  },
});

