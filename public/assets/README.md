# Images and Assets Folder

You can place your personal images here to make your portfolio more personal and aesthetic!

## How to use:
1. Drag and drop your image files (e.g., `profile.jpg`, `about-me.png`) into this folder (`public/assets`).
2. Go to your components (for example, `components/AboutSection.tsx`).
3. Replace the placeholder div with an HTML `<img>` tag or Next.js `<Image>` component:

```tsx
import Image from "next/image";

// Inside your component:
<Image 
  src="/assets/profile.jpg" 
  alt="My Picture" 
  width={400} 
  height={400} 
  className="rounded-2xl shadow-xl"
/>
```

Using images will instantly make your website look more vibrant and professional!
