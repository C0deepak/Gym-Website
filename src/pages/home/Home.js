import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
        <div className="hero-section">
          <div className="hero-heading">MY<span>FITNESS!</span></div>
          <div className="hero-sub-heading">BE FIT TO BETTER LIFE</div>
          <div className="hero-btn">JOIN US<span className='slash'></span></div>
        </div>

        <div className="about-section">
          <div className="about-heading">welcome to<br/>professional fitness<br/>and gym center</div>
          <div className="about">
            <div className="about-img"><img src="img/about.png" alt="" /></div>
            <div className="about-text">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi soluta nostrum possimus. Illum natus quidem quibusdam unde magnam ab sint nobis vero quas, iusto dolore expedita? A, tempore iure. Eligendi molestiae nulla autem doloribus dolorem debitis, natus aperiam ullam.</p>
              <div className="about-btn">BestService<span className='slash'></span></div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="ask-wrap">
            <div className="ask-section">
              <div className="ask-text">
                <h2>ask us <br/>anything</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quae, fuga non ducimus perferendis culpa rem tempore ex, rerum maiores hic accusantium incidunt odio nihil.</p>
                <div className="ask-btn">contact us<span className='slash'></span></div>
              </div>
            </div>
          </div>
          <div className="contact-extra">
            <div className="extra-inside">
              <div className="text">
                <span className="head">300+</span>
                <span className="title">Happy client</span>
              </div>
              <div className="gym">
                <div className="text">
                  <span className="head">10+</span>
                  <span className="title">Year experience</span>
                </div>
                <div className="text">
                  <span className="head">20+</span>
                  <span className="title">expert trainers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subscribe-section">
          <h2>subscription<br/>plans</h2>
          <hr/>
          <div className="subscribe-cards-section">
            <div className="subscribe-cards">
              <div className="real-head">10$/Mo.</div>
              <div className="real-card">
                <div className="top">
                  <span className='abs'>BASIC</span>
                  <h1 style={{"font-size" : "2rem", "color" : "#fff", "textTransform" : "uppercase", "paddingTop" : "1.5rem"}}>Basic</h1>
                </div>
                <div className="bottom">
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>All equipments</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Offers on Healthkart</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-xmark"></i><span>Steam Bath</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-xmark"></i><span>Expert Trainer</span>
                  </div>

                  <div className="bottom-btn">
                    <a href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribe-cards">
              <div className="real-head" style={{"font-size": "2rem"}}>25$/Mo.</div>
              <div className="prem-card">
                <div className="top">
                  <span className='abs'>ADVANC.</span>
                  <h1 style={{"font-size" : "3rem", "color" : "#fff", "textTransform" : "uppercase", "paddingTop" : "1.5rem"}}>Advance</h1>
                </div>
                <div className="bottom">

                <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>All equipments</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Offers on Healthkart</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Steam Bath</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Expert Trainer</span>
                  </div>

                  <div className="bottom-btn">
                    <a href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribe-cards">
              <div className="real-head">18$/Mo.</div>
              <div className="real-card">
                <div className="top">
                  <span className='abs'>MIDIATE</span>
                  <h1 style={{"font-size" : "2rem", "color" : "#fff", "textTransform" : "uppercase", "paddingTop" : "1.5rem"}}>Intermidiate</h1>
                </div>
                <div className="bottom">
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>All equipments</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Offers on Healthkart</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-check"></i><span>Steam Bath</span>
                  </div>
                  <div className="option">
                    <i class="fa-solid fa-circle-xmark"></i><span>Expert Trainer</span>
                  </div>

                  <div className="bottom-btn">
                    <a href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="trainer-section">
          <h2>welcome to<br/>exclusive trainers</h2>
          <hr/>
          <div className="experts">
            <div className="trainer">
              <img src="img/t1.jpg" alt="t1"/>
              <div className="t-name-bg">
                <div className="t-name">
                  tony stark
                </div>
              </div>
            </div>
            <div className="trainer">
              <img src="img/t2.jpg" alt="t1"/>
              <div className="t-name-bg">
                <div className="t-name">
                  wanda
                </div>
              </div>
            </div>
            <div className="trainer">
              <img src="img/t3.jpg" alt="t1"/>
              <div className="t-name-bg">
                <div className="t-name">
                  wolverin
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="service-section">
          <h2>Our services</h2>
          <hr/>
          <div className="services">
            <div className="service">
              the knockout workout
            </div>
            <div className="service">
              <img src="img/s1.png" alt="" />
            </div>
            <div className="service">
              the knockout workout
            </div>
            <div className="service">
              <img src="img/s1.png" alt="" />
            </div>
            <div className="service">
              the knockout workout
            </div>
            <div className="service">
              <img src="img/s1.png" alt="" />
            </div>
          </div>
        </div> */}

        <div className="client-section">
          <div className="client-wrap">
            <div className="clients">
              <img src="img/c1.png" alt="" />
              <div className="say">
                <p className='head'>client say</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae commodi minus, qui id ipsam culpa quia unde autem, aliquam tempore ea sint voluptatibus omnis beatae officia officiis quas, iure soluta a quos. Illo quos incidunt ad magni sunt enim animi?</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home