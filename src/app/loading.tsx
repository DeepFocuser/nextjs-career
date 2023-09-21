export default function Loading() {
    return (
        <>
            <div className="absolute right-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
                <div className="h-60 w-48 animate-spin rounded-full border-y-8 border-green-300"></div>
            </div>
            <div className="z-45 absolute right-0 top-0 flex h-screen w-screen items-center justify-center">
                <p className="text-center text-xl">
                    🌜 Please wait a moment~ 🌛
                </p>
            </div>
        </>
    );
}
