# vue.extention.js
Provide more useful filters/directives for vue.js

##Filters
* hideString:
    * usage:
    
    ```js
    
        //html
        <li>usage of hideString: {{phoneNo}}=> {{ phoneNo|hideString 3 4 "*"}}</li>
        
        //.js
         var vm = new Vue({
                el: '#demo',
                data: {
                    phoneNo:"13312345678"
                }
            })
    
    ```
    * will render:
    <li>usage of hideString: 13312345678=&gt; 133****678</li>

* focus:
* maxStringLen:
* showTime:


##Directives
* v-toggle-event:
