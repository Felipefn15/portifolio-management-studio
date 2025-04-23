# Next.js Application with Firebase and AI Integration

This project is a comprehensive web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and integrated with **Firebase** and **AI** functionalities. It includes a wide array of UI components and features for user authentication, data fetching, and wallet management.

## Key Features

*   **Next.js**: Leverages the power of Next.js for server-side rendering, routing, and optimized web performance.
*   **TypeScript**: Ensures type safety and code maintainability with TypeScript.
*   **UI Components**: Features a custom UI library with a wide range of components, built with `src/components/ui`.
*   **Firebase Integration**: Utilizes Firebase for backend services, including data storage, authentication, and more, as seen in `src/lib/firebase.ts` and `src/lib/firebase-admin.ts`.
*   **AI Capabilities**: Integrates AI functionalities, as indicated by the presence of `src/ai/ai-instance.ts` and `src/ai/dev.ts`.
*   **Data Services**: Includes services for fetching real-time data, such as cryptocurrency and stock prices (`src/services/crypto-price.ts`, `src/services/stock-price.ts`).
*   **User Authentication**: Provides a login page (`src/app/login/page.tsx`) for user authentication.
*   **Wallet Management**: Manages user wallets, with a dedicated section and individual wallet pages (`src/app/wallets/page.tsx`, `src/app/wallets/[id]/page.tsx`).
*   **Tailwind CSS**: Styled with Tailwind CSS, ensuring a responsive and modern design, configured in `tailwind.config.ts`.
* **Nix**: The file `.idx/dev.nix` configures a reproducible development environment.

## File Structure


