import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/middle.css";
import axios from 'axios';


const Middle = () => {


const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [clicks, setClicks] = useState(0);


  const makeAuthenticatedPOSTRequest = async (url) => {
    try {
      const response = await fetch("http://localhost:3001/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const formattedResponse = await response.json();
      console.log(formattedResponse.shortUrl);

      return formattedResponse;
    } catch (error) {
      console.error("Error making POST request:", error.message);
      throw error;
    }
  };

  const handleCopyClick = () => {
    // Combine "localhost:3001/" with the shortUrl
    const fullUrl = `localhost:3001/${shortUrl}`;
  
    // Create a textarea element to hold the text to be copied
    const textarea = document.createElement('textarea');
    textarea.value = fullUrl;
  
    // Append the textarea to the document
    document.body.appendChild(textarea);
  
    // Select the text inside the textarea
    textarea.select();
  
    try {
      // Copy the selected text to the clipboard
      document.execCommand('copy');
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Unable to copy URL to clipboard', err);
    } finally {
      // Remove the textarea from the document
      document.body.removeChild(textarea);
    }
  };

  return (
    <main className="middle">
      <section className="middle__searchBox">
       <input
          value={originalUrl}
          onInput={(e) => setOriginalUrl(e.target.value)}
          
          type="text"
          name=""
          placeholder="Shorten a link here..."
        id="searchBar"
        />
        <button type="button"  onClick={async () => {
            try {
              const shortenedUrl = await makeAuthenticatedPOSTRequest(originalUrl);
              setShortUrl(shortenedUrl.shortUrl);
              setClicks(shortenedUrl.clicks);
            } catch (error) {
              alert("Error shortening URL");
            }
          }}>   Shorten It!
        </button>
      </section>

<div className="short-url-container">
      <div className="url-copy-clicks">
      <div className="short-url"><b>localhost:3001/{shortUrl}</b>

        <button className="copy-button" onClick={handleCopyClick}>
          Copy URL
        </button>
        </div>
        <div className="clicks"><b>Clicks: {clicks}</b></div>
      </div>
      </div>


      <section   id="middle__CenteredText" className="middle__CenteredText">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <section id="middle__boxArea" className="middle__boxArea">
        <section className="middle__boxArea__box1">
          <div> </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </section>

        <section className="middle__boxArea__box2">
          <div></div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </section>
        <section className="middle__boxArea__box3">
          <div></div>
          <h3>Fully Customizable</h3>
          <p>
            {" "}
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </section>
        <hr />
      </section>
    </main>
  );
};

export default Middle;