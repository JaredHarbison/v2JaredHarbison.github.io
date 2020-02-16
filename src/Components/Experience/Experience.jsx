import React from 'react';
import './Experience.scss';

import Accordion from '../Accordion/Accordion';

function Experience() {
  return (
    <div id="experience" className="experience-container">
    <h1 className="experience-banner">EXPER IENCE</h1>
      <div className="scrolling-wrapper">
        <div className="card" style={{"margin-left":"10vw"}}>
          <h1><a href="https://www.dogly.com" 
               title="Check us out!"
               target="_blank" rel="noopener noreferrer">DOGLY</a></h1>
          <h2>02/2020 - PRESENT</h2>
          <p className="break"></p>  
          <Accordion 
            title="Full Stack Engineer | NYC (Remote Office)"
            content='
                <p>Writing effective APIs</p>
                <p>Troubleshooting, debugging and upgrading software.</p>
                <p>Testing software to ensure responsiveness and efficiency.</p>
                <p>Building features and applications with a mobile responsive design.</p>
                <p>Developing and managing well-functioning databases and applications</p>'
          />
          <p className="break"></p>  
          <h2 className="">Working with
            <svg className="devicon" viewBox="0 0 128 128">
              <path d="M18.922 104.532v21.468h5.476v-5.591l4.983 4.983h8.402l-6.664-6.664s4.795-.078 5.157-7.01c0-6.361-4.8-7.186-10.343-7.186h-7.011zm5.737 5.824h4.722v3.824h-4.722v-3.824z"></path>
                <path d="M48.358 104.619c-2.997-.017-7.155.261-7.155 5.911v14.92h5.62v-3.65h5.447v3.563h5.649v-15.644c0-4.907-5.452-5.1-8.373-5.1h-1.188zm-1.449 5.388h5.273v5.882h-5.273v-5.882z"></path>
                <path d="M63.55 104.632h5.815v20.537h-5.815z"></path>
                <path d="M75.454 104.905v20.537h13.995v-5.452h-8.269v-15.175l-5.726.09z"></path>
                <path d="M107.986 104.722v5.543h-9.36v1.999h3.999s6.453-.09 6.453 6.452c0 6.543-3 6.907-9.088 6.907h-7.36v-4.998h8.451c2.544 0 2.685-.829 2.685-1.551 0-.721-1.3-1.056-3.946-1.056s-7.553-1.301-7.553-6.389c0-5.089 2.545-6.998 7.633-6.998 5.088.001 8.086.091 8.086.091z"></path>
                <path d="M100.556 10.818c-9.749-4.811-19.734-5.3-29.958-1.687-9.408 3.326-16.913 9.277-22.491 17.381-9.44 13.716-16.296 28.682-20.141 44.938-1.966 8.322-3.241 16.304-2.898 24.897.028.698.131 1.653.2 1.653h48.214c-.137 0-.229-.288-.348-.593-2.536-6.475-4.545-12.891-5.933-19.705-1.995-9.784-3.039-19.541-.979-29.416 2.884-13.829 10.767-23.702 24.055-28.873 7.527-2.932 14.67-2.044 20.937 3.455.058.051.175.048.328.073l2.05-3.087c-3.946-3.758-8.282-6.69-13.036-9.036zM25.067 75.154l-9.45-.714-1.07 9.146 8.891 1.068 1.629-9.5zM33.069 47.135c-2.889-1.129-5.58-2.183-8.363-3.273-.928 2.638-1.794 5.093-2.704 7.675 2.919.936 5.668 1.817 8.524 2.731l2.543-7.133zM72.542 89.993c2.855.212 5.716.36 8.867.543-1.145-2.379-2.16-4.53-3.226-6.657-.116-.231-.51-.454-.777-.458-2.422-.035-4.847-.021-7.421-.021.579 2.1 1.084 4.035 1.674 5.945.088.288.563.624.883.648zM47.243 23.889l-6.353-4.207c-1.703 1.903-3.345 3.738-5.08 5.675l6.532 4.39 4.901-5.858zM67.477 66.515c-.009.257.222.665.446.767 2.289 1.028 4.601 2.008 7.119 3.093-.105-1.99-.176-3.654-.294-5.314-.022-.298-.163-.729-.384-.852-2.101-1.164-4.231-2.274-6.562-3.51-.128 2.129-.257 3.97-.325 5.816zM65.595 8.871l-4.35-4.936-5.989 3.113 4.356 5.307 5.983-3.484zM68.323 48.148c-.129.3.043.932.298 1.163 1.737 1.567 3.534 3.066 5.532 4.777.458-1.917.889-3.625 1.255-5.345.065-.307-.025-.813-.238-.983-1.555-1.254-3.159-2.446-4.822-3.716-.731 1.451-1.439 2.751-2.025 4.104zM78.267 6.276c2.22.062 4.443.034 6.788.034-.234-1.632-.345-2.87-.624-4.067-.083-.355-.621-.831-.982-.86-2.225-.181-4.46-.25-6.91-.367.327 1.647.576 3.099.928 4.526.076.304.518.728.8.734zM80.971 34.77c.113-.212.142-.598.023-.784-1.092-1.706-2.224-3.387-3.398-5.154l-3.803 3.491 5.259 5.827c.705-1.23 1.337-2.292 1.919-3.38zM85.071 23.168c.808 1.499 1.54 2.858 2.271 4.219 3.553-1.946 3.894-2.653 2.635-5.458l-4.906 1.239zM102.073 10.171c1.479.912 3.04 1.688 4.627 2.544l1.062-1.654-5.921-4.334c-.082.881-.206 1.499-.174 2.106.025.465.104 1.151.406 1.338zM106 21.868c-3-.351-4-.698-6-1.058v2.714c2 .173 3 .339 6 .513v-2.169z"></path>
              </svg>
            <svg className="devicon" viewBox="0 0 128 128">
              <path d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
            </svg>
            and{" "}
            <svg className="devicon" viewBox="0 0 128 128">
              <path d="M39.3 89h53.3c4.6 0 8.3-3.7 8.3-8.3v-70.4c0-4.6-3.7-8.3-8.3-8.3h-53.3c-4.6 0-8.3 3.7-8.3 8.3v70.3c0 4.7 3.7 8.4 8.3 8.4zm38.2-75h10.8s-1.8 5-7.5 12h-10.4c3.7-4 7.1-12 7.1-12zm-20.5-.4v20.7s27-10.8 27 8.2v34.5h-8.8l-.2.1v-34.8s2.3-8.3-27.8 3.4c-.1.1-.1-32.1-.1-32.1h9.9zm-10 43.6l9.9 9.9-9.9 9.9v-19.8zM35.3 102.8c-4 0-7.3.5-9.7 1.4-.9 3.2-1.3 6.6-1.3 10.4 0 7 1.2 11.3 9.2 11.3 3.7 0 6.8-1.1 9.3-2.3l-.8-3.6c-2.4.9-5.5 1.7-8.2 1.7-3.5 0-4.6-.9-4.8-6.9h15v-2.2c0-6.1-2.2-9.8-8.7-9.8zm-6.3 9.2c.1-3 .3-3.8.5-4.7 1.9-.4 4.1-.4 5.6-.4 3.3 0 3.9 2.1 3.9 5.1h-10zM13.9 102.8c-2.7 0-4.9.7-7.9 1.5v-10.3h-4v31h4v-16.6c3-1 5-1.5 7-1.5 1 0 2 .5 2 1.7v16.9l.4-.4h4.6v-15.8c0-3.8-1.8-6.5-6.1-6.5zM122 103v17.4c-3 1-5.6 1.5-7.7 1.5-1 0-2.3-.5-2.3-1.7v-17.2h-4v16.7c0 3.7 1.3 6.3 5.6 6.3 2.7 0 7.4-.4 12.4-3.5v-19.5h-4zM103.8 103h-5.4c-1.3 3-3.2 7-5.6 9h-1.8v-18h-5v31h5v-10h2.1c2.8 3 4.6 7 6 10h5.6c-2.1-4-4.5-8.4-7.7-12.4 2.6-2.7 5-5.6 6.8-9.6zM48 125h4v-16.6c2-.8 5-1.1 7-1.2v-4c-3 .2-7 .9-11 3.1v18.7zM71.4 102.8c-6.1 0-10.3 3.2-10.3 11.7 0 8 3.2 11.5 10.3 11.5 6.1 0 10.3-3.2 10.3-11.7 0-8-3.2-11.5-10.3-11.5zm0 19.2c-4 0-5.7-1.4-5.7-7.5 0-5.6 2-7.7 5.7-7.7 4 0 5.7 1.4 5.7 7.5-.1 5.6-2.1 7.7-5.7 7.7z"></path>
            </svg>
          </h2>
        </div>
        <div className="card">
          <h1>J.CREW</h1>
          <h2>08/2013 - 11/2018</h2>
          <p className="break"></p>  
          <Accordion 
            title="Store Director | NYC Columbus Circle | 05/16 - 11/18"
            content='
                <p>Frequently achieved #1 increase to plan & last year sales in the NYC region through 2018.</p>
                <p>Successfully launched full Madewell store within J.Crew store, first of the kind within umbrella brand.</p>
                <p>Improved morale through team-made satisfaction surveys, increasing score by 20% in 1 yr.</p>
                <p>Increased sales trajectory through fitting room service & higher units per transaction.</p>
                <p>Leader in company for credit card sign-up, growing from -30% last year Q2’16 to +60% last year Q3’16.</p>'
          />
          <p className="break"></p>
          <Accordion 
            title="Assoc. Store Manager | NYC Columbus Circle | 06/'15 - 05/'16"
            content='
                <p>Scheduled processes & associates in store at a +90% efficiency score within Dayforce HCM.</p>
                <p>Participated in assessment of SASS products and feedback to providers.</p>
                <p>Increased stylist sales by 25% through more consistent and effective relationships with clients.</p>'
          />
          <p className="break"></p>
          <Accordion 
            title="Store Director | Arlington, VA | 11/'14 - 06/'15"
            content='
                <p>Improved systems service, raising variance to plan from -18% Q3’14 to +1% Q4’14.</p>
                <p>Provided initial training for store directors within the DC MD VA market.</p>
                <p>Recruited, hired, and developed an HR assistant manager into a market training role.</p>
                <p>Asked to partake in rewriting company-wide training materials with the home office in NYC.</p>'
          />
          <p className="break"></p>
          <Accordion 
            title="Store Director | Washington, DC | 11/'13 - 11/'14"
            content='
                <p>Maintained company-wide #1 visitor to customer conversion for full year at rate above 25%.</p>
                <p>Surpassed sales goals for 3 quarters topping out at rate of +15% to the previous year.</p>
                <p>Recognized as #1 in customer service in SE region for Q3’14 through exceptional service.</p>
                <p>Achieved mid-year shrink goals through exceptional associate customer service skills.</p>
                <p>Asked to train and coach managers within the market during rollouts of new SASS products.</p>'
          />
          <p className="break"></p>
          <Accordion 
            title="Assoc. Store Manager | Washington, DC | 06/'15 - 05/'16"
            content='
                <p>Provided initial training for managers in region & provided follow-up plans to directors.</p>
                <p>Chosen to take leading operations role in openings & relocations within the DC MD VA market.</p>'
          />
        </div>
        <div className="card">
          <h1>URBN, Inc.</h1>
          <h2>07/2001 - 6/2013</h2>
          <p className="break"></p>
          <Accordion
            title="General Manager | Urban Outfitters | Washington, DC - Georgetown| 11/'12 - 6/'13"
            content='
              <p>Managed 12 million dollar flagship location, within the top five volume stores of the company.</p>
              <p>Hosted company-wide quarterly visual prototype process with store-opening level shipments.</p>
              <p>Implemented web-based communication tools to engage a team of up to 100.</p>'
          />
          <p className="break"></p>  
          <Accordion
            title="Store Manager | Anthropologie | Multiple DC & MD Locations | 11/'09 - 11/'12"
            content="
              <p>Mentored & developed 6 managers into store management level positions across market.</p>
              <p>Developed community ties through local businesses, media sources, and non-profit groups.</p>
              <p>Held store opening event for 300 customers, driving $30,000 in 2 hrs, with a $1,500 budget.</p>
              <p>Assisted District Manager guiding other store managers for large-scale objectives.</p>
              <p>Monitored opening process from turnover to opening for experimental accessories boutique.</p>
              <p>Achieved record-breaking sales while relocating a store in the Q4'09 after 15 years of business.</p>"
          />
          <p className="break"></p>  
          <Accordion
            title="People & Operations Manager | Anthropologie | Locations Nationwide | 07/'08 - 11/'09"
            content='
              <p>Earned investment from part time staff by encouraging ownership over areas of business.</p>
              <p>Improved average loss prevention audit scores by 8/100 points in high theft environment.</p>
              <p>Scheduled processes & employees of a 10mil location to achieve payroll targets.</p>'
          />
          <p className="break"></p>  
          <Accordion
            title="Senior Merchandiser | Urban Outfitters"
            title2="Locations Nationwide | 07/'01 - 07/'08"
            content="
              <p>Managed men’s department visual prototype for Back to School in San Francisco for 3 years.</p>
              <p>Shortened men’s merchandising store opening process by 40% over 12 store openings.</p>
              <p>Highlighted in internal documents for innovative web & catalog aligned merchandise displays.</p>
              <p>Consistently highlighted for merchandising & display across all departments from home stores.</p>
              <p>Managed district workshops to complete seasonal set-ups in 50% of average time.</p>
              <p>Prototyped integration of clothing & home goods for Spring visual prototype in Santa Monica.</p>
              <p>Part of a leadership team who grew a new business from 4mil to 10mil in 4 years.</p>"
          />
          <p className="break"></p>
        </div>
      </div>
    </div>
  );
}

export default Experience;