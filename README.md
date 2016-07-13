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
    * description:
        * In Vue,there is no built-in binding like "v-blur" or "v-focus",so i make one.
        * it **should** only be used with \<input\> tag.
    * usage:
    
        ```html
          
              //html
              <li><input v-focus="hasFocus" type="text" style="width:50px;" value="blur me!"> HasFocus: {{hasFocus}}</li>
              
              //.js
               var vm = new Vue({
                      el: '#demo',
                      data: {
                          hasFocus:false
                      }
                  })
          
          ```

* maxStringLen:
    * description:
        * in project,we always need to limit string's length,this filter can help you do this easily
    * usage:
        
    ```js
    
        //html
        <li>usage of maxStringLen: {{longString}}=> {{ longString|maxStringLen 12 "..."}}</li>
        
        //.js
         var vm = new Vue({
                el: '#demo',
                data: {
                    longString:"i am a long long string!"
                }
            })
    
    ```
    
    * will render:
    <li>usage of maxStringLen: i am a long long string!=&gt; i am a long ...</li>
* showTime:


##Directives
* v-toggle-event:
