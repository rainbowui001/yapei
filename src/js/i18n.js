      // use plugins and options as needed, for options, detail see
      // http://i18next.com/docs/
      i18next.init({
        lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
          zh: {
            translation: {
              input: {
                placeholder: "a placeholder"
              },
              nav: {
                home: '家',
                page1: 'Page One',
                page2: 'Page Two'
              }
            }
          },
          en: {
            translation: {
              input: {
                placeholder: "a placeholder"
              },
              nav: {
                home: 'Home',
                page1: 'Page One',
                page2: 'Page Two'
              }
            }
          },
        }
      }, function(err, t) {
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $);
        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $('.static_content').localize();
      });

$(document).ready(function(){
  var languages = ["<ul>"];
  $.each(['zh','en'],function(index,value){
      languages.push("<li class="+value+">"+value+"</li>");


  })
  languages.push("</ul>");
  $(".right_content").find(".title").html(languages.join(""));
  $(".right_content").find(".title").find("ul li").bind("click",function(){
     i18next.changeLanguage($(this).attr("class"), (err, t) => {
         $('.static_content').localize();
      });
  });
});