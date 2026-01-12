# RigRescue Connect - Landing Page

A modern landing page for RigRescue built with React, TypeScript, Vite, and Convex.

## Features

- Waitlist signup form with state validation
- Contact form with email notifications
- Responsive design with Tailwind CSS
- Convex backend for data storage
- Resend integration for email delivery

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Convex account (free tier available)
- A Resend account (free tier available)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd rigrescue-connect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Convex

1. Install Convex CLI (if not already installed):

   ```bash
   npm install -g convex
   ```

2. Initialize Convex (if not already done):

   ```bash
   npx convex dev
   ```

   This will:
   - Create a Convex project (if needed)
   - Generate `.env.local` with `VITE_CONVEX_URL`
   - Push your schema and functions to Convex

3. Set up Resend API key in Convex:
   ```bash
   npx convex env set RESEND_API_KEY your_resend_api_key_here
   ```
   Get your API key from: https://resend.com/api-keys

### 4. Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

The `.env.local` file will be automatically created when you run `npx convex dev`. It should contain:

```
VITE_CONVEX_URL=your_convex_deployment_url
```

**Important:**

- `.env.local` is gitignored and should never be committed
- Each collaborator needs their own Convex project or access to the shared project
- The `RESEND_API_KEY` is set in Convex, not in `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## For Collaborators

### Setting Up Your Own Environment

1. **Convex Setup:**
   - Create your own Convex account at https://convex.dev
   - Run `npx convex dev` to initialize your own project
   - Or ask the project owner for access to the shared Convex project

2. **Resend Setup:**
   - Create your own Resend account at https://resend.com
   - Get your API key from the Resend dashboard
   - Set it in Convex: `npx convex env set RESEND_API_KEY your_key`

3. **Email Configuration:**
   - Update `convex/sendEmail.ts` with your email address in the `to` field
   - Or use the shared Resend account if you have access

### Using a Shared Convex Project

If you're using a shared Convex project:

1. Get the Convex deployment URL from the project owner
2. Add it to your `.env.local` file:
   ```
   VITE_CONVEX_URL=the_shared_deployment_url
   ```
3. The `RESEND_API_KEY` should already be set in the shared Convex project

## Project Structure

```
rigrescue-connect/
├── convex/           # Convex backend functions
│   ├── schema.ts    # Database schema
│   ├── waitlist.ts  # Waitlist mutations
│   ├── contacts.ts  # Contact form mutations
│   └── sendEmail.ts # Email sending action
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   └── main.tsx     # App entry point
└── public/          # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables Reference

### Client-Side (`.env.local`)

- `VITE_CONVEX_URL` - Your Convex deployment URL

### Server-Side (Convex Environment)

- `RESEND_API_KEY` - Your Resend API key (set via `npx convex env set`)

## Troubleshooting

### Emails Not Sending

- Verify `RESEND_API_KEY` is set in Convex: `npx convex env ls`
- Check Convex logs for email errors
- Ensure Resend account email matches the recipient email (for test domain)

### Convex Connection Issues

- Verify `VITE_CONVEX_URL` is set in `.env.local`
- Run `npx convex dev` to ensure functions are deployed
- Check Convex dashboard for deployment status

## License

[Add your license here]
