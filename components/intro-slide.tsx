import MicrobladingSlider from "./microblading-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive sliders */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="w-full max-w-lg mx-auto">
            <MicrobladingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Pourquoi le Lash Lifting
            <br />
            <span className="text-slate-900">change tout</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Regardez cette transformation : de cils naturels et plats à des cils parfaitement courbés et volumineux,
              sans extensions ni mascara.
            </p>

            <p>
              Le lash lifting révèle la beauté naturelle de vos cils en les courbant et les redressant de façon durable.
              Résultat : un regard plus ouvert et expressif qui dure 6-8 semaines.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Dans ce module, vous allez apprendre à :</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Faire un lash lifting complet</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Reconnaître les contre-indications importantes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Respecter les règles de sécurité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
