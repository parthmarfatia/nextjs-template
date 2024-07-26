import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter',
};

export default function CounterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
