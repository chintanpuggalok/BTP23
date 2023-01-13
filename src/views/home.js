import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CDVCI BTP23</title>
        <meta property="og:title" content="CDVCI" />
      </Helmet>
      <section className="home-hero">
        <Menu rootClassName="menu-root-class-name4"></Menu>
        <header className="home-header">
          <h1 className="home-text">
            <span>
              Cytokines &amp; Receptors
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Database</span>
          </h1>
          <p className="home-text04">
            <span>
              To Compile A Database Of All The Cytokines And Receptors Related
              To Viral Infectious Illnesses And Cancer.
            </span>
            <br></br>
            <span>
              Additionally, To Do An Analysis Of The Data, Come To Some
              Conclusions, And Identify Any Connections Between The Various
              Viral Infections And Cancer.
            </span>
          </p>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/playground_assets/screenshot%202023-01-12%20at%205.24.09%20pm-1000h.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text08">
            <span>OBJECTIVES</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container1">
            <div className="home-schedule card">
              <span className="home-text11">
                <span>1</span>
                <br></br>
                <br></br>
                <span>
                  Examining the widespread and emerging cancers and viral
                  diseases.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-publish card">
              <span className="home-text17">
                <span>2</span>
                <br></br>
                <br></br>
                <span>
                  Gathering research materials to investigate the role and
                  impact of cytokines involved in the selected group of
                  infections.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container2">
            <div className="home-analyze card">
              <span className="home-text23">
                <span>3</span>
                <br></br>
                <br></br>
                <span>
                  Analyzing the data gathered and investigating relationships
                  among the cytokines most frequently associated with infection.
                </span>
              </span>
            </div>
            <div className="home-get-leads card">
              <span className="home-text28">
                <span>4</span>
                <br></br>
                <br></br>
                <span>
                  To present the data through a user-friendly website for all
                  the information gathered.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container3">
          <div className="home-active-users metrics">
            <span className="home-text33">1600+</span>
            <span className="home-text34">— Research Papers</span>
          </div>
          <div className="home-active-users1 metrics">
            <span className="home-text35">164+</span>
            <span className="home-text36">
              <span>— Cytokines</span>
              <br></br>
            </span>
          </div>
          <div className="home-active-users2 metrics">
            <span className="home-text39">54+</span>
            <span className="home-text40">
              <span>
                — Cancer
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-active-users3 metrics">
            <span className="home-text43">73+</span>
            <span className="home-text44">
              <span>
                — Viral Infection
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container4">
            <div className="home-left">
              <span className="home-text47 title">
                <span>Review of literature</span>
                <br></br>
              </span>
              <span className="home-text50">
                <span>
                  We gathered 1600 papers for 40 infections including :
                </span>
                <br></br>
                <br></br>
                <span>20 cancers and</span>
                <br></br>
                <span>20 viral infections</span>
                <br></br>
                <br></br>
                <span>
                  A total of 80 keywords were used for collecting 20 papers each
                  contributing to a total of 1600 papers.
                </span>
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/playground_assets/review%20of%20literature-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/playground_assets/exploratory%20data%20analysis-1200w.png"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right">
              <h2 className="home-text60 title">
                <span>Exploratory Data</span>
                <br></br>
                <span>Analysis</span>
              </h2>
              <div className="home-category">
                <span className="home-text64">Extraction</span>
                <span className="home-text65">
                  We collected the cytokines involved in individual viral and
                  cancer infections after reading all the research material
                  acquired.
                </span>
              </div>
              <div className="home-category1">
                <span className="home-text66">
                  <span>Transformation</span>
                  <br></br>
                </span>
                <span className="home-text69">
                  This involves storing the data in excel sheets, so that it can
                  be used for converting to CSV format later.
                </span>
              </div>
              <div className="home-category2">
                <span className="home-text70">
                  <span>Loading</span>
                  <br></br>
                </span>
                <span className="home-text73">
                  <span>
                    We loaded all the gathered data into spreadsheets to make a
                    final database.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container5">
            <div className="home-left1">
              <h2 className="home-text76 title">
                <span>Common Cytokines Between Cancer And Viral Diseases</span>
                <br></br>
              </h2>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/playground_assets/common%20cytokines-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading">
            <span className="home-text79 title">
              <span>Cytokine Database of Viral and Cancer infection</span>
              <br></br>
              <span>Database Access</span>
            </span>
            <Link to="/database" className="home-navlink">
              <div className="home-get-started template-button">
                <span className="home-text83">
                  <span>Access</span>
                  <br></br>
                </span>
              </div>
            </Link>
          </div>
          <div className="home-images"></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
