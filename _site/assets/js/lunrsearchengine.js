
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": " 404  Page not found: "
    }, {
    "id": 1,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                                    About Me:       I'm a Computer Science PhD researcher at the Hasso Plattner Institute   Research School at the University of Cape Town, funded by the Hasso Plattner Institute for Digital Engineering. I am broadly interested in   Artificial Intelligence for Development (AI4D), with my research focus being agent-based computing and machine learning for healthcare in Africa.    My research is conducted within the Adaptive and Cognitive Systems Lab, part of South   Africa's Centre for Artificial Intelligence Research (CAIR) network. I'm supervised by Prof. Deshen Moodley.    Prior to this, I graduated with Distinction from the University of Manchester, where I   earned an MSc in Advanced Computer Science with a specialization in AI. I did my dissertation in deep learning and human-robot interaction at the   Cognitive Robotics Lab, supervised by Prof. Angelo Cangelosi. I was a   Chevening Scholar, funded by the UK Government's Foreign, Commonwealth and Development Office.    I was born and raised in Nairobi, Kenya. I spent the first few years of my career working as a software engineer, and also had a brief stint in   technology consulting. I enjoy speaking, presenting, and writing about technology, as well as mentorship and outreach in the field. I am currently mentoring   Computer Science undergraduate students as part of the KamiLimu mentorship program. I have been a contributing technical   writer at Scotch. io and RealPython. com, where I have written programming tutorials on Python and its web frameworks. I have also been active with   Django Girls, and have volunteered as a coach for workshops in Nairobi, Mombasa, and Manchester.    You can reach me by email at [my_first_name] . [my_last_name] @ gmail . com.                   Honours &amp; Awards:       November 2020: Awarded a PhD Scholarship by the Hasso Plattner Institute for Digital Engineering through the HPI      Research School at UCT.        May 2019: Awarded a scholarship to attend the Grace Hopper Celebration (GHC), the world's largest gathering of      women technologists, in Orlando, Florida.        March 2019: Accepted from over 1,200 applications and funded to attend the Deep Learning and Reinforcement Learning Summer      School in Alberta, Canada. Unfortunately, I couldn't attend due to a delayed issuance of my visa :(        October 2018: Selected to attend QuantumBlack's Women as Tech Leaders Day in London.              July 2018: Awarded a Chevening Scholarship for my master's degree. Chevening is the UK government’s international      awards programme aimed at developing global leaders.                     Media &amp; Outreach:       Since March 2020: Currently volunteering as a mentor with KamiLimu, a structured mentorship program for Computer      Science students at Kenyan universities. This includes speaking on panels as well as one-on-one mentorship with students.        March 2020: Selected as a Machine Learning Engineer with Omdena AI as part of the AI Pandemic Response Challenge,      which ran from March to May 2020.        February 2019: Coach at Django Girls Manchester at Code Nation.        September 2017: Co-organiser at Django Girls Nairobi, which was co-located with PyConKE at United States International      University (USIU).        May 2017: Had a media tour with Andela, speaking about technology in Africa and the future of work. I was interviewed on Cheddar,      a news network, live from the New York Stock Exchange, and was a speaker at the ASU + GSV Summit in mbithet lake City, Utah, as well      as the Propelify Festival in Hoboken, New Jersey.        February 2017: Coach at Django Girls Mombasa at Swahilipot Hub.        September 2016: Co-organiser and coach at Django Girls Nairobi, hosted by Andela.          "
    }, {
    "id": 2,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, ];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});