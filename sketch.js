var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"
var botonregresar
var amboton1
var veboton2
var moboton3
var roboton4
var veoboton5
var aviso
var vecboton6
var moboton7
var azboton8
var click
var la
var fondo2
var lar1
var lar2
var score=0
var lap
var gameover
var victory
var ba1
var bar1
var bar2
var rst1
var rst2
var sr
var rca1
var rca2
var ca
var rmg1
var rmg2
var rbe1
var rbe2
var mg
var logo
var matrazn
var be
var matrazt
var matrazf
var botonhow
var botoncredits
var credits
var howto
var fscore
var cae
var rcae1
var rcae2
var rru1
var rru1
var ru
var rpo1
var rpo2
var po
var rso1
var rso2
var so
var rli1
var rli2
var li
var ri1
var ri2
var i
var rbr1
var rbr2
var br
var rse1
var rse2
var se
var rcl1
var rcl2
var cl
var rsu1
var rsu2
var su
var rp1 
var rp2 
var p
var rfl1
var rfl2
var fl
var rox1
var rox2
var ox
var rn1
var rn2
var n
var rc1
var rc2
var c
var rh1
var rh2
var h
var rrn1
var rrn2
var rn
var rx1
var rx2
var x
var rkr1
var rkr2
var kr
var rar1
var rar2
var ar
var rne1
var rne2
var ne
var rhe1
var rhe2
var he
var rte1
var rte2
var te
var ran1
var ran2
var an
var ras1
var ras2
var as
var rge1
var rge2
var ge
var rsi1
var rsi2
var si
var rb1
var rb2
var b
var rat1
var rat2
var at
var rpol1
var rpol2
var pol
var rbi1 
var rbi2
var bi
var rpb1
var rpb2
var pb
var rtl1
var rtl2
var tl
var rti1
var rti2
var ti
var rin1
var rin2
var inn
var rga1
var rga2
var ga
var ral1
var ral2
var al
var rsc1
var rsc2
var sc
var rt1
var rt2
var t
var rva1
var rva2
var va
var rch1
var rch2
var ch
var rman1
var rman2
var man
var rir1
var rir2
var ir
var rco1
var rco2
var co
var rni1
var rni2
var ni
var rcop1
var rcop2
var cop
var rzi1
var rzi2
var zi
var ryt1
var ryt2
var yt
var rzr1
var rzr2
var zr
var rnb1
var rnb2
var nb
var rmo1
var rmo2 
var mo
var rtec1
var rtec2
var tec
var rrut1
var rrut2
var rut
var rrh1
var rrh2
var rh
var rpal1
var rpal2
var pal
var rsil1
var rsil2
var sil
var rcd1
var rcd2
var cd
var rhf1
var rhf2 
var hf
var rta1
var rta2
var ta
var rtu1
var rtu2
var tu
var rre1
var rre2
var re
var ros1
var ros2
var os
var riri1
var riri2
var iri
var rpt1
var rpt2
var pt
var rgo1
var rgo2
var go
var rhg1
var rhg2
var hg

function preload() {
  gameoverimg = loadImage ("gameover.png")
  lapimg = loadImage ("pregunta.png")
  laimg = loadImage ("la1.png")
  lar1img = loadImage ("Rla1.png")
  lar2img = loadImage ("Rla2.png")
  backgroundImage = loadImage("fondo.png");
  tituloimg = loadImage ("titulo2.png")
  tablaimg = loadImage("tablasd4.jpg");
  fondo2img = loadImage ("fondo.png");
  moradoimg = loadImage ("Botonmo1.png");
  amarilloimg = loadImage ("Botonam1.png");
  verdeimg = loadImage ("Botonvc1.png");
  regresarimg= loadImage ("regresar.png");
  botonplayimg = loadImage ("play2.png")
 roimg = loadImage ("Botonroj1.png");
 veoimg = loadImage ("Botonve1.png");
 avisoimg = loadImage ("aviso.png")
 vecimg = loadImage ("Botonci1.png")
 moimg2 = loadImage ("Botonro1.png")
 azimg = loadImage ("Botonaz1.png");
 ba1img = loadImage ("barium.png");
 bar1img = loadImage ("Rba1.png");
 bar2img = loadImage ("Rba2.png");
 rst1img = loadImage ("Rst1.png");
 rst2img = loadImage ("Rst2.png")
 srimg = loadImage ("strontium.png");
 rca1img = loadImage ("Rca1.png");
 rca2img = loadImage ("Rca2.png");
 caimg = loadImage ("calcium.png");
 rmg1img  = loadImage ("Rmg1.png");
 rmg2img = loadImage ("Rmg2.png");
 mgimg = loadImage ("magnesium.png");
 logoimg = loadImage ("logo.png");
 matraznimg = loadImage ("matraznormal.png")
 rbe1img = loadImage ("Rbe1.png");
 rbe2img = loadImage ("Rbe2.png");
 beimg = loadImage ("bery.png");
 matraztimg = loadImage ("matraztriste.png");
 victoryimg = loadImage ("Congrats2.png");
 matrazfimg = loadImage ("matrazfeliz.png");
 botonhowimg = loadImage ("Botonh.png");
 botoncreditsimg = loadImage ("Botonc.png");
 creditsimg = loadImage ("Credits.png");
 howtoimg = loadImage ("Howto.png");
 fscoreimg = loadImage ("fscore.png");
 caeimg = loadImage ("caesium.png");
 rcae1img = loadImage ("Rcae1.png");
 rcae2img = loadImage ("Rcae2.png");
 rru1img = loadImage ("Rru2.png");
 rru2img = loadImage ("Rru1.png");
 ruimg = loadImage ("Rubidium.png");
 rpo1img = loadImage ("Rpo1.png");
 rpo2img = loadImage ("Rpo2.png");
 poimg = loadImage ("pot.png");
 rso1img = loadImage ("Rso1.png");
 rso2img = loadImage ("Rso2.png");
 soimg = loadImage ("sodi.png");
 rli1img = loadImage ("Rli2.png");
 rli2img = loadImage ("Rli1.png");
 liimg = loadImage ("lit.png");
 ri1img = loadImage ("Ri1.png");
 ri2img = loadImage ("Ri2.png");
 iimg = loadImage ("iodine.png");
 rbr1img = loadImage ("Rbr1.png");
 rbr2img = loadImage ("Rbr2.png");
 brimg = loadImage ("bro.png");
 rse1img = loadImage ("Rse2.png");
 rse2img = loadImage ("Rse1.png");
 seimg = loadImage ("sel.png");
 rcl1img = loadImage ("Rcl1.png");
 rcl2img = loadImage ("Rcl2.png");
 climg = loadImage ("chl.png");
 rsu1img = loadImage ("Rsu1.png");
 rsu2img = loadImage ("Rsu2.png");
 suimg = loadImage ("sul.png");
 rp2img = loadImage ("Rp2.png");
 rp1img = loadImage ("Rp1.png");
 pimg = loadImage ("pho.png");
 rfl1img = loadImage ("Rfl1.png");
 rfl2img = loadImage ("Rfl2.png");
 flimg = loadImage ("flu.png");
 rox1img = loadImage ("Rox1.png");
 rox2img = loadImage ("Rox2.png");
 oximg = loadImage ("oxy.png");
 rn1img = loadImage ("Rn1.png");
 rn2img = loadImage ("Rn2.png");
 nimg = loadImage ("nit.png");
 rc1img = loadImage ("Rc1.png");
 rc2img = loadImage ("Rc2.png");
 cimg = loadImage ("car.png");
 rh1img = loadImage ("Rh1.png");
 rh2img = loadImage ("Rh2.png");
 himg = loadImage ("hyd.png");
 rrn1img = loadImage ("Rrn1.png");
 rrn2img = loadImage ("Rrn2.png");
 rnimg = loadImage ("Radon1.png");
 rx1img = loadImage ("Rx1.png");
 rx2img = loadImage ("Rx2.png");
 ximg = loadImage ("Xenon1.jpg");
 rkr1img = loadImage ("Rkr1.png");
 rkr2img = loadImage ("Rkr2.png");
 krimg = loadImage ("Krypton1.jpg");
 rar1img = loadImage ("Rar1.png");
 rar2img = loadImage ("Rar2.png");
 arimg = loadImage ("Argon1.jpg");
 rne1img = loadImage ("Rne1.png");
 rne2img = loadImage ("Rne2.png");
 neimg = loadImage ("Neon1.jpg");
 rhe1img = loadImage ("Rhe1.png");
 rhe2img = loadImage ("Rhe2.png");
 heimg = loadImage ("helium1.png");
 rte1img = loadImage ("Rte1.png");
 rte2img = loadImage ("Rte2.png");
 teimg = loadImage ("tel.png");
 ran1img = loadImage ("Ran1.png");
 ran2img = loadImage ("Ran2.png");
 animg = loadImage ("ant.png");
 ras1img = loadImage ("Ras1.png");
 ras2img = loadImage ("Ras2.png");
 asimg = loadImage ("ars.png");
 rge1img = loadImage ("Rge1.png");
 rge2img = loadImage ("Rge2.png");
 geimg = loadImage ("ger.png");
 rsi1img = loadImage ("Rsi1.png");
 rsi2img = loadImage ("Rsi22.png");
 siimg = loadImage ("sil.png");
 rb1img = loadImage ("Rb1.png");
 rb2img = loadImage ("Rb2.png");
 bimg = loadImage ("bor.png");
 rat1img = loadImage ("Rat1.png");
 rat2img = loadImage ("Rat2.png");
 atimg = loadImage ("ast.png");
 rpol1img = loadImage ("Rpol1.png");
 rpol2img = loadImage ("Rpol2.png");
 polimg = loadImage ("pol.png");
 rbi1img = loadImage ("Rbi1.png");
 rbi2img = loadImage ("Rbi2.png");
 biimg = loadImage ("bis.png");
 rpb1img = loadImage ("Rpb1.png");
 rpb2img = loadImage ("Rpb2.png");
 pbimg = loadImage ("lea.png");
 rtl1img = loadImage ("Rtl1.png");
 rtl2img = loadImage ("Rtl2.png");
 tlimg = loadImage ("tha.png");
 rti1img = loadImage ("Rti1.png");
 rti2img = loadImage ("Rti2.png");
 tiimg = loadImage ("tin.png");
 rin1img = loadImage ("Rin1.png");
 rin2img = loadImage ("Rin2.png");
 innimg = loadImage ("ind.png");
 rga1img = loadImage ("Rga1.png");
 rga2img = loadImage ("Rga2.png");
 gaimg = loadImage ("gal.png");
 ral1img = loadImage ("Ral1.png");
 ral2img = loadImage ("Ral2.png");
 alimg = loadImage ("alu.png");
 rsc1img = loadImage ("Rsc1.png");
 rsc2img = loadImage ("Rsc2.png");
 scimg = loadImage ("sca.png");
 rt1img = loadImage ("Rt1.png");
 rt2img = loadImage ("Rt2.png");
 timg = loadImage ("tit.png");
 rva1img = loadImage ("Rva1.png");
 rva2img = loadImage ("Rva2.png");
 vaimg = loadImage ("van.png");
 rch1img = loadImage ("Rch1.png");
 rch2img = loadImage ("Rch2.png");
 chimg = loadImage ("chr.png");
 rman1img = loadImage ("Rman1.png");
 rman2img = loadImage ("Rman2.png");
 manimg = loadImage ("man.png");
 rir1img = loadImage ("Rir1.png");
 rir2img = loadImage ("Rir2.png");
 irimg = loadImage ("iro.png");
 rco1img = loadImage ("Rco1.png");
 rco2img = loadImage ("Rco2.png");
 coimg = loadImage ("cob.png");
 rni1img = loadImage ("Rni1.png");
 rni2img = loadImage ("Rni2.png");
 niimg = loadImage ("nic.png");
 rcop1img = loadImage ("Rcop1.png");
 rcop2img = loadImage ("Rcop2.png");
 copimg = loadImage ("cop.png");
 rzi1img = loadImage ("Rzi1.png");
 rzi2img = loadImage ("Rzi2.png");
 ziimg = loadImage ("zin.png");
 ryt1img = loadImage ("Ryt1.png");
 ryt2img = loadImage ("Ryt2.png");
 ytimg = loadImage ("ytt.png");
 rzr1img = loadImage ("Rzr1.png");
 rzr2img = loadImage ("Rzr2.png");
 zrimg = loadImage ("zir.png");
 rnb1img = loadImage ("Rnb1.png");
 rnb2img = loadImage ("Rnb2.png");
 nbimg = loadImage ("nib.png");
 rmo1img = loadImage ("Rmo1.png");
 rmo2img = loadImage ("Rmo2.png");
 moimg = loadImage ("mol.png");
 rtec1img = loadImage ("Rtec1.png");
 rtec2img = loadImage ("Rtec2.png");
 tecimg = loadImage ("tec.png");
 rrut1img = loadImage ("Rrut1.png");
 rrut2img = loadImage ("Rrut2.png");
 rutimg = loadImage ("rut.png");
 rrh1img = loadImage ("Rrh1.png");
 rrh2img = loadImage ("Rrh2.png");
 rhimg = loadImage ("rho.png");
 rpal1img = loadImage ("Rpal1.png");
 rpal2img = loadImage ("Rpal2.png");
 palimg = loadImage ("pal.png");
 rsil1img = loadImage ("Rsil1.png");
 rsil2img = loadImage ("Rsil2.png");
 silimg = loadImage ("silv.png");
 rcd1img = loadImage ("Rcd1.png");
 rcd2img = loadImage ("Rcd2.png");
 cdimg = loadImage ("cad.png");
 rhf1img = loadImage ("Rhf1.png");
 rhf2img = loadImage ("Rhf2.png");
 hfimg = loadImage ("haf.png");
 rta1img = loadImage ("Rta1.png");
 rta2img = loadImage ("Rta2.png");
 taimg = loadImage ("tan.png");
 rtu1img = loadImage ("Rtu1.png");
 rtu2img = loadImage ("Rtu2.png");
 tuimg = loadImage ("tun.png");
 rre1img = loadImage ("Rre1.png");
 rre2img = loadImage ("Rre2.png");
 reimg = loadImage ("rhe.png");
 ros1img = loadImage ("Ros1.png");
 ros2img = loadImage ("Ros2.png");
 osimg = loadImage ("osm.png");
 riri1img = loadImage ("Riri1.png");
 riri2img = loadImage ("Riri2.png");
 iriimg = loadImage ("iri.png");
 rpt1img = loadImage ("Rpt1.png");
 rpt2img = loadImage ("Rpt2.png");
 ptimg = loadImage ("pla.png");
 rgo1img = loadImage ("Rgo1.png");
 rgo2img = loadImage ("Rgo2.png");
 goimg = loadImage ("gol.png");
 rhg1img = loadImage ("Rhg1.png");
 rhg2img = loadImage ("Rhg2.png");
 hgimg = loadImage ("mer.png");

}

function setup() {
  //1350,60
  canvas = createCanvas(windowWidth, windowHeight);
  fondo = createSprite(width/2,height/2,width,height);

  fondo.addImage(backgroundImage)
  fondo.scale=100000000000000000000;

 titulo = createSprite(800,220,50,50);
 titulo.addImage(tituloimg);
 titulo.scale =0.5;

 botonplay = createSprite(800,520,50,50)
 botonplay.addImage(botonplayimg);
 botonplay.scale=0.2;
 
 botonhow = createSprite(500,520,50,50)
 botonhow.addImage(botonhowimg);
 botonhow.scale=0.2;

 botoncredits = createSprite(1100,520,50,50)
 botoncredits.addImage(botoncreditsimg);
 botoncredits.scale=0.2;

 fondo2 = createSprite(width/2,height/2,width,height);
 fondo2.addImage (fondo2img)
 fondo2.scale= 1000
 fondo2.visible = false;

 fondo3 = createSprite(width/2,height/2,width,height);
 fondo3.addImage (fondo2img)
 fondo3.scale= 1000
 fondo3.visible = false;

 tabla = createSprite (width/2,height/2,100,100)
 //tabla = createSprite (800,400,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
 tabla.visible = false;

 botonregresar = createSprite(70,675,50,50)
 botonregresar.visible =false
 botonregresar.addImage(regresarimg)
 botonregresar.scale=0.05;

 botonregresar2 = createSprite(70,675,50,50)
 botonregresar2.visible =false
 botonregresar2.addImage(regresarimg)
 botonregresar2.scale=0.05;

 botonregresar3 = createSprite(770,450,50,50)
 botonregresar3.visible =false
 botonregresar3.addImage(regresarimg)
 botonregresar3.scale=0.1;

 botonregresar4 = createSprite(770,450,50,50)
 botonregresar4.visible =false
 botonregresar4.addImage(regresarimg)
 botonregresar4.scale=0.1;

 botonregresar5 = createSprite(140,615,50,50)
 botonregresar5.visible =false
 botonregresar5.addImage(regresarimg)
 botonregresar5.scale=0.1;

 botonregresar6 = createSprite(140,615,50,50)
 botonregresar6.visible =false
 botonregresar6.addImage(regresarimg)
 botonregresar6.scale=0.1;


 amboton1 = createSprite(313.5,59.5,50,50)
 amboton1.visible = false
 amboton1.addImage(amarilloimg)
  amboton1.scale=0.12;
  
 veboton2 = createSprite (440,124,50,50)
  veboton2.visible=false;
veboton2.addImage(verdeimg)
veboton2.scale=0.12;
  
  moboton3 = createSprite (313.5,190.5,50,50)
  moboton3.visible=false;
  moboton3.addImage(moradoimg)
  moboton3.scale =0.12;
 

  roboton4 = createSprite (597,59.5,50,50)
  roboton4.visible = false
  roboton4.addImage(roimg)
  roboton4.scale =0.12;

  veoboton5 = createSprite (740,125,50,50)
  veoboton5.visible = false
  veoboton5.addImage(veoimg)
  veoboton5.scale = 0.12;

  aviso = createSprite (800,625,50,50)
  aviso.visible = false
  aviso.addImage(avisoimg)
  aviso.scale = 0.3;

  vecboton6 = createSprite (597,190,50,50)
  vecboton6.visible = false;
  vecboton6.addImage(vecimg)
  vecboton6.scale=0.12;

  moboton7 = createSprite (880,59,50,50)
  moboton7.visible = false;
  moboton7.addImage (moimg2)
  moboton7.scale=0.12;

  azboton8 =createSprite (880,190.5,50,50)
  azboton8.visible = false
  azboton8.addImage(azimg)
  azboton8.scale=0.12;

  //click = createSprite (400,630,50,50)
 // click.visible = false
  //click.addImage (clickimg)
  //click.scale =0.3;

  la = createSprite (770,290,50,50)
  la.visible = false
  la.addImage (laimg)
  la.scale = 0.12;

  ba1 = createSprite (770,290,50,50)
  ba1.visible = false
  ba1.addImage (ba1img)
  ba1.scale = 0.12;

  bar1 = createSprite (335,548,50,50)
  bar1.visible = false;
  bar1.addImage (bar1img)
  bar1.scale = 0.2;

  bar2 = createSprite (1200,548,50,50)
  bar2.visible = false;
  bar2.addImage (bar2img)
  bar2.scale = 0.2;

  lar1 = createSprite (335,550,50,50)
  lar1.visible = false;
  lar1.addImage (lar1img)
  lar1.scale = 0.2;


  lar2 = createSprite (1200,550,50,50)
  lar2.visible = false;
  lar2.addImage (lar2img)
  lar2.scale = 0.2;

  sr = createSprite (770,290,50,50)
  sr.visible = false
  sr.addImage (srimg)
  sr.scale = 0.12;

  rst1 = createSprite (335,225,50,50)
  rst1.visible = false;
  rst1.addImage (rst1img)
  rst1.scale = 0.2;

  rst2 = createSprite (1200,225,50,50)
  rst2.visible = false;
  rst2.addImage (rst2img)
  rst2.scale = 0.2;

  ca = createSprite (770,290,50,50)
  ca.visible = false
  ca.addImage (caimg)
  ca.scale = 0.12;

  rca1 = createSprite (1200,550,50,50)
  rca1.visible = false;
  rca1.addImage (rca1img)
  rca1.scale = 0.2;

  rca2 = createSprite (335,550,50,50)
  rca2.visible = false;
  rca2.addImage (rca2img)
  rca2.scale = 0.2;

  rmg1 = createSprite (1200,225,50,50)
  rmg1.visible = false;
  rmg1.addImage (rmg1img)
  rmg1.scale = 0.2;


  rmg2 = createSprite (335,225,50,50)
  rmg2.visible = false;
  rmg2.addImage (rmg2img)
  rmg2.scale = 0.2;
  
  rbe1 = createSprite (335,550,50,50)
  rbe1.visible = false;
  rbe1.addImage (rbe1img)
  rbe1.scale = 0.2;
  
  rbe2 = createSprite (1200,550,50,50)
  rbe2.visible = false;
  rbe2.addImage (rbe2img)
  rbe2.scale = 0.2;

  rcae1 = createSprite (335,550,50,50)
  rcae1.visible = false;
  rcae1.addImage (rcae1img)
  rcae1.scale = 0.2;

  rcae2 = createSprite (1200,550,50,50)
  rcae2.visible = false;
  rcae2.addImage (rcae2img);
  rcae2.scale = 0.2;

  rru1 = createSprite (335,225,50,50)
  rru1.visible = false;
  rru1.addImage (rru1img)
  rru1.scale = 0.2;

  rru2 = createSprite (1200,225,50,50)
  rru2.visible = false;
  rru2.addImage (rru2img);
  rru2.scale = 0.2;

  rpo1 = createSprite (335,550,50,50)
  rpo1.visible = false;
  rpo1.addImage (rpo1img)
  rpo1.scale = 0.2;

  rpo2 = createSprite (1200,550,50,50)
  rpo2.visible = false;
  rpo2.addImage (rpo2img);
  rpo2.scale = 0.2;
  
  rso1 = createSprite (335,225,50,50)
  rso1.visible = false;
  rso1.addImage (rso1img)
  rso1.scale = 0.2;

  rso2 = createSprite (1200,225,50,50)
  rso2.visible = false;
  rso2.addImage (rso2img);
  rso2.scale = 0.2;

  rli1 = createSprite (335,550,50,50)
  rli1.visible = false;
  rli1.addImage (rli1img)
  rli1.scale = 0.2;

  rli2 = createSprite (1200,550,50,50)
  rli2.visible = false;
  rli2.addImage (rli2img);
  rli2.scale = 0.2;

  ri2 = createSprite (1200,550,50,50)
  ri2.visible = false;
  ri2.addImage (ri2img);
  ri2.scale = 0.2;

  ri1 = createSprite (335,550,50,50)
  ri1.visible = false;
  ri1.addImage (ri1img)
  ri1.scale = 0.2;

  rbr1 = createSprite (335,225,50,50)
  rbr1.visible = false;
  rbr1.addImage (rbr1img)
  rbr1.scale = 0.2;
  
  rbr2 = createSprite (1200,225,50,50)
  rbr2.visible = false;
  rbr2.addImage (rbr2img);
  rbr2.scale = 0.2;

  rse2 = createSprite (1200,550,50,50)
  rse2.visible = false;
  rse2.addImage (rse2img);
  rse2.scale = 0.2;

  rse1 = createSprite (335,550,50,50)
  rse1.visible = false;
  rse1.addImage (rse1img)
  rse1.scale = 0.2;

  rcl1 = createSprite (335,225,50,50)
  rcl1.visible = false;
  rcl1.addImage (rcl1img)
  rcl1.scale = 0.2;

  rcl2 = createSprite (1200,225,50,50)
  rcl2.visible = false;
  rcl2.addImage (rcl2img);
  rcl2.scale = 0.2;

  rsu1 = createSprite (335,550,50,50)
  rsu1.visible = false;
  rsu1.addImage (rsu1img)
  rsu1.scale = 0.2;

  rsu2 = createSprite (1200,550,50,50)
  rsu2.visible = false;
  rsu2.addImage (rsu2img);
  rsu2.scale = 0.2;

  rp1 = createSprite (335,225,50,50);
  rp1.visible = false;
  rp1.addImage (rp1img)
  rp1.scale = 0.2;

  rp2 = createSprite (1200,225,50,50)
  rp2.visible = false;
  rp2.addImage (rp2img);
  rp2.scale = 0.2;

  rfl1 = createSprite (335,550,50,50);
  rfl1.visible = false;
  rfl1.addImage (rfl1img)
  rfl1.scale = 0.2;

  rfl2 = createSprite (1200,550,50,50);
  rfl2.visible = false;
  rfl2.addImage (rfl2img);
  rfl2.scale = 0.2;
  
  rox1 = createSprite (1200,225,50,50);
  rox1.visible = false;
  rox1.addImage (rox1img)
  rox1.scale = 0.2;

  rox2 = createSprite (335,225,50,50);
  rox2.visible = false;
  rox2.addImage (rox2img);
  rox2.scale = 0.2;

  rn1 = createSprite (1200,550,50,50);
  rn1.visible = false;
  rn1.addImage (rn1img)
  rn1.scale = 0.2;

  rn2 = createSprite (335,550,50,50);
  rn2.visible = false;
  rn2.addImage (rn2img);
  rn2.scale = 0.2;
  
  rc1 = createSprite (335,225,50,50);
  rc1.visible = false;
  rc1.addImage (rc1img)
  rc1.scale = 0.2;

  rc2 = createSprite (1200,225,50,50);
  rc2.visible = false;
  rc2.addImage (rc2img);
  rc2.scale = 0.2;

  rh1 = createSprite (335,550,50,50);
  rh1.visible = false;
  rh1.addImage (rh1img)
  rh1.scale = 0.2;

  rh2 = createSprite (1200,550,50,50);
  rh2.visible = false;
  rh2.addImage (rh2img);
  rh2.scale = 0.2;

  rrn1 = createSprite (1200,550,50,50);
  rrn1.visible = false;
  rrn1.addImage (rrn1img)
  rrn1.scale = 0.2;

  rrn2 = createSprite (335,550,50,50);
  rrn2.visible = false;
  rrn2.addImage (rrn2img);
  rrn2.scale = 0.2;

  rx1 = createSprite (1200,225,50,50);
  rx1.visible = false;
  rx1.addImage (rx1img)
  rx1.scale = 0.2;

  rx2 = createSprite (335,225,50,50);
  rx2.visible = false;
  rx2.addImage (rx2img);
  rx2.scale = 0.2;

  rkr1 = createSprite (335,550,50,50);
  rkr1.visible = false;
  rkr1.addImage (rkr1img)
  rkr1.scale = 0.2;

  rkr2 = createSprite (1200,550,50,50);
  rkr2.visible = false;
  rkr2.addImage (rkr2img);
  rkr2.scale = 0.2;

  rar1 = createSprite (1200,225,50,50);
  rar1.visible = false;
  rar1.addImage (rar1img)
  rar1.scale = 0.2;

  rar2 = createSprite (335,225,50,50);
  rar2.visible = false;
  rar2.addImage (rar2img);
  rar2.scale = 0.2;

  rne1 = createSprite (1200,550,50,50);
  rne1.visible = false;
  rne1.addImage (rne1img)
  rne1.scale = 0.2;

  rne2 = createSprite (335,550,50,50);
  rne2.visible = false;
  rne2.addImage (rne2img);
  rne2.scale = 0.2;

  rhe1 = createSprite (335,225,50,50);
  rhe1.visible = false;
  rhe1.addImage (rhe1img)
  rhe1.scale = 0.2;

  rhe2 = createSprite (1200,225,50,50);
  rhe2.visible = false;
  rhe2.addImage (rhe2img);
  rhe2.scale = 0.2;

  rte1 = createSprite (1200,550,50,50);
  rte1.visible = false;
  rte1.addImage (rte1img)
  rte1.scale = 0.2;

  rte2 = createSprite (335,550,50,50);
  rte2.visible = false;
  rte2.addImage (rte2img);
  rte2.scale = 0.2;

  ran1 = createSprite (1200,225,50,50);
  ran1.visible = false;
  ran1.addImage (ran1img)
  ran1.scale = 0.2;

  ran2 = createSprite (335,225,50,50);
  ran2.visible = false;
  ran2.addImage (ran2img);
  ran2.scale = 0.2;

  ras1 = createSprite (335,550,50,50);
  ras1.visible = false;
  ras1.addImage (ras1img)
  ras1.scale = 0.2;

  ras2 = createSprite (1200,550,50,50);
  ras2.visible = false;
  ras2.addImage (ras2img);
  ras2.scale = 0.2;

  rge1 = createSprite (1200,225,50,50);
  rge1.visible = false;
  rge1.addImage (rge1img)
  rge1.scale = 0.2;

  rge2 = createSprite (335,225,50,50);
  rge2.visible = false;
  rge2.addImage (rge2img);
  rge2.scale = 0.2;

  rsi1 = createSprite (1200,550,50,50);
  rsi1.visible = false;
  rsi1.addImage (rsi1img)
  rsi1.scale = 0.2;

  rsi2 = createSprite (335,550,50,50);
  rsi2.visible = false;
  rsi2.addImage (rsi2img);
  rsi2.scale = 0.2;

  rb1 = createSprite (1200,225,50,50);
  rb1.visible = false;
  rb1.addImage (rb1img)
  rb1.scale = 0.2;

  rb2 = createSprite (335,225,50,50);
  rb2.visible = false;
  rb2.addImage (rb2img);
  rb2.scale = 0.2;

  rat1 = createSprite (1200,550,50,50);
  rat1.visible = false;
  rat1.addImage (rat1img)
  rat1.scale = 0.2;

  rat2 = createSprite (335,550,50,50);
  rat2.visible = false;
  rat2.addImage (rat2img);
  rat2.scale = 0.2;

  rpol1 = createSprite (1200,225,50,50);
  rpol1.visible = false;
  rpol1.addImage (rpol1img)
  rpol1.scale = 0.2;

  rpol2 = createSprite (335,225,50,50);
  rpol2.visible = false;
  rpol2.addImage (rpol2img);
  rpol2.scale = 0.2;

  rbi1 = createSprite (335,550,50,50);
  rbi1.visible = false;
  rbi1.addImage (rbi1img)
  rbi1.scale = 0.2;

  rbi2 = createSprite (1200,550,50,50);
  rbi2.visible = false;
  rbi2.addImage (rbi2img);
  rbi2.scale = 0.2;

  rpb1 = createSprite (1200,225,50,50);
  rpb1.visible = false;
  rpb1.addImage (rpb1img)
  rpb1.scale = 0.2;

  rpb2 = createSprite (335,225,50,50);
  rpb2.visible = false;
  rpb2.addImage (rpb2img);
  rpb2.scale = 0.2;
  
  rtl1 = createSprite (1200,550,50,50);
  rtl1.visible = false;
  rtl1.addImage (rtl1img)
  rtl1.scale = 0.2;

  rtl2 = createSprite (335,550,50,50);
  rtl2.visible = false;
  rtl2.addImage (rtl2img);
  rtl2.scale = 0.2;

  rti1 = createSprite (335,225,50,50);
  rti1.visible = false;
  rti1.addImage (rti1img)
  rti1.scale = 0.2;

  rti2 = createSprite (1200,225,50,50);
  rti2.visible = false;
  rti2.addImage (rti2img);
  rti2.scale = 0.2;

  rin1 = createSprite (335,550,50,50);
  rin1.visible = false;
  rin1.addImage (rin1img);
  rin1.scale = 0.2;

  rin2 = createSprite (1200,550,50,50);
  rin2.visible = false;
  rin2.addImage (rin2img);
  rin2.scale = 0.2;
  
  rga1 = createSprite (335,225,50,50);
  rga1.visible = false;
  rga1.addImage (rga1img);
  rga1.scale = 0.2;

  rga2 = createSprite (1200,225,50,50);
  rga2.visible = false;
  rga2.addImage (rga2img);
  rga2.scale = 0.2;

  ral1 = createSprite (1200,550,50,50);
  ral1.visible = false;
  ral1.addImage (ral1img);
  ral1.scale = 0.2;

  ral2 = createSprite (335,550,50,50);
  ral2.visible = false;
  ral2.addImage (ral2img);
  ral2.scale = 0.2;

  rsc1 = createSprite (1200,550,50,50);
  rsc1.visible = false;
  rsc1.addImage (rsc1img);
  rsc1.scale = 0.2;

  rsc2 = createSprite (335,550,50,50);
  rsc2.visible = false;
  rsc2.addImage (rsc2img);
  rsc2.scale = 0.2;

  rt1 = createSprite (1200,225,50,50);
  rt1.visible = false;
  rt1.addImage (rt1img);
  rt1.scale = 0.2;

  rt2 = createSprite (335,225,50,50);
  rt2.visible = false;
  rt2.addImage (rt2img);
  rt2.scale = 0.2;

  rva1 = createSprite (335,550,50,50);
  rva1.visible = false;
  rva1.addImage (rva1img);
  rva1.scale = 0.2;

  rva2 = createSprite (1200,550,50,50);
  rva2.visible = false;
  rva2.addImage (rva2img);
  rva2.scale = 0.2;

  rch1 = createSprite (335,225,50,50);
  rch1.visible = false;
  rch1.addImage (rch1img);
  rch1.scale = 0.2;

  rch2 = createSprite (1200,225,50,50);
  rch2.visible = false;
  rch2.addImage (rch2img);
  rch2.scale = 0.2;

  rman1 = createSprite (335,550,50,50);
  rman1.visible = false;
  rman1.addImage (rman1img);
  rman1.scale = 0.2;

  rman2 = createSprite (1200,550,50,50);
  rman2.visible = false;
  rman2.addImage (rman2img);
  rman2.scale = 0.2;

  rir1 = createSprite (335,225,50,50);
  rir1.visible = false;
  rir1.addImage (rir1img);
  rir1.scale = 0.2;

  rir2 = createSprite (1200,225,50,50);
  rir2.visible = false;
  rir2.addImage (rir2img);
  rir2.scale = 0.2;

  rco1 = createSprite (1200,550,50,50);
  rco1.visible = false;
  rco1.addImage (rco1img);
  rco1.scale = 0.2;

  rco2 = createSprite (335,550,50,50);
  rco2.visible = false;
  rco2.addImage (rco2img);
  rco2.scale = 0.2;

  rni1 = createSprite (1200,225,50,50);
  rni1.visible = false;
  rni1.addImage (rni1img);
  rni1.scale = 0.2;

  rni2 = createSprite (335,225,50,50);
  rni2.visible = false;
  rni2.addImage (rni2img);
  rni2.scale = 0.2;

  rcop1 = createSprite (1200,550,50,50);
  rcop1.visible = false;
  rcop1.addImage (rcop1img);
  rcop1.scale = 0.2;

  rcop2 = createSprite (335,550,50,50);
  rcop2.visible = false;
  rcop2.addImage (rcop2img);
  rcop2.scale = 0.2;

  rzi1 = createSprite (335,225,50,50);
  rzi1.visible = false;
  rzi1.addImage (rzi1img);
  rzi1.scale = 0.2;

  rzi2 = createSprite (1200,225,50,50);
  rzi2.visible = false;
  rzi2.addImage (rzi2img);
  rzi2.scale = 0.2;

  ryt1 = createSprite (335,550,50,50);
  ryt1.visible = false;
  ryt1.addImage (ryt1img);
  ryt1.scale = 0.2;

  ryt2 = createSprite (1200,550,50,50);
  ryt2.visible = false;
  ryt2.addImage (ryt2img);
  ryt2.scale = 0.2;

  rzr1 = createSprite (335,225,50,50);
  rzr1.visible = false;
  rzr1.addImage (rzr1img);
  rzr1.scale = 0.2;

  rzr2 = createSprite (1200,225,50,50);
  rzr2.visible = false;
  rzr2.addImage (rzr2img);
  rzr2.scale = 0.2;

  rnb1 = createSprite (1200,550,50,50);
  rnb1.visible = false;
  rnb1.addImage (rnb1img);
  rnb1.scale = 0.2;

  rnb2 = createSprite (335,550,50,50);
  rnb2.visible = false;
  rnb2.addImage (rnb2img);
  rnb2.scale = 0.2;

  rmo1 = createSprite (335,225,50,50);
  rmo1.visible = false;
  rmo1.addImage (rmo1img);
  rmo1.scale = 0.2;

  rmo2 = createSprite (1200,225,50,50);
  rmo2.visible = false;
  rmo2.addImage (rmo2img);
  rmo2.scale = 0.2;

  rtec1 = createSprite (1200,550,50,50);
  rtec1.visible = false;
  rtec1.addImage (rtec1img);
  rtec1.scale = 0.2;

  rtec2 = createSprite (335,550,50,50);
  rtec2.visible = false;
  rtec2.addImage (rtec2img);
  rtec2.scale = 0.2;

  rrut1 = createSprite (335,225,50,50);
  rrut1.visible = false;
  rrut1.addImage (rrut1img);
  rrut1.scale = 0.2;

  rrut2 = createSprite (1200,225,50,50);
  rrut2.visible = false;
  rrut2.addImage (rrut2img);
  rrut2.scale = 0.2;

  rrh1 = createSprite (1200,550,50,50);
  rrh1.visible = false;
  rrh1.addImage (rrh1img);
  rrh1.scale = 0.2;

  rrh2 = createSprite (335,550,50,50);
  rrh2.visible = false;
  rrh2.addImage (rrh2img);
  rrh2.scale = 0.2;

  rpal1 = createSprite (1200,225,50,50);
  rpal1.visible = false;
  rpal1.addImage (rpal1img);
  rpal1.scale = 0.2;
  
  rpal2 = createSprite (335,225,50,50);
  rpal2.visible = false;
  rpal2.addImage (rpal2img);
  rpal2.scale = 0.2;

  rsil1 = createSprite (1200,550,50,50);
  rsil1.visible = false;
  rsil1.addImage (rsil1img);
  rsil1.scale = 0.2;

  rsil2 = createSprite (335,550,50,50);
  rsil2.visible = false;
  rsil2.addImage (rsil2img);
  rsil2.scale = 0.2;

  rcd1 = createSprite (1200,225,50,50);
  rcd1.visible = false;
  rcd1.addImage (rcd1img);
  rcd1.scale = 0.2;

  rcd2 = createSprite (335,225,50,50);
  rcd2.visible = false;
  rcd2.addImage (rcd2img);
  rcd2.scale = 0.2;

  rhf1 = createSprite (335,550,50,50);
  rhf1.visible = false;
  rhf1.addImage (rhf1img);
  rhf1.scale = 0.2;

  rhf2 = createSprite (1200,550,50,50);
  rhf2.visible = false;
  rhf2.addImage (rhf2img);
  rhf2.scale = 0.2;

  rta1 = createSprite (335,225,50,50);
  rta1.visible = false;
  rta1.addImage (rta1img);
  rta1.scale = 0.2;

  rta2 = createSprite (1200,225,50,50);
  rta2.visible = false;
  rta2.addImage (rta2img);
  rta2.scale = 0.2;

  rtu1 = createSprite (335,550,50,50);
  rtu1.visible = false;
  rtu1.addImage (rtu1img);
  rtu1.scale = 0.2;

  rtu2 = createSprite (1200,550,50,50);
  rtu2.visible = false;
  rtu2.addImage (rtu2img);
  rtu2.scale = 0.2;

  rre1 = createSprite (1200,225,50,50);
  rre1.visible = false;
  rre1.addImage (rre1img);
  rre1.scale = 0.2;
  
  rre2 = createSprite (335,225,50,50);
  rre2.visible = false;
  rre2.addImage (rre2img);
  rre2.scale = 0.2;

  ros1 = createSprite (335,550,50,50);
  ros1.visible = false;
  ros1.addImage (ros1img);
  ros1.scale = 0.2;

  ros2 = createSprite (1200,550,50,50);
  ros2.visible = false;
  ros2.addImage (ros2img);
  ros2.scale = 0.2;

  riri1 = createSprite (335,225,50,50);
  riri1.visible = false;
  riri1.addImage (riri1img);
  riri1.scale = 0.2;

  riri2 = createSprite (1200,225,50,50);
  riri2.visible = false;
  riri2.addImage (riri2img);
  riri2.scale = 0.2;

  rpt1 = createSprite (335,550,50,50);
  rpt1.visible = false;
  rpt1.addImage (rpt1img);
  rpt1.scale = 0.2;

  rpt2 = createSprite (1200,550,50,50);
  rpt2.visible = false;
  rpt2.addImage (rpt2img);
  rpt2.scale = 0.2;

  rgo1 = createSprite (335,225,50,50);
  rgo1.visible = false;
  rgo1.addImage (rgo1img);
  rgo1.scale = 0.2;

  rgo2 = createSprite (1200,225,50,50);
  rgo2.visible = false;
  rgo2.addImage (rgo2img);
  rgo2.scale = 0.2;

  rhg1 = createSprite (1200,550,50,50);
  rhg1.visible = false;
  rhg1.addImage (rhg1img);
  rhg1.scale = 0.2;

  rhg2 = createSprite (335,550,50,50);
  rhg2.visible = false;
  rhg2.addImage (rhg2img);
  rhg2.scale = 0.2;

  hg = createSprite (770,290,50,50);
  hg.visible = false
  hg.addImage (hgimg)
  hg.scale = 0.12;

  go = createSprite (770,290,50,50);
  go.visible = false
  go.addImage (goimg)
  go.scale = 0.12;

  pt = createSprite (770,290,50,50);
  pt.visible = false
  pt.addImage (ptimg)
  pt.scale = 0.12;

  iri = createSprite (770,290,50,50);
  iri.visible = false
  iri.addImage (iriimg)
  iri.scale = 0.12;

  os = createSprite (770,290,50,50);
  os.visible = false
  os.addImage (osimg)
  os.scale = 0.12;

  re = createSprite (770,290,50,50);
  re.visible = false
  re.addImage (reimg)
  re.scale = 0.12;

  tu = createSprite (770,290,50,50);
  tu.visible = false
  tu.addImage (tuimg)
  tu.scale = 0.12;

  ta = createSprite (770,290,50,50);
  ta.visible = false
  ta.addImage (taimg)
  ta.scale = 0.12;

  hf = createSprite (770,290,50,50);
  hf.visible = false
  hf.addImage (hfimg)
  hf.scale = 0.12;

  cd = createSprite (770,290,50,50);
  cd.visible = false
  cd.addImage (cdimg)
  cd.scale = 0.12;

  sil = createSprite (770,290,50,50);
  sil.visible = false
  sil.addImage (silimg)
  sil.scale = 0.12;

  pal = createSprite (770,290,50,50);
  pal.visible = false
  pal.addImage (palimg)
  pal.scale = 0.12;

  rh = createSprite (770,290,50,50);
  rh.visible = false
  rh.addImage (rhimg)
  rh.scale = 0.12;

  rut = createSprite (770,290,50,50);
  rut.visible = false
  rut.addImage (rutimg)
  rut.scale = 0.12;

  tec = createSprite (770,290,50,50);
  tec.visible = false
  tec.addImage (tecimg)
  tec.scale = 0.12;

  mo = createSprite (770,290,50,50);
  mo.visible = false
  mo.addImage (moimg)
  mo.scale = 0.12;

  nb = createSprite (770,290,50,50);
  nb.visible = false
  nb.addImage (nbimg)
  nb.scale = 0.12;

  zr = createSprite (770,290,50,50);
  zr.visible = false
  zr.addImage (zrimg)
  zr.scale = 0.12;

  yt = createSprite (770,290,50,50);
  yt.visible = false
  yt.addImage (ytimg)
  yt.scale = 0.12;

  zi = createSprite (770,290,50,50);
  zi.visible = false
  zi.addImage (ziimg)
  zi.scale = 0.12;

  cop = createSprite (770,290,50,50);
  cop.visible = false
  cop.addImage (copimg)
  cop.scale = 0.12;

  ni = createSprite (770,290,50,50);
  ni.visible = false
  ni.addImage (niimg)
  ni.scale = 0.12;

  co = createSprite (770,290,50,50);
  co.visible = false
  co.addImage (coimg)
  co.scale = 0.12;

  ir = createSprite (770,290,50,50);
  ir.visible = false
  ir.addImage (irimg)
  ir.scale = 0.12;

  man = createSprite (770,290,50,50);
  man.visible = false
  man.addImage (manimg)
  man.scale = 0.12;

  ch = createSprite (770,290,50,50);
  ch.visible = false
  ch.addImage (chimg)
  ch.scale = 0.12;

  va = createSprite (770,290,50,50);
  va.visible = false
  va.addImage (vaimg)
  va.scale = 0.12;

  t = createSprite (770,290,50,50);
  t.visible = false
  t.addImage (timg)
  t.scale = 0.12;

  sc = createSprite (770,290,50,50);
  sc.visible = false
  sc.addImage (scimg)
  sc.scale = 0.12;

  al = createSprite (770,290,50,50);
  al.visible = false
  al.addImage (alimg)
  al.scale = 0.12;

  ga = createSprite (770,290,50,50);
  ga.visible = false
  ga.addImage (gaimg)
  ga.scale = 0.12;

  inn = createSprite (770,290,50,50);
  inn.visible = false
  inn.addImage (innimg)
  inn.scale = 0.12;

  ti = createSprite (770,290,50,50);
  ti.visible = false
  ti.addImage (tiimg)
  ti.scale = 0.12;

  tl = createSprite (770,290,50,50);
  tl.visible = false
  tl.addImage (tlimg)
  tl.scale = 0.12;

  pb = createSprite (770,290,50,50);
  pb.visible = false
  pb.addImage (pbimg)
  pb.scale = 0.12;

  bi = createSprite (770,290,50,50);
  bi.visible = false
  bi.addImage (biimg)
  bi.scale = 0.12;

  pol = createSprite (770,290,50,50);
  pol.visible = false
  pol.addImage (polimg)
  pol.scale = 0.12;

  at = createSprite (770,290,50,50);
  at.visible = false
  at.addImage (atimg)
  at.scale = 0.12;

  b = createSprite (770,290,50,50);
  b.visible = false
  b.addImage (bimg)
  b.scale = 0.12;

  si = createSprite (770,290,50,50);
  si.visible = false
  si.addImage (siimg)
  si.scale = 0.12;

  ge = createSprite (770,290,50,50);
  ge.visible = false
  ge.addImage (geimg)
  ge.scale = 0.12;

  as = createSprite (770,290,50,50);
  as.visible = false
  as.addImage (asimg)
  as.scale = 0.12;

  an = createSprite (770,290,50,50)
  an.visible = false
  an.addImage (animg)
  an.scale = 0.12;

  te = createSprite (770,290,50,50)
  te.visible = false
  te.addImage (teimg)
  te.scale = 0.12;

  he = createSprite (770,290,50,50)
  he.visible = false
  he.addImage (heimg)
  he.scale = 0.12;

  ne = createSprite (770,290,50,50)
  ne.visible = false
  ne.addImage (neimg)
  ne.scale = 0.15;

  ar = createSprite (770,290,50,50)
  ar.visible = false
  ar.addImage (arimg)
  ar.scale = 0.15;

  kr = createSprite (770,290,50,50)
  kr.visible = false
  kr.addImage (krimg)
  kr.scale = 0.15;

  x = createSprite (770,290,50,50)
  x.visible = false
  x.addImage (ximg)
  x.scale = 0.15;

  rn = createSprite (770,290,50,50)
  rn.visible = false
  rn.addImage (rnimg)
  rn.scale = 0.15;

  h = createSprite (770,290,50,50)
  h.visible = false
  h.addImage (himg)
  h.scale = 0.12;

  c = createSprite (770,290,50,50)
  c.visible = false
  c.addImage (cimg)
  c.scale = 0.12;

  n = createSprite (770,290,50,50)
  n.visible = false
  n.addImage (nimg)
  n.scale = 0.12;

  ox = createSprite (770,290,50,50)
  ox.visible = false
  ox.addImage (oximg)
  ox.scale = 0.12;

  fl = createSprite (770,290,50,50)
  fl.visible = false
  fl.addImage (flimg)
  fl.scale = 0.12;

  p = createSprite (770,290,50,50)
  p.visible = false
  p.addImage (pimg)
  p.scale = 0.12;

  su = createSprite (770,290,50,50)
  su.visible = false
  su.addImage (suimg)
  su.scale = 0.12;

  cl = createSprite (770,290,50,50)
  cl.visible = false
  cl.addImage (climg)
  cl.scale = 0.12;

  se = createSprite (770,290,50,50)
  se.visible = false
  se.addImage (seimg)
  se.scale = 0.12;

  br = createSprite (770,290,50,50)
  br.visible = false
  br.addImage (brimg)
  br.scale = 0.12;

  i = createSprite (770,290,50,50)
  i.visible = false
  i.addImage (iimg)
  i.scale = 0.12;

  li = createSprite (770,290,50,50)
  li.visible = false
  li.addImage (liimg)
  li.scale = 0.12;

  so = createSprite (770,290,50,50)
  so.visible = false
  so.addImage (soimg)
  so.scale = 0.12;

  po = createSprite (770,290,50,50)
  po.visible = false
  po.addImage (poimg)
  po.scale = 0.12;

  mg = createSprite (770,290,50,50)
  mg.visible = false
  mg.addImage (mgimg)
  mg.scale = 0.12;


  be = createSprite (770,290,50,50)
  be.visible = false
  be.addImage (beimg)
  be.scale = 0.12;

  cae = createSprite (770,290,50,50)
  cae.visible = false
  cae.addImage (caeimg)
  cae.scale = 0.12;

  ru = createSprite (770,290,50,50)
  ru.visible = false
  ru.addImage (ruimg)
  ru.scale = 0.12;

  lap = createSprite (770,620,50,50)
  lap.visible = false;
  lap.addImage (lapimg);
  lap.scale = 0.2;

  gameover = createSprite (770,305,50,50)
  gameover.visible = false;
  gameover.addImage (gameoverimg);
  gameover.scale = 0.5;

  victory = createSprite (770,305,50,50)
  victory.visible = false;
  victory.addImage (victoryimg);
  victory.scale = 0.5;

  logo = createSprite (1400,650,40,40)
  logo.addImage (logoimg);
  logo.scale = 0.1;
  logo.visible = false;

  matrazn = createSprite (770,470,40,40)
  matrazn.addImage (matraznimg);
  matrazn.scale = 0.1;
  matrazn.visible = false;

  matrazt = createSprite (770,120,40,40)
  matrazt.addImage (matraztimg);
  matrazt.scale = 0.1;
  matrazt.visible = false;

  matrazf = createSprite (770,120,40,40)
  matrazf.addImage (matrazfimg);
  matrazf.scale = 0.1;
  matrazf.visible = false;

  credits = createSprite (800,370,50,50)
  credits.addImage (creditsimg);
  credits.scale = 0.7;
  credits.visible = false;

  howto = createSprite (800,370,50,50)
  howto.addImage (howtoimg);
  howto.scale = 0.7;
  howto.visible = false;

  fscore = createSprite (1371,57,50,50)
  fscore.addImage (fscoreimg);
  fscore.scale = 0.1;



  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  
 
    
    
  if(mousePressedOver (botonplay)&&botonplay.visible === true) {
   botonplay.visible = false;
   botonhow.visible = false;
   botoncredits.visible = false;
   titulo.visible = false;
   botonregresar.visible = true;
   tabla.visible = true;
  veboton2.visible = true
   amboton1.visible = true
   moboton3.visible = true;
   roboton4.visible =true;
   veoboton5.visible = true;
   aviso.visible = true;
   vecboton6.visible = true;
   moboton7.visible = true;
   azboton8.visible = true;
   tabla.scale=0.9
   console.log(1)
  }

  if(mousePressedOver(botoncredits)&&botoncredits.visible === true){
  
    botonplay.visible = false;
    titulo.visible = false;
    botonhow.visible = false;
    botoncredits.visible = false;
    
    botonregresar5.visible = true;
    credits.visible = true;
  }

  if(mousePressedOver(botonhow)&&botonhow.visible === true){
  
    botonplay.visible = false;
    titulo.visible = false;
    botonhow.visible = false;
    botoncredits.visible = false;
    
    botonregresar6.visible = true;
    howto.visible = true;
  }

  if(mousePressedOver(botonregresar5)&&botonregresar5.visible === true) {
    botonplay.visible = true;
    titulo.visible = true;
    botonhow.visible = true;
    botoncredits.visible = true;
    
    botonregresar5.visible = false;
    credits.visible = false;
   }

   if(mousePressedOver(botonregresar6)&&botonregresar6.visible === true) {
    botonplay.visible = true;
    titulo.visible = true;
    botonhow.visible = true;
    botoncredits.visible = true;
    
    botonregresar6.visible = false;
    howto.visible = false;
   }

  if(mousePressedOver(botonregresar)&&botonregresar.visible === true) {
    botonplay.visible = true;
    botoncredits.visible = true;
    botonhow.visible = true;
    titulo.visible = true;
    botonregresar.visible = false;
    tabla.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    
   }

   if (mousePressedOver(lar1)&&lar1.visible === true){
    score+=5
   matrazf.visible = true;
   victory.visible = true;
   botonregresar4.visible = true;
   fondo3.visible = true;
   
   lar1.visible = false;
   lar2.visible = false;
   la.visible = false;
   lap.visible = false;
   matrazn.visible = false;

   }
   
   
   if (mousePressedOver(lar2)&&lar2.visible === true){
    
    la.visible = false;
    score-=5
    fondo2.visible = true;
    lar1.visible = false;
    lar2.visible = false;
    lap.visible = false;
    matrazn.visible= false;
    gameover.visible = true;
    botonregresar3.visible = true;
    matrazt.visible = true;

   }

   if(mousePressedOver(botonregresar3)&&botonregresar3.visible === true) {
   
    botonregresar.visible = true;
    tabla.visible = true;
   veboton2.visible = true
    amboton1.visible = true
    moboton3.visible = true;
    roboton4.visible =true;
    veoboton5.visible = true;
    aviso.visible = true;
    vecboton6.visible = true;
    moboton7.visible = true;
    azboton8.visible = true;
   
    gameover.visible = false;
    matrazt.visible = false;
    botonregresar3.visible = false;
    tabla.scale=0.9
    fondo2.visible = false;
   }
   
 
   if (mousePressedOver (azboton8)&&azboton8.visible === true){
 
    tabla.visible = false;
    botonregresar.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    
    
    
    la.visible = true;
    fondo2.visible = true;
    lar1.visible = true;
    lar2.visible = true;
    lap.visible = true;
    matrazn.visible= true;
    
 }
 if (mousePressedOver (moboton3)&&moboton3.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  ba1.visible = true;
  fondo2.visible = true;
  bar1.visible = true;
  bar2.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (veboton2)&&veboton2.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  cae.visible = true;
  fondo2.visible = true;
  rcae2.visible = true;
  rcae1.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (amboton1)&&amboton1.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  i.visible = true;
  fondo2.visible = true;
  ri2.visible = true;
  ri1.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (moboton7)&&moboton7.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  rn.visible = true;
  fondo2.visible = true;
  rrn2.visible = true;
  rrn1.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (veoboton5)&&veoboton5.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  te.visible = true;
  fondo2.visible = true;
  rte1.visible = true;
  rte2.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (vecboton6)&&vecboton6.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  at.visible = true;
  fondo2.visible = true;
  rat1.visible = true;
  rat2.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver (roboton4)&&roboton4.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  

  sc.visible = true;
  fondo2.visible = true;
  rsc1.visible = true;
  rsc2.visible = true;
  lap.visible = true;
  matrazn.visible= true;
 
}

if (mousePressedOver(rhg1)&&rhg1.visible === true){
  score+=5
 matrazf.visible = true;
 victory.visible = true;
 botonregresar4.visible = true;
 fondo3.visible = true;
 
 rhg1.visible = false;
 rhg2.visible = false;
 hg.visible = false;
 lap.visible = false;
 matrazn.visible = false;

 }

if (mousePressedOver(rhg2)&&rhg2.visible === true){
    
  hg.visible = false;
  score-=5
  fondo2.visible = true;
  rhg1.visible = false;
  rhg2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rgo1)&&rgo1.visible === true){
  score+=5


 rhg1.visible = true;
 rhg2.visible = true;
 hg.visible = true;


 go.visible = false;
 
 rgo1.visible = false;
 rgo2.visible = false;
 
 }

 if (mousePressedOver(rgo2)&&rgo2.visible === true){
    
  go.visible = false;
  score-=5
  fondo2.visible = true;
  rgo1.visible = false;
  rgo2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rpt1)&&rpt1.visible === true){
  score+=5


 rgo1.visible = true;
 rgo2.visible = true;
 go.visible = true;


 pt.visible = false;
 
 rpt1.visible = false;
 rpt2.visible = false;
 
 }

 if (mousePressedOver(rpt2)&&rpt2.visible === true){
    
  pt.visible = false;
  score-=5
  fondo2.visible = true;
  rpt1.visible = false;
  rpt2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(riri1)&&riri1.visible === true){
  score+=5


 rpt1.visible = true;
 rpt2.visible = true;
 pt.visible = true;


 iri.visible = false;
 
 riri1.visible = false;
 riri2.visible = false;
 
 }

 if (mousePressedOver(riri2)&&riri2.visible === true){
    
  iri.visible = false;
  score-=5
  fondo2.visible = true;
  riri1.visible = false;
  riri2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(ros1)&&ros1.visible === true){
  score+=5


 riri1.visible = true;
 riri2.visible = true;
 iri.visible = true;


 os.visible = false;
 
 ros1.visible = false;
 ros2.visible = false;
 
 }

 if (mousePressedOver(ros2)&&ros2.visible === true){
    
  os.visible = false;
  score-=5
  fondo2.visible = true;
  ros1.visible = false;
  ros2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rre1)&&rre1.visible === true){
  score+=5


 ros1.visible = true;
 ros2.visible = true;
 os.visible = true;


 re.visible = false;
 
 rre1.visible = false;
 rre2.visible = false;
 
 }

 if (mousePressedOver(rre2)&&rre2.visible === true){
    
  re.visible = false;
  score-=5
  fondo2.visible = true;
  rre1.visible = false;
  rre2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rtu1)&&rtu1.visible === true){
  score+=5


 rre1.visible = true;
 rre2.visible = true;
 re.visible = true;


 tu.visible = false;
 
 rtu1.visible = false;
 rtu2.visible = false;
 
 }

 if (mousePressedOver(rtu2)&&rtu2.visible === true){
    
  tu.visible = false;
  score-=5
  fondo2.visible = true;
  rtu1.visible = false;
  rtu2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rta1)&&rta1.visible === true){
  score+=5


 rtu1.visible = true;
 rtu2.visible = true;
 tu.visible = true;


 ta.visible = false;
 
 rta1.visible = false;
 rta2.visible = false;
 
 }

 if (mousePressedOver(rta2)&&rta2.visible === true){
    
  ta.visible = false;
  score-=5
  fondo2.visible = true;
  rta1.visible = false;
  rta2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rhf1)&&rhf1.visible === true){
  score+=5


 rta1.visible = true;
 rta2.visible = true;
 ta.visible = true;


 hf.visible = false;
 
 rhf1.visible = false;
 rhf2.visible = false;
 
 }

 if (mousePressedOver(rhf2)&&rhf2.visible === true){
    
  hf.visible = false;
  score-=5
  fondo2.visible = true;
  rhf1.visible = false;
  rhf2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rcd1)&&rcd1.visible === true){
  score+=5


 rhf1.visible = true;
 rhf2.visible = true;
 hf.visible = true;


 cd.visible = false;
 
 rcd1.visible = false;
 rcd2.visible = false;
 
 }

 if (mousePressedOver(rcd2)&&rcd2.visible === true){
    
  cd.visible = false;
  score-=5
  fondo2.visible = true;
  rcd1.visible = false;
  rcd2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rsil1)&&rsil1.visible === true){
  score+=5


 rcd1.visible = true;
 rcd2.visible = true;
 cd.visible = true;


 sil.visible = false;
 
 rsil1.visible = false;
 rsil2.visible = false;
 
 }

 if (mousePressedOver(rsil2)&&rsil2.visible === true){
    
  sil.visible = false;
  score-=5
  fondo2.visible = true;
  rsil1.visible = false;
  rsil2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rpal1)&&rpal1.visible === true){
  score+=5


 rsil1.visible = true;
 rsil2.visible = true;
 sil.visible = true;


 pal.visible = false;
 
 rpal1.visible = false;
 rpal2.visible = false;
 
 }

 if (mousePressedOver(rpal2)&&rpal2.visible === true){
    
  pal.visible = false;
  score-=5
  fondo2.visible = true;
  rpal1.visible = false;
  rpal2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rrh1)&&rrh1.visible === true){
  score+=5


 rpal1.visible = true;
 rpal2.visible = true;
 pal.visible = true;


 rh.visible = false;
 
 rrh1.visible = false;
 rrh2.visible = false;
 
 }

 if (mousePressedOver(rrh2)&&rrh2.visible === true){
    
  rh.visible = false;
  score-=5
  fondo2.visible = true;
  rrh1.visible = false;
  rrh2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rrut1)&&rrut1.visible === true){
  score+=5


 rrh1.visible = true;
 rrh2.visible = true;
 rh.visible = true;


 rut.visible = false;
 
 rrut1.visible = false;
 rrut2.visible = false;
 
 }

 if (mousePressedOver(rrut2)&&rrut2.visible === true){
    
  rut.visible = false;
  score-=5
  fondo2.visible = true;
  rrut1.visible = false;
  rrut2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rtec1)&&rtec1.visible === true){
  score+=5


 rrut1.visible = true;
 rrut2.visible = true;
 rut.visible = true;


 tec.visible = false;
 
 rtec1.visible = false;
 rtec2.visible = false;
 
 }

 if (mousePressedOver(rtec2)&&rtec2.visible === true){
    
  tec.visible = false;
  score-=5
  fondo2.visible = true;
  rtec1.visible = false;
  rtec2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rmo1)&&rmo1.visible === true){
  score+=5


 rtec1.visible = true;
 rtec2.visible = true;
 tec.visible = true;


 mo.visible = false;
 
 rmo1.visible = false;
 rmo2.visible = false;
 
 }

 if (mousePressedOver(rmo2)&&rmo2.visible === true){
    
  mo.visible = false;
  score-=5
  fondo2.visible = true;
  rmo1.visible = false;
  rmo2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rnb1)&&rnb1.visible === true){
  score+=5


 rmo1.visible = true;
 rmo2.visible = true;
 mo.visible = true;


 nb.visible = false;
 
 rnb1.visible = false;
 rnb2.visible = false;
 
 }

 if (mousePressedOver(rnb2)&&rnb2.visible === true){
    
  nb.visible = false;
  score-=5
  fondo2.visible = true;
  rnb1.visible = false;
  rnb2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rzr1)&&rzr1.visible === true){
  score+=5


 rnb1.visible = true;
 rnb2.visible = true;
 nb.visible = true;


 zr.visible = false;
 
 rzr1.visible = false;
 rzr2.visible = false;
 
 }

 if (mousePressedOver(rzr2)&&rzr2.visible === true){
    
  zr.visible = false;
  score-=5
  fondo2.visible = true;
  rzr1.visible = false;
  rzr2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(ryt1)&&ryt1.visible === true){
  score+=5


 rzr1.visible = true;
 rzr2.visible = true;
 zr.visible = true;


 yt.visible = false;
 
 ryt1.visible = false;
 ryt2.visible = false;
 
 }

 if (mousePressedOver(ryt2)&&ryt2.visible === true){
    
  yt.visible = false;
  score-=5
  fondo2.visible = true;
  ryt1.visible = false;
  ryt2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rzi1)&&rzi1.visible === true){
  score+=5


 ryt1.visible = true;
 ryt2.visible = true;
 yt.visible = true;


 zi.visible = false;
 
 rzi1.visible = false;
 rzi2.visible = false;
 
 }

 if (mousePressedOver(rzi2)&&rzi2.visible === true){
    
  zi.visible = false;
  score-=5
  fondo2.visible = true;
  rzi1.visible = false;
  rzi2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rcop1)&&rcop1.visible === true){
  score+=5


 rzi1.visible = true;
 rzi2.visible = true;
 zi.visible = true;


 cop.visible = false;
 
 rcop1.visible = false;
 rcop2.visible = false;
 
 }

 if (mousePressedOver(rcop2)&&rcop2.visible === true){
    
  cop.visible = false;
  score-=5
  fondo2.visible = true;
  rcop1.visible = false;
  rcop2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rni1)&&rni1.visible === true){
  score+=5


 rcop1.visible = true;
 rcop2.visible = true;
 cop.visible = true;


 ni.visible = false;
 
 rni1.visible = false;
 rni2.visible = false;
 
 }

 if (mousePressedOver(rni2)&&rni2.visible === true){
    
  ni.visible = false;
  score-=5
  fondo2.visible = true;
  rni1.visible = false;
  rni2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rco1)&&rco1.visible === true){
  score+=5


 rni1.visible = true;
 rni2.visible = true;
 ni.visible = true;


 co.visible = false;
 
 rco1.visible = false;
 rco2.visible = false;
 
 }

 if (mousePressedOver(rco2)&&rco2.visible === true){
    
  co.visible = false;
  score-=5
  fondo2.visible = true;
  rco1.visible = false;
  rco2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }


if (mousePressedOver(rir1)&&rir1.visible === true){
  score+=5


 rco1.visible = true;
 rco2.visible = true;
 co.visible = true;


 ir.visible = false;
 
 rir1.visible = false;
 rir2.visible = false;
 
 }

 if (mousePressedOver(rir2)&&rir2.visible === true){
    
  ir.visible = false;
  score-=5
  fondo2.visible = true;
  rir1.visible = false;
  rir2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rman1)&&rman1.visible === true){
  score+=5


 rir1.visible = true;
 rir2.visible = true;
 ir.visible = true;


 man.visible = false;
 
 rman1.visible = false;
 rman2.visible = false;
 
 }

 if (mousePressedOver(rman2)&&rman2.visible === true){
    
  man.visible = false;
  score-=5
  fondo2.visible = true;
  rman1.visible = false;
  rman2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rch1)&&rch1.visible === true){
  score+=5


 rman1.visible = true;
 rman2.visible = true;
 man.visible = true;


 ch.visible = false;
 
 rch1.visible = false;
 rch2.visible = false;
 
 }

 if (mousePressedOver(rch2)&&rch2.visible === true){
    
  ch.visible = false;
  score-=5
  fondo2.visible = true;
  rch1.visible = false;
  rch2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rva1)&&rva1.visible === true){
  score+=5


 rch1.visible = true;
 rch2.visible = true;
 ch.visible = true;


 va.visible = false;
 
 rva1.visible = false;
 rva2.visible = false;
 
 }

 if (mousePressedOver(rva2)&&rva2.visible === true){
    
  va.visible = false;
  score-=5
  fondo2.visible = true;
  rva1.visible = false;
  rva2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rt1)&&rt1.visible === true){
  score+=5


 rva1.visible = true;
 rva2.visible = true;
 va.visible = true;


 t.visible = false;
 
 rt1.visible = false;
 rt2.visible = false;
 
 }

 if (mousePressedOver(rt2)&&rt2.visible === true){
    
  t.visible = false;
  score-=5
  fondo2.visible = true;
  rt1.visible = false;
  rt2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rsc1)&&rsc1.visible === true){
  score+=5


 rt1.visible = true;
 rt2.visible = true;
 t.visible = true;


 sc.visible = false;
 
 rsc1.visible = false;
 rsc2.visible = false;
 
 }

 if (mousePressedOver(rsc2)&&rsc2.visible === true){
    
  sc.visible = false;
  score-=5
  fondo2.visible = true;
  rsc1.visible = false;
  rsc2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(ral1)&&ral1.visible === true){
  score+=5
 matrazf.visible = true;
 victory.visible = true;
 botonregresar4.visible = true;
 fondo3.visible = true;
 
 ral1.visible = false;
 ral2.visible = false;
 al.visible = false;
 lap.visible = false;
 matrazn.visible = false;

 }

 if (mousePressedOver(ral2)&&ral2.visible === true){
    
  al.visible = false;
  score-=5
  fondo2.visible = true;
  ral1.visible = false;
  ral2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rga1)&&rga1.visible === true){
  score+=5


 ral1.visible = true;
 ral2.visible = true;
 al.visible = true;


 ga.visible = false;
 
 rga1.visible = false;
 rga2.visible = false;
 
 }

 if (mousePressedOver(rga2)&&rga2.visible === true){
    
  ga.visible = false;
  score-=5
  fondo2.visible = true;
  rga1.visible = false;
  rga2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rin1)&&rin1.visible === true){
  score+=5


 rga1.visible = true;
 rga2.visible = true;
 ga.visible = true;


 inn.visible = false;
 
 rin1.visible = false;
 rin2.visible = false;
 
 }

 if (mousePressedOver(rin2)&&rin2.visible === true){
    
  inn.visible = false;
  score-=5
  fondo2.visible = true;
  rin1.visible = false;
  rin2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rti1)&&rti1.visible === true){
  score+=5


 rin1.visible = true;
 rin2.visible = true;
 inn.visible = true;


 ti.visible = false;
 
 rti1.visible = false;
 rti2.visible = false;
 
 }

 if (mousePressedOver(rti2)&&rti2.visible === true){
    
  ti.visible = false;
  score-=5
  fondo2.visible = true;
  rti1.visible = false;
  rti2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rtl1)&&rtl1.visible === true){
  score+=5


 rti1.visible = true;
 rti2.visible = true;
 ti.visible = true;


 tl.visible = false;
 
 rtl1.visible = false;
 rtl2.visible = false;
 
 }

 if (mousePressedOver(rtl2)&&rtl2.visible === true){
    
  tl.visible = false;
  score-=5
  fondo2.visible = true;
  rtl1.visible = false;
  rtl2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rpb1)&&rpb1.visible === true){
  score+=5


 rtl1.visible = true;
 rtl2.visible = true;
 tl.visible = true;


 pb.visible = false;
 
 rpb1.visible = false;
 rpb2.visible = false;
 
 }

 if (mousePressedOver(rpb2)&&rpb2.visible === true){
    
  pb.visible = false;
  score-=5
  fondo2.visible = true;
  rpb1.visible = false;
  rpb2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rbi1)&&rbi1.visible === true){
  score+=5


 rpb1.visible = true;
 rpb2.visible = true;
 pb.visible = true;


 bi.visible = false;
 
 rbi1.visible = false;
 rbi2.visible = false;
 
 }

 if (mousePressedOver(rbi2)&&rbi2.visible === true){
    
  bi.visible = false;
  score-=5
  fondo2.visible = true;
  rbi1.visible = false;
  rbi2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rpol1)&&rpol1.visible === true){
  score+=5


 rbi1.visible = true;
 rbi2.visible = true;
 bi.visible = true;


 pol.visible = false;
 
 rpol1.visible = false;
 rpol2.visible = false;
 
 }

 if (mousePressedOver(rpol2)&&rpol2.visible === true){
    
  pol.visible = false;
  score-=5
  fondo2.visible = true;
  rpol1.visible = false;
  rpol2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rat1)&&rat1.visible === true){
  score+=5


 rpol1.visible = true;
 rpol2.visible = true;
 pol.visible = true;


 at.visible = false;
 
 rat1.visible = false;
 rat2.visible = false;
 
 }

 if (mousePressedOver(rat2)&&rat2.visible === true){
    
  at.visible = false;
  score-=5
  fondo2.visible = true;
  rat1.visible = false;
  rat2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rb1)&&rb1.visible === true){
  score+=5
 matrazf.visible = true;
 victory.visible = true;
 botonregresar4.visible = true;
 fondo3.visible = true;
 
 rb1.visible = false;
 rb2.visible = false;
 b.visible = false;
 lap.visible = false;
 matrazn.visible = false;

 }

if (mousePressedOver(rb2)&&rb2.visible === true){
    
  b.visible = false;
  score-=5
  fondo2.visible = true;
  rb1.visible = false;
  rb2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rsi1)&&rsi1.visible === true){
  score+=5


 rb1.visible = true;
 rb2.visible = true;
 b.visible = true;


 si.visible = false;
 
 rsi1.visible = false;
 rsi2.visible = false;
 
 }

 if (mousePressedOver(rsi2)&&rsi2.visible === true){
    
  si.visible = false;
  score-=5
  fondo2.visible = true;
  rsi1.visible = false;
  rsi2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rge1)&&rge1.visible === true){
  score+=5


 rsi1.visible = true;
 rsi2.visible = true;
 si.visible = true;


 ge.visible = false;
 
 rge1.visible = false;
 rge2.visible = false;
 
 }

 if (mousePressedOver(rge2)&&rge2.visible === true){
    
  ge.visible = false;
  score-=5
  fondo2.visible = true;
  rge1.visible = false;
  rge2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(ras1)&&ras1.visible === true){
  score+=5


 rge1.visible = true;
 rge2.visible = true;
 ge.visible = true;


 as.visible = false;
 
 ras1.visible = false;
 ras2.visible = false;
 
 }

 if (mousePressedOver(ras2)&&ras2.visible === true){
    
  as.visible = false;
  score-=5
  fondo2.visible = true;
  ras1.visible = false;
  ras2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(ran1)&&ran1.visible === true){
  score+=5


 ras1.visible = true;
 ras2.visible = true;
 as.visible = true;


 an.visible = false;
 
 ran1.visible = false;
 ran2.visible = false;
 
 }

 if (mousePressedOver(ran2)&&ran2.visible === true){
    
  an.visible = false;
  score-=5
  fondo2.visible = true;
  ran1.visible = false;
  ran2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rte1)&&rte1.visible === true){
  score+=5


 ran1.visible = true;
 ran2.visible = true;
 an.visible = true;


 te.visible = false;
 
 rte1.visible = false;
 rte2.visible = false;
 
 }

 if (mousePressedOver(rte2)&&rte2.visible === true){
    
  te.visible = false;
  score-=5
  fondo2.visible = true;
  rte1.visible = false;
  rte2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rrn1)&&rrn1.visible === true){
  score+=5


 rx1.visible = true;
 rx2.visible = true;
 x.visible = true;


 rn.visible = false;
 
 rrn1.visible = false;
 rrn2.visible = false;
 
 }

if (mousePressedOver(rrn2)&&rrn2.visible === true){
    
  rn.visible = false;
  score-=5
  fondo2.visible = true;
  rrn1.visible = false;
  rrn2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rx1)&&rx1.visible === true){
  score+=5


 rkr1.visible = true;
 rkr2.visible = true;
 kr.visible = true;


 x.visible = false;
 
 rx1.visible = false;
 rx2.visible = false;
 
 }

 if (mousePressedOver(rx2)&&rx2.visible === true){
    
  x.visible = false;
  score-=5
  fondo2.visible = true;
  rx1.visible = false;
  rx2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rkr1)&&rkr1.visible === true){
  score+=5


 rar1.visible = true;
 rar2.visible = true;
 ar.visible = true;


 kr.visible = false;
 
 rkr1.visible = false;
 rkr2.visible = false;
 
 }

 if (mousePressedOver(rkr2)&&rkr2.visible === true){
    
  kr.visible = false;
  score-=5
  fondo2.visible = true;
  rkr1.visible = false;
  rkr2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rar1)&&rar1.visible === true){
  score+=5


 rne1.visible = true;
 rne2.visible = true;
 ne.visible = true;


 ar.visible = false;
 
 rar1.visible = false;
 rar2.visible = false;
 
 }

 if (mousePressedOver(rar2)&&rar2.visible === true){
    
  ar.visible = false;
  score-=5
  fondo2.visible = true;
  rar1.visible = false;
  rar2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rne1)&&rne1.visible === true){
  score+=5


 rhe1.visible = true;
 rhe2.visible = true;
 he.visible = true;


 ne.visible = false;
 
 rne1.visible = false;
 rne2.visible = false;
 
 }

 if (mousePressedOver(rne2)&&rne2.visible === true){
    
  ne.visible = false;
  score-=5
  fondo2.visible = true;
  rne1.visible = false;
  rne2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rhe1)&&rhe1.visible === true){
  score+=5
 matrazf.visible = true;
 victory.visible = true;
 botonregresar4.visible = true;
 fondo3.visible = true;
 
 rhe1.visible = false;
 rhe2.visible = false;
 he.visible = false;
 lap.visible = false;
 matrazn.visible = false;

 }

 if (mousePressedOver(rhe2)&&rhe2.visible === true){
    
  he.visible = false;
  score-=5
  fondo2.visible = true;
  rhe1.visible = false;
  rhe2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

if (mousePressedOver(rse1)&&rse1.visible === true){
    
  se.visible = false;
  score-=5
  fondo2.visible = true;
  rse1.visible = false;
  rse2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rse2)&&rse2.visible === true){
  score+=5


 rcl1.visible = true;
 rcl2.visible = true;
 cl.visible = true;


 se.visible = false;
 
 rse1.visible = false;
 rse2.visible = false;
 
 }

if (mousePressedOver(rcae2)&&rcae2.visible === true){
    
  cae.visible = false;
  score-=5
  fondo2.visible = true;
  rcae1.visible = false;
  rcae2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rcl2)&&rcl2.visible === true){
    
  cl.visible = false;
  score-=5
  fondo2.visible = true;
  rcl1.visible = false;
  rcl2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rcl1)&&rcl1.visible === true){
  score+=5


 rsu1.visible = true;
 rsu2.visible = true;
 su.visible = true;


 cl.visible = false;
 
 rcl1.visible = false;
 rcl2.visible = false;
 
 }

 if (mousePressedOver(rsu1)&&rsu1.visible === true){
  score+=5


 rp1.visible = true;
 rp2.visible = true;
 p.visible = true;


 su.visible = false;
 
 rsu1.visible = false;
 rsu2.visible = false;
 
 }

 if (mousePressedOver(rsu2)&&rsu2.visible === true){
    
  su.visible = false;
  score-=5
  fondo2.visible = true;
  rsu1.visible = false;
  rsu2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rp1)&&rp1.visible === true){
  score+=5


 rfl1.visible = true;
 rfl2.visible = true;
 fl.visible = true;


 p.visible = false;
 
 rp1.visible = false;
 rp2.visible = false;
 
 }

 if (mousePressedOver(rp2)&&rp2.visible === true){
    
  p.visible = false;
  score-=5
  fondo2.visible = true;
  rp1.visible = false;
  rp2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rfl1)&&rfl1.visible === true){
  score+=5


 rox1.visible = true;
 rox2.visible = true;
 ox.visible = true;


 fl.visible = false;
 
 rfl1.visible = false;
 rfl2.visible = false;
 
 }

 if (mousePressedOver(rfl2)&&rfl2.visible === true){
    
  fl.visible = false;
  score-=5
  fondo2.visible = true;
  rfl1.visible = false;
  rfl2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rox1)&&rox1.visible === true){
  score+=5


 rn1.visible = true;
 rn2.visible = true;
 n.visible = true;


 ox.visible = false;
 
 rox1.visible = false;
 rox2.visible = false;
 
 }

 if (mousePressedOver(rox2)&&rox2.visible === true){
    
  ox.visible = false;
  score-=5
  fondo2.visible = true;
  rox1.visible = false;
  rox2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rn1)&&rn1.visible === true){
  score+=5


 rc1.visible = true;
 rc2.visible = true;
 c.visible = true;


 n.visible = false;
 
 rn1.visible = false;
 rn2.visible = false;
 
 }

 if (mousePressedOver(rn2)&&rn2.visible === true){
    
  n.visible = false;
  score-=5
  fondo2.visible = true;
  rn1.visible = false;
  rn2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rc1)&&rc1.visible === true){
  score+=5


 rh1.visible = true;
 rh2.visible = true;
 h.visible = true;


 c.visible = false;
 
 rc1.visible = false;
 rc2.visible = false;
 
 }

 if (mousePressedOver(rc2)&&rc2.visible === true){
    
  c.visible = false;
  score-=5
  fondo2.visible = true;
  rc1.visible = false;
  rc2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rh1)&&rh1.visible === true){
  score+=5
 matrazf.visible = true;
 victory.visible = true;
 botonregresar4.visible = true;
 fondo3.visible = true;
 
 rh1.visible = false;
 rh2.visible = false;
 h.visible = false;
 lap.visible = false;
 matrazn.visible = false;

 }

 if (mousePressedOver(rh2)&&rh2.visible === true){
    
  h.visible = false;
  score-=5
  fondo2.visible = true;
  rh1.visible = false;
  rh2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(ri2)&&ri2.visible === true){
    
  i.visible = false;
  score-=5
  fondo2.visible = true;
  ri1.visible = false;
  ri2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(ri1)&&ri1.visible === true){
  score+=5


 rbr1.visible = true;
 rbr2.visible = true;
 br.visible = true;


 i.visible = false;
 
 ri1.visible = false;
 ri2.visible = false;
 
 }

 if (mousePressedOver(rso2)&&rso2.visible === true){
    
  so.visible = false;
  score-=5
  fondo2.visible = true;
  rso1.visible = false;
  rso2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rbr2)&&rbr2.visible === true){
    
  br.visible = false;
  score-=5
  fondo2.visible = true;
  rbr1.visible = false;
  rbr2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rbr1)&&rbr1.visible === true){
  score+=5


 rse1.visible = true;
 rse2.visible = true;
 se.visible = true;


 br.visible = false;
 
 rbr1.visible = false;
 rbr2.visible = false;
 
 }

 if (mousePressedOver(rso1)&&rso1.visible === true){
  score+=5


 rli1.visible = true;
 rli2.visible = true;
 li.visible = true;


 so.visible = false;
 
 rso1.visible = false;
 rso2.visible = false;
 
 }

 if (mousePressedOver(rli1)&&rli1.visible === true){
    
  li.visible = false;
  score-=5
  fondo2.visible = true;
  rli1.visible = false;
  rli2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rli2)&&rli2.visible === true){
 
  score+=5
  matrazf.visible = true;
  victory.visible = true;
  botonregresar4.visible = true;
  fondo3.visible = true;
  
  rli1.visible = false;
  rli2.visible = false;
  li.visible = false;
  lap.visible = false;
  matrazn.visible = false;

 }

 if (mousePressedOver(rcae1)&&rcae1.visible === true){
  score+=5


 rru1.visible = true;
 rru2.visible = true;
 ru.visible = true;


 cae.visible = false;
 
 rcae1.visible = false;
 rcae2.visible = false;
 
 }

 if (mousePressedOver(rru1)&&rru1.visible === true){
    
  ru.visible = false;
  score-=5
  fondo2.visible = true;
  rru1.visible = false;
  rru2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rru2)&&rru2.visible === true){
  score+=5


 rpo1.visible = true;
 rpo2.visible = true;
 po.visible = true;


 rru2.visible = false;
 
 rru1.visible = false;
 ru.visible = false;
 
 }

 if (mousePressedOver(rpo2)&&rpo2.visible === true){
    
  po.visible = false;
  score-=5
  fondo2.visible = true;
  rpo1.visible = false;
  rpo2.visible = false;
  lap.visible = false;
  matrazn.visible= false;

  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rpo1)&&rpo1.visible === true){
  score+=5


 rso1.visible = true;
 rso2.visible = true;
 so.visible = true;


 rpo2.visible = false;
 
 rpo1.visible = false;
 po.visible = false;
 
 }

if (mousePressedOver(bar2)&&bar2.visible === true){
    
  ba1.visible = false;
  score-=5
  fondo2.visible = true;
  bar1.visible = false;
  bar2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }
 
 if (mousePressedOver(bar1)&&bar1.visible === true){
  score+=5


 rst1.visible = true;
 rst2.visible = true;
 sr.visible = true;


 ba1.visible = false;
 
 bar1.visible = false;
 bar2.visible = false;
 
 }
 

 if (mousePressedOver(rst2)&&rst2.visible === true){
    
  sr.visible = false;
  score-=5
  fondo2.visible = true;
  rst1.visible = false;
  rst2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rst1)&&rst1.visible === true){
  score+=5
    
  rca1.visible = true;
 ca.visible = true;
 rca2.visible = true;
 
 rst1.visible = false;
 rst2.visible = false;
 sr.visible = false;


 
 }
 
if (mousePressedOver(rca1)&&rca1.visible === true){
  score+=5
    
  rmg1.visible = true;
 mg.visible = true;
 rmg2.visible = true;
 
 rca1.visible = false;
 rca2.visible = false;
 ca.visible = false;


 
 }
 
 if (mousePressedOver(rca2)&&rca2.visible === true){
    
  ca.visible = false;
  score-=5
  fondo2.visible = true;
  rca1.visible = false;
  rca2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rmg2)&&rmg2.visible === true){
    
  mg.visible = false;
  score-=5
  fondo2.visible = true;
  rmg1.visible = false;
  rmg2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if (mousePressedOver(rmg1)&&rmg1.visible === true){
  score+=5
    
  rbe1.visible = true;
 be.visible = true;
 rbe2.visible = true;
 
 rmg1.visible = false;
 rmg2.visible = false;
 mg.visible = false;


 
 }

 if (mousePressedOver(rbe1)&&rbe1.visible === true){
 
  score+=5
  matrazf.visible = true;
  victory.visible = true;
  botonregresar4.visible = true;
  fondo3.visible = true;
  
  rbe1.visible = false;
  rbe2.visible = false;
  be.visible = false;
  lap.visible = false;
  matrazn.visible = false;

 }


 if (mousePressedOver(rbe2)&&rbe2.visible === true){
 
  score-=5
  be.visible = false;

  fondo2.visible = true;
  rbe1.visible = false;
  rbe2.visible = false;
  lap.visible = false;
  matrazn.visible= false;
  gameover.visible = true;
  botonregresar3.visible = true;
  matrazt.visible = true;

 }

 if(mousePressedOver(botonregresar4)&&botonregresar4.visible === true) {
   
  botonregresar.visible = true;
  tabla.visible = true;
 veboton2.visible = true
  amboton1.visible = true
  moboton3.visible = true;
  roboton4.visible =true;
  veoboton5.visible = true;
  aviso.visible = true;
  vecboton6.visible = true;
  moboton7.visible = true;
  azboton8.visible = true;
 

  victory.visible = false;
  matrazf.visible = false;
  botonregresar4.visible = false;
  tabla.scale=0.9
  fondo3.visible = false;
  fondo2.visible = false;
 }

 //botonplay.visible = false;
 //  titulo.visible = false;
  // botonregresar.visible = true;
 //  tabla.visible = true;
 // veboton2.visible = true
 //  amboton1.visible = true
 //  moboton3.visible = true;
 //  roboton4.visible =true;
  // veoboton5.visible = true;
  // aviso.visible = true;
   //vecboton6.visible = true;
  // moboton7.visible = true;
  // azboton8.visible = true;
  // click.visible = true;
 //  la.visible = false;
  // fondo2.visible = false;
  // lar1.visible = false;
 //  lar2.visible = false;
 //  lap.visible = false;
 //  matrazn.visible= false;

 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
    text("Score: "+ score, 1350,60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

