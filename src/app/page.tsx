export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold tracking-tight text-black dark:text-white sm:text-7xl md:text-8xl">
            unveil<span className="text-zinc-400 dark:text-zinc-600">.skin</span>
          </h1>
        </div>
        
        <div className="max-w-2xl space-y-6">
          <p className="text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            We're still under development
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 sm:text-xl">
            Unveiling something amazing soon. We'll be live in a few months.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-600">
          <div className="h-2 w-2 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
          <span>Coming soon</span>
        </div>
      </main>
    </div>
  );
}
