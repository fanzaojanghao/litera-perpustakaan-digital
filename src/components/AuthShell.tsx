import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

/** Bingkai halaman masuk/daftar bergaya neobrutalism yang rapi. */
export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-14">
      <div className="mx-auto grid w-full max-w-4xl items-stretch gap-6 md:grid-cols-[1fr_1.1fr]">
        <aside className="hidden flex-col justify-between border-2 border-foreground bg-primary p-8 text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] md:flex">
          <Link to="/" className="font-heading text-2xl font-black tracking-tight">Litera</Link>
          <div>
            <p className="font-heading text-3xl font-black leading-tight">Ribuan cerita menunggu untuk dibaca.</p>
            <p className="mt-3 text-sm opacity-90">Baca, tulis, dan ikuti penulis favoritmu — semua dalam satu aplikasi.</p>
          </div>
          <div className="flex gap-2 text-xs font-bold">
            {['Romansa', 'Fantasi', 'Misteri'].map((g) => (
              <span key={g} className="border-2 border-foreground bg-card px-2 py-1 text-foreground">{g}</span>
            ))}
          </div>
        </aside>

        <main className="border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_hsl(var(--foreground))] sm:p-8">
          <Link to="/" className="mb-6 inline-block font-heading text-xl font-black text-primary md:hidden">Litera</Link>
          <h1 className="font-heading text-2xl font-black tracking-tight text-foreground">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
          <div className="mt-6 border-t-2 border-foreground pt-4 text-center text-sm text-muted-foreground">{footer}</div>
        </main>
      </div>
    </div>
  );
}

export const authInput =
  'h-11 w-full border-2 border-foreground bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-[2px_2px_0_0_hsl(var(--foreground))]';
export const authButton =
  'flex h-11 w-full items-center justify-center gap-2 border-2 border-foreground bg-primary text-sm font-bold text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-60';
export const authLabel = 'mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground';
