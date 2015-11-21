(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        // Return true if it's even, and false if it isn't.
          return i % 2 === 0;
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
        var index = str.lastIndexOf(".");

        if(index != -1)
        {
          return str.substring(index+1,str.length);
        }
        else {
          return false;
        }
    };

    JS_BASICS.longestString = function(arr) {
      // arr will be an array.
      // Return the longest string in the array
      //////////////////////////////////////////////////////////::The lol thing didn't confuse me
      var big=0;
      var arr1=[];
      var j=0;
      for (var i = 0; i < arr.length; i++)
      {
        if (typeof arr[i]==='string')
        {
        arr1[j]=arr[i];
        j++;
        }
      }
      for (i = 0; i < arr1.length-1; i++)
      {

        if (arr1[i].length > arr1[i+1].length && arr1[i].length >= arr1[big].length)
        {
          big=i;
        }
        else if (arr1[i+1].length >= arr1[big].length)
        {
        big=i+1;
        }
        else
        {
        big=big;
        }

      }
        return arr1[big];
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
        var tab='';

        for (var i = str.length-1 ; i>=0 ; i--)

            {
              tab=tab.concat(str[i]);

            }
            return tab;

    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
        var tab=JS_BASICS.reverseString(str);
        var tab2 =tab.toLowerCase();

        if (tab2.localeCompare(str.toLowerCase()) ==0)
        {
        return true;
        }
        else {
          return false;
        }

    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
