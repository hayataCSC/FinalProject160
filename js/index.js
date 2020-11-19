
//Define fnc to draw table
var drawTable = function(d)
{
    //Create table rows
    var rows = d3.select("#citeTable tbody")
        .selectAll("tr")
        .data(d)
        .enter()
        .append("tr")
    
    //Make country column
    rows.append("td")
        .text(function(aSource){return aSource.Country;
    })
    
    //Make variable column
    rows.append("td")
        .text(function(aSource){return aSource[1];})
    
    //Make source column
    rows.append("td")
        .text(function(aSource){return aSource[2];})
    
    //Make link column
    rows.append("td")
        .text(function(aSource){return aSource[3];})
}

//Get data
var citePromise = d3.csv("../data/sources.csv");

//When data was found...
var successfnc = function(d)
{
    //Print data
    console.log(d);
    //Draw table
    drawTable(d);
}

//When data was not found...
var failFnc = function(error)
{
    console.log(error);
}

//When data retrieval is finished...
citePromise.then(successfnc, failFnc);