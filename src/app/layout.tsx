import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Jeonhui | iOS Developer",
    description: "Personal Page(Blog & Portfolio)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body>
        {children}
        </body>
        </html>
    );
}
