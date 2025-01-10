
const Footer = () => {
  return (
    <section>
       <div className="bg-neutral-900 text-gray-100 h-[25vh] flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
            <div className="flex footer-row gap-4">
                <span>Help</span>
                <span>Site Index</span>
                <span>IMDB Pro</span>
                <span>Box Office Mojo</span>
                <span>License IMDB Data</span>
            </div>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="flex gap-4 footer-row">
            <span>Press Room</span>
            <span>Advertising</span>
            <span>Jobs</span>
            <span>Conditions of use</span>
            <span>Privacy Policy</span>
            <span>Your Ads Privacy Concern</span>
          </div>
          </div>
          <div className="flex justify-center">
            <span className="text-sm text-gray-300">© 1990 - 2025 by imdbclone.vercel.app</span>
          </div>
       </div>
    </section>
  )
}

export default Footer