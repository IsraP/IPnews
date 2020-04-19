<!doctype html>
<html lang="pt-br">
    <style>
        .bg-terciary{
            background-color: #202a4f;
        }
        img.logo {
        border-radius: 50%;
        }
        div.sub {
            height: 100px;
        }
        .text-logo{
            color: #293668;
        }
        .text-sub{
            color: #8c8c8c;
        }
        .carrotitulo{
            -webkit-text-fill-color: white; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
        }
        .fontexclusive{
            font-size: smaller;
        }
        .text-black{
            color :black !important;
        }
        img.kawhi{
            max-width: 100%;
            max-height: auto;
            overflow: hidden;
        }
        .bg-quarter{
           background-color: #12182E; 
        }
        .nopadding {
        padding: 0 !important;
        margin: 0 !important;
        }
        .lowpadding {
        padding: 5px !important;
        margin: 0 !important;
        }
        .backgroundnews{
            background-image: url("https://imgur.com/HPL6L7f.png");
        }
        .backgroundpromoted{
            background-image: url("https://imgur.com/j00CWgL.png");
        }
        .backgroundmusic{
            background-image: url("https://imgur.com/gc1mh4x.png");
        }
        .backgroundvideo{
          background-image: url("https://imgur.com/ZNy1zX7.png");
        }
        .bg-basket{
            background-color: #CF5300 !important; 
        }
        .carousel-indicators li {
        width: 10px !important;
        height: 10px !important;
        border-radius: 100% !important;
        }
        ol.spotify li{
          position: relative;
          bottom: -55px;
        }
        ol.labelcar li{
          position: relative;
          bottom: -33px;
        }
        ol.videocar li{
          position: relative;
          bottom: -50px;
        }
        .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px; height: 0; overflow: hidden;
        }
        
        .video-container iframe,
        .video-container object,
        .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        }
        .twitter-widget-1 {
        width:100%;
        }

        @media screen and (max-width: 768){
          h1{
            color: red;
          }
        }

    </style>



    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Israel's</title>
        <script src="https://kit.fontawesome.com/7e5b51a370.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="CSS/portal.css">
    </head>
    <body class="">
        <div class="bg-quarter">
            <div class="bg-terciary">
                <!--Header no2-->
            <header class='header container'>
                <nav class="navbar navbar-light d-flex flex-row bg-terciary">
                    <div class='col-9'>
                        <a class="navbar-brand" href="#">
                            <img src="https://i.imgur.com/2rd3Pka.png" width="100" height="100" 
                            class="d-inline-block align-top logo" 
                            alt="alt">
                        </a>
                    </div>
                    <div class='col-3 sub'>
                        <div class='d-flex flex-row col-12 justify-content-end align-self-start'>
                            <div class='pl-2'>
                                <a href="" class='text-light'>Subscribe</a>
                            </div>
                            <div class='pl-2 text-logo'>
                                |
                            </div>
                            <div class='pl-2 '>
                                <a href="" class='text-light'>Register</a>
                            </div>
                            <div class='pl-2 text-logo'>
                                |
                            </div>
                            <div class='pl-2 pr-2'>
                                <a href="" class='text-light'>Login</a>
                            </div>
                        </div>
                        <div class='d-flex flex-row col-12 justify-content-end'><br></div>
                        <div class='d-flex flex-row col-12 justify-content-end'><br></div>
                        <div class='d-flex flex-row col-12 justify-content-end'>
                            <div class='pr-2'>
                                <a href="" class='text-light'>Country: </a>
                            </div>
                            <div class='pr-3'>
                                <a href=""><img src='https://imgur.com/Y6wUSUE.png'></a>
                            </div>
                            <div class='pr-3 '>
                                <a href=""><img src='https://imgur.com/Qwh3RWG.png'></a>
                            </div>
                            <div class='pr-3 '>
                                <a href=""><img src='https://imgur.com/nGVgGIE.png'></a>
                            </div>
                            <div class='pr-3 '>
                                <a href=""><img src='https://imgur.com/zrtlalK.png'></a>
                            </div>
                            <div class=' '>
                                <a href=""><img src='https://imgur.com/jiDgERM.png'></a>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
            </header>
                <!--Header no2-->
                <div class='bg-terciary border border-right-0 border-left-0 border-secondary'>
            <header class="container">
                <div class="row bg-terciary">
                    <div class="col-12 row flex-row text-light">
                        <div class="ml-5 pr-2 align-self-center">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="pl-3 align-self-center">
                            <h7 class='align-self-center '><a class="text-light" href="">Artists</a></h7>
                        </div>
                        <div class="pl-3 align-self-center">
                            <button class="btn bg-terciary dropdown-toggle text-light" 
                            type="button" id="dropdownnews" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <h7 class="text-light">News</h7>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownnews">
                                <a class="dropdown-item" href="#">Sports</a>
                                <a class="dropdown-item" href="#">Science</a>
                                <a class="dropdown-item" href="#">Varieties</a>
                            </div>
                        </div>
                        <div class="pl-1 align-self-center">
                          <button class="btn bg-terciary dropdown-toggle text-light" 
                          type="button" id="dropdownnews" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <h7 class="text-light">Labels</h7>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownnews">
                              <a class="dropdown-item" href="#">U.S. Labels</a>
                              <a class="dropdown-item" href="#">Labels (Outside U.S.)</a>
                              <a class="dropdown-item" href="#">Publishing</a>
                          </div>
                        </div>
                        <div class=" align-self-center">
                            <button class="btn bg-terciary dropdown-toggle text-light" 
                            type="button" id="dropdownlabels" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <h7 class="text-light">Our Company</h7>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownlabels">
                                <a class="dropdown-item" href="#">Our Crew</a>
                                <a class="dropdown-item" href="#">Our Dream</a>
                                <a class="dropdown-item" href="#">Contact us</a>
                            </div>
                        </div>
                        <div class="pl-2 align-self-center">
                            <a class="text-light" href="">Online Store</a> 
                        </div>
                        <div class="pr-2 py-2 ml-auto align-self-center">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" 
                                type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success my-2 my-sm-0" 
                                type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
          </div>
            <main>
                <!--Main start-->
                <div class='container'>
                <!--Carousel-->
                    <div id="carouselExampleCaptions" class="carousel py-3 carro slide" data-ride="carousel">
                        <ol class="carousel-indicators ">
                          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="bg-primary active"></li>
                          <li data-target="#carouselExampleCaptions" data-slide-to="1" class="bg-primary "></li>
                          <li data-target="#carouselExampleCaptions" data-slide-to="2" class="bg-primary "></li>
                        </ol>
                        <div class="carousel-inner border border-secondary rounded border-lg">
                          <div class="carousel-item active">
                            <img src="https://clutchpoints.com/wp-content/uploads/2020/03/League-sends-memo-to-teams-to-prepare-to-play-without-fans-due-to-coronavirus.jpg" 
                            class="d-block w-100" alt="no">
                            <div class="carousel-caption d-none d-md-block ">
                              <h5>NBA Season suspends after the Jazz Incident</h5>
                              <p>After a jazz player was diagnosed with the covid-19 virus, the NBA saw no option but to suspend games.</p>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <img src="https://s2.glbimg.com/YqOccE9i-YeOUd7oQzOp_J1ELsU=/0x0:624x351/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/B/Q/didpoyS8mtkFt6DNFcsg/110784780-gettyimages-1200706447.jpg" 
                            class="d-block w-100" alt="no">
                            <div class="carousel-caption d-none d-md-block">
                              <h5 class="text-black">Corona Virus: Latest info</h5>
                              <p class="text-black">Latest information about the current corona virus outbreak.</p>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <img src="https://i1.wp.com/aninerd.com.br/wp-content/uploads/2020/03/CR-Originals.png?fit=640%2C360&ssl=1" 
                            class="d-block w-100" alt="no">
                            <div class="carousel-caption d-none d-md-block">
                              <h5 class="text-black">Crunchyroll launches Crunchyroll Originals</h5>
                              <p class="text-black">With new personnel, crunchyroll launches 10 new original titles!</p>
                            </div>
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                <!--Exclusive News-->
                    <div class='row'>
                        <div class="col-8 d-flex">
                          <div class="row">
                            <div class="col-10 d-flex align-self-center">
                                <img src="https://img.bleacherreport.net/img/images/photos/003/852/948/hi-res-02fc3526403707462377476f0f1ceccd_crop_north.jpg?1581915304&w=3072&h=2048"
                                class="img-responsive mt-5 align-self-start mb-5 border rounded border-secondary kawhi" width="100%" height="auto">
                            </div>
                            <div class="col-10 mt-2 align-self-center">
                              <img src="https://miro.medium.com/max/4240/0*Z1LrSvDH-rvrEgRF.jpg"
                              class="img-responsive mt-5 align-self-start mb-5 border rounded border-secondary kawhi" width="100%" height="auto">
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-10">
                                <p class='fontexclusive text-light pt-4'><i>Updated 15/04/2020<br></i></p>
                                <h5 class="text-light">NBA Throwback: Kawhi wins MSG's first Kobe Bryant Award!</h5>
                                <p class="text-light text-justify">Kawhi Leonard was named the recipient of the NBA's first-ever Kobe Bryant All-Star MVP Award on Sunday. 

                                  The award was given to Leonard after Team LeBron defeated Team Giannis, 157-155, in an exciting down-to-the-wire contest. Leonard tallied a team-high 30 points, seven rebounds, four assists and three steals on 11-of-18 shooting.
                                </p>
                                <a href="">Continue reading -></a>
                            </div>
                            <div class="col-10 mt-2">
                                <p class='fontexclusive text-light pt-4'><i>Updated 15/04/2020<br></i></p>
                                <h5 class="text-light">Tokyo Olympics 2020 to be postponed.</h5>
                                <p class="text-light text-justify">The Tokyo Olympics are to be postponed until 2021 after talks between Japan’s prime minister, Shinzo Abe, and the International Olympic Committee president, Thomas Bach, led to confirmation of a decision made inevitable by the coronavirus pandemic.

                                  Abe said they had established that cancelling the Games was out of the question, and that Bach had agreed “100%” that a postponement was the most appropriate response to the global disruption.
                                  
                                  
                                </p>
                                <a href="">Continue reading -></a>
                                
                            </div>
                          </div>
                            
                        </div>
                        
                        
                <!--Promoted Artists-->
                        <div class="col-4">
                            <div class='row'>
                                <div class="col-12  rounded backgroundpromoted my-3">
                                    <h4 class="py-2 px-2 "><span class=" text-light">Promoted</span>
                                        Artists</h4>
                                </div>
                            </div>

                    <!--Carrousel Promoted Artists-->

                            <div class="row">
                                <div id="promoted" class="carousel slide">
                                    <ol class="carousel-indicators">
                                      <li data-target="#promoted" data-slide-to="0" class="active bg-danger"></li>
                                      <li data-target="#promoted" data-slide-to="1" class=" bg-danger"></li>
                                      <li data-target="#promoted" data-slide-to="2" class=" bg-danger"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                       
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/NWRegsR.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Stephen A. Smith</h5>
                                                <p class="card-text">Stephen Anthony Smith is an American sports television personality, sports radio host, sports journalist, and actor. </p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/4PDBSPn.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Shaquille 'o Neal</h5>
                                                <p class="card-text">Shaquille Rashaun "Shaq" O'Neal is a retired professional American basketball player who is a sports analyst on the television program Inside the NBA on TNT.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3" style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/KyrWh1c.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Rachel Nichols</h5>
                                                <p class="card-text">Rachel Michele Nichols (née Alexander, born October 18, 1973) is a sports journalist who is currently a television host for ESPN, a sports reporter, and an anchor.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                              
                            
                                      </div>
                                      <div class="carousel-item">
                                        
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/QeLsYng.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Elon Musk</h5>
                                                <p class="card-text">Elon Reeve Musk FRS is an engineer, industrial designer, technology entrepreneur, and philanthropist.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Bill Gates</h5>
                                                <p class="card-text">William Henry Gates III is an American business magnate, software developer, investor, and philanthropist.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://pbs.twimg.com/profile_images/74188698/NeilTysonOriginsA-Crop_400x400.jpg" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Neil deGrasse Tyson</h5>
                                                <p class="card-text">Neil deGrasse Tyson is an American astrophysicist, author, and science communicator.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
              
                                      </div>
                                      <div class="carousel-item">
                                        
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/eTaf6aJ.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Keiji Fujiwara</h5>
                                                <p class="card-text">Keiji Fujiwara was a Japanese actor and voice actor. Fujiwara founded his own talent management and production company, Air Agency, in 2006. He died from cancer in April 2020.

                                                </p>
                                                <p class="card-text"><small class="text-muted">R.I.P.</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/lLTbcGQ.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Silvio Santos</h5>
                                                <p class="card-text">Senor Abravanel, known professionally as Silvio Santos, is a Brazilian entrepreneur, media tycoon and television host.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card mb-3 mx-3 " style="max-width: 540px;">
                                          <div class="row no-gutters">
                                            <div class="col-md-4 align-self-center px-2 pb-3">
                                              <img src="https://imgur.com/fr3sCaJ.png" class="card-img" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                              <div class="card-body">
                                                <h5 class="card-title">Will Smith</h5>
                                                <p class="card-text">Willard Carroll Smith Jr. is an American actor and rapper. In April 2007, Newsweek called him "the most powerful actor in Hollywood".</p>
                                                <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  
                            </div>
                            

                        </div>

                    </div>
                    
                
                <div class="row pt-5">

                <!--News section-->
                  <article class='col-8 '>
                    <div class="row row-cols-1 row-cols-md-1 pt-5">
                      <div class='news-header  col-12 pt-4'>
                          <nav class="navbar text-light  backgroundnews py-2 navbar-light bg-danger border-right rounded">
                              <h1>News</h1>
                          </nav>
                      </div>
                    </div>
                  <div class="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-2 pt-5">
                      <div class="col-4 mt-4 py-3">
                          <p class="text-light"><small>Saturday 18 April 2020</small></p>
                          <h5 class="text-light">1 Starter Every NBA Team Should Trade This Offseason</h5>
                          <img src="https://imgur.com/bmZBpfz.png"
                          class="img-fluid">
                          <p class="text-light pt-3">Though the 2020 NBA free-agent class is widely considered less interesting than its previous two counterparts, the offseason still has a chance to be full of transactions and drama. With no clear title front-runner and every team boasting a weakness or redundancy of some sort, there are plenty of potential trades to be made.
                            <a href="https://gg.gg/i2g0q"><br>Read more -></a>
                          </p>
                      </div>
                      <div class="col-4  py-3">
                          <p class="text-light"><small>Sunday 19 April 2020</small></p>
                          <h5 class="text-light">A weird stellar explosion may have caused the brightest supernova yet seen</h5>
                          <img src="https://imgur.com/68VlHT1.png"
                          class="img-fluid">
                          <p class="text-light pt-3">The brightest supernova ever seen may be the first known example of a rare type of stellar explosion.

                            The supernova, spotted in 2016 in a galaxy about 4.6 billion light-years away, radiated about 5 sexdecillion (5 followed by 51 zeros) ergs of energy. That’s about twice the amount of radiation emitted by the previous record-holder, and hundreds of times more energetic than normal supernovas. At its brightest, this supernova was as bright as all the stars in the Milky Way put together.
                            <a href="https://gg.gg/i2g1k">Read more -></a>
                          </p>
                      </div>
                      <div class="col-4  py-3">
                          <p class="text-light"><small>Friday 17 April 2020</small></p>
                          <h5 class="text-light">‘Kami no Tou: Tower of God’ Anime is Greenlit. Here are the Details.</h5>
                          <img src="https://imgur.com/tqDEyHK.jpg"
                          class="img-fluid">
                          <p class="text-light pt-3">Written and drawn by Lee Jong-hui under the pseudonym Slave In Utero, ‘Tower of God’ is one remarkable web manga that has a fairly simple premise, but what makes it special is its seamless blend of 2D characters and backgrounds that bring its fantastical world to life.
                            <a href="https://www.thecinemaholic.com/kami-no-tou-tower-of-god/">Read more -></a>
                          </p>
                      </div>
                      <div class="col-4  py-3">
                          <p class="text-light mt-2"><small>Wednesday 15 April 2020</small></p>
                          <h5 class="text-light">Where are all the unused planes right now?</h5>
                          <img src="https://imgur.com/30UAeyc.jpg"
                          class="img-fluid">
                          <p class="text-light pt-3">
                            Between a third and half of the global population are in some form of lockdown. City centres, malls, high streets and tourist attractions are all quiet – and so too is the sky above our planet. The planes that connect our world, unite families and open our eyes to new horizons are, almost entirely, grounded.
                            <a href="https://gg.gg/i2gcb">Read mode -></a>
                          </p>
                      </div>
                      

                  </article>

                <!--Music section-->
                  <article class="col-4">
                    <div class="row row-cols-1 row-cols-md-1 pt-5">
                      <div class="col-12 pt-4">
                        <nav class='navbar text-light py-2 navbar-light backgroundmusic rounded'>
                          <h1 class="">Music</h1>
                        </nav>
                        
                      </div>
                    </div>
                    <!--Music carousel-->
                    <div class="row pt-3">
                      <div id="music" class="carousel slide" >
                        <ol class="carousel-indicators spotify">
                          <li data-target="#music" data-slide-to="0" class="active bg-success"></li>
                          <li data-target="#music" data-slide-to="1" class=" bg-warning"></li>
                          <li data-target="#music" data-slide-to="2" class=" bg-danger"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">

                            <div class="card-deck ">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;">
                                  <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/7FXj7Qg3YorUxdrzvrcY25" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
                                  allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Fly Me To The Moon</h5>
                                    <p class="">Frank Sinatra</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/0QKfiqpEU4h9ycPSzIFwYe" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Maniac</h5>
                                    <p class="">Michael Sembello</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/44aTAUBF0g6sMkMNE8I5kd" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Every Little Thing She Does is Magic</h5>
                                    <p class="">The Police</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/6PvMYScgXixWYc4I0IXJoS" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">I've Got to Find The Right Woman</h5>
                                    <p class="">Redbone</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Billie Jean</h5>
                                    <p class="">Michael Jackson</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/1JO1xLtVc8mWhIoE3YaCL0" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Happy Together</h5>
                                    <p class="">The Turtles</p>
                                </div>
                              </div>
                              
                            </div>
          
                          </div>

                          <div class="carousel-item">
                            <div class="card-deck ">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/5EHtUEFJ9trrc3cNNfBfJj" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Hikariare</h5>
                                    <p class="">BURNOUT SYNDROME</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/0Pej8kaRD1KaY1qa6sMJw4" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">V.I.P.</h5>
                                    <p class="">Sid</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/7i9eRvPRqUr9QiW51hcZkl" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Button</h5>
                                    <p class="">Penguin Research</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/0d28khcov6AiegSCpG5TuT" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Feels good inc.</h5>
                                    <p class="">Gorillaz</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/1YqVJ2YSgwxWpfuENocF2t" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Hello World!</h5>
                                    <p class="">BUMP OF CHICKEN</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/0fJFBbpUxTwjhh1ScBQjeX" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Driver's seat</h5>
                                    <p class="">Sniff 'n' The Tears</p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </div>
                          
  
                          

                          <div class="carousel-item">
                            <div class="card-deck ">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/6uR92injo4PDzSrOPRFfHt" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Sugar Song to Bitter Step</h5>
                                    <p class="">UNISON SQUARE GARDEN</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/4RvWPyQ5RL0ao9LPZeSouE" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Everybody Wants to Rule The World</h5>
                                    <p class="">Tears For Fears</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/2zOAOkQD5O4jmV2pHGt1np" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Days</h5>
                                    <p class="">FLOW</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/4Vn7TykT27PIygBiZjTR2s" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Hotel California</h5>
                                    <p class="">Eagles</p>
                                </div>
                              </div>
                              
                            </div>
          
                            <br>
          
                            <div class="card-deck">
                              <div class="card mx-10  bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/4u7EnebtmKWzUH433cf5Qv" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Bohemian Rhaspody</h5>
                                    <p class="">Queen</p>
                                </div>
                              </div>
                              <div class="card mx-10 bg-success rounded">
                                <div style="max-width: 500px;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%; padding-top: 80px;"><iframe src="https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div></div>
                                <div class="card-body justify-content-center">
                                  <h6 class="card-title ">Africa</h5>
                                    <p class="">Toto</p>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<audio controls>
                      <source class="" src="https://vgmdownloads.com/soundtracks/jojo-s-bizarre-adventure-2nd-season-op/uygcwcet/01.%20BLOODY%20STREAM.mp3" type="audio/mp3">
                      
                    Your browser does not support the audio element.
                    </audio>-->
                    
                  </article>
                </div>

                <!--Label section-->
                <div class="row pt-3 pb-5">
                  <div class="col-8">
                    <nav class='navbar py-2 navbar-light backgroundnews text-light rounded '>
                      <h1 class="align-self-center">Labels</h1>
                    </nav>
                    <div id="carousellabel" class="carousel slide" >
                      <ol class="carousel-indicators labelcar">
                        <li data-target="#carousellabel" data-slide-to="0" class="active bg-primary"></li>
                        <li data-target="#carousellabel" data-slide-to="1" class="bg-info"></li>
                        <li data-target="#carousellabel" data-slide-to="2" class="bg-light"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="row pt-3 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-xs-2">

                            <div class="col">
                              <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                <div class="card-header">U.S. Labels</div>
                                <img class="card-img-top" src="https://i.imgur.com/4PDBSPn.png" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Shaq leaves NBA on TNT</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                <div class="card-header">U.S. Labels</div>
                                <img class="card-img-top" src="https://i.imgur.com/tm2thcX.png" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Coronavirus updates</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                <div class="card-header">U.S. Labels</div>
                                <img class="card-img-top" src="https://i.imgur.com/622ggUT.png" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Elon musk sends fans to hospitals</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                <div class="card-header">U.S. Labels</div>
                                <img class="card-img-top" src="https://i.imgur.com/hnyYpNF.png" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Quarantine education</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      

                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row pt-3 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-xs-2">

                            <div class="col">
                              <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">World labels</div>
                                <img class="card-img-top" src="https://conteudo.imguol.com.br/c/home/05/2020/04/19/jair-bolsonaro-1587285254694_300x168.jpg" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Bolsonaro launches quarantine project</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">World labels</div>
                                <img class="card-img-top" src="https://conteudo.imguol.com.br/c/home/e0/2020/04/01/frame-do-video-com-o-pronunciamento-de-bolsonaro-do-dia-310320-1585739481817_300x168.jpg" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Bolsonaro fails in maintaining his own quarantine project</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">World labels</div>
                                <img class="card-img-top" src="https://conteudo.imguol.com.br/c/home/78/2020/04/19/marilia-bittencourt-e-mae-de-tres-filhos-e-faz-residencia-em-enfermagem-obstetrica-em-londrina-pr-1587286390045_300x168.jpg" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>Brazil's government fails to pay medics</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">World labels</div>
                                <img class="card-img-top" src="https://maquinadoesporte.uol.com.br/media/pinheiros_nbb_pandemia.jpg" alt="Imagem de capa do card">
                                <div class="card-body">
                                <div class="card-text">
                                  <p>After Pinheiros's withdrawal, NBB team Bauru might not finish their season</p>
                                </div>  
                                </div>
                              </div>
                            </div>  
                                                      

                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row pt-3 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-xs-2">

                            <div class="col">
                              <div class="card  bg-light mb-3" style="max-width: 18rem;">
                                <div class="card-header">Publishing</div>                                
                                <div class="card-body">
                                <div class="spinner-border p-5" role="status">
                                  <span class="sr-only">Loading...</span>
                                  
                                </div>
                                <p class='pt-3'>To be published</p>
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card  bg-light mb-3" style="max-width: 18rem;">
                                <div class="card-header">Publishing</div>                                
                                <div class="card-body">
                                <div class="spinner-border p-5" role="status">
                                  <span class="sr-only">Loading...</span>
                                  
                                </div>
                                <p class='pt-3'>To be published</p>
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card  bg-light mb-3" style="max-width: 18rem;">
                                <div class="card-header">Publishing</div>                                
                                <div class="card-body">
                                <div class="spinner-border p-5" role="status">
                                  <span class="sr-only">Loading...</span>
                                  
                                </div>
                                <p class='pt-3'>To be published</p>
                                </div>
                              </div>
                            </div>  
                                                      
                            <div class="col">
                              <div class="card bg-light mb-3" style="max-width: 18rem;">
                                <div class="card-header">Publishing</div>                                
                                <div class="card-body">
                                <div class="spinner-border p-5" role="status">
                                  <span class="sr-only">Loading...</span>
                                  
                                </div>
                                <p class='pt-3'>To be published</p>
                                </div>
                              </div>
                            </div>  
                                                      

                          </div>
                        </div>
                      </div>
                      
                    </div>
                  
                  
                  
                  
                  
                  
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class='col-12'>
                        <nav class='navbar text-light py-2 navbar-light backgroundvideo rounded'>
                          <h1 class="">Videos</h1>
                        </nav>
                      </div>
                      <div class="col-12">
                        <div id="carouselvideos" class="carousel slide">
                          <ol class="carousel-indicators videocar">
                            <li data-target="#carouselvideos" data-slide-to="0" class="active bg-danger"></li>
                            <li data-target="#carouselvideos" data-slide-to="1"class="bg-light"></li>
                            <li data-target="#carouselvideos" data-slide-to="2"class="bg-danger"></li>
                            <li data-target="#carouselvideos" data-slide-to="3"class="bg-light"></li>
                            <li data-target="#carouselvideos" data-slide-to="4"class="bg-danger"></li>
                          </ol>
                          <div class="carousel-inner mt-3 rounded">
                            <div class="carousel-item active px-2">
                              <div class="video-container"><iframe width="727" height="409" src="https://www.youtube.com/embed/8m-_BQr47tA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                            <div class="carousel-item px-2">
                              <div class="video-container"><iframe width="727" height="409" src="https://www.youtube.com/embed/Peh9Yqf1GXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                            <div class="carousel-item px-2">
                              <div class="video-container"><iframe width="727" height="409" src="https://www.youtube.com/embed/2U4DAQ3kjRs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                            <div class="carousel-item px-2">
                              <div class="video-container"><iframe width="727" height="409" src="https://www.youtube.com/embed/e-V_MDVgISo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                            <div class="carousel-item px-2">
                              <div class="video-container"><iframe width="727" height="409" src="https://www.youtube.com/embed/21X5lGlDOfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <!--Footer section-->
              <footer class="border-top  border-secondary bg-terciary">
                <div class="container mt-2 bg-terciary">
                  <div class="row d-flex ">
                    <div class="col-4 d-flex justify-content-center">
                      <div class="row align-self-start">
                        <div class="col-12 mt-3 align-self-start">
                          <h3 class="text-light pb-2">About us.</h3>
                        </div>
                        <div class="col-12 mt-3 text-light align-self-start">
                          <p class="text-justify">We're a company that is maintained by a sole computer science 
                            student looking for more things to learn.
                            In an attempt to create what sought to be a simple news site, an organization was
                            brought to life and is now here to bring you and the world news from 
                            different sources and places, while still creating an identity that differentiates it
                            form other news sites. This is the Israel's, and here are our news.
                            Stay tuned for future updates!
                            <br> -IP.
                          </p>
                        </div>
                      </div>
                      
                      
                    </div>
                    <div class="col-4 d-flex justify-content-center">
                      <div class='row align-self-start'>
                        <div class="col-12 d-flex justify-content-center align-self-start">
                          <h3 class="text-light">Quick Links</h3>
                        </div>
                        <div class="col-4 mt-3">
                          <a href="">Home</a>
                          <a href="">Artists</a>
                          <a href="">News</a>
                          <a href="">Labels</a>
                          <a href="">Our Company</a>
                          <a href="">Shop</a>
                        </div>
                        <div class="col-4 mt-3">
                          <a href="">Our Crew</a>
                          <a href="">Our Dream</a>
                          <a href="">Contact</a>
                        </div>
                        <div class="col-4 mt-3">
                          <a href="">Jobs</a>
                          <a href="">Newsletter</a>
                          <a href="">Terms of Use</a>
                          <a href="">Privacy Policy</a>
                          <a href="">MySpace</a>
                          <a href="">Twitter</a>
                          <a href="">Facebook</a>
                          <a href="">Digster.fm</a>
                      </div>
                      </div>
                    </div>
                    <div class="col-4  justify-content-center mb-2">
                      <div class="row">
                        <div class="col-12">
                          <blockquote class="twitter-tweet twitter-widget-1"><p lang="en" dir="ltr">UPDATE: Hours after the Supreme Court order was posted, a notice went up saying that the Board of Equalization would host a special meeting this upcoming Monday at 3 p.m. <a href="https://t.co/IQK1SzzDIq">https://t.co/IQK1SzzDIq</a></p>&mdash; Kayla Branch (@kayla_branch) <a href="https://twitter.com/kayla_branch/status/1250937896221257730?ref_src=twsrc%5Etfw">April 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        <h3 class="text-light">Follow us on: </h3>
                        </div>
                        <div class="col-12 text-light ">
                          <a href=""><i class="fa fa-instagram px-2  fa-2x"></i></a>
                          <a href=""><i class="fa fa-whatsapp  px-2 fa-2x"></i></a>
                          <a href=""><i class="fa fa-twitter  px-2 fa-2x"></i></a>
                          <a href=""><i class="fa fa-vimeo  px-2 fa-2x"></i></a>
                          <a href=""><i class="fa fa-facebook  px-2 fa-2x"></i></a>
                          <a href=""><i class="fa fa-linkedin  px-2 fa-2x"></i></a>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="row d-flex justify-content-center text-light mt-3">
                    <div col='col-12 d-flex justify-content-center text-light '>
                      <h6 class="text-light"><i class="far fa-copyright"></i> Copyright 2020 Israel Péres. All Rights Reserved.</h6>
                      
                    </div>
                  </div>
                </div>
                
              </footer>
            </div>


        

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>