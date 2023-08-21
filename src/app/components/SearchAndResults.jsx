"use client"
import { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios";



const SearchAndResults = () => {
    const [links, setLinks] = useState([]);
    const [input, setInput] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [copiedStates, setCopiedStates] = useState(new Array(links.length).fill(false));
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const savedLinks = localStorage.getItem('links');
        if (savedLinks) {
            setLinks(JSON.parse(savedLinks));
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage(null);

        if (input) {
            const encodedParams = new URLSearchParams();
            encodedParams.set('url', input);

            const options = {
                method: 'POST',
                url: 'https://url-shortener-service.p.rapidapi.com/shorten',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': 'a5c72d4a80msh32cbc294ccaf69dp10ca54jsn5abeed0641e1',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                data: encodedParams,
            };

            try {
                const response = await axios.request(options);

                if (response.data && response.data.result_url) {
                    const newLinks = [...links, { original: input, shortened: response.data.result_url }];
                    setLinks(newLinks);
        
                    // Save the updated links to localStorage, but ensure we're on the client side
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('links', JSON.stringify(newLinks));
                    }
                } else {
                    // If there's an error in the response data, update the error message
                    setErrorMessage("Invalid link or something went wrong. Please try again.");
                }
    
            } catch (error) {
                // If there's an exception thrown, also set an error message
                setErrorMessage("An error occurred while shortening the link. Please try again.");
                console.error(error);
            }
        }
    }
    
    const handleCopy = (index) => {
        const newCopiedStates = [...copiedStates];
        newCopiedStates[index] = true;
        setCopiedStates(newCopiedStates);
    }
    
    function clearAllLinks() {
        setLinks([]);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('links');
        }
    }
    



    return (
        <section>
            <form onSubmit={handleSubmit} className="mx-8 -mt-8 md:-mt-4 bg-midnight-blue rounded-lg flex gap-4 flex-col transform translate-y-1/2 md:flex-row py-8 md:w-5/6 md:mx-auto">
                <input 
                    className="mx-4 p-2 rounded-md md:w-4/5"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Shorten a link here..."
                />
                <button className="text-white py-2 mx-4 bg-turquoise rounded-lg md:w-1/6"
                    type="submit"
                >
                    Shorten It!
                </button>
            </form>
            <div className="bg-pale-lilac w-full pb-8">
                <div className="px-8 pt-24 md:px-32 md:pt-16">
                    {errorMessage && <div className="text-red-500 mt-2 mb-4 text-center">{errorMessage}</div>}
                </div>
                <ul className="px-8 md:px-0 md:w-5/6 md:mx-auto flex flex-col gap-4">
                    {links.map((linkObj, index) => (
                    <li className="w-full flex flex-col gap-2 md:flex-row md:justify-between bg-white px-4 py-2 rounded-lg" key={index}>
                        <span className="truncate w-96 md:w-[32rem] lg:w-[48rem] ">{linkObj.original}</span>
                        <hr className="md:hidden"></hr>
                        <div className="flex flex-col md:flex-row gap-4 md:items-center">
                            <span className="text-turquoise">{linkObj.shortened}</span>
                            <CopyToClipboard 
                                text={linkObj.shortened}
                                onCopy={() => handleCopy(index)}
                            >
                                <button className={`${copiedStates[index] ? 'bg-midnight-blue' : 'bg-turquoise'} text-white py-1 px-4 rounded-lg`}>
                                    {copiedStates[index] ? "Copied!" : "Copy"}
                                </button>
                            </CopyToClipboard>                       
                        </div>
                    </li>
                    ))}
                </ul>
                {links[0] && 
                <div className="w-64 my-4 mx-auto text-center">
                    <button onClick={clearAllLinks} className='text-white py-1 px-4 rounded-lg bg-midnight-blue'>Clear All Links</button>
                </div>}
            </div>
        </section>
        
    )
}

export default SearchAndResults;
