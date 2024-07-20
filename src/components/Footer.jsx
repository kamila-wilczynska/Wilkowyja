import { FaPhoneAlt, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { TbBrandBooking } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Kontakt</h3>
          <p>
            <FaPhoneAlt /> +48 123 456 789
          </p>
          <p>
            <MdEmail /> wilkowyja122@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Adres: Ulica, Miasto, Kod pocztowy
          </p>
        </div>
        <div className="footer-section social">
          <h3></h3>
          <a
            href="https://www.facebook.com/AgroturystykaWilkowyja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href="https://www.booking.com/hotel/pl/agroturystyka-wilkowyja-mchawa12345.pl.html?aid=318615&label=New_English_EN_GBIE_5226314545-RnYQj%2AqnIkYg15Re%2ASD5mgS634117827792%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Adsa-64415224945%3Alp9045940%3Ali%3Adec%3Adm%3Aag5226314545%3Acmp108539665&sid=da272643dace1a7ad47e756348fa86d7&age=0;all_sr_blocks=226968301_204036433_0_0_0;checkin=2024-07-28;checkout=2024-07-29;dest_id=-515927;dest_type=city;dist=0;group_adults=1;group_children=1;hapos=1;highlighted_blocks=226968301_204036433_0_0_0;hpos=1;matching_block_id=226968301_204036433_0_0_0;no_rooms=1;req_adults=1;req_age=0;req_children=1;room1=A%2C0;sb_price_type=total;sr_order=popularity;sr_pri_blocks=226968301_204036433_0_0_0__22000;srepoch=1721488227;srpvid=f8d26aa577f20190;type=total;ucfs=1&"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandBooking /> Booking
          </a>
        </div>
        <div className="footer-section quote">
          <p>
            Czuł, że to miejsce może go uleczyć. Przynajmniej jego duszę. Tyle
            razy słyszał to powiedzenie: “Rzucić wszystko i wyjechać w
            Bieszczady”, ale dopiero teraz zrozumiał, jak wielka mądrość jest w
            nim zawarta.
            <br />
            <br />- Sebastian Sadlej, To nie moja wina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
