/*
* JQueryString - v1.0 - 2013-05-21
* https://github.com/diggramirez/jquerystring
* Copyright (c) 2013 Elvin Rodas
* Licensed MIT (https://github.com/diggramirez/jquerystring/LICENSE.md)
*/

/*
@key required
@url optional, allow to pass string as url and get the specified key
*/
function jquerystring( key, url )
{
  if ( !url )
    url = window.location.search.substring(1);
  else if (url.indexOf('?'))
    url = url.substring(url.indexOf('?')+1);

  url = url.split('&');
  for (var i = 0; i < url.length; i++) 
  {
    var keyvalue = url[i].split('=');
    if (keyvalue[0] == key) 
    {
      return keyvalue[1];
    }
  }
  return null;
}