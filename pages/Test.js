import React, {useState} from "react";

function Test() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const fetchSynonym = (word) => {
    fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.synonyms); // You can log the parsed JSON data here
      setSynonyms(data.synonyms); // Assuming setSynonyms is a function to update state
    })
    .catch(error => {
      console.error('Error fetching synonyms:', error);
    });
  }
  const handleSynonym = (e) => {
    e.preventDefault();
    fetchSynonym(word);
  }
  const handleSynonymClicked = (synonym) => {
    console.log(synonym);
    setWord(synonym);
    fetchSynonym(synonym);
  }

  return (
    <div>
      <form onSubmit={handleSynonym}>
        <label>Word</label>
        <input 
        type= "text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        {synonyms.map(synonym => (
          <div value={synonym} onClick={() => handleSynonymClicked(synonym)}>
            {synonym}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;