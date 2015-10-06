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

        if(str.search(".") != -1)
        {
          return str.substring(str.lastIndexOf(".")+1,str.length);
        }
        else {
          return false;
        }
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array
        var big=0;
        for (var i = 0; i < arr.length-1; i++)
        {
          if (arr[i].length > arr[i+1].length && arr[i].length>=arr[big].length)
          {
            big=i;
          }
        }
        if(arr[big].length < arr[arr.length-1])
          {
            big=arr.length-1;
          }

        return arr[big];
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
