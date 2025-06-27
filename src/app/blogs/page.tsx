import Image from "next/image";

const BlogsPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Cosmic background image */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src="/cosmic.png" // Make sure this image exists in your public/ directory
                    alt="Cosmic background"
                    fill
                    className="object-cover object-center brightness-110 contrast-125"
                    priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>
            {/* Black bar behind navbar */}
            <div className="absolute top-0 left-0 w-full h-[100px] bg-black z-0" />
            {/* Content */}
            <div className="relative z-10 pt-32 max-w-7xl mx-auto px-4 pb-16">
                <div className="text-white mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight pb-2">
                        Blog Posts
                    </h1>
                </div>
                <div className="text-gray-300 text-lg">No blog posts are available at the moment. Please check back soon!</div>
            </div>
        </div>
    )
}

export default BlogsPage; 