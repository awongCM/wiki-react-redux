//Mocked Wikis

const WikiAPI = {
  wikis: [
    { id: 1, 
      title: "Google", 
      content: "Google Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam",
      tags: ['science', 'arts']
    },
    { id: 2, 
      title: "Facebook", 
      content: "Facebook Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam", 
      tags: ['science', 'arts']
    },
    { id: 3, 
      title: "Amazon",
      content: "Amazon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam",
      tags: ['commerce', 'economics']
    },
    { id: 4, 
      title: "Apple",
      content: "Apple Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam", 
      tags: ['science', 'fantasy']
    },
    { id: 5, 
      title: "Microsoft",
      content: "Microsoft Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius quam", 
      tags: ['science', 'fantasy']
    }
  ],
  all: function() { 
    return this.wikis;
  },
  get: function(id) {
    const foundWiki = w => w.id === id;
    return this.wikis.find(foundWiki);
  },
  getTags: function () {
    let tags = [], self = this;

    for (var i = 0; i < this.wikis.length; i++) {
      tags = tags.concat(self.wikis[i].tags);
    }
    
    //only unique tags
    return tags.filter( (item, i) => tags.indexOf(item) === i );
  },

  getTagCount: function() {
    return this.getTags().length;
  }
};

export default WikiAPI;