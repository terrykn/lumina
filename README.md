# Lumina

**Lumina** is a premium, high-performance mobile app landing page template built for developers. Crafted with **Next.js 15**, **Tailwind CSS 4**, and **Magic UI**, it provides a beautiful interface with call to action buttons and space for a waitlist.

[![Next.js 15](https://img.shields.io/badge/Framework-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Styling-Tailwind%204-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

## Why Lumina?

Lumina is a design-first launchpad. It leverages the latest web technologies to deliver a buttery-smooth user experience that showcases your mobile app in its best light!

### Design Highlights
- **Magical Aesthetics:** Utilizes Magic UI components like *Aurora Text*, *Shimmer Buttons*, and *Animated Gradients*.
- **Modern Layouts:** Features sophisticated layouts and sleek *iPhone Mockups* for visual demonstrations.
- **Interactive Motion:** Powered by Framer Motion for high-quality transitions that feel premium.
- **Dark Mode Native:** Full support for system themes.

### Technical Power
- **Next.js 15 (Turbopack):** Lightning-fast development and optimized production builds.
- **Tailwind CSS 4:** Leveraging the newest CSS-in-JS capabilities for leaner, faster styling.
- **TypeScript First:** Robust type safety across the entire codebase.
- **Lead Generation:** Pre-built, high-conversion Waitlist and FAQ sections.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Components:** [Magic UI](https://magicui.design/), [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Logos:** [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/lumina.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Configuration

Lumina is designed to be configured entirely via `config/site.json`. You don't need to touch the code to change the content.

### Global Settings
- `name`: Your app's name.
- `theme`: Set the default theme: `"dark"`, `"light"`, or `"system"`.
- `appIcon`: Path to your app icon (e.g., `"/icon.png"`).

### Hero & Lead Gen
- `hero.showWaitlist`: Set to `true` to show the waitlist button.
- `hero.showApple` / `hero.showAndroid`: Toggle App Store/Google Play buttons.
- `hero.showCount`: Choose what to display under the buttons:
  - `"users"`: Shows total user count (e.g., "Trusted by 5M+ users").
  - `"waitlist"`: Shows how many people are on the waitlist.
  - `false`: Hides the count entirely.

### Waitlist Integration (Brevo / Sibforms)
The waitlist uses **Brevo (formerly Sendinblue)**. To set it up:
1. Create an account at [Brevo](https://www.brevo.com/).
2. Go to **Contacts** > **Forms** > **Subscription**.
3. Create your form and go to the **Share** tab.
4. Copy the **iframe URL** and paste it into `waitlist.iframeUrl` in `site.json`.

### Images & Screenshots
Place all your visual assets in the `public/` folder:
- **App Icon:** `public/icon.png` (Update `site.json` if you change the name).
- **Hero Mockups:** `public/screenshots/main-screen.png`, `secondary-screen.png`, etc.
- **Gallery:** Add as many screenshots as you like to `public/screenshots/` and list them in the `gallery.screenshots` array in `site.json`.

### Social Links
Social links are dynamic! Add as many as you want in `footer.socials`:
- `icon`: Use any icon name from [React Icons](https://react-icons.github.io/react-icons/) (e.g., `FaTwitter`, `FaGithub`, `SiInstagram`).
- `link`: Your full social profile URL.

---

Built with ❤️ by Terry Nguyen. Check out my [Portfolio](https://terrykn.github.io). Connect with me on [LinkedIn](https://linkedin.com/in/terrykn).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.