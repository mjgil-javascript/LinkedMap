/**    
*  Copyright (c) 2018, Malcom Gilbert    
*  All rights reserved.    
*    
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.LinkedMap = {})));
}(this, function (exports) { 'use strict';

  function LinkedMap(test) {
      if (!(this instanceof LinkedMap)) {
        return new LinkedMap(test)
      }
      this.test = test;
    }

    LinkedMap.prototype.toString = function() {
      return '[LinkedMap]';
    };

  exports.LinkedMap = LinkedMap;

}));