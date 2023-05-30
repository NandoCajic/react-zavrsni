import React from "react";

import MyImage from "./Slike/Pina.jpg";
import MyImage1 from "./Slike/LongIsland.jpg";
import MyImage3 from "./Slike/Zombie.jpg";
import MyImage4 from "./Slike/negroni.jpg";
import MyImage5 from "./Slike/martini.jpg";
import MyImage6 from "./Slike/Manhattan.jpg";
import MyImage7 from "./Slike/bloody.jpg";
import MyImage8 from "./Slike/Cosmo.jpg";
import MyImage9 from "./Slike/mojito.jpg";
import MyImage10 from "./Slike/margarita.jpg";
import MyImage11 from "./Slike/Old.jpg";
import MyImage12 from "./Slike/Daiquiri.jpg";
import MyImage13 from "./Slike2/Dark.jpg";
import MyImage14 from "./Slike2/Espresso.jpg";
import MyImage15 from "./Slike2/Gimlet.jpg";
import MyImage16 from "./Slike2/Moscow-Mule.jpg";
import MyImage17 from "./Slike2/aperol.jpg";
import MyImage18 from "./Slike2/Penicillin.jpg";
import MyImage19 from "./Slike2/Whiskey.jpg";
import MyImage20 from "./Slike2/clover-club.jpg";

import "./Koktel.css";
import { useState, useRef, useContext, useEffect } from "react";
import {
  Sheet,
  Header,
  Content,
  Footer,
  detents,
  Portal
} from "react-sheet-slide";
import { ThemeContext } from "../App";
import "react-sheet-slide/style.css";

const Collapsible = () => {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    foreground: darkTheme ? "#eeeeee" : "#000000",
    background: darkTheme ? "#eeeeee" : "#222222",
    text: darkTheme ? "white" : "black"
  };
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [open1, setOpen1] = useState(false);
  const ref1 = useRef();
  const [open4, setOpen4] = useState(false);
  const ref4 = useRef();
  const [open5, setOpen5] = useState(false);
  const ref5 = useRef();
  const [open6, setOpen6] = useState(false);
  const ref6 = useRef();
  const [open7, setOpen7] = useState(false);
  const ref7 = useRef();
  const [open8, setOpen8] = useState(false);
  const ref8 = useRef();
  const [open9, setOpen9] = useState(false);
  const ref9 = useRef();
  const [open10, setOpen10] = useState(false);
  const ref10 = useRef();
  const [open11, setOpen11] = useState(false);
  const ref11 = useRef();
  const [open12, setOpen12] = useState(false);
  const ref12 = useRef();
  const [open13, setOpen13] = useState(false);
  const ref13 = useRef();
  const [open14, setOpen14] = useState(false);
  const ref14 = useRef();
  const [open15, setOpen15] = useState(false);
  const ref15 = useRef();
  const [open16, setOpen16] = useState(false);
  const ref16 = useRef();
  const [open17, setOpen17] = useState(false);
  const ref17 = useRef();
  const [open18, setOpen18] = useState(false);
  const ref18 = useRef();
  const [open19, setOpen19] = useState(false);
  const ref19 = useRef();
  const [open2, setOpen2] = useState(false);
  const ref2 = useRef();
  const [open3, setOpen3] = useState(false);
  const ref3 = useRef();
  const [Open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!Open);
  };

  return (
    <div className="Glava" style={themeStyles}>
      <div className="Text1">
        <h1 className="Naslov">Kokteli</h1>
        <p className="Text1">
          Alkoholna pića oduvijek su nas nadahnjivala i stvarala ugodne
          trenutke, ali su isto tako bila ograničavana u prodaji i zabranjivana
          kao “društveno zlo”. Pijući ih izravno ili u mješavinama, u njima su
          pokoljenja uživala stoljećima. Prvi nepobitni dokazi o proizvodnji
          alkoholnih pića na tlu Hrvatske su iz doba Ilira, davno prije rođenja
          Isusa Krista. Antički pisci spominju izvrsnu alkoholnu medovinu koju
          su u posebnom postupku fermentacijom razvodnjenog meda pripremali
          podanici ilirskih plemena. Dolaskom Grka u Dalmaciju početkom 4.
          stoljeća prije Krista, koji su tu osnivali kolonije, dolazi do pravog
          razvoja vinogradarstva. Premda su Iliri od Grka rano prihvatili
          vještinu uzgoja vinove loze i uživali u vinu, pretpostavlja se da nisu
          prestali proizvoditi i piti svoje tradicionalno piće medovinu.
        </p>
        <br></br>
        <p className="Text1">
          Rimljani su u 3. stoljeću prije Krista, nakon sklapanja saveza s
          Grcima i dugih krvavih ratova s ilirskim plemenima, zagospodarili
          Dalmacijom i drugim područjima. Uzgoj vinove loze u doba Rimskog
          Carstva bio je na zavidnoj razini, međutim, Iliri su, prema pisanju
          bizantskih pisaca, nastavili piti medovinu. Pod utjecajem političkih
          odnosa i društvenih kriza dolazi u 4. stoljeću do propadanja Rimskog
          carstva, a seobom naroda Hrvati naseljavaju naša područja. Oni su u
          nove krajeve došli sa znanjem proizvodnje alkoholne medovine. Medovina
          se kod starih naroda smatrala napitkom besmrtnosti koja po mnogim
          vjerovanjima, potocima teče na drugom svijetu. Međutim, Hrvati su brzo
          prihvatili uzgoj vinove loze, a prihvaćanjem vinarstva pomalo
          napuštaju naviku konzumiranja medovine. U Srednjem vijeku u Europi se
          pojačava rad alkemičara, u nastojanjima da se neplemenite kovine
          pretvore u zlato i srebro i to u vrijeme kada Arapi upadaju na
          europsko tlo. U Španjolskoj, premda prekidan stalnim sukobima, stvara
          se prvi bliski kontakt europske i arapske znanosti, preko kojeg su se
          latinski pisci upoznali s tehnikom destilacije. Prvi je vino
          destilirao španjolski liječnik Arnaldo de Villanova koji je alkemijska
          iskustva koristio u svrhu liječenja. Villanova je u alkohol, dobiven
          destilacijom, dodavao ljekovite trave, aromatične droge i šećer i tako
          izrađivao ljekovite eliksire i na taj način postavio osnove
          proizvodnje alkoholnih pića. Iz Španjolske se znanje i vještina
          destiliranja šire Europom.
        </p>
        <br></br>
        <p className="Text1">
          Točnih podataka o tome kada je u naše krajeve donesen prvi stroj za
          destilaciju nema, međutim zabilježeno je da je poznati alkemičar iz
          Ferrare, Petar Buono, bio općinski liječnik u Trogiru prije 1338.
          godine. On je, prema nekim mišljenjima, bio zaslužan za širenje
          vještine destilacije kod nas i stvorio osnovu za razvoj proizvodnje
          alkoholnih napitaka. Na razvoj jakih alkoholnih pića u kasnom Srednjem
          vijeku najviše utječu ljekarnici, jer su se u ljekarnama, uz lijekove,
          radili i razni alkoholni napitci, prema opisima iz fermakopeje. Veliku
          zaslugu za razvoj alkoholnih pripravaka imaju i redovnici koji su u
          samostanskim vrtovima njegovali ljekovite biljke proučavajući njihovo
          djelovanje i izrađujući biljne lijekove.
        </p>
        <br></br>
        <p className="Text1">
          Neki autori tvrde da su prvi likeri proizvedeni u benediktinskom
          samostanu u Francuskoj oko 1510. godine a prvi recept je sastavio Dom
          Bernard Vinceli. Nešto kasnije i dominikanci u Zadru pripremaju
          aromatične likere od poznate višnje maraske, koje je u okolici grada
          bilo u izobilju. Od početka 15. stoljeća veći dio Dalmacija je pod
          vlašću Mletačke Republike. Podaci o proizvodnji rakija do mletačke
          vladavine i u njenom početku vrlo su rijetki. Međutim, tijekom
          mletačke uprave Dalmacijom, pečenje rakije postaje jedan od glavnih
          poljoprivrednih obrta. Rakije je bilo dovoljno i zbog toga je
          predstavljala značajni trgovački proizvod, koji se najviše izvozio u
          Bosnu i Trst. U to vrijeme najrazvijenija je bila proizvodnja likera u
          Zadru. Proizvodnja likera je ovdje imala dugu tradiciju još iz 16
          stoljeća, a najpoznatiji su bili likeri rađeni na bazi višnje maraske.
        </p>
        <br></br>

        <button className="button-85" onClick={toggle}>
          Sastavi koktela
        </button>
      </div>
      {Open && (
        <div className="toggle">
          <div class="row">
            <div class="column">
              <div onClick={() => setOpen(true)} class="card">
                <img class="Slika" src={MyImage} />
                <h2>Pina Colada</h2>
              </div>
            </div>
            <div className="rss-backdrop">
              <Portal>
                <Sheet
                  ref={ref}
                  open={open}
                  onDismiss={() => setOpen(false)}
                  onClose={() => {
                    console.log("Component unmounted");
                  }}
                  selectedDetent={detents.large}
                  detents={(props) => [
                    detents.large(props),
                    detents.medium(props)
                  ]}
                  scrollingExpands={true}
                >
                  <Header className="donjiTxt">Pina Colada</Header>
                  <Content>
                    <div style={{ padding: "54px 16px 24px" }}>
                      <div>2cl bijelog ruma</div>
                      <br></br>
                      <div>2cl kokos likera 1</div>
                      <br></br>
                      <div>5dcl soka od ananasa</div>
                      <br></br>
                      <div>1cl slatkog vrhnja</div>
                      <br></br>
                      <div>
                        {" "}
                        7 kocki mrvljenog leda (ako vam se ne drobe ne morate)
                      </div>
                    </div>
                  </Content>
                  <Footer>
                    <button type="button" onClick={() => setOpen(false)}>
                      Close
                    </button>
                  </Footer>
                </Sheet>
              </Portal>
            </div>
            <div class="column">
              <div onClick={() => setOpen1(true)} class="card">
                <img class="Slika" src={MyImage3} />
                <h2>Zombie</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref1}
                open={open1}
                onDismiss={() => setOpen1(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Zombie</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div>1.25 cl soka od limete</div>
                    <br></br>
                    <div> 1.25 cl soka od ananasa </div>
                    <br></br>
                    <div>1.25 cl bijeli rum</div>
                    <br></br>
                    <div>1.25 cl tamni rum</div>
                    <br></br>
                    <div>uštrcaj grenadine</div>
                    <br></br>
                    <div>1.25 cl brandy od marelice</div>
                    <br></br>
                    <div>1.25 cl zlatnog ruma</div>
                    <br></br>
                    <div> 1.25 cl soka od papaje</div>
                    <br></br>
                    <div>
                      Sve sastojke sa ledom dobro protresite u shakeru, prelijte
                      u čašu sa par kocki leda i poslužite
                    </div>
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen1(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>

            <div class="column">
              <div class="card">
                <img
                  onClick={() => setOpen2(true)}
                  class="Slika"
                  src={MyImage6}
                />
                <h2>Manhattan</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref2}
                open={open2}
                onDismiss={() => setOpen2(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Manhattan</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div>5 cl rye whiskey ili bourbona</div>
                    <br></br>
                    <div>2 cl slatkog crvenog vermoutha </div>
                    <br></br>
                    <div>par kapi Angosture</div>
                    <br></br>
                    <div> 1 maraska višnja</div>
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen2(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div class="card">
                <img
                  onClick={() => setOpen3(true)}
                  class="Slika"
                  src={MyImage12}
                />
                <h2>Daiquiri</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref3}
                open={open3}
                onDismiss={() => setOpen3(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Daiquiri</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div>Havana Club bijeli rum 0,5 dl</div>
                    <br />
                    <div>Sok od limete 0,2 dl</div>
                    <br />
                    <div>Šećerni sirup 0,2 dl</div>
                    <br />
                    <div>Led kockice</div>
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen3(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen4(true)} class="card">
                <img class="Slika" src={MyImage5} />
                <h2>Martini</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref4}
                open={open4}
                onDismiss={() => setOpen4(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Martini</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div>Rashlađeni gin ili vodka – 30 ml</div>
                    <br />
                    <div>
                      Rashlađeni suhi vermut (preporučujemo Noilly Prat) - po
                      želji
                    </div>
                    <br />
                    <div>Masline ili limunov twist po želji</div>
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen4(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div class="card">
                <img
                  onClick={() => setOpen5(true)}
                  class="Slika"
                  src={MyImage4}
                />
                <h2>Negroni</h2>
              </div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <Portal>
              <Sheet
                ref={ref5}
                open={open5}
                onDismiss={() => setOpen5(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Negroni</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div>25 ml Camparia</div>
                    <br />
                    <div>25 ml slatkog Vermoutha</div>
                    <br />
                    <div>25 ml Gina</div>
                    <br />
                    <div>Led i ploška naranče </div>
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen5(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div class="card">
                <img
                  class="Slika"
                  onClick={() => setOpen6(true)}
                  src={MyImage1}
                />
                <h2>Long Island</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref6}
                open={open6}
                onDismiss={() => setOpen6(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Long Island Iced Tea</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen6(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen7(true)} class="card">
                <img class="Slika" src={MyImage10} />
                <h2>Margarita</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref7}
                open={open7}
                onDismiss={() => setOpen7(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Margarita</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen7(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen8(true)} class="card">
                <img class="Slika" src={MyImage7} />
                <h2>Bloody Mary</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref8}
                open={open8}
                onDismiss={() => setOpen8(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Bloody Mary</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen8(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen9(true)} class="card">
                <img class="Slika" src={MyImage11} />
                <h2>Old fashioned</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref9}
                open={open9}
                onDismiss={() => setOpen9(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Old fashioned</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen9(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen10(true)} class="card">
                <img class="Slika" src={MyImage9} />
                <h2>Mojito</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref10}
                open={open10}
                onDismiss={() => setOpen10(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Mojito</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen10(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen11(true)} class="card">
                <img class="Slika" src={MyImage8} />
                <h2>Cosmopolitan</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref11}
                open={open11}
                onDismiss={() => setOpen11(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Cosmopolitan</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen11(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen12(true)} class="card">
                <img class="Slika" src={MyImage14} />
                <h2>Espresso Martini</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref12}
                open={open12}
                onDismiss={() => setOpen12(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Espresso Martini</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen12(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen13(true)} class="card">
                <img class="Slika" src={MyImage19} />
                <h2>Whiskey Sour</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref13}
                open={open13}
                onDismiss={() => setOpen13(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Whiskey Sour</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div> </div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen13(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen14(true)} class="card">
                <img class="Slika" src={MyImage17} />
                <h2>Aperol Spritz</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref14}
                open={open14}
                onDismiss={() => setOpen14(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Aperol Spritz</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen14(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen15(true)} class="card">
                <img class="Slika" src={MyImage15} />
                <h2>Gimlet</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref15}
                open={open15}
                onDismiss={() => setOpen15(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Gimlet</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen15(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen16(true)} class="card">
                <img class="Slika" src={MyImage20} />
                <h2>Clover Club</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref16}
                open={open16}
                onDismiss={() => setOpen16(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Clover Club</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen16(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen17(true)} class="card">
                <img class="Slika" src={MyImage13} />
                <h2> Dark 'n Stormy</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref17}
                open={open17}
                onDismiss={() => setOpen17(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Dark 'n Stormy</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen17(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen18(true)} class="card">
                <img class="Slika" src={MyImage18} />
                <h2>Penicillin</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref18}
                open={open18}
                onDismiss={() => setOpen18(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Penicillin</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen18(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
            <div class="column">
              <div onClick={() => setOpen19(true)} class="card">
                <img class="Slika" src={MyImage16} />
                <h2>Moscow Mule</h2>
              </div>
            </div>
            <Portal>
              <Sheet
                ref={ref19}
                open={open19}
                onDismiss={() => setOpen19(false)}
                onClose={() => {
                  console.log("Component unmounted");
                }}
                selectedDetent={detents.large}
                detents={(props) => [
                  detents.large(props),
                  detents.medium(props)
                ]}
                scrollingExpands={true}
              >
                <Header className="donjiTxt">Moscow Mule</Header>
                <Content>
                  <div style={{ padding: "54px 16px 24px" }}>
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                    <div></div>
                    <br />
                  </div>
                </Content>
                <Footer>
                  <button type="button" onClick={() => setOpen19(false)}>
                    Close
                  </button>
                </Footer>
              </Sheet>
            </Portal>
          </div>
        </div>
      )}
    </div>
  );
};
export default Collapsible;
