import "./BezAlkh.css";
import { useState, useRef, useContext } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ThemeContext } from "../App";
export default function BezAlkh() {
  const [Open, setOPen] = useState(false);
  const ref = useRef();
  const toggle = () => {
    setOPen(!Open);
  };
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    foreground: darkTheme ? "#ffffff" : "#000000",
    background: darkTheme ? "#eeeeee" : "#222222",
    text: darkTheme ? "white" : "black"
  };
  const images = [
    {
      original: "https://images6.alphacoders.com/868/thumb-1920-868943.jpg",
      thumbnail: "https://images6.alphacoders.com/868/thumb-1920-868943.jpg"
    },
    {
      original:
        "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?cs=srgb&dl=pexels-nao-triponez-129207.jpg&fm=jpg",
      thumbnail:
        "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?cs=srgb&dl=pexels-nao-triponez-129207.jpg&fm=jpg"
    },
    {
      original:
        "https://rare-gallery.com/uploads/posts/1089770-food-coffee-drink-cup-latte-cappuccino-espresso-caffeine-flavor-coffee-cup-caff-macchiato-coffee-milk-ristretto.jpg",
      thumbnail:
        "https://rare-gallery.com/uploads/posts/1089770-food-coffee-drink-cup-latte-cappuccino-espresso-caffeine-flavor-coffee-cup-caff-macchiato-coffee-milk-ristretto.jpg"
    },
    {
      original: "https://cdn.wallpapersafari.com/58/64/NVgFfA.jpg",
      thumbnail: "https://cdn.wallpapersafari.com/58/64/NVgFfA.jpg"
    },
    {
      original: "https://wallpapercave.com/wp/wp9571900.jpg",
      thumbnail: "https://wallpapercave.com/wp/wp9571900.jpg"
    },
    {
      original:
        "https://images.pexels.com/photos/2249342/pexels-photo-2249342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/2249342/pexels-photo-2249342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      original: "https://cdn.wallpapersafari.com/45/90/dCS7mf.jpg",
      thumbnail: "https://cdn.wallpapersafari.com/45/90/dCS7mf.jpg"
    },
    {
      original:
        "https://image.dnevnik.hr/media/images/1920x1080/Mar2023/62505467-irska-kava.jpg",
      thumbnail:
        "https://image.dnevnik.hr/media/images/1920x1080/Mar2023/62505467-irska-kava.jpg"
    },
    {
      original:
        "https://images.squarespace-cdn.com/content/v1/5f2623e02729d25aa89e2752/1597363709648-XLL8R6DR3QZ8J72ZEFA1/white-coffee-specialty.jpg?format=2500w",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5f2623e02729d25aa89e2752/1597363709648-XLL8R6DR3QZ8J72ZEFA1/white-coffee-specialty.jpg?format=2500w"
    },
    {
      original:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      thumbnail:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      original:
        "https://plus.unsplash.com/premium_photo-1675281834892-03f3822733e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1675281834892-03f3822733e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <div className="Glava" style={themeStyles}>
      <h1 className="Naslov">Kava</h1>
      <p className="Text1">
        Svaki dan, točnije svako jutro, ispijete najmanje jednu šalicu ukusne,
        vruće kave kako bi vam dan započeo što ljepše i bolje. Taj mirisni
        užitak s vama je u vašim najtežim i onim najboljim trenutcima. Jeste li
        se ikada zapitali tko je za to zaslužan? Kako je kava uopće dospjela baš
        u vašu šalicu? Ako vas odgovori na ova pitanja zanimaju, na pravom ste
        mjestu da sve naučite.
      </p>
      <h2>Kako je nastala kava?</h2>
      <br></br>
      <p className="Text1">
        Nitko nije posve siguran koliko je kava stara, to jest koliko dugo
        sudjeluje u našim životima, ali možemo reći da je danas među prvim
        proizvodima na svijetu. Priča o kavi započinje u Etiopiji, gdje je ovaj
        plod navodno poznat već više od tri tisuće godina. Tamo ga je pleme
        Galla miješalo sa životinjskim mastima, praveći energetske loptice koje
        su ratnici konzumirali prije samog odlaska u bitku.
      </p>
      <br></br>
      <h2>
        Povijest kave – postoje mnoge priče, legende i mitovi o početcima kave
      </h2>
      <p className="Text1">
        Najpopularnija je priča, s elementima legende, o etiopijskom pastiru
        Kaldiju (oko 300 godina prije Krista), koji je jednoga dana primjetio
        kako se njegovo stado koza ponaša živahno, nakon što se najelo crvenih
        bobica (zanimljiva činjenica – budući da kava raste u obliku bobica na
        grmu, po tome spada u voće). Kaldi nikada nije vidio takav grm. Međutim,
        ne znajući što je to bilo, on nije mogao odoljeti. Odlučio je probati
        bobice koje su imale prilično snažan utjecaj na životinje. Odmah nakon
        što je isprobao, Kaldi je zaključio da mu bobice daju neobičan val
        energije! Svoje otkriće podijelio je s koptskim svećenicima u obližnjem
        samostanu. Najprije je bio odbijen od strane svećenika, koji su bobice
        bacili u vatru, no zatim se sobom proširio neobično ugodan miris.
        Svećenici su plodove najprije namočili u vodi te ih zatim pojeli dok bi
        vodu u kojoj su se bobice namakale popili. Taj napitak držao ih je
        budnima tijekom dugih molitva. Nitko nije u potpunosti siguran kada je
        kava prvi put otkrivena Arheolozi su, u ranim spisima oko 900. godine
        prije Krista, pronašli dokaze o korištenju kave kao lijeka u arapskom
        svijetu – protiv anemije, hunjavice i opstipacije (zatvora). Biljka
        potječe iz Etiopije, gdje započinje ritaul pravljenja napitka od sušenih
        i isprženih sjemenki. Ubrzo je ispijanje kave proširilo i na druge
        zemlje. Iz Etiopije korištenje kave prelazi na Bliski istok. Jemen je
        prva država koja je imala i plantaže kave, točnije u gradu Mocha prema
        kojem se i naziva jedna od najpopularnijih vrsta kave – caffe mocca.
        Uzgoj je dodatno proširio na Arabiji i Egiptu. Arapi vješto skrivaju
        tajnu kuhanje kave, ali uvijek je postojala mogućnost krijumčarenja, za
        to je smrtna kazna. Europa se suočava kavu za vrijeme osmanskih
        osvajanja.
      </p>
      <br></br>
      <p></p>
      <br></br>
      <p></p>
      <br></br>
      <button className="button-85" onClick={toggle}>
        Galerija kave
      </button>
      {Open && (
        <div className="div1">
          <ImageGallery items={images}></ImageGallery>
        </div>
      )}
    </div>
  );
}
