.then(responseJSON => responseJSON.filter(r => {for(var i=0; i < dataValues.length; i++) {return r[dataValues[i]]}}))
