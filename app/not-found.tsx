// app/not-found.tsx

export default function NotFoundPage() {
    return (
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-2xl mx-auto text-center mb-16 mt-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-xl shadow transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  