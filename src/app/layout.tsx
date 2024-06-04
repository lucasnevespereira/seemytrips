import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import './globals.css';
import Image from 'next/image'
import Link from "next/link";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "See My Trips",
    description: "A simple app to track your trips",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body>
            <header className="flex items-center justify-between p-4 text-white">
                <Link href={"/"}>
                    <Image
                        src="/logo.svg"
                        alt="My Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="flex space-x-2">
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </header>
            <main>
                {children}
            </main>
            </body>
            </html>
        </ClerkProvider>
    );
}
