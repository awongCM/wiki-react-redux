//Mocked Wikis

export const WikiAPI = {
  wikis: [
    { id: 1, 
      title: "Google", 
      content: "Google Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam"
    },
    { id: 2, 
      title: "Facebook", 
      content: "Facebook Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam" 
    },
    { id: 3, 
      title: "Amazon",
      content: "Amazon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam" 
    },
    { id: 4, 
      title: "Apple",
      content: "Apple Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam" 
    },
    { id: 5, 
      title: "Microsoft",
      content: "Microsoft Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam" 
    }
  ],
  all: function() { return this.wikis;},
  get: function(id) {
    const foundWiki = p => p.id === id;
    return this.players.find(foundWiki);
  }
};