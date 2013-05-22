jquerystring
============

URL parameter getter

Get easy the value of a parameter from querystring with one function.<br/>
<b>jquerystring(key, [url])</b><br/>
where url is option, if it's not specified, the default url is taken from the address bar.

exemple:
<pre><code>var the_url = "www.url.com?param1=kalsjgwoi234kljgwoegwie";
var the_value = jquerystring("param1", the_url);

document.write(the_value);
</code></pre>
will show :<br/>
kalsjgwoi234kljgwoegwie
