const fetchMessagesFromServer = async () => {
    try {
      const response = await fetch('http://62.72.18.39:3000/messages');
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
    }
  };
  
  export default fetchMessagesFromServer;