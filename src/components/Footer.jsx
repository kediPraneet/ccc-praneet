import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-transparent font-sans">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-neutral-400 text-lg max-w-4xl mb-6 font-thin" style={{lineHeight:1.5, fontFamily: 'Poppins, sans-serif'}}>
          EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients.
        </div>
        <div className="text-center mt-6">
          <div className="font-semibold text-neutral-200 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Connect with us</div>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-base font-thin" style={{fontFamily: 'Poppins, sans-serif'}}>
            <a href="#" className="hover:text-white">Our Locations</a>
            <a href="#" className="hover:text-white">My EY</a>
            <a href="#" className="hover:text-white">Site Map</a>
            <a href="#" className="hover:text-white">Legal and privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
