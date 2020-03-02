$(function(){

    var $mainMenuitems = $('#main-menu ul').children('li'),
        totalMenuitems = $mainMenuitems.length,
        openedIndex = 2, // Menu fermé 
        init = function(){
            bindEvents();

            if (validIndex(openedIndex))
            {
                animateItem($mainMenuitems.eq(openedIndex),true,500);
            }
        };

        bindEvents = function(){
            $mainMenuitems.children('.images').click(function(){
                var newIndex = $(this).parent().index(), // l'élément sur lequels je click
                $item = $mainMenuitems.eq(newIndex);
                if(openedIndex == newIndex)
                {
                    animateItem($item,false,100);
                    openedIndex = -1;
                }
                else 
                {
                    if(validIndex(newIndex))
                    {
                        animateItem($mainMenuitems.eq(openedIndex),false,100);
                        openedIndex = newIndex;
                        animateItem($item,true,100);
                    }
                }
                    
            });

            $('.button').hover(
            function(){
                $(this).addClass('.hovered');
            },
            function(){
                $(this).removeClass('.hovered');
            });

            $('.button').click(function(){
                var newIndex = $(this).index();
                $item = $mainMenuitems.eq(newIndex);
                if(openedIndex == newIndex)
                {
                    animateItem($item,false,100);
                    openedIndex = -1;
                }
                else 
                {
                    if(validIndex(newIndex))
                    {
                        animateItem($mainMenuitems.eq(openedIndex),false,100);
                        openedIndex = newIndex;
                        animateItem($item,true,100);
                    }
                }
            });
        }

        validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMenuitems);

        },

        animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find('.color');
        itemParam = toOpen ? {width:'420px'}: {width:'140px'} // Expression ? (Si vrai) Valeur1: (Si fausse) Valeur2
        colorImageParam = toOpen ?{left:'0px'}: {left:'140px'}

        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);  
    };
    init();

});
