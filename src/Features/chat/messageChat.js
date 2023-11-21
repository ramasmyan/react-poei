const fetchMessagesFromServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/messages');
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
    }
  };
  
  export default fetchMessagesFromServer;