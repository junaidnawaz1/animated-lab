# Anime Navbar Component

A beautiful animated navigation bar with a cute mascot character that follows your active tab.

## Installation

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

## Setup Files

### 1. Create `components/ui/anime-navbar.jsx`
Copy the anime-navbar.jsx code

### 2. Create `lib/utils.js`
```javascript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

### 3. Update `tailwind.config.js`
```javascript
theme: {
  extend: {
    keyframes: {
      "pulse-slow": {
        '0%, 100%': { transform: 'translateX(-100%)' },
        '50%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      "pulse-slow": "pulse-slow 3s ease-in-out infinite",
    },
  },
}
```

### 4. Add to `globals.css`
```css
@keyframes shine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
```

## Usage

```javascript
"use client"

import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  { name: "Home", url: "#", icon: Home },
  { name: "Convert", url: "#", icon: FileText },
  { name: "Pricing", url: "#", icon: CreditCard },
  { name: "About", url: "#", icon: Info },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <AnimeNavBar items={items} defaultActive="Home" />
    </div>
  )
}
```

## Features

- Smooth animations with Framer Motion
- Cute anime mascot that follows active tab
- Mobile responsive (icons on mobile, text on desktop)
- Hover effects with sparkles
- Easy to customize with Tailwind CSS

## Tech Stack

- React / Next.js
- Framer Motion
- Tailwind CSS
- Lucide React Icons integrations.

- 📸 **Instagram:** [@designwith_jn](https://www.instagram.com/designwith_jn)
 Creative Developer & Technical Partner

---
*Developed by Junaid Nawaz.*
