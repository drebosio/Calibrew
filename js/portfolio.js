$(function(){
 
        $("#elastic_grid").elastic_grid({
            'items' :
            [
                {
                    'title'         : 'google',
                    'description'   : ' Description text here',
                    'thumbnail'     : ['img/small/1.jpg', 'img/small/2.jpg'],
                    'large'         : ['img/large/1.jpg', 'img/large/2.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://google.com/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['Portait']
                },
                {
                    'title'         : 'espn',
                    'description'   : 'Description text here',
                    'thumbnail'     : ['img/small/4.jpg', 'img/small/5.jpg'],
                    'large'         : ['img/large/4.jpg', 'img/large/5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://espn.com/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'facebook',
                    'description'   : 'Description text here',
                    'thumbnail'     : ['img/small/15.jpg', 'img/small/2.jpg'],
                    'large'         : ['img/large/15.jpg', 'img/large/2.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://facebook.com/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['BW']
                }
            ]
        });
    });
