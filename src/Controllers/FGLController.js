const rp = require('request-promise');
const $ = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const leaderboardurl = 'http://www.fglweb.com/fglpool01i.php?ifid=942';
const survivorurl = 'http://www.fglweb.com/fglrptownerpickdetaili.php?ifid=942';

exports.getleaderboard = (n) => { 
    rp(leaderboardurl)
    .then(function(html){
      //success!
      var result = $('table', html)[3];
      var rows = $(result).find("tr")
      //console.log($('script', html));
      var namelist = [];
  
    
      cheerioTableparser($);
  
      var data = $(result).parsetable(true, true, true);


      let totalRows = Math.min(2 + n,data[0].length);
      for (let i = 2; i < totalRows ; i++) {
            
              // each row is represented in each list. Each list is a column
  
                  
                  var rowtext = data[1][i];
                  //console.log(data[0][i]);
  
                  var teamobj = {
                      id: i,
                      name : rowtext,
                      YTDearnings : data[2][i]
                  };       
  
            namelist.push(teamobj);
                 
        
      }

      console.log(namelist.length);
  
        return namelist
      //console.log();
      //console.log(namelist[1]);
  
    })
    .catch(function(err){
     return null;
    });


};

exports.getSurvivors = (req, res) => { 
  rp(survivorurl)
  .then(function(html){
    //success!
    var result = $('table', html)[2];
    cheerioTableparser($);
    var resultlist = [];
    var data = $(result).parsetable(true, true, true);
    var dataHTML = $(result).parsetable(true, true, false);

    //console.log(data[1][2]);

    var weeklist = [];

    for (let i = 3; i < 34; i++) {

       if(data[1][i] != undefined && !data[1][i].includes("(D)"))
        {
          console.log(parseInt(data[0][i]))
          weeklist.push(data[0][i]);
          
        }
    }

    var weekindexList = [];

    var initialcount = data[0].filter(function(x){return x=="1"}).length;

    var initalObj = {
      week: 'Initial',
      AliveCount: initialcount,
      AliveTeams : []
    }
    
    
    
    dataHTML[0].forEach(function(item){

      if(item.includes("Team:"))
      {
      let teamname = item;
      var formattedteamname = teamname.substring(teamname.indexOf("<b>")+3,teamname.indexOf("<br>"));
      formattedteamname += "(" + teamname.substring(teamname.indexOf("<br>")+4,teamname.indexOf("</font>")-4) + ")";
      initalObj.AliveTeams.push(formattedteamname);
      }

    });
    
  

    resultlist.push(initalObj)
    
      for (let i = 0; i < weeklist.length; i++)
      {
        let week = weeklist[i];

        let weekobj = {
          week : week,
          AliveTeams: []
        }

        let aliveCount = 0;

        for (let j = 0; j < data[0].length; j++)
        {

            if(data[0][j] == week)
            {
              if(data[2][j].includes("$"))
              {
                let nameset = false;
                let namesetIndex = 0;
                let TeamName = "";
                while(!nameset)                 
                  {
                    if(data[0][j-namesetIndex] == "1")
                    {
                      nameset = true;
                      let teamname = dataHTML[0][j-namesetIndex-2];
                      var formattedteamname = teamname.substring(teamname.indexOf("<b>")+3,teamname.indexOf("<br>"));
                      formattedteamname += "(" + teamname.substring(teamname.indexOf("<br>")+4,teamname.indexOf("</font>")-4) + ")";
                      weekobj.AliveTeams.push(formattedteamname);
                    }
                    else{
                      namesetIndex--
                    }
                    
                  }
                
                  aliveCount++

              }
              

            }


        }

        weekobj.AliveCount = aliveCount;

        resultlist.push(weekobj);

      }




    /*resultlist = [
      {
        week: 1,
        AliveCount:50
      },
      {
        week: 2,
        AliveCount:49
      }
      ,
      {
        week: 3,
        AliveCount:40
      }
      ,
      {
        week: 4,
        AliveCount:33
      }
      ,
      {
        week: 5,
        AliveCount:16
      }

    ];*/


    var jsonresponse = JSON.stringify(resultlist);
    res.json(jsonresponse);

    
  })
  .catch(function(err){
    console.log(err);
    res.send(err);
  });

};


//exports.getSurvivors();