export default function PartnersSection() {
    return (
        <section className="bg-black py-20 flex flex-col items-center text-white">
            <h2 className="text-sm tracking-[0.3em] text-gray-200 mb-12">OUR PARTNERS</h2>

            <div className="flex flex-wrap justify-center gap-16 sm:gap-24">
                {/* Partner 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                        {/* Thay bằng <img src="/path/to/logo.png" alt="Stellar" /> */}
                        <div className="text-4xl">✧</div>
                    </div>
                    <span className="text-xl font-semibold tracking-wide">STELLAR</span>
                </div>

                {/* Partner 2 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                        <div className="text-3xl">◆</div>
                    </div>
                    <span className="text-xl font-semibold tracking-wide">KRAOS</span>
                </div>

                {/* Partner 3 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                        <div className="text-3xl">🔥</div>
                    </div>
                    <span className="text-xl font-semibold tracking-wide text-center">
                        CINDER <br /> HOUSE
                    </span>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                        <div className="text-3xl">⟁</div>
                    </div>
                    <span className="text-xl font-semibold tracking-wide text-center">
                        FIRST <br /> SIGNIO
                    </span>
                </div>
            </div>
        </section>
    )
}
