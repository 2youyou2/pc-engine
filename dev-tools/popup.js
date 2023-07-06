// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function createScriptWithUrl (url) {
    return `
    (function(){
      var a=document.createElement('script');
      a.src='${url}';
      document.head.appendChild(a);
    })();
    `;
  }
  function createScriptWithContent (content) {
    return `
    (function(){
      var a=document.createElement('script');
      a.innerHTML=\`${content}\`;
      document.head.appendChild(a);
    })();
    `;
  }
  
  // Search the bookmarks when entering the search keyword.
  $(function () {
    // Handler when the DOM is fully loaded

    var injectorUrls = ['playcanvas-extras.js', 'save-file.js', 'my.js']
    // injectorUrls.forEach(url => {
    //     url = chrome.runtime.getURL(url)
    //     chrome.tabs.executeScript({ code: createScriptWithUrl(url) })
    // })

    function createMethod (name) {
      var ele = document.getElementById(name);
      ele.onclick = function () {
        chrome.tabs.executeScript({
          code: createScriptWithContent(`
          console.log("register window.onCocosSyncLoaded"); 
          window.onCocosSyncLoaded = function () {
            window.CocosSync && window.CocosSync.${name}()
          }
        `)
        })
  
        // chrome.tabs.executeScript({ code: createScriptWithUrl(injectorUrl) })
        injectorUrls.forEach(url => {
            url = chrome.runtime.getURL(url)
            chrome.tabs.executeScript({ code: createScriptWithUrl(url) })
        })
      };
    }
  
    createMethod('exportWorld')
    createMethod('exportSelected')
  
  });