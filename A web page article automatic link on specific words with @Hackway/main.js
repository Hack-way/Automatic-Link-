    // The JavaScript code to automatically link specific words
    // Define an object containing the words to be linked
    const wordsToLink = {
        "@search.linklinkgo.com": "https://search.linklinkgo.com",
        "@hacking": "https://www.youtube.com/channel/UCpOAe47k4uLjemSBTiAEk2g?sub_confirmation=1",
        "@educational": "https://www.youtube.com/channel/UCpOAe47k4uLjemSBTiAEk2g?sub_confirmation=1",
        "@Ethical": "https://www.youtube.com/channel/UCpOAe47k4uLjemSBTiAEk2g?sub_confirmation=1",
        "about": "www.youtube.com/@Hackway",
      };
      
      // Loop through each paragraph in the article
      const paragraphs = document.getElementsByTagName("p");
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        
        // Loop through each word in the paragraph
        const words = paragraph.innerHTML.split(" ");
        for (let j = 0; j < words.length; j++) {
          const word = words[j];
          
          // Check if the word is in the object of words to be linked
          if (word in wordsToLink) {
            // If so, replace the word with a link
            const link = "<a href='" + wordsToLink[word] + "' rel='' target='_blank'>" + word + "</a>";
            words[j] = link;
          }
        }
         
        // Replace the paragraph's innerHTML with the modified text
        paragraph.innerHTML = words.join(" ");
      }