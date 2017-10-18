'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require('jquery'); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define("clientnode", ['jquery'], factory);
	else if(typeof exports === 'object')
		exports["clientnode"] = factory((function webpackLoadOptionalExternalModule() { try { return require('jquery'); } catch(e) {} }()));
	else
		root['clientnode'] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global, process) {// #!/usr/bin/env node
// -*- coding: utf-8 -*-
/** @module clientnode *//* !
    region header
    [Project page](http://torben.website/clientnode)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
exports.__esModule=true;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}let fileSystem={};try{fileSystem=eval('require')('fs')}catch(error){}let path={};try{path=eval('require')('path')}catch(error){}// NOTE: Only needed for debugging this file.
try{module.require('source-map-support/register')}catch(error){}// endregion
// region types
// / region browser
// / endregion
// endregion
// region determine context
const globalContext=exports.globalContext=function(){if(typeof window==='undefined'){if(typeof global==='undefined')return  false?{}:module;if('window'in global)return global.window;return global}return window}();/* eslint-disable no-use-before-define */const $=exports.$=function(){/* eslint-enable no-use-before-define */let _$;if('$'in globalContext&&globalContext.$!==null)_$=globalContext.$;else{if(!('$'in globalContext)&&'document'in globalContext)try{return __webpack_require__(5)}catch(error){}const selector='document'in globalContext&&'querySelectorAll'in globalContext.document?globalContext.document.querySelectorAll.bind(globalContext.document):function(){return null};_$=function $(parameter,...additionalArguments){if(typeof parameter==='string'){const $domNodes=selector(parameter,...additionalArguments);if('fn'in _$)for(const key in _$.fn)if(_$.fn.hasOwnProperty(key))// IgnoreTypeCheck
$domNodes[key]=_$.fn[key].bind($domNodes);return $domNodes}/* eslint-disable no-use-before-define */if(Tools.isFunction(parameter)&&'document'in globalContext)/* eslint-enable no-use-before-define */globalContext.document.addEventListener('DOMContentLoaded',parameter);return parameter};_$.fn={}}return _$}();if(!('global'in $))$.global=globalContext;if(!('context'in $)&&'document'in $.global)$.context=$.global.document;// endregion
// region plugins/classes
/**
 * This plugin provides such interface logic like generic controller logic for
 * integrating plugins into $, mutual exclusion for depending gui elements,
 * logging additional string, array or function handling. A set of helper
 * functions to parse option objects dom trees or handle events is also
 * provided.
 * @property static:abbreviations - Lists all known abbreviation for proper
 * camel case to delimited and back conversion.
 * @property static:animationEndEventNames - Saves a string with all css3
 * browser specific animation end event names.
 * @property static:classToTypeMapping - String representation to object type
 * name mapping.
 * @property static:closeEventNames - Process event names which indicates that
 * a process has finished.
 * @property static:consoleMethodNames - This variable contains a collection of
 * methods usually binded to the console object.
 * @property static:keyCode - Saves a mapping from key codes to their
 * corresponding name.
 * @property static:maximalSupportedInternetExplorerVersion - Saves currently
 * minimal supported internet explorer version. Saves zero if no internet
 * explorer present.
 * @property static:noop - A no-op dummy function.
 * @property static:specialRegexSequences - A list of special regular
 * expression symbols.
 * @property static:transitionEndEventNames - Saves a string with all css3
 * browser specific transition end event names.
 * @property static:_javaScriptDependentContentHandled - Indicates whether
 * javaScript dependent content where hide or shown.
 *
 * @property $domNode - $-extended dom node if one was given to the constructor
 * method.
 * @property locks - Mapping of lock descriptions to there corresponding
 * callbacks.
 *
 * @property _options - Options given to the constructor.
 * @property _defaultOptions - Fallback options if not overwritten by the
 * options given to the constructor method.
 * @property _defaultOptions.logging {boolean} - Indicates whether logging
 * should be active.
 * @property _defaultOptions.domNodeSelectorPrefix {string} - Selector prefix
 * for all needed dom nodes.
 * @property _defaultOptions.domNode {Object.<string, string>} - Mapping of
 * names to needed dom nodes referenced by there selector.
 * @property _defaultOptions.domNode.hideJavaScriptEnabled {string} - Selector
 * to dom nodes which should be hidden if javaScript is available.
 * @property _defaultOptions.domNode.showJavaScriptEnabled {string} - Selector
 * to dom nodes which should be visible if javaScript is available.
 */class Tools{// endregion
// region public methods
// / region special
/**
     * This method should be overwritten normally. It is triggered if current
     * object is created via the "new" keyword. The dom node selector prefix
     * enforces to not globally select any dom nodes which aren't in the
     * expected scope of this plugin. "{1}" will be automatically replaced with
     * this plugin name suffix ("tools"). You don't have to use "{1}" but it
     * can help you to write code which is more reconcilable with the dry
     * concept.
     * @param $domNode - $-extended dom node to use as reference in various
     * methods.
     * @param options - Options to change runtime behavior.
     * @param defaultOptions - Default options to ensure to be present in any
     * options instance.
     * @param locks - Mapping of a lock description to callbacks for calling
     * when given lock should be released.
     * @returns Returns nothing but if invoked with "new" an instance of this
     * class will be given back.
     */// endregion
// region dynamic properties
// region static properties
constructor($domNode=null,options={},defaultOptions={domNode:{hideJavaScriptEnabled:'.tools-hidden-on-javascript-enabled',showJavaScriptEnabled:'.tools-visible-on-javascript-enabled'},domNodeSelectorPrefix:'body',logging:false},locks={}){if($domNode)this.$domNode=$domNode;this._options=options;this._defaultOptions=defaultOptions;this.locks=locks;// Avoid errors in browsers that lack a console.
if(!('console'in $.global))$.global.console={};for(const methodName of this.constructor.consoleMethodNames)if(!(methodName in $.global.console))$.global.console[methodName]=this.constructor.noop;if(!this.constructor._javaScriptDependentContentHandled&&'document'in $.global&&'filter'in $&&'hide'in $&&'show'in $){this.constructor._javaScriptDependentContentHandled=true;$(`${this._defaultOptions.domNodeSelectorPrefix} `+this._defaultOptions.domNode.hideJavaScriptEnabled).filter(function(){return!$(this).data('javaScriptDependentContentHide')}).data('javaScriptDependentContentHide',true).hide();$(`${this._defaultOptions.domNodeSelectorPrefix} `+this._defaultOptions.domNode.showJavaScriptEnabled).filter(function(){return!$(this).data('javaScriptDependentContentShow')}).data('javaScriptDependentContentShow',true).show()}}/**
     * This method could be overwritten normally. It acts like a destructor.
     * @returns Returns the current instance.
     */destructor(){if('off'in $.fn)this.off('*');return this}/**
     * This method should be overwritten normally. It is triggered if current
     * object was created via the "new" keyword and is called now.
     * @param options - An options object.
     * @returns Returns the current instance.
     */initialize(options={}){/*
            NOTE: We have to create a new options object instance to avoid
            changing a static options object.
        */this._options=this.constructor.extendObject(true,{},this._defaultOptions,this._options,options);/*
            The selector prefix should be parsed after extending options
            because the selector would be overwritten otherwise.
        */this._options.domNodeSelectorPrefix=this.constructor.stringFormat(this._options.domNodeSelectorPrefix,this.constructor.stringCamelCaseToDelimited(this.constructor.name));return this}// / endregion
// / region object orientation
/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * Defines a generic controller for dom node aware plugins.
     * @param object - The object or class to control. If "object" is a class
     * an instance will be generated.
     * @param parameter - The initially given arguments object.
     * @param $domNode - Optionally a $-extended dom node to use as reference.
     * @returns Returns whatever the initializer method returns.
     */controller(object,parameter,$domNode=null){/* eslint-enable jsdoc/require-description-complete-sentence */if(typeof object==='function'){object=new object($domNode);if(!(object instanceof Tools))object=this.constructor.extendObject(true,new Tools,object)}parameter=this.constructor.arrayMake(parameter);if($domNode&&'data'in $domNode&&!$domNode.data(object.constructor.name))// Attach extended object to the associated dom node.
$domNode.data(object.constructor.name,object);if(parameter[0]in object){if(Tools.isFunction(object[parameter[0]]))return object[parameter[0]](...parameter.slice(1));return object[parameter[0]]}else if(parameter.length===0||typeof parameter[0]==='object')/*
                If an options object or no method name is given the initializer
                will be called.
            */return object.initialize(...parameter);throw new Error(`Method "${parameter[0]}" does not exist on $-extended dom node `+`"${object.constructor.name}".`)}// / endregion
// / region mutual exclusion
/**
     * Calling this method introduces a starting point for a critical area with
     * potential race conditions. The area will be binded to given description
     * string. So don't use same names for different areas.
     * @param description - A short string describing the critical areas
     * properties.
     * @param callbackFunction - A procedure which should only be executed if
     * the interpreter isn't in the given critical area. The lock description
     * string will be given to the callback function.
     * @param autoRelease - Release the lock after execution of given callback.
     * @returns Returns a promise which will be resolved after releasing lock.
     */acquireLock(description,callbackFunction=Tools.noop,autoRelease=false){var _this=this;return _asyncToGenerator(function*(){return new Promise(function(resolve){const wrappedCallbackFunction=function(){var _ref=_asyncToGenerator(function*(description){const result=callbackFunction(description);const finish=function finish(value){if(autoRelease)_this.releaseLock(description);resolve(value)};if(result!==null&&typeof result==='object'&&'then'in result)return result.then(finish);finish(description)});return function wrappedCallbackFunction(_x){return _ref.apply(this,arguments)}}();if(_this.locks.hasOwnProperty(description))_this.locks[description].push(wrappedCallbackFunction);else{_this.locks[description]=[];wrappedCallbackFunction(description)}})})()}/**
     * Calling this method  causes the given critical area to be finished and
     * all functions given to "acquireLock()" will be executed in right order.
     * @param description - A short string describing the critical areas
     * properties.
     * @returns Returns the return (maybe promise resolved) value of the
     * callback given to the "acquireLock" method.
     */releaseLock(description){var _this2=this;return _asyncToGenerator(function*(){let result;if(_this2.locks.hasOwnProperty(description))if(_this2.locks[description].length)result=yield _this2.locks[description].shift()(description);else delete _this2.locks[description];return result})()}/**
     * Generate a semaphore object with given number of resources.
     * @param numberOfResources - Number of allowed concurrent resource uses.
     * @returns The requested semaphore instance.
     */static getSemaphore(numberOfResources=2){/**
         * Represents the semaphore state.
         * @property queue - List of waiting resource requests.
         * @property numberOfFreeResources - Number free allowed concurrent
         * resource uses.
         * @property numberOfResources - Number of allowed concurrent resource
         * uses.
         */return new class{constructor(){this.queue=[];this.numberOfResources=numberOfResources;this.numberOfFreeResources=numberOfResources}/**
             * Acquires a new resource and runs given callback if available.
             * @returns A promise which will be resolved if requested a
             * resource is available.
             */acquire(){var _this3=this;return new Promise(function(resolve){if(_this3.numberOfFreeResources<=0)_this3.queue.push(resolve);else{_this3.numberOfFreeResources-=1;resolve(_this3.numberOfFreeResources)}})}/**
             * Releases a resource and runs a waiting resolver if there exists
             * some.
             * @returns Nothing.
             */release(){if(this.queue.length===0)this.numberOfFreeResources+=1;else this.queue.pop()(this.numberOfFreeResources)}}}// / endregion
// / region boolean
/**
     * Determines whether its argument represents a JavaScript number.
     * @param object - Object to analyze.
     * @returns A boolean value indicating whether given object is numeric
     * like.
     */static isNumeric(object){const type=Tools.determineType(object);/*
            NOTE: "parseFloat" "NaNs" numeric-cast false positives ("") but
            misinterprets leading-number strings, particularly hex literals
            ("0x...") subtraction forces infinities to NaN.
        */return['number','string'].includes(type)&&!isNaN(object-parseFloat(object))}/**
     * Determine whether the argument is a window.
     * @param object - Object to check for.
     * @returns Boolean value indicating the result.
     */static isWindow(object){return![undefined,null].includes(object)&&typeof object==='object'&&'window'in object&&object===object.window}/**
     * Checks if given object is similar to an array and can be handled like an
     * array.
     * @param object - Object to check behavior for.
     * @returns A boolean value indicating whether given object is array like.
     */static isArrayLike(object){let length;try{length=Boolean(object)&&'length'in object&&object.length}catch(error){return false}const type=Tools.determineType(object);if(type==='function'||Tools.isWindow(object))return false;if(type==='array'||length===0)return true;if(typeof length==='number'&&length>0)try{/* eslint-disable no-unused-expressions */object[length-1];/* eslint-enable no-unused-expressions */return true}catch(error){}return false}/**
     * Checks whether one of the given pattern matches given string.
     * @param target - Target to check in pattern for.
     * @param pattern - List of pattern to check for.
     * @returns Value "true" if given object is matches by at leas one of the
     * given pattern and "false" otherwise.
     */static isAnyMatching(target,pattern){for(const currentPattern of pattern)if(typeof currentPattern==='string'){if(currentPattern===target)return true}else if(currentPattern.test(target))return true;return false}/**
     * Checks whether given object is a plain native object.
     * @param object - Object to check.
     * @returns Value "true" if given object is a plain javaScript object and
     * "false" otherwise.
     */static isPlainObject(object){return typeof object==='object'&&object!==null&&Tools.plainObjectPrototypes.includes(Object.getPrototypeOf(object))}/**
     * Checks whether given object is a function.
     * @param object - Object to check.
     * @returns Value "true" if given object is a function and "false"
     * otherwise.
     */static isFunction(object){return Boolean(object)&&{}.toString.call(object)==='[object Function]'}// / endregion
// / region language fixes
/**
     * This method fixes an ugly javaScript bug. If you add a mouseout event
     * listener to a dom node the given handler will be called each time any
     * dom node inside the observed dom node triggers a mouseout event. This
     * methods guarantees that the given event handler is only called if the
     * observed dom node was leaved.
     * @param eventHandler - The mouse out event handler.
     * @returns Returns the given function wrapped by the workaround logic.
     */static mouseOutEventHandlerFix(eventHandler){var _this4=this;return function(event,...additionalParameter){let relatedTarget=event.toElement;if('relatedTarget'in event)relatedTarget=event.relatedTarget;while(relatedTarget&&relatedTarget.tagName!=='BODY'){if(relatedTarget===_this4)return;relatedTarget=relatedTarget.parentNode}return eventHandler.call(_this4,...additionalParameter)}}// / endregion
// / region logging
/**
     * Shows the given object's representation in the browsers console if
     * possible or in a standalone alert-window as fallback.
     * @param object - Any object to print.
     * @param force - If set to "true" given input will be shown independently
     * from current logging configuration or interpreter's console
     * implementation.
     * @param avoidAnnotation - If set to "true" given input has no module or
     * log level specific annotations.
     * @param level - Description of log messages importance.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */log(object,force=false,avoidAnnotation=false,level='info',...additionalArguments){if(this._options.logging||force||['error','critical'].includes(level)){let message;if(avoidAnnotation)message=object;else if(typeof object==='string'){additionalArguments.unshift(object);message=`${this.constructor.name} (${level}): `+this.constructor.stringFormat(...additionalArguments)}else if(this.constructor.isNumeric(object)||typeof object==='boolean')message=`${this.constructor.name} (${level}): `+object.toString();else{this.log(',--------------------------------------------,');this.log(object,force,true);this.log(`'--------------------------------------------'`)}if(message)if(!('console'in $.global&&level in $.global.console)||$.global.console[level]===this.constructor.noop){if('alert'in $.global)$.global.alert(message)}else $.global.console[level](message)}return this}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */info(object,...additionalArguments){return this.log(object,false,false,'info',...additionalArguments)}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */debug(object,...additionalArguments){return this.log(object,false,false,'debug',...additionalArguments)}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */error(object,...additionalArguments){return this.log(object,true,false,'error',...additionalArguments)}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */critical(object,...additionalArguments){return this.log(object,true,false,'warn',...additionalArguments)}/**
     * Wrapper method for the native console method usually provided by
     * interpreter.
     * @param object - Any object to print.
     * @param additionalArguments - Additional arguments are used for string
     * formating.
     * @returns Returns the current instance.
     */warn(object,...additionalArguments){return this.log(object,false,false,'warn',...additionalArguments)}/**
     * Dumps a given object in a human readable format.
     * @param object - Any object to show.
     * @param level - Number of levels to dig into given object recursively.
     * @param currentLevel - Maximal number of recursive function calls to
     * represent given object.
     * @returns Returns the serialized version of given object.
     */static show(object,level=3,currentLevel=0){let output='';if(Tools.determineType(object)==='object'){for(const key in object)if(object.hasOwnProperty(key)){output+=`${key.toString()}: `;if(currentLevel<=level)output+=Tools.show(object[key],level,currentLevel+1);else output+=`${object[key]}`;output+='\n'}return output.trim()}output=`${object}`.trim();return`${output} (Type: "${Tools.determineType(object)}")`}// / endregion
// / region dom node
/**
     * Normalizes class name order of current dom node.
     * @returns Current instance.
     */get normalizedClassNames(){// IgnoreTypeCheck
this.$domNode.find('*').addBack().each(function(){const $thisDomNode=$(this);if($thisDomNode.attr('class')){const sortedClassNames=$thisDomNode.attr('class').split(' ').sort()||[];$thisDomNode.attr('class','');for(const className of sortedClassNames)$thisDomNode.addClass(className)}else if($thisDomNode.is('[class]'))$thisDomNode.removeAttr('class')});return this}/**
     * Normalizes style attributes order of current dom node.
     * @returns Returns current instance.
     */get normalizedStyles(){const self=this;// IgnoreTypeCheck
this.$domNode.find('*').addBack().each(function(){const $thisDomNode=$(this);let serializedStyles=$thisDomNode.attr('style');if(serializedStyles){const sortedStyles=self.constructor.stringCompressStyleValue(serializedStyles).split(';').sort()||[];$thisDomNode.attr('style','');for(const style of sortedStyles)$thisDomNode.css(...style.trim().split(':'));$thisDomNode.attr('style',self.constructor.stringCompressStyleValue($thisDomNode.attr('style')))}else if($thisDomNode.is('[style]'))$thisDomNode.removeAttr('style')});return this}/**
     * Retrieves a mapping of computed style attributes to their corresponding
     * values.
     * @returns The computed style mapping.
     */get style(){const result={};if('window'in $.global&&$.global.window.getComputedStyle){const styleProperties=$.global.window.getComputedStyle(this.$domNode[0],null);if(styleProperties){if('length'in styleProperties)for(let index=0;index<styleProperties.length;index+=1)result[this.constructor.stringDelimitedToCamelCase(styleProperties[index])]=styleProperties.getPropertyValue(styleProperties[index]);else for(const propertyName in styleProperties)if(styleProperties.hasOwnProperty(propertyName))result[this.constructor.stringDelimitedToCamelCase(propertyName)]=propertyName in styleProperties&&styleProperties[propertyName]||styleProperties.getPropertyValue(propertyName);return result}}let styleProperties=this.$domNode[0].currentStyle;if(styleProperties){for(const propertyName in styleProperties)if(styleProperties.hasOwnProperty(propertyName))result[propertyName]=styleProperties[propertyName];return result}styleProperties=this.$domNode[0].style;if(styleProperties)for(const propertyName in styleProperties)if(typeof styleProperties[propertyName]!=='function')result[propertyName]=styleProperties[propertyName];return result}/**
     * Get text content of current element without it children's text contents.
     * @returns The text string.
     */get text(){return this.$domNode.clone().children().remove().end().text()}/**
     * Checks whether given html or text strings are equal.
     * @param first - First html, selector to dom node or text to compare.
     * @param second - Second html, selector to dom node  or text to compare.
     * @param forceHTMLString - Indicates whether given contents are
     * interpreted as html string (otherwise an automatic detection will be
     * triggered).
     * @returns Returns true if both dom representations are equivalent.
     */static isEquivalentDOM(first,second,forceHTMLString=false){if(first===second)return true;if(first&&second){const detemermineHTMLPattern=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;const inputs={first,second};const $domNodes={first:$('<dummy>'),second:$('<dummy>')/*
                NOTE: Assume that strings that start "<" and end with ">" are
                markup and skip the more expensive regular expression check.
            */};for(const type of['first','second'])if(typeof inputs[type]==='string'&&(forceHTMLString||inputs[type].startsWith('<')&&inputs[type].endsWith('>')&&inputs[type].length>=3||detemermineHTMLPattern.test(inputs[type])))$domNodes[type]=$(`<div>${inputs[type]}</div>`);else try{let $selectedDomNode=$(inputs[type]);if($selectedDomNode.length)$domNodes[type]=$('<div>').append($selectedDomNode.clone());else return false}catch(error){return false}if($domNodes.first.length&&$domNodes.first.length===$domNodes.second.length){$domNodes.first=$domNodes.first.Tools('normalizedClassNames').$domNode.Tools('normalizedStyles').$domNode;$domNodes.second=$domNodes.second.Tools('normalizedClassNames').$domNode.Tools('normalizedStyles').$domNode;let index=0;for(const domNode of $domNodes.first)if(!domNode.isEqualNode($domNodes.second[index]))return false;return true}}return false}/**
     * Determines where current dom node is relative to current view port
     * position.
     * @param delta - Allows deltas for "top", "left", "bottom" and "right" for
     * determining positions.
     * @returns Returns one of "above", "left", "below", "right" or "in".
     */getPositionRelativeToViewport(delta={}){delta=this.constructor.extendObject({top:0,left:0,bottom:0,right:0},delta);if('window'in $.global&&this.$domNode&&this.$domNode.length&&this.$domNode[0]){const $window=$($.global.window);const rectangle=this.$domNode[0].getBoundingClientRect();if(rectangle.top+delta.top<0)return'above';if(rectangle.left+delta.left<0)return'left';if($window.height()<rectangle.bottom+delta.bottom)return'below';if($window.width()<rectangle.right+delta.right)return'right'}return'in'}/**
     * Generates a directive name corresponding selector string.
     * @param directiveName - The directive name.
     * @returns Returns generated selector.
     */static generateDirectiveSelector(directiveName){const delimitedName=Tools.stringCamelCaseToDelimited(directiveName);return`${delimitedName}, .${delimitedName}, [${delimitedName}], `+`[data-${delimitedName}], [x-${delimitedName}]`+(delimitedName.includes('-')?`, [${delimitedName.replace(/-/g,'\\:')}], `+`[${delimitedName.replace(/-/g,'_')}]`:'')}/**
     * Removes a directive name corresponding class or attribute.
     * @param directiveName - The directive name.
     * @returns Returns current dom node.
     */removeDirective(directiveName){const delimitedName=this.constructor.stringCamelCaseToDelimited(directiveName);return this.$domNode.removeClass(delimitedName).removeAttr(delimitedName).removeAttr(`data-${delimitedName}`).removeAttr(`x-${delimitedName}`).removeAttr(delimitedName.replace('-',':')).removeAttr(delimitedName.replace('-','_'))}/**
     * Determines a normalized camel case directive name representation.
     * @param directiveName - The directive name.
     * @returns Returns the corresponding name.
     */static getNormalizedDirectiveName(directiveName){for(const delimiter of['-',':','_']){let prefixFound=false;for(const prefix of[`data${delimiter}`,`x${delimiter}`])if(directiveName.startsWith(prefix)){directiveName=directiveName.substring(prefix.length);prefixFound=true;break}if(prefixFound)break}for(const delimiter of['-',':','_'])directiveName=Tools.stringDelimitedToCamelCase(directiveName,delimiter);return directiveName}/**
     * Determines a directive attribute value.
     * @param directiveName - The directive name.
     * @returns Returns the corresponding attribute value or "null" if no
     * attribute value exists.
     */getDirectiveValue(directiveName){const delimitedName=this.constructor.stringCamelCaseToDelimited(directiveName);for(const attributeName of[delimitedName,`data-${delimitedName}`,`x-${delimitedName}`,delimitedName.replace('-','\\:')]){const value=this.$domNode.attr(attributeName);if(value!==undefined)return value}return null}/**
     * Removes a selector prefix from a given selector. This methods searches
     * in the options object for a given "domNodeSelectorPrefix".
     * @param domNodeSelector - The dom node selector to slice.
     * @returns Returns the sliced selector.
     */sliceDomNodeSelectorPrefix(domNodeSelector){if('domNodeSelectorPrefix'in this._options&&domNodeSelector.startsWith(this._options.domNodeSelectorPrefix))return domNodeSelector.substring(this._options.domNodeSelectorPrefix.length).trim();return domNodeSelector}/**
     * Determines the dom node name of a given dom node string.
     * @param domNodeSelector - A given to dom node selector to determine its
     * name.
     * @returns Returns The dom node name.
     * @example
     * // returns 'div'
     * $.Tools.getDomNodeName('&lt;div&gt;')
     * @example
     * // returns 'div'
     * $.Tools.getDomNodeName('&lt;div&gt;&lt;/div&gt;')
     * @example
     * // returns 'br'
     * $.Tools.getDomNodeName('&lt;br/&gt;')
     */static getDomNodeName(domNodeSelector){const match=domNodeSelector.match(new RegExp('^<?([a-zA-Z]+).*>?.*'));if(match)return match[1];return null}/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * Converts an object of dom selectors to an array of $ wrapped dom nodes.
     * Note if selector description as one of "class" or "id" as suffix element
     * will be ignored.
     * @param domNodeSelectors - An object with dom node selectors.
     * @param wrapperDomNode - A dom node to be the parent or wrapper of all
     * retrieved dom nodes.
     * @returns Returns All $ wrapped dom nodes corresponding to given
     * selectors.
     */grabDomNode(domNodeSelectors,wrapperDomNode){/* eslint-enable jsdoc/require-description-complete-sentence */const domNodes={};if(domNodeSelectors)if(wrapperDomNode){const $wrapperDomNode=$(wrapperDomNode);for(const name in domNodeSelectors)if(domNodeSelectors.hasOwnProperty(name))domNodes[name]=$wrapperDomNode.find(domNodeSelectors[name])}else for(const name in domNodeSelectors)if(domNodeSelectors.hasOwnProperty(name)){const match=domNodeSelectors[name].match(', *');if(match)for(const selectorPart of domNodeSelectors[name].split(match[0]))domNodeSelectors[name]+=', '+this.normalizeDomNodeSelector(selectorPart);domNodes[name]=$(this.normalizeDomNodeSelector(domNodeSelectors[name]))}if(this._options.domNodeSelectorPrefix)domNodes.parent=$(this._options.domNodeSelectorPrefix);if('window'in $.global)domNodes.window=$($.global.window);if('document'in $.global)domNodes.document=$($.global.document);return domNodes}// / endregion
// / region scope
/**
     * Overwrites all inherited variables from parent scope with "undefined".
     * @param scope - A scope where inherited names will be removed.
     * @param prefixesToIgnore - Name prefixes to ignore during deleting names
     * in given scope.
     * @returns The isolated scope.
     */static isolateScope(scope,prefixesToIgnore=[]){for(const name in scope)if(!(prefixesToIgnore.includes(name.charAt(0))||['this','constructor'].includes(name)||scope.hasOwnProperty(name)))/*
                    NOTE: Delete ("delete $scope[name]") doesn't destroy the
                    automatic lookup to parent scope.
                */scope[name]=undefined;return scope}/**
     * Generates a unique name in given scope (useful for jsonp requests).
     * @param prefix - A prefix which will be prepended to unique name.
     * @param suffix - A suffix which will be prepended to unique name.
     * @param scope - A scope where the name should be unique.
     * @param initialUniqueName - An initial scope name to use if not exists.
     * @returns The function name.
     */static determineUniqueScopeName(prefix='callback',suffix='',scope=$.global,initialUniqueName=''){if(initialUniqueName.length&&!(initialUniqueName in scope))return initialUniqueName;let uniqueName=prefix+suffix;while(true){uniqueName=prefix+parseInt(Math.random()*Math.pow(10,10),10)+suffix;if(!(uniqueName in scope))break}return uniqueName}// / endregion
// / region function
/**
     * Determines all parameter names from given callable (function or class,
     * ...).
     * @param callable - Function or function code to inspect.
     * @returns List of parameter names.
     */static getParameterNames(callable){const functionCode=(typeof callable==='string'?callable:callable.toString()).replace(// Strip comments.
/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,'');if(functionCode.startsWith('class'))return Tools.getParameterNames('function '+functionCode.replace(/.*(constructor\([^)]+\))/m,'$1'));// Try classic function declaration.
let parameter=functionCode.match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m);if(parameter===null)// Try arrow function declaration.
parameter=functionCode.match(/^[^\(]*\(\s*([^\)]*)\) *=>.*/m);if(parameter===null)// Try one argument and without brackets arrow function declaration.
parameter=functionCode.match(/([^= ]+) *=>.*/m);const names=[];if(parameter&&parameter.length>1&&parameter[1].trim().length){for(const name of parameter[1].split(','))// Remove default parameter values.
names.push(name.replace(/=.+$/g,'').trim());return names}return names}/**
     * Implements the identity function.
     * @param value - A value to return.
     * @returns Returns the given value.
     */static identity(value){return value}/**
     * Inverted filter helper to inverse each given filter.
     * @param filter - A function that filters an array.
     * @returns The inverted filter.
     */static invertArrayFilter(filter){return function(data,...additionalParameter){if(data){const filteredData=filter.call(this,data,...additionalParameter);let result=[];/* eslint-disable curly */if(filteredData.length){for(const date of data)if(!filteredData.includes(date))result.push(date)}else/* eslint-enable curly */result=data;return result}return data}}/**
     * Triggers given callback after given duration. Supports unlimited
     * duration length and returns a promise which will be resolved after given
     * duration has been passed.
     * @param parameter - Observes the first three existing parameter. If one
     * is a number it will be interpret as delay in milliseconds until given
     * callback will be triggered. If one is of type function it will be used
     * as callback and if one is of type boolean it will indicate if returning
     * promise should be rejected or resolved if given internally created
     * timeout should be canceled. Additional parameter will be forwarded to
     * given callback.
     * @returns A promise resolving after given delay or being rejected if
     * value "true" is within one of the first three parameter. The promise
     * holds a boolean indicating whether timeout has been canceled or
     * resolved.
     */static timeout(...parameter){let callback=Tools.noop;let delayInMilliseconds=0;let throwOnTimeoutClear=false;for(const value of parameter)if(typeof value==='number'&&!Number.isNaN(value))delayInMilliseconds=value;else if(typeof value==='boolean')throwOnTimeoutClear=value;else if(Tools.isFunction(value))callback=value;let rejectCallback;let resolveCallback;const result=new Promise(function(resolve,reject){rejectCallback=reject;resolveCallback=resolve});const wrappedCallback=function wrappedCallback(){callback.call(result,...parameter);resolveCallback(false)};const maximumTimeoutDelayInMilliseconds=2147483647;if(delayInMilliseconds<=maximumTimeoutDelayInMilliseconds)// IgnoreTypeCheck
result.timeoutID=setTimeout(wrappedCallback,delayInMilliseconds);else{/*
                Determine the number of times we need to delay by maximum
                possible timeout duration.
            */let numberOfRemainingTimeouts=Math.floor(delayInMilliseconds/maximumTimeoutDelayInMilliseconds);const finalTimeoutDuration=delayInMilliseconds%maximumTimeoutDelayInMilliseconds;const delay=function delay(){if(numberOfRemainingTimeouts>0){numberOfRemainingTimeouts-=1;// IgnoreTypeCheck
result.timeoutID=setTimeout(delay,maximumTimeoutDelayInMilliseconds)}else// IgnoreTypeCheck
result.timeoutID=setTimeout(wrappedCallback,finalTimeoutDuration)};delay()}// IgnoreTypeCheck
result.clear=function(){if(result.timeoutID){clearTimeout(result.timeoutID);(throwOnTimeoutClear?rejectCallback:resolveCallback)(true)}};return result}// / endregion
// / region event
/**
     * Prevents event functions from triggering to often by defining a minimal
     * span between each function call. Additional arguments given to this
     * function will be forwarded to given event function call. The function
     * wrapper returns null if current function will be omitted due to
     * debounceing.
     * @param eventFunction - The function to call debounced.
     * @param thresholdInMilliseconds - The minimum time span between each
     * function call.
     * @param additionalArguments - Additional arguments to forward to given
     * function.
     * @returns Returns the wrapped method.
     */static debounce(eventFunction,thresholdInMilliseconds=600,...additionalArguments){let lock=false;let waitingCallArguments=null;let timer=null;return function(...parameter){parameter=parameter.concat(additionalArguments||[]);if(lock)waitingCallArguments=parameter;else{lock=true;eventFunction(...parameter);timer=Tools.timeout(thresholdInMilliseconds,function(){lock=false;if(waitingCallArguments){eventFunction(...waitingCallArguments);waitingCallArguments=null}})}return timer}}/**
     * Searches for internal event handler methods and runs them by default. In
     * addition this method searches for a given event method by the options
     * object. Additional arguments are forwarded to respective event
     * functions.
     * @param eventName - An event name.
     * @param callOnlyOptionsMethod - Prevents from trying to call an internal
     * event handler.
     * @param scope - The scope from where the given event handler should be
     * called.
     * @param additionalArguments - Additional arguments to forward to
     * corresponding event handlers.
     * @returns - Returns "true" if an options event handler was called and
     * "false" otherwise.
     */fireEvent(eventName,callOnlyOptionsMethod=false,scope=this,...additionalArguments){const eventHandlerName=`on${this.constructor.stringCapitalize(eventName)}`;if(!callOnlyOptionsMethod)if(eventHandlerName in scope)scope[eventHandlerName](...additionalArguments);else if(`_${eventHandlerName}`in scope)scope[`_${eventHandlerName}`](...additionalArguments);if(scope._options&&eventHandlerName in scope._options&&scope._options[eventHandlerName]!==this.constructor.noop)return scope._options[eventHandlerName].call(this,...additionalArguments);return true}/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * A wrapper method for "$.on()". It sets current plugin name as event
     * scope if no scope is given. Given arguments are modified and passed
     * through "$.on()".
     * @param parameter - Parameter to forward.
     * @returns Returns $'s grabbed dom node.
     */on(...parameter){/* eslint-enable jsdoc/require-description-complete-sentence */return this._bindEventHelper(parameter,false)}/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * A wrapper method fo "$.off()". It sets current plugin name as event
     * scope if no scope is given. Given arguments are modified and passed
     * through "$.off()".
     * @param parameter - Parameter to forward.
     * @returns Returns $'s grabbed dom node.
     */off(...parameter){/* eslint-enable jsdoc/require-description-complete-sentence */return this._bindEventHelper(parameter,true,'off')}// / endregion
// / region object
/**
     * Adds dynamic getter and setter to any given data structure such as maps.
     * @param object - Object to proxy.
     * @param getterWrapper - Function to wrap each property get.
     * @param setterWrapper - Function to wrap each property set.
     * @param methodNames - Method names to perform actions on the given
     * object.
     * @param deep - Indicates to perform a deep wrapping of specified types.
     * @param typesToExtend - Types which should be extended (Checks are
     * performed via "value instanceof type".).
     * @returns Returns given object wrapped with a dynamic getter proxy.
     */static addDynamicGetterAndSetter(object,getterWrapper=null,setterWrapper=null,methodNames={},deep=true,typesToExtend=[Object]){if(deep&&typeof object==='object')if(Array.isArray(object)){let index=0;for(const value of object){object[index]=Tools.addDynamicGetterAndSetter(value,getterWrapper,setterWrapper,methodNames,deep);index+=1}}else if(Tools.determineType(object)==='map')for(const[key,value]of object)object.set(key,Tools.addDynamicGetterAndSetter(value,getterWrapper,setterWrapper,methodNames,deep));else if(Tools.determineType(object)==='set'){const cache=[];for(const value of object){object.delete(value);cache.push(Tools.addDynamicGetterAndSetter(value,getterWrapper,setterWrapper,methodNames,deep))}for(const value of cache)object.add(value)}else if(object!==null){for(const key in object)if(object.hasOwnProperty(key))object[key]=Tools.addDynamicGetterAndSetter(object[key],getterWrapper,setterWrapper,methodNames,deep)}if(getterWrapper||setterWrapper)for(const type of typesToExtend)if(typeof object==='object'&&object instanceof type&&object!==null){const defaultHandler=Tools.getProxyHandler(object,methodNames);const handler=Tools.getProxyHandler(object,methodNames);if(getterWrapper)handler.get=function(proxy,name){if(name==='__target__')return object;if(name==='__revoke__')return function(){revoke();return object};if(typeof object[name]==='function')return object[name];// IgnoreTypeCheck
return getterWrapper(defaultHandler.get(proxy,name),name,object)};if(setterWrapper)handler.set=function(proxy,name,value){return defaultHandler.set(proxy,name,setterWrapper(name,value,object))};const{proxy,revoke}=Proxy.revocable({},handler);return proxy}return object}/**
     * Converts given object into its serialized json representation by
     * replacing circular references with a given provided value.
     * @param object - Object to serialize.
     * @param determineCicularReferenceValue - Callback to create a fallback
     * value depending on given redundant value.
     * @param numberOfSpaces - Number of spaces to use for string formatting.
     * @returns The formatted json string.
     */static convertCircularObjectToJSON(object,determineCicularReferenceValue=function(){return'__circularReference__'},numberOfSpaces=0){const seenObjects=[];return JSON.stringify(object,function(key,value){if(typeof value==='object'&&value!==null){if(seenObjects.includes(value))return determineCicularReferenceValue(key,value,seenObjects);seenObjects.push(value);return value}return value},numberOfSpaces)}/**
     * Converts given map and all nested found maps objects to corresponding
     * object.
     * @param object - Map to convert to.
     * @param deep - Indicates whether to perform a recursive conversion.
     * @returns Given map as object.
     */static convertMapToPlainObject(object,deep=true){if(typeof object==='object'){if(Tools.determineType(object)==='map'){const newObject={};for(let[key,value]of object){if(deep)value=Tools.convertMapToPlainObject(value,deep);newObject[`${key}`]=value}return newObject}if(deep)if(Tools.isPlainObject(object)){for(const key in object)if(object.hasOwnProperty(key))object[key]=Tools.convertMapToPlainObject(object[key],deep)}else if(Array.isArray(object)){let index=0;for(const value of object){object[index]=Tools.convertMapToPlainObject(value,deep);index+=1}}else if(Tools.determineType(object)==='set'){const cache=[];for(const value of object){object.delete(value);cache.push(Tools.convertMapToPlainObject(value,deep))}for(const value of cache)object.add(value)}}return object}/**
     * Converts given plain object and all nested found objects to
     * corresponding map.
     * @param object - Object to convert to.
     * @param deep - Indicates whether to perform a recursive conversion.
     * @returns Given object as map.
     */static convertPlainObjectToMap(object,deep=true){if(typeof object==='object'){if(Tools.isPlainObject(object)){const newObject=new Map;for(const key in object)if(object.hasOwnProperty(key)){if(deep)object[key]=Tools.convertPlainObjectToMap(object[key],deep);newObject.set(key,object[key])}return newObject}if(deep)if(Array.isArray(object)){let index=0;for(const value of object){object[index]=Tools.convertPlainObjectToMap(value,deep);index+=1}}else if(Tools.determineType(object)==='map')for(const[key,value]of object)object.set(key,Tools.convertPlainObjectToMap(value,deep));else if(Tools.determineType(object)==='set'){const cache=[];for(const value of object){object.delete(value);cache.push(Tools.convertPlainObjectToMap(value,deep))}for(const value of cache)object.add(value)}}return object}/**
     * Replaces given pattern in each value in given object recursively with
     * given string replacement.
     * @param object - Object to convert substrings in.
     * @param pattern - Regular expression to replace.
     * @param replacement - String to use as replacement for found patterns.
     * @returns Converted object with replaced patterns.
     */static convertSubstringInPlainObject(object,pattern,replacement){for(const key in object)if(object.hasOwnProperty(key))if(Tools.isPlainObject(object[key]))object[key]=Tools.convertSubstringInPlainObject(object[key],pattern,replacement);else if(typeof object[key]==='string')object[key]=object[key].replace(pattern,replacement);return object}/**
     * Copies given object (of any type) into optionally given destination.
     * @param source - Object to copy.
     * @param recursionLimit - Specifies how deep we should traverse into given
     * object recursively.
     * @param cyclic - Indicates whether known sub structures should be copied
     * or referenced (if "true" endless loops can occur of source has cyclic
     * structures).
     * @param destination - Target to copy source to.
     * @param stackSource - Internally used to avoid traversing loops.
     * @param stackDestination - Internally used to avoid traversing loops and
     * referencing them correctly.
     * @param recursionLevel - Internally used to track current recursion
     * level in given source data structure.
     * @returns Value "true" if both objects are equal and "false" otherwise.
     */static copyLimitedRecursively(source,recursionLimit=-1,cyclic=false,destination=null,stackSource=[],stackDestination=[],recursionLevel=0){if(typeof source==='object')if(destination){if(source===destination)throw new Error(`Can't copy because source and destination are `+`identical.`);if(recursionLimit!==-1&&recursionLimit<recursionLevel)return null;if(!cyclic&&![undefined,null].includes(source)){const index=stackSource.indexOf(source);if(index!==-1)return stackDestination[index];stackSource.push(source);stackDestination.push(destination)}const copyValue=function copyValue(value){const result=Tools.copyLimitedRecursively(value,recursionLimit,cyclic,null,stackSource,stackDestination,recursionLevel+1);if(!cyclic&&![undefined,null].includes(value)&&typeof value==='object'){stackSource.push(value);stackDestination.push(result)}return result};if(Array.isArray(source))for(const item of source)destination.push(copyValue(item));else if(Tools.determineType(source)==='map')for(const[key,value]of source)destination.set(key,copyValue(value));else if(Tools.determineType(source)==='set')for(const value of source)destination.add(copyValue(value));else if(source!==null)for(const key in source)if(source.hasOwnProperty(key))destination[key]=copyValue(source[key])}else if(source){if(Array.isArray(source))return Tools.copyLimitedRecursively(source,recursionLimit,cyclic,[],stackSource,stackDestination,recursionLevel);if(Tools.determineType(source)==='map')return Tools.copyLimitedRecursively(source,recursionLimit,cyclic,new Map,stackSource,stackDestination,recursionLevel);if(Tools.determineType(source)==='set')return Tools.copyLimitedRecursively(source,recursionLimit,cyclic,new Set,stackSource,stackDestination,recursionLevel);if(Tools.determineType(source)==='date')return new Date(source.getTime());if(Tools.determineType(source)==='regexp'){destination=new RegExp(source.source,source.toString().match(/[^\/]*$/)[0]);destination.lastIndex=source.lastIndex;return destination}return Tools.copyLimitedRecursively(source,recursionLimit,cyclic,{},stackSource,stackDestination,recursionLevel)}return destination||source}/**
     * Determine the internal JavaScript [[Class]] of an object.
     * @param object - Object to analyze.
     * @returns Name of determined class.
     */static determineType(object=undefined){if([undefined,null].includes(object))return`${object}`;if(['object','function'].includes(typeof object)&&'toString'in object){const stringRepresentation=Tools.classToTypeMapping.toString.call(object);if(Tools.classToTypeMapping.hasOwnProperty(stringRepresentation))return Tools.classToTypeMapping[stringRepresentation]}return typeof object}/**
     * Returns true if given items are equal for given property list. If
     * property list isn't set all properties will be checked. All keys which
     * starts with one of the exception prefixes will be omitted.
     * @param firstValue - First object to compare.
     * @param secondValue - Second object to compare.
     * @param properties - Property names to check. Check all if "null" is
     * selected (default).
     * @param deep - Recursion depth negative values means infinitely deep
     * (default).
     * @param exceptionPrefixes - Property prefixes which indicates properties
     * to ignore.
     * @param ignoreFunctions - Indicates whether functions have to be
     * identical to interpret is as equal. If set to "true" two functions will
     * be assumed to be equal (default).
     * @returns Value "true" if both objects are equal and "false" otherwise.
     */static equals(firstValue,secondValue,properties=null,deep=-1,exceptionPrefixes=[],ignoreFunctions=true){if(ignoreFunctions&&Tools.isFunction(firstValue)&&Tools.isFunction(secondValue)||firstValue===secondValue||Tools.numberIsNotANumber(firstValue)&&Tools.numberIsNotANumber(secondValue)||firstValue instanceof RegExp&&secondValue instanceof RegExp&&firstValue.toString()===secondValue.toString()||firstValue instanceof Date&&secondValue instanceof Date&&(isNaN(firstValue.getTime())&&isNaN(secondValue.getTime())||!isNaN(firstValue.getTime())&&!isNaN(secondValue.getTime())&&firstValue.getTime()===secondValue.getTime()))return true;if(Tools.isPlainObject(firstValue)&&Tools.isPlainObject(secondValue)&&!(firstValue instanceof RegExp||secondValue instanceof RegExp)||Array.isArray(firstValue)&&Array.isArray(secondValue)&&firstValue.length===secondValue.length||(Tools.determineType(firstValue)==='map'&&Tools.determineType(secondValue)==='map'||Tools.determineType(firstValue)==='set'&&Tools.determineType(secondValue)==='set')&&firstValue.size===secondValue.size){for(const[first,second]of[[firstValue,secondValue],[secondValue,firstValue]]){const firstIsArray=Array.isArray(first);if(firstIsArray&&(!Array.isArray(second)||first.length!==second.length))return false;const firstIsMap=Tools.determineType(first)==='map';if(firstIsMap&&(Tools.determineType(second)!=='map'||first.size!==second.size))return false;const firstIsSet=Tools.determineType(first)==='set';if(firstIsSet&&(Tools.determineType(second)!=='set'||first.size!==second.size))return false;let equal=true;if(firstIsArray){let index=0;for(const value of first){if(deep!==0&&!Tools.equals(value,second[index],properties,deep-1,exceptionPrefixes))equal=false;index+=1}}else if(firstIsMap)/* eslint-disable curly */for(const[key,value]of first){if(deep!==0&&!Tools.equals(value,second.get(key),properties,deep-1,exceptionPrefixes))equal=false}/* eslint-enable curly *//* eslint-disable curly */else if(firstIsSet){for(const value of first)if(deep!==0){equal=false;for(const secondValue of second)if(Tools.equals(value,secondValue,properties,deep-1,exceptionPrefixes)){equal=true;break}if(!equal)break}}else/* eslint-enable curly */for(const key in first)if(first.hasOwnProperty(key)){if(!equal||properties&&!properties.includes(key))break;let doBreak=false;for(const exceptionPrefix of exceptionPrefixes)if(key.toString().startsWith(exceptionPrefix)){doBreak=true;break}if(doBreak)break;if(deep!==0&&!Tools.equals(first[key],second[key],properties,deep-1,exceptionPrefixes))equal=false}if(!equal)return false}return true}return false}/**
     * Searches for nested mappings with given indicator key and resolves
     * marked values. Additionally all objects are wrapped with a proxy to
     * dynamically resolve nested properties.
     * @param object - Given mapping to resolve.
     * @param scope - Scope to to use evaluate again.
     * @param selfReferenceName - Name to use for reference to given object.
     * @param expressionIndicatorKey - Indicator property name to mark a value
     * to evaluate.
     * @param executionIndicatorKey - Indicator property name to mark a value
     * to evaluate.
     * @returns Evaluated given mapping.
     */static evaluateDynamicDataStructure(object,scope={},selfReferenceName='self',expressionIndicatorKey='__evaluate__',executionIndicatorKey='__execute__'){if(typeof object!=='object'||object===null)return object;if(!(selfReferenceName in scope))scope[selfReferenceName]=object;const evaluate=function evaluate(code,type=expressionIndicatorKey){code=type===expressionIndicatorKey?`return ${code}`:code;let compiledFunction;try{/* eslint-disable new-parens */// IgnoreTypeCheck
compiledFunction=new(Function.prototype.bind.call(/* eslint-enable new-parens */Function,null,...Object.keys(scope),code))}catch(error){throw new Error(`Error during compiling code "${code}": "`+`${Tools.representObject(error)}".`)}try{return compiledFunction(...Object.values(scope))}catch(error){throw new Error(`Error running code "${code}" in scope with variables "`+`${Object.keys(scope).join('", "')}": "`+`${Tools.representObject(error)}".`)}};const addProxyRecursively=function addProxyRecursively(data){if(typeof data!=='object'||data===null)return data;for(const key in data)if(data.hasOwnProperty(key)&&key!=='__target__'&&typeof data[key]==='object'&&data[key]!==null){addProxyRecursively(data[key]);/*
                        NOTE: We only wrap needed objects for performance
                        reasons.
                    */if(data[key].hasOwnProperty(expressionIndicatorKey)||data[key].hasOwnProperty(executionIndicatorKey))data[key]=new Proxy(data[key],{get:function get(target,key){if(key==='__target__')return target;if(key==='hasOwnProperty')return target[key];/*
                                    NOTE: Very complicated stuff section, only
                                    change while doing a lot of tests.
                                */for(const type of[expressionIndicatorKey,executionIndicatorKey])if(key===type)return resolve(evaluate(target[key],type));let resolvedTarget=resolve(target);if(key==='toString'){const result=evaluate(resolvedTarget);return result[key].bind(result)}if(typeof key!=='string'){const result=evaluate(resolvedTarget);if(result[key]&&result[key].call)return result[key].bind(result);return result[key]}for(const type of[expressionIndicatorKey,executionIndicatorKey])if(target.hasOwnProperty(type))return evaluate(resolvedTarget,type)[key];return resolvedTarget[key];// End of complicated stuff.
},ownKeys:function ownKeys(target){for(const type of[expressionIndicatorKey,executionIndicatorKey])if(target.hasOwnProperty(type))return Object.getOwnPropertyNames(resolve(evaluate(target[type],type)));return Object.getOwnPropertyNames(target)}})}return data};const resolve=function resolve(data){if(typeof data==='object'&&data!==null){if(data.__target__){// NOTE: We have to skip "ownKeys" proxy trap here.
for(const type of[expressionIndicatorKey,executionIndicatorKey])if(data.hasOwnProperty(type))return data[type];data=data.__target__}for(const key in data)if(data.hasOwnProperty(key))if([expressionIndicatorKey,executionIndicatorKey].includes(key))return data[key];else data[key]=resolve(data[key])}return data};scope.resolve=resolve;const removeProxyRecursively=function removeProxyRecursively(data){if(typeof data==='object'&&data!==null)for(const key in data)if(data.hasOwnProperty(key)&&key!=='__target__'&&typeof data[key]==='object'&&data[key]!==null){const target=data[key].__target__;if(typeof target!=='undefined')data[key]=target;removeProxyRecursively(data[key])}return data};if(typeof object==='object'&&object!==null)if(object.hasOwnProperty(expressionIndicatorKey))return evaluate(object[expressionIndicatorKey]);else if(object.hasOwnProperty(executionIndicatorKey))return evaluate(object[executionIndicatorKey],executionIndicatorKey);return removeProxyRecursively(resolve(addProxyRecursively(object)))}/**
     * Extends given target object with given sources object. As target and
     * sources many expandable types are allowed but target and sources have to
     * to come from the same type.
     * @param targetOrDeepIndicator - Maybe the target or deep indicator.
     * @param targetAndOrSources - Target and at least one source object.
     * @returns Returns given target extended with all given sources.
     */static extendObject(targetOrDeepIndicator,...targetAndOrSources){let index=0;let deep=false;let target;if(typeof targetOrDeepIndicator==='boolean'){// Handle a deep copy situation and skip deep indicator and target.
deep=targetOrDeepIndicator;target=targetAndOrSources[index];index=1}else target=targetOrDeepIndicator;const mergeValue=function mergeValue(targetValue,value){if(value===targetValue)return targetValue;// Recurse if we're merging plain objects or maps.
if(deep&&value&&(Tools.isPlainObject(value)||Tools.determineType(value)==='map')){let clone;if(Tools.determineType(value)==='map')clone=targetValue&&Tools.determineType(targetValue)==='map'?targetValue:new Map;else clone=targetValue&&Tools.isPlainObject(targetValue)?targetValue:{};return Tools.extendObject(deep,clone,value)}return value};while(index<targetAndOrSources.length){const source=targetAndOrSources[index];let targetType=typeof target;let sourceType=typeof source;if(Tools.determineType(target)==='map')targetType+=' Map';if(Tools.determineType(source)==='map')sourceType+=' Map';if(targetType===sourceType&&target!==source){if(Tools.determineType(target)==='map'&&Tools.determineType(source)==='map')for(const[key,value]of source)target.set(key,mergeValue(target.get(key),value));else if(target!==null&&!Array.isArray(target)&&typeof target==='object'&&source!==null&&!Array.isArray(source)&&typeof source==='object'){for(const key in source)if(source.hasOwnProperty(key))target[key]=mergeValue(target[key],source[key])}else target=source;}else target=source;index+=1}return target}/**
     * Iterates given objects own properties in sorted fashion. For
     * each key value pair given iterator function will be called with
     * value and key as arguments.
     * @param object - Object to iterate.
     * @param iterator - Function to execute for each key value pair. Value
     * will be the first and key will be the second argument.
     * @param context - The "this" binding for given iterator function.
     * @returns List of given sorted keys.
     */static forEachSorted(object,iterator,context){const keys=Tools.sort(object);for(const key of keys)if(typeof object==='object')if(['map','set'].includes(Tools.determineType(object)))// IgnoreTypeCheck
iterator.call(context,object.get(key),key);else if(Array.isArray(object)||object instanceof Object)iterator.call(context,object[key],key);return keys}/**
     * Generates a proxy handler which forwards all operations to given object
     * as there wouldn't be a proxy.
     * @param target - Object to proxy.
     * @param methodNames - Mapping of operand name to object specific method
     * name.
     * @returns Determined proxy handler.
     */static getProxyHandler(target,methodNames={}){methodNames=Tools.extendObject({delete:'[]',get:'[]',has:'[]',set:'[]'},methodNames);return{deleteProperty:function deleteProperty(proxy,key){if(methodNames.delete==='[]')delete target[key];else return target[methodNames.delete](key)},get:function get(proxy,key){if(methodNames.get==='[]')return target[key];return target[methodNames.get](key)},has:function has(proxy,key){if(methodNames.has==='[]')return key in target;return target[methodNames.has](key)},set:function set(proxy,key,value){if(methodNames.set==='[]')target[key]=value;else return target[methodNames.set](value)}}}/**
     * Modifies given target corresponding to given source and removes source
     * modification infos.
     * @param target - Object to modify.
     * @param source - Source object to load modifications from.
     * @param removeIndicatorKey - Indicator property name or value to mark a
     * value to remove from object or list.
     * @param prependIndicatorKey - Indicator property name to mark a value to
     * prepend to target list.
     * @param appendIndicatorKey - Indicator property name to mark a value to
     * append to target list.
     * @param positionPrefix - Indicates a prefix to use a value on given
     * position to add or remove.
     * @param positionSuffix - Indicates a suffix to use a value on given
     * position to add or remove.
     * @param parentSource - Source context to remove modification info from
     * (usually only needed internally).
     * @param parentKey - Source key in given source context to remove
     * modification info from (usually only needed internally).
     * @returns Given target modified with given source.
     */static modifyObject(target,source,removeIndicatorKey='__remove__',prependIndicatorKey='__prepend__',appendIndicatorKey='__append__',positionPrefix='__',positionSuffix='__',parentSource=null,parentKey=null){/* eslint-disable curly */if(Tools.determineType(source)==='map'&&Tools.determineType(target)==='map'){for(const[key,value]of source)if(target.has(key))Tools.modifyObject(target.get(key),value,removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,key)}else if(/* eslint-enable curly */source!==null&&typeof source==='object'&&target!==null&&typeof target==='object')for(const key in source)if(source.hasOwnProperty(key))if([removeIndicatorKey,prependIndicatorKey,appendIndicatorKey].includes(key)){if(Array.isArray(target)){if(key===removeIndicatorKey){for(const valueToModify of[].concat(source[key]))if(typeof valueToModify==='string'&&valueToModify.startsWith(positionPrefix)&&valueToModify.endsWith(positionSuffix))target.splice(parseInt(valueToModify.substring(positionPrefix.length,valueToModify.length-positionSuffix.length)),1);else if(target.includes(valueToModify))target.splice(target.indexOf(valueToModify),1)}else if(key===prependIndicatorKey)target=[].concat(source[key]).concat(target);else target=target.concat(source[key]);}else if(key===removeIndicatorKey)for(const valueToModify of[].concat(source[key]))if(target.hasOwnProperty(valueToModify))delete target[valueToModify];delete source[key];if(parentSource&&parentKey)delete parentSource[parentKey]}else if(target!==null&&target.hasOwnProperty(key))// IgnoreTypeCheck
target[key]=Tools.modifyObject(// IgnoreTypeCheck
target[key],source[key],removeIndicatorKey,prependIndicatorKey,appendIndicatorKey,positionPrefix,positionSuffix,source,key);return target}/**
     * Represents given object as formatted string.
     * @param object - Object to Represents.
     * @param indention - String (usually whitespaces) to use as indention.
     * @param initialIndention - String (usually whitespaces) to use as
     * additional indention for the first object traversing level.
     * @returns Representation string.
     */static representObject(object,indention='    ',initialIndention=''){if(object===null)return'null';if(object===undefined)return'undefined';if(typeof object==='string')return`"${object.replace(/\n/g,`\n${initialIndention}`)}"`;if(Tools.isNumeric(object)||typeof object==='boolean')return`${object}`;if(Array.isArray(object)){let result='[';let firstSeen=false;for(const item of object){if(firstSeen)result+=',';result+=`\n${initialIndention}${indention}`+Tools.representObject(item,indention,`${initialIndention}${indention}`);firstSeen=true}if(firstSeen)result+=`\n${initialIndention}`;result+=']';return result}if(Tools.determineType(object)==='map'){let result='';let firstSeen=false;for(const[key,item]of object){if(firstSeen)result+=`,\n${initialIndention}${indention}`;result+=Tools.representObject(key,indention,`${initialIndention}${indention}`)+' -> '+Tools.representObject(item,indention,`${initialIndention}${indention}`);firstSeen=true}if(!firstSeen)result='EmptyMap';return result}if(Tools.determineType(object)==='set'){let result='{';let firstSeen=false;for(const item of object){if(firstSeen)result+=',';result+=`\n${initialIndention}${indention}`+Tools.representObject(item,indention,`${initialIndention}${indention}`);firstSeen=true}if(firstSeen)result+=`\n${initialIndention}}`;else result='EmptySet';return result}let result='{';const keys=Object.getOwnPropertyNames(object).sort();let firstSeen=false;for(const key of keys){if(firstSeen)result+=',';result+=`\n${initialIndention}${indention}${key}: `+Tools.representObject(object[key],indention,`${initialIndention}${indention}`);firstSeen=true}if(firstSeen)result+=`\n${initialIndention}`;result+='}';return result}/**
     * Sort given objects keys.
     * @param object - Object which keys should be sorted.
     * @returns Sorted list of given keys.
     */static sort(object){const keys=[];if(Array.isArray(object))for(let index=0;index<object.length;index++)keys.push(index);else if(typeof object==='object')if(Tools.determineType(object)==='map')for(const keyValuePair of object)keys.push(keyValuePair[0]);else if(object!==null)for(const key in object)if(object.hasOwnProperty(key))keys.push(key);return keys.sort()}/**
     * Removes a proxy from given data structure recursively.
     * @param object - Object to proxy.
     * @param seenObjects - Tracks all already processed objects to avoid
     * endless loops (usually only needed for internal purpose).
     * @returns Returns given object unwrapped from a dynamic proxy.
     */static unwrapProxy(object,seenObjects=new Set){if(object!==null&&typeof object==='object'){if(seenObjects.has(object))return object;try{if(object.__revoke__){object=object.__target__;object.__revoke__()}}catch(error){return object}finally{seenObjects.add(object)}if(Array.isArray(object)){let index=0;for(const value of object){object[index]=Tools.unwrapProxy(value,seenObjects);index+=1}}else if(Tools.determineType(object)==='map')for(const[key,value]of object)object.set(key,Tools.unwrapProxy(value,seenObjects));else if(Tools.determineType(object)==='set'){const cache=[];for(const value of object){object.delete(value);cache.push(Tools.unwrapProxy(value,seenObjects))}for(const value of cache)object.add(value)}else for(const key in object)if(object.hasOwnProperty(key))object[key]=Tools.unwrapProxy(object[key],seenObjects)}return object}// / endregion
// / region array
/**
     * Merge the contents of two arrays together into the first array.
     * @param target - Target array.
     * @param source - Source array.
     * @returns Target array with merged given source one.
     */static arrayMerge(target,source){if(!Array.isArray(source))source=Array.prototype.slice.call(source);for(const value of source)target.push(value);return target}/**
     * Converts given object into an array.
     * @param object - Target to convert.
     * @returns Generated array.
     */static arrayMake(object){const result=[];if(![null,undefined].includes(result))if(Tools.isArrayLike(Object(object)))Tools.arrayMerge(result,typeof object==='string'?[object]:object);else result.push(object);return result}/**
     * Makes all values in given iterable unique by removing duplicates (The
     * first occurrences will be left).
     * @param data - Array like object.
     * @returns Sliced version of given object.
     */static arrayUnique(data){const result=[];for(const value of Tools.arrayMake(data))if(!result.includes(value))result.push(value);return result}/**
     * Summarizes given property of given item list.
     * @param data - Array of objects with given property name.
     * @param propertyName - Property name to summarize.
     * @param defaultValue - Value to return if property values doesn't match.
     * @returns Summarized array.
     */static arrayAggregatePropertyIfEqual(data,propertyName,defaultValue=''){let result=defaultValue;if(data&&data.length&&data[0].hasOwnProperty(propertyName)){result=data[0][propertyName];for(const item of Tools.arrayMake(data))if(item[propertyName]!==result)return defaultValue}return result}/**
     * Deletes every item witch has only empty attributes for given property
     * names. If given property names are empty each attribute will be
     * considered. The empty string, "null" and "undefined" will be interpreted
     * as empty.
     * @param data - Data to filter.
     * @param propertyNames - Properties to consider.
     * @returns Given data without empty items.
     */static arrayDeleteEmptyItems(data,propertyNames=[]){if(!data)return data;const result=[];for(const item of Tools.arrayMake(data)){let empty=true;for(const propertyName in item)if(item.hasOwnProperty(propertyName))if(!['',null,undefined].includes(item[propertyName])&&(!propertyNames.length||Tools.arrayMake(propertyNames).includes(propertyName))){empty=false;break}if(!empty)result.push(item)}return result}/**
     * Extracts all properties from all items wich occur in given property
     * names.
     * @param data - Data where each item should be sliced.
     * @param propertyNames - Property names to extract.
     * @returns Data with sliced items.
     */static arrayExtract(data,propertyNames){const result=[];for(const item of Tools.arrayMake(data)){const newItem={};for(const propertyName of Tools.arrayMake(propertyNames))if(item.hasOwnProperty(propertyName))newItem[propertyName]=item[propertyName];result.push(newItem)}return result}/**
     * Extracts all values which matches given regular expression.
     * @param data - Data to filter.
     * @param regularExpression - Pattern to match for.
     * @returns Filtered data.
     */static arrayExtractIfMatches(data,regularExpression){if(!regularExpression)return Tools.arrayMake(data);const result=[];for(const value of Tools.arrayMake(data))if((typeof regularExpression==='string'?new RegExp(regularExpression):regularExpression).test(value))result.push(value);return result}/**
     * Filters given data if given property is set or not.
     * @param data - Data to filter.
     * @param propertyName - Property name to check for existence.
     * @returns Given data without the items which doesn't have specified
     * property.
     */static arrayExtractIfPropertyExists(data,propertyName){if(data&&propertyName){const result=[];for(const item of Tools.arrayMake(data)){let exists=false;for(const key in item)if(key===propertyName&&item.hasOwnProperty(key)&&![undefined,null].includes(item[key])){exists=true;break}if(exists)result.push(item)}return result}return data}/**
     * Extract given data where specified property value matches given
     * patterns.
     * @param data - Data to filter.
     * @param propertyPattern - Mapping of property names to pattern.
     * @returns Filtered data.
     */static arrayExtractIfPropertyMatches(data,propertyPattern){if(data&&propertyPattern){const result=[];for(const item of Tools.arrayMake(data)){let matches=true;for(const propertyName in propertyPattern)if(!(propertyPattern[propertyName]&&(typeof propertyPattern[propertyName]==='string'?new RegExp(propertyPattern[propertyName]):propertyPattern[propertyName]).test(item[propertyName]))){matches=false;break}if(matches)result.push(item)}return result}return data}/**
     * Determines all objects which exists in "first" and in "second".
     * Object key which will be compared are given by "keys". If an empty array
     * is given each key will be compared. If an object is given corresponding
     * initial data key will be mapped to referenced new data key.
     * @param first - Referenced data to check for.
     * @param second - Data to check for existence.
     * @param keys - Keys to define equality.
     * @param strict - The strict parameter indicates whether "null" and
     * "undefined" should be interpreted as equal (takes only effect if given
     * keys aren't empty).
     * @returns Data which does exit in given initial data.
     */static arrayIntersect(first,second,keys=[],strict=true){const containingData=[];second=Tools.arrayMake(second);const intersectItem=function intersectItem(firstItem,secondItem,firstKey,secondKey,keysAreAnArray,iterateGivenKeys){if(iterateGivenKeys){if(keysAreAnArray)firstKey=secondKey}else secondKey=firstKey;if(secondItem[secondKey]!==firstItem[firstKey]&&(strict||!([null,undefined].includes(secondItem[secondKey])&&[null,undefined].includes(firstItem[firstKey]))))return false};for(const firstItem of Tools.arrayMake(first))if(Tools.isPlainObject(firstItem))for(const secondItem of second){let exists=true;let iterateGivenKeys;const keysAreAnArray=Array.isArray(keys);if(Tools.isPlainObject(keys)||keysAreAnArray&&keys.length)iterateGivenKeys=true;else{iterateGivenKeys=false;keys=firstItem}if(Array.isArray(keys)){let index=0;for(const key of keys){if(intersectItem(firstItem,secondItem,index,key,keysAreAnArray,iterateGivenKeys)===false){exists=false;break}index+=1}}else for(const key in keys)if(keys.hasOwnProperty(key))if(intersectItem(firstItem,secondItem,key,keys[key],keysAreAnArray,iterateGivenKeys)===false){exists=false;break}if(exists){containingData.push(firstItem);break}}else if(second.includes(firstItem))containingData.push(firstItem);return containingData}/**
     * Creates a list of items within given range.
     * @param range - Array of lower and upper bounds. If only one value is
     * given lower bound will be assumed to be zero. Both integers have to be
     * positive and will be contained in the resulting array.
     * @param step - Space between two consecutive values.
     * @returns Produced array of integers.
     */static arrayMakeRange(range,step=1){let index;let higherBound;if(range.length===1){index=0;higherBound=parseInt(range[0],10)}else if(range.length===2){index=parseInt(range[0],10);higherBound=parseInt(range[1],10)}else return range;const result=[index];while(index<=higherBound-step){index+=step;result.push(index)}return result}/**
     * Sums up given property of given item list.
     * @param data - The objects with specified property to sum up.
     * @param propertyName - Property name to sum up its value.
     * @returns The aggregated value.
     */static arraySumUpProperty(data,propertyName){let result=0;if(Array.isArray(data)&&data.length)for(const item of data)if(item.hasOwnProperty(propertyName))result+=parseFloat(item[propertyName]||0);return result}/**
     * Adds an item to another item as array connection (many to one).
     * @param item - Item where the item should be appended to.
     * @param target - Target to add to given item.
     * @param name - Name of the target connection.
     * @param checkIfExists - Indicates if duplicates are allowed in resulting
     * list (will result in linear runtime instead of constant one).
     * @returns Item with the appended target.
     */static arrayAppendAdd(item,target,name,checkIfExists=true){if(item.hasOwnProperty(name)){if(!(checkIfExists&&item[name].includes(target)))item[name].push(target)}else item[name]=[target];return item}/**
     * Removes given target on given list.
     * @param list - Array to splice.
     * @param target - Target to remove from given list.
     * @param strict - Indicates whether to fire an exception if given target
     * doesn't exists given list.
     * @returns Item with the appended target.
     */static arrayRemove(list,target,strict=false){if(Array.isArray(list)){const index=list.indexOf(target);if(index===-1){if(strict)throw new Error(`Given target doesn't exists in given list.`)}else/* eslint-disable max-statements-per-line */list.splice(index,1);/* eslint-enable max-statements-per-line */}else if(strict)throw new Error(`Given target isn't an array.`);return list}/**
     * Sorts given object of dependencies in a topological order.
     * @param items - Items to sort.
     * @returns Sorted array of given items respecting their dependencies.
     */static arraySortTopological(items){const edges=[];for(const name in items)if(items.hasOwnProperty(name)){if(!Array.isArray(items[name]))items[name]=[items[name]];if(items[name].length>0)for(const dependencyName of Tools.arrayMake(items[name]))edges.push([name,dependencyName]);else edges.push([name])}const nodes=[];// Accumulate unique nodes into a large list.
for(const edge of edges)for(const node of edge)if(!nodes.includes(node))nodes.push(node);const sorted=[];// Define a visitor function that recursively traverses dependencies.
const visit=function visit(node,predecessors){// Check if a node is dependent of itself.
if(predecessors.length!==0&&predecessors.includes(node))throw new Error(`Cyclic dependency found. "${node}" is dependent of `+'itself.\n'+`Dependency chain: "${predecessors.join('" -> "')}" => "`+`${node}".`);let index=nodes.indexOf(node);// If the node still exists, traverse its dependencies.
if(index!==-1){let copy;// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                    Loop through all edges and follow dependencies of the
                    current node
                */for(const edge of edges)if(edge[0]===node){/*
                            Lazily create a copy of predecessors with the
                            current node concatenated onto it.
                        */copy=copy||predecessors.concat([node]);// Recurse to node dependencies.
visit(edge[1],copy)}sorted.push(node)}};for(let index=0;index<nodes.length;index++){const node=nodes[index];// Ignore nodes that have been excluded.
if(node){// Mark the node to exclude it from future iterations.
nodes[index]=null;/*
                    Loop through all edges and follow dependencies of the
                    current node.
                */for(const edge of edges)if(edge[0]===node)// Recurse to node dependencies.
visit(edge[1],[node]);sorted.push(node)}}return sorted}// / endregion
// / region string
// // region url handling
/**
     * Translates given string into the regular expression validated
     * representation.
     * @param value - String to convert.
     * @param excludeSymbols - Symbols not to escape.
     * @returns Converted string.
     */static stringEscapeRegularExpressions(value,excludeSymbols=[]){// NOTE: This is only for performance improvements.
if(value.length===1&&!Tools.specialRegexSequences.includes(value))return value;// The escape sequence must also be escaped; but at first.
if(!excludeSymbols.includes('\\'))value.replace(/\\/g,'\\\\');for(const replace of Tools.specialRegexSequences)if(!excludeSymbols.includes(replace))value=value.replace(new RegExp(`\\${replace}`,'g'),`\\${replace}`);return value}/**
     * Translates given name into a valid javaScript one.
     * @param name - Name to convert.
     * @param allowedSymbols - String of symbols which should be allowed within
     * a variable name (not the first character).
     * @returns Converted name is returned.
     */static stringConvertToValidVariableName(name,allowedSymbols='0-9a-zA-Z_$'){return name.toString().replace(/^[^a-zA-Z_$]+/,'').replace(new RegExp(`[^${allowedSymbols}]+([a-zA-Z0-9])`,'g'),function(fullMatch,firstLetter){return firstLetter.toUpperCase()})}/**
     * This method is intended for encoding *key* or *value* parts of query
     * component. We need a custom method because "encodeURIComponent()" is too
     * aggressive and encodes stuff that doesn't have to be encoded per
     * "http://tools.ietf.org/html/rfc3986:".
     * @param url - URL to encode.
     * @param encodeSpaces - Indicates whether given url should encode
     * whitespaces as "+" or "%20".
     * @returns Encoded given url.
     */static stringEncodeURIComponent(url,encodeSpaces){return encodeURIComponent(url).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,encodeSpaces?'%20':'+')}/**
     * Appends a path selector to the given path if there isn't one yet.
     * @param path - The path for appending a selector.
     * @param pathSeparator - The selector for appending to path.
     * @returns The appended path.
     */static stringAddSeparatorToPath(path,pathSeparator='/'){path=path.trim();if(path.substr(-1)!==pathSeparator&&path.length)return path+pathSeparator;return path}/**
     * Checks if given path has given path prefix.
     * @param prefix - Path prefix to search for.
     * @param path - Path to search in.
     * @param separator - Delimiter to use in path (default is the posix
     * conform slash).
     * @returns Value "true" if given prefix occur and "false" otherwise.
     */static stringHasPathPrefix(prefix='/admin',path='location'in $.global&&$.global.location.pathname||'',separator='/'){if(typeof prefix==='string'){if(!prefix.endsWith(separator))prefix+=separator;return path===prefix.substring(0,prefix.length-separator.length)||path.startsWith(prefix)}return false}/**
     * Extracts domain name from given url. If no explicit domain name given
     * current domain name will be assumed. If no parameter given current
     * domain name will be determined.
     * @param url - The url to extract domain from.
     * @param fallback - The fallback host name if no one exits in given url
     * (default is current hostname).
     * @returns Extracted domain.
     */static stringGetDomainName(url='location'in $.global&&$.global.location.href||'',fallback='location'in $.global&&$.global.location.hostname||''){const result=/^([a-z]*:?\/\/)?([^/]+?)(?::[0-9]+)?(?:\/.*|$)/i.exec(url);if(result&&result.length>2&&result[1]&&result[2])return result[2];return fallback}/**
     * Extracts port number from given url. If no explicit port number given
     * and no fallback is defined current port number will be assumed for local
     * links. For external links 80 will be assumed for http protocol or 443
     * for https.
     * @param url - The url to extract port from.
     * @param fallback - Fallback port number if no explicit one was found.
     * Default is derived from current protocol name.
     * @param parameter - Additional parameter for checking if given url is an
     * internal url. Given url and this parameter will be forwarded to the
     * "stringIsInternalURL()" method.
     * @returns Extracted port number.
     */static stringGetPortNumber(url='location'in $.global&&$.global.location.href||'',fallback=null,parameter=[]){const result=/^(?:[a-z]*:?\/\/[^/]+?)?(?:[^/]+?):([0-9]+)/i.exec(url);if(result&&result.length>1)return parseInt(result[1],10);if(fallback!==null)return fallback;if(Tools.stringIsInternalURL(url,...parameter)&&'location'in $.global&&$.global.location.port&&parseInt($.global.location.port,10))return parseInt($.global.location.port,10);return Tools.stringGetProtocolName(url)==='https'?443:80}/**
     * Extracts protocol name from given url. If no explicit url is given,
     * current protocol will be assumed. If no parameter given current protocol
     * number will be determined.
     * @param url - The url to extract protocol from.
     * @param fallback - Fallback port to use if no protocol exists in given
     * url (default is current protocol).
     * returns Extracted protocol.
     */static stringGetProtocolName(url='location'in $.global&&$.global.location.href||'',fallback='location'in $.global&&$.global.location.protocol.substring(0,$.global.location.protocol.length-1)||''){const result=/^([a-z]+):\/\//i.exec(url);if(result&&result.length>1&&result[1])return result[1];return fallback}/**
     * Read a page's GET URL variables and return them as an associative array
     * and preserves ordering.
     * @param keyToGet - If key given the corresponding value is returned and
     * full object otherwise.
     * @param givenInput - An alternative input to the url search parameter. If
     * "#" is given the complete current hash tag will be interpreted as url
     * and search parameter will be extracted from there. If "&" is given
     * classical search parameter and hash parameter will be taken in account.
     * If a search string is given this will be analyzed. The default is to
     * take given search part into account.
     * @param subDelimiter - Defines which sequence indicates the start of
     * parameter in a hash part of the url.
     * @param hashedPathIndicator - If defined and given hash starts with this
     * indicator given hash will be interpreted as path containing search and
     * hash parts.
     * @param givenSearch - Search part to take into account defaults to
     * current url search part.
     * @param givenHash - Hash part to take into account defaults to current
     * url hash part.
     * @returns Returns the current get array or requested value. If requested
     * key doesn't exist "undefined" is returned.
     */static stringGetURLVariable(keyToGet,givenInput,subDelimiter='$',hashedPathIndicator='!',givenSearch,givenHash='location'in $.global&&$.global.location.hash||''){// region set search and hash
let hash=givenHash?givenHash:'#';let search='';if(givenSearch)search=givenSearch;else if(hashedPathIndicator&&hash.startsWith(hashedPathIndicator)){const subHashStartIndex=hash.indexOf('#');let pathAndSearch;if(subHashStartIndex===-1){pathAndSearch=hash.substring(hashedPathIndicator.length);hash=''}else{pathAndSearch=hash.substring(hashedPathIndicator.length,subHashStartIndex);hash=hash.substring(subHashStartIndex)}const subSearchStartIndex=pathAndSearch.indexOf('?');if(subSearchStartIndex!==-1)search=pathAndSearch.substring(subSearchStartIndex)}else if('location'in $.global)search=$.global.location.search||'';let input=givenInput?givenInput:search;// endregion
// region determine data from search and hash if specified
const both=input==='&';if(both||input==='#'){let decodedHash='';try{decodedHash=decodeURIComponent(hash)}catch(error){}const subDelimiterIndex=decodedHash.indexOf(subDelimiter);if(subDelimiterIndex===-1)input='';else{input=decodedHash.substring(subDelimiterIndex);if(input.startsWith(subDelimiter))input=input.substring(subDelimiter.length)}}else if(input.startsWith('?'))input=input.substring('?'.length);let data=input?input.split('&'):[];search=search.substring('?'.length);if(both&&search)data=data.concat(search.split('&'));// endregion
// region construct data structure
const variables=[];for(let value of data){const keyValuePair=value.split('=');let key;try{key=decodeURIComponent(keyValuePair[0])}catch(error){key=''}try{value=decodeURIComponent(keyValuePair[1])}catch(error){value=''}variables.push(key);// IgnoreTypeCheck
variables[key]=value}// endregion
if(keyToGet)// IgnoreTypeCheck
return variables[keyToGet];return variables}/**
     * Checks if given url points to another domain than second given url. If
     * no second given url provided current url will be assumed.
     * @param firstURL - URL to check against second url.
     * @param secondURL - URL to check against first url.
     * @returns Returns "true" if given first url has same domain as given
     * second (or current).
     */static stringIsInternalURL(firstURL,secondURL='location'in $.global&&$.global.location.href||''){const explicitDomainName=Tools.stringGetDomainName(firstURL,false);const explicitProtocolName=Tools.stringGetProtocolName(firstURL,false);const explicitPortNumber=Tools.stringGetPortNumber(firstURL,false);return(!explicitDomainName||explicitDomainName===Tools.stringGetDomainName(secondURL))&&(!explicitProtocolName||explicitProtocolName===Tools.stringGetProtocolName(secondURL))&&(!explicitPortNumber||explicitPortNumber===Tools.stringGetPortNumber(secondURL))}/**
     * Normalized given website url.
     * @param url - Uniform resource locator to normalize.
     * @returns Normalized result.
     */static stringNormalizeURL(url){if(url){url=url.replace(/^:?\/+/,'').replace(/\/+$/,'').trim();if(url.startsWith('http'))return url;return`http://${url}`}return''}/**
     * Represents given website url.
     * @param url - Uniform resource locator to represent.
     * @returns Represented result.
     */static stringRepresentURL(url){if(typeof url==='string')return url.replace(/^(https?)?:?\/+/,'').replace(/\/+$/,'').trim();return''}// // endregion
/**
     * Compresses given style attribute value.
     * @param styleValue - Style value to compress.
     * @returns The compressed value.
     */static stringCompressStyleValue(styleValue){return styleValue.replace(/ *([:;]) */g,'$1').replace(/ +/g,' ').replace(/^;+/,'').replace(/;+$/,'').trim()}/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * Converts a camel cased string to its delimited string version.
     * @param string - The string to format.
     * @param delimiter - Delimiter string
     * @param abbreviations - Collection of shortcut words to represent upper
     * cased.
     * @returns The formatted string.
     */static stringCamelCaseToDelimited(string,delimiter='-',abbreviations=null){/* eslint-enable jsdoc/require-description-complete-sentence */if(!abbreviations)abbreviations=Tools.abbreviations;const escapedDelimiter=Tools.stringGetRegularExpressionValidated(delimiter);if(abbreviations.length){let abbreviationPattern='';for(const abbreviation of abbreviations){if(abbreviationPattern)abbreviationPattern+='|';abbreviationPattern+=abbreviation.toUpperCase()}string=string.replace(new RegExp(`(${abbreviationPattern})(${abbreviationPattern})`,'g'),`$1${delimiter}$2`)}string=string.replace(new RegExp(`([^${escapedDelimiter}])([A-Z][a-z]+)`,'g'),`$1${delimiter}$2`);return string.replace(new RegExp('([a-z0-9])([A-Z])','g'),`$1${delimiter}$2`).toLowerCase()}/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * Converts a string to its capitalize representation.
     * @param string - The string to format.
     * @returns The formatted string.
     */static stringCapitalize(string){/* eslint-enable jsdoc/require-description-complete-sentence */return string.charAt(0).toUpperCase()+string.substring(1)}/**
     * Converts a delimited string to its camel case representation.
     * @param string - The string to format.
     * @param delimiter - Delimiter string to use.
     * @param abbreviations - Collection of shortcut words to represent upper
     * cased.
     * @param preserveWrongFormattedAbbreviations - If set to "True" wrong
     * formatted camel case abbreviations will be ignored.
     * @param removeMultipleDelimiter - Indicates whether a series of delimiter
     * should be consolidated.
     * @returns The formatted string.
     */static stringDelimitedToCamelCase(string,delimiter='-',abbreviations=null,preserveWrongFormattedAbbreviations=false,removeMultipleDelimiter=false){let escapedDelimiter=Tools.stringGetRegularExpressionValidated(delimiter);if(!abbreviations)abbreviations=Tools.abbreviations;let abbreviationPattern;if(preserveWrongFormattedAbbreviations)abbreviationPattern=abbreviations.join('|');else{abbreviationPattern='';for(const abbreviation of abbreviations){if(abbreviationPattern)abbreviationPattern+='|';abbreviationPattern+=`${Tools.stringCapitalize(abbreviation)}|${abbreviation}`}}let stringStartsWithDelimiter=false;if(string.startsWith(delimiter)){string=string.substring(delimiter.length);stringStartsWithDelimiter=true}string=string.replace(new RegExp(`(${escapedDelimiter})(${abbreviationPattern})`+`(${escapedDelimiter}|$)`,'g'),function(fullMatch,before,abbreviation,after){return before+abbreviation.toUpperCase()+after});if(removeMultipleDelimiter)escapedDelimiter=`(?:${escapedDelimiter})+`;string=string.replace(new RegExp(`${escapedDelimiter}([a-zA-Z0-9])`,'g'),function(fullMatch,firstLetter){return firstLetter.toUpperCase()});if(stringStartsWithDelimiter)string=delimiter+string;return string}/**
     * Performs a string formation. Replaces every placeholder "{i}" with the
     * i'th argument.
     * @param string - The string to format.
     * @param additionalArguments - Additional arguments are interpreted as
     * replacements for string formating.
     * @returns The formatted string.
     */static stringFormat(string,...additionalArguments){additionalArguments.unshift(string);let index=0;for(const value of additionalArguments){string=string.replace(new RegExp(`\\{${index}\\}`,'gm'),`${value}`);index+=1}return string}/**
     * Validates the current string for using in a regular expression pattern.
     * Special regular expression chars will be escaped.
     * @param string - The string to format.
     * @returns The formatted string.
     */static stringGetRegularExpressionValidated(string){return string.replace(/([\\|.*$^+[\]()?\-{}])/g,'\\$1')}/**
     * Converts a string to its lower case representation.
     * @param string - The string to format.
     * @returns The formatted string.
     */static stringLowerCase(string){return string.charAt(0).toLowerCase()+string.substring(1)}/**
     * Finds the string match of given query in given target text by applying
     * given normalisation function to target and query.
     * @param target - Target to search in.
     * @param query - Search string to search for.
     * @param normalizer - Function to use as normalisation for queries and
     * search targets.
     */static stringFindNormalizedMatchRange(target,query,normalizer=function(value){return`${value}`.toLowerCase()}){query=normalizer(query);if(normalizer(target)&&query)for(let index=0;index<target.length;index+=1)if(normalizer(target.substring(index)).startsWith(query)){if(query.length===1)return[index,index+1];for(let subIndex=target.length;subIndex>index;subIndex-=1)if(!normalizer(target.substring(index,subIndex)).startsWith(query))return[index,subIndex+1]}return null}/**
     * Wraps given mark strings in given target with given marker.
     * @param target - String to search for marker.
     * @param words - String or array of strings to search in target for.
     * @param marker - HTML template string to mark.
     * @param normalizer - Pure normalisation function to use before searching
     * for matches.
     * @returns Processed result.
     */static stringMark(target,words,marker='<span class="tools-mark">{1}</span>',normalizer=function(value){return`${value}`.toLowerCase()}){if(target&&words&&words.length){target=target.trim();if(!Array.isArray(words))words=[words];let index=0;for(const word of words){words[index]=normalizer(word).trim();index+=1}let restTarget=target;let offset=0;while(true){let nearestRange;let currentRange;for(const word of words){currentRange=Tools.stringFindNormalizedMatchRange(restTarget,word,normalizer);if(currentRange&&(!nearestRange||currentRange[0]<nearestRange[0]))nearestRange=currentRange}if(nearestRange){target=target.substring(0,offset+nearestRange[0])+Tools.stringFormat(marker,target.substring(offset+nearestRange[0],offset+nearestRange[1]))+target.substring(offset+nearestRange[1]);offset+=nearestRange[1]+(marker.length-'{1}'.length);if(target.length<=offset)break;restTarget=target.substring(offset)}else break}}return target}/**
     * Implements the md5 hash algorithm.
     * @param value - Value to calculate md5 hash for.
     * @param onlyAscii - Set to true if given input has ascii characters only
     * to get more performance.
     * @returns Calculated md5 hash value.
     */static stringMD5(value,onlyAscii=false){const hexCharacters='0123456789abcdef'.split('');// region sub helper
/**
         * This function is much faster, so if possible we use it. Some IEs
         * are the only ones I know of that need the idiotic second function,
         * generated by an if clause in the end.
         * @param first - First operand to add.
         * @param second - Second operant to add.
         * @returns The sum of both given operands.
        */let unsignedModule2PowerOf32Addition=function unsignedModule2PowerOf32Addition(first,second){return first+second&4294967295};// / region primary functions needed for the algorithm
/*
         * Implements the basic operation for each round of the algorithm.
         */const cmn=function cmn(q,a,b,x,s,t){a=unsignedModule2PowerOf32Addition(unsignedModule2PowerOf32Addition(a,q),unsignedModule2PowerOf32Addition(x,t));return unsignedModule2PowerOf32Addition(a<<s|a>>>32-s,b)};/**
         * First algorithm part.
         * @param a - Operand.
         * @param b - Operand.
         * @param c - Operand.
         * @param d - Operand.
         * @param x - Operand.
         * @param s - Operand.
         * @param t - Operand.
         * @returns Result.
         */const ff=function ff(a,b,c,d,x,s,t){return cmn(b&c|~b&d,a,b,x,s,t)};/**
         * Second algorithm part.
         * @param a - Operand.
         * @param b - Operand.
         * @param c - Operand.
         * @param d - Operand.
         * @param x - Operand.
         * @param s - Operand.
         * @param t - Operand.
         * @returns Result.
         */const gg=function gg(a,b,c,d,x,s,t){return cmn(b&d|c&~d,a,b,x,s,t)};/**
         * Third algorithm part.
         * @param a - Operand.
         * @param b - Operand.
         * @param c - Operand.
         * @param d - Operand.
         * @param x - Operand.
         * @param s - Operand.
         * @param t - Operand.
         * @returns Result.
         */const hh=function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)};/**
         * Fourth algorithm part.
         * @param a - Operand.
         * @param b - Operand.
         * @param c - Operand.
         * @param d - Operand.
         * @param x - Operand.
         * @param s - Operand.
         * @param t - Operand.
         * @returns Result.
         */const ii=function ii(a,b,c,d,x,s,t){return cmn(c^(b|~d),a,b,x,s,t)};/**
         * Performs all 16 needed steps.
         * @param state - Current state.
         * @param blocks - Blocks to cycle through.
         * @returns Returns given state.
         */const cycle=function cycle(state,blocks){let a=state[0];let b=state[1];let c=state[2];let d=state[3];// region round 1
a=ff(a,b,c,d,blocks[0],7,-680876936);d=ff(d,a,b,c,blocks[1],12,-389564586);c=ff(c,d,a,b,blocks[2],17,606105819);b=ff(b,c,d,a,blocks[3],22,-1044525330);a=ff(a,b,c,d,blocks[4],7,-176418897);d=ff(d,a,b,c,blocks[5],12,1200080426);c=ff(c,d,a,b,blocks[6],17,-1473231341);b=ff(b,c,d,a,blocks[7],22,-45705983);a=ff(a,b,c,d,blocks[8],7,1770035416);d=ff(d,a,b,c,blocks[9],12,-1958414417);c=ff(c,d,a,b,blocks[10],17,-42063);b=ff(b,c,d,a,blocks[11],22,-1990404162);a=ff(a,b,c,d,blocks[12],7,1804603682);d=ff(d,a,b,c,blocks[13],12,-40341101);c=ff(c,d,a,b,blocks[14],17,-1502002290);b=ff(b,c,d,a,blocks[15],22,1236535329);// endregion
// region round 2
a=gg(a,b,c,d,blocks[1],5,-165796510);d=gg(d,a,b,c,blocks[6],9,-1069501632);c=gg(c,d,a,b,blocks[11],14,643717713);b=gg(b,c,d,a,blocks[0],20,-373897302);a=gg(a,b,c,d,blocks[5],5,-701558691);d=gg(d,a,b,c,blocks[10],9,38016083);c=gg(c,d,a,b,blocks[15],14,-660478335);b=gg(b,c,d,a,blocks[4],20,-405537848);a=gg(a,b,c,d,blocks[9],5,568446438);d=gg(d,a,b,c,blocks[14],9,-1019803690);c=gg(c,d,a,b,blocks[3],14,-187363961);b=gg(b,c,d,a,blocks[8],20,1163531501);a=gg(a,b,c,d,blocks[13],5,-1444681467);d=gg(d,a,b,c,blocks[2],9,-51403784);c=gg(c,d,a,b,blocks[7],14,1735328473);b=gg(b,c,d,a,blocks[12],20,-1926607734);// endregion
// region round 3
a=hh(a,b,c,d,blocks[5],4,-378558);d=hh(d,a,b,c,blocks[8],11,-2022574463);c=hh(c,d,a,b,blocks[11],16,1839030562);b=hh(b,c,d,a,blocks[14],23,-35309556);a=hh(a,b,c,d,blocks[1],4,-1530992060);d=hh(d,a,b,c,blocks[4],11,1272893353);c=hh(c,d,a,b,blocks[7],16,-155497632);b=hh(b,c,d,a,blocks[10],23,-1094730640);a=hh(a,b,c,d,blocks[13],4,681279174);d=hh(d,a,b,c,blocks[0],11,-358537222);c=hh(c,d,a,b,blocks[3],16,-722521979);b=hh(b,c,d,a,blocks[6],23,76029189);a=hh(a,b,c,d,blocks[9],4,-640364487);d=hh(d,a,b,c,blocks[12],11,-421815835);c=hh(c,d,a,b,blocks[15],16,530742520);b=hh(b,c,d,a,blocks[2],23,-995338651);// endregion
// region round 4
a=ii(a,b,c,d,blocks[0],6,-198630844);d=ii(d,a,b,c,blocks[7],10,1126891415);c=ii(c,d,a,b,blocks[14],15,-1416354905);b=ii(b,c,d,a,blocks[5],21,-57434055);a=ii(a,b,c,d,blocks[12],6,1700485571);d=ii(d,a,b,c,blocks[3],10,-1894986606);c=ii(c,d,a,b,blocks[10],15,-1051523);b=ii(b,c,d,a,blocks[1],21,-2054922799);a=ii(a,b,c,d,blocks[8],6,1873313359);d=ii(d,a,b,c,blocks[15],10,-30611744);c=ii(c,d,a,b,blocks[6],15,-1560198380);b=ii(b,c,d,a,blocks[13],21,1309151649);a=ii(a,b,c,d,blocks[4],6,-145523070);d=ii(d,a,b,c,blocks[11],10,-1120210379);c=ii(c,d,a,b,blocks[2],15,718787259);b=ii(b,c,d,a,blocks[9],21,-343485551);// endregion
state[0]=unsignedModule2PowerOf32Addition(a,state[0]);state[1]=unsignedModule2PowerOf32Addition(b,state[1]);state[2]=unsignedModule2PowerOf32Addition(c,state[2]);state[3]=unsignedModule2PowerOf32Addition(d,state[3]);return state};// / endregion
/**
         * Converts given character to its corresponding hex code
         * representation.
         * @param character - Character to convert.
         * @returns Converted hex code string.
         */const convertCharactorToHexCode=function convertCharactorToHexCode(character){let hexString='';for(let round=0;round<4;round++)hexString+=hexCharacters[character>>round*8+4&15]+hexCharacters[character>>round*8&15];return hexString};/**
         * Converts given byte array to its corresponding hex code as string.
         * @param value - Array of characters to convert.
         * @returns Converted hex code.
         */const convertToHexCode=function convertToHexCode(value){for(let index=0;index<value.length;index++)value[index]=convertCharactorToHexCode(value[index]);return value.join('')};/**
         * There needs to be support for unicode here, unless we pretend that
         * we can redefine the md5 algorithm for multi-byte characters
         * (perhaps by adding every four 16-bit characters and shortening the
         * sum to 32 bits). Otherwise I suggest performing md5 as if every
         * character was two bytes--e.g., 0040 0025 = @%--but then how will an
         * ordinary md5 sum be matched? There is no way to standardize text
         * to something like utf-8 before transformation; speed cost is
         * utterly prohibitive. The JavaScript standard itself needs to look
         * at this: it should start providing access to strings as preformed
         * utf-8 8-bit unsigned value arrays.
         * @param value - Value to process with each block.
         * @returns Converted byte array.
         */const handleBlock=function handleBlock(value){const blocks=[];for(let blockNumber=0;blockNumber<64;blockNumber+=4)blocks[blockNumber>>2]=value.charCodeAt(blockNumber)+(value.charCodeAt(blockNumber+1)<<8)+(value.charCodeAt(blockNumber+2)<<16)+(value.charCodeAt(blockNumber+3)<<24);return blocks};// endregion
/**
         * Triggers the main algorithm to calculate the md5 representation of
         * given value.
         * @param value - String to convert to its md5 representation.
         * @returns Array of blocks.
         */const main=function main(value){const length=value.length;const state=[1732584193,-271733879,-1732584194,271733878];let blockNumber;for(blockNumber=64;blockNumber<=value.length;blockNumber+=64)cycle(state,handleBlock(value.substring(blockNumber-64,blockNumber)));value=value.substring(blockNumber-64);const tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(blockNumber=0;blockNumber<value.length;blockNumber++)tail[blockNumber>>2]|=value.charCodeAt(blockNumber)<<(blockNumber%4<<3);tail[blockNumber>>2]|=128<<(blockNumber%4<<3);if(blockNumber>55){cycle(state,tail);for(let index=0;index<16;index++)tail[index]=0}tail[14]=length*8;cycle(state,tail);return state};// region final call
if(convertToHexCode(main('hello'))!=='5d41402abc4b2a76b9719d911017c592')/**
             * This function is much faster, so if possible we use it. Some IEs
             * are the only ones I know of that need the idiotic second
             * function, generated by an if clause in the end.
             * @private
             * @param first - First operand to add.
             * @param second - Second operant to add.
             * @returns The sum of both given operands.
            */unsignedModule2PowerOf32Addition=function unsignedModule2PowerOf32Addition(first,second){const lsw=(first&65535)+(second&65535);const msw=(first>>16)+(second>>16)+(lsw>>16);return msw<<16|lsw&65535};return convertToHexCode(main(onlyAscii?value:unescape(encodeURIComponent(value))));// endregion
}/**
     * Normalizes given phone number for automatic dialing mechanisms.
     * @param phoneNumber - Number to normalize.
     * @returns Normalized number.
     */static stringNormalizePhoneNumber(phoneNumber){if(typeof phoneNumber==='string'||typeof phoneNumber==='number')return`${phoneNumber}`.replace(/[^0-9]*\+/,'00').replace(/[^0-9]+/g,'');return''}/**
     * Converts given serialized, base64 encoded or file path given object into
     * a native javaScript one if possible.
     * @param serializedObject - Object as string.
     * @param scope - An optional scope which will be used to evaluate given
     * object in.
     * @param name - The name under given scope will be available.
     * @returns The parsed object if possible and null otherwise.
     */static stringParseEncodedObject(serializedObject,scope={},name='scope'){if(serializedObject.endsWith('.json')&&Tools.isFileSync(serializedObject))serializedObject=fileSystem.readFileSync(serializedObject,{encoding:'utf-8'});if(!serializedObject.startsWith('{'))serializedObject=eval('Buffer').from(serializedObject,'base64').toString('utf8');let result;try{// IgnoreTypeCheck
result=new Function(name,`return ${serializedObject}`)(scope)}catch(error){}if(typeof result==='object')return result;return null}/**
     * Represents given phone number. NOTE: Currently only support german phone
     * numbers.
     * @param phoneNumber - Number to format.
     * @returns Formatted number.
     */static stringRepresentPhoneNumber(phoneNumber){if(['number','string'].includes(Tools.determineType(phoneNumber))&&phoneNumber){// Represent country code and leading area code zero.
phoneNumber=`${phoneNumber}`.replace(/^(00|\+)([0-9]+)-([0-9-]+)$/,'+$2 (0) $3');// Add German country code if not exists.
phoneNumber=phoneNumber.replace(/^0([1-9][0-9-]+)$/,'+49 (0) $1');// Separate area code from base number.
phoneNumber=phoneNumber.replace(/^([^-]+)-([0-9-]+)$/,'$1 / $2');// Partition base number in one triple and tuples or tuples only.
return phoneNumber.replace(/^(.*?)([0-9]+)(-?[0-9]*)$/,function(match,prefix,number,suffix){return prefix+(number.length%2===0?number.replace(/([0-9]{2})/g,'$1 '):number.replace(/^([0-9]{3})([0-9]+)$/,function(match,triple,rest){return`${triple} `+rest.replace(/([0-9]{2})/g,'$1 ').trim()})+suffix).trim()}).trim()}return''}/**
     * Decodes all html symbols in text nodes in given html string.
     * @param htmlString - HTML string to decode.
     * @returns Decoded html string.
     */static stringDecodeHTMLEntities(htmlString){if('document'in $.global){const textareaDomNode=$.global.document.createElement('textarea');textareaDomNode.innerHTML=htmlString;return textareaDomNode.value}return null}/**
     * Converts a dom selector to a prefixed dom selector string.
     * @param selector - A dom node selector.
     * @returns Returns given selector prefixed.
     */normalizeDomNodeSelector(selector){let domNodeSelectorPrefix='';if(this._options.domNodeSelectorPrefix)domNodeSelectorPrefix=`${this._options.domNodeSelectorPrefix} `;if(!(selector.startsWith(domNodeSelectorPrefix)||selector.trim().startsWith('<')))selector=domNodeSelectorPrefix+selector;return selector.trim()}// / endregion
// / region number
/**
     * Determines corresponding utc timestamp for given date object.
     * @param value - Date to convert.
     * @param inMilliseconds - Indicates whether given number should be in
     * seconds (default) or milliseconds.
     * @returns Determined numerous value.
     */static numberGetUTCTimestamp(value,inMilliseconds=false){const date=[undefined,null].includes(value)?new Date:new Date(value);return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds())/(inMilliseconds?1:1000)}/**
     * Checks if given object is java scripts native "Number.NaN" object.
     * @param object - Object to Check.
     * @returns Returns whether given value is not a number or not.
     */static numberIsNotANumber(object){return Tools.determineType(object)==='number'&&isNaN(object)}/**
     * Rounds a given number accurate to given number of digits.
     * @param number - The number to round.
     * @param digits - The number of digits after comma.
     * @returns Returns the rounded number.
     */static numberRound(number,digits=0){return Math.round(number*Math.pow(10,digits))/Math.pow(10,digits)}// / endregion
// / region data transfer
/**
     * Checks if given url response with given status code.
     * @param url - Url to check reachability.
     * @param wait - Boolean indicating if we should retry until a status code
     * will be given.
     * @param expectedStatusCodes - Status codes to check for.
     * @param timeoutInSeconds - Delay after assuming given resource isn't
     * available if no response is coming.
     * @param pollIntervallInSeconds - Seconds between two tries to reach given
     * url.
     * @param options - Fetch options to use.
     * @returns A promise which will be resolved if a request to given url has
     * finished and resulting status code matches given expectedstatus code.
     * Otherwise returned promise will be rejected.
     */static checkReachability(url,wait=false,expectedStatusCodes=200,timeoutInSeconds=10,pollIntervallInSeconds=0.1,options={}){return _asyncToGenerator(function*(){expectedStatusCodes=[].concat(expectedStatusCodes);const check=function check(response){if(response&&'status'in response&&// IgnoreTypeCheck
!expectedStatusCodes.includes(response.status))throw new Error(`Given status code ${response.status} differs from `+// IgnoreTypeCheck
`${expectedStatusCodes.join(', ')}.`);return response};if(wait)return new Promise(function(){var _ref2=_asyncToGenerator(function*(resolve,reject){let timedOut=false;const wrapper=function(){var _ref3=_asyncToGenerator(function*(){let response;try{response=yield fetch(url,options)}catch(error){if(!timedOut){/* eslint-disable no-use-before-define */currentlyRunningTimer=Tools.timeout(pollIntervallInSeconds*1000,wrapper);/* eslint-enable no-use-before-define *//*
                                NOTE: A timer rejection is expected. Avoid
                                throwing errors about unhandled promise
                                rejections.
                            */currentlyRunningTimer.catch(Tools.noop)}return error}try{resolve(check(response))}catch(error){reject(error)}finally{/* eslint-disable no-use-before-define */// IgnoreTypeCheck
timer.clear();/* eslint-enable no-use-before-define */}return response});return function wrapper(){return _ref3.apply(this,arguments)}}();let currentlyRunningTimer=Tools.timeout(0,wrapper);const timer=Tools.timeout(timeoutInSeconds*1000);try{yield timer}catch(error){}timedOut=true;// IgnoreTypeCheck
currentlyRunningTimer.clear();reject(`Timeout of ${timeoutInSeconds} seconds reached.`)});return function(_x2,_x3){return _ref2.apply(this,arguments)}}());return check((yield fetch(url,options)))})()}/**
     * Checks if given url isn't reachable.
     * @param url - Url to check reachability.
     * @param wait - Boolean indicating if we should retry until a status code
     * will be given.
     * @param timeoutInSeconds - Delay after assuming given resource will stay
     * available.
     * @param pollIntervallInSeconds - Seconds between two tries to reach given
     * url.
     * @param unexpectedStatusCodes - Status codes to check for.
     * @param options - Fetch options to use.
     * @returns A promise which will be resolved if a request to given url
     * couldn't finished. Otherwise returned promise will be rejected.
     */static checkUnreachability(url,wait=false,timeoutInSeconds=10,pollIntervallInSeconds=0.1,unexpectedStatusCodes=null,options={}){return _asyncToGenerator(function*(){const check=function check(response){if(unexpectedStatusCodes){unexpectedStatusCodes=[].concat(unexpectedStatusCodes);if(response&&'status'in response&&unexpectedStatusCodes.includes(response.status))throw new Error(`Given url "${url}" is reachable ans responses with `+`unexpected status code "${response.status}".`);return new Error('Given status code is not "'+`${unexpectedStatusCodes.join(', ')}".`)}};if(wait)return new Promise(function(){var _ref4=_asyncToGenerator(function*(resolve,reject){let timedOut=false;const wrapper=function(){var _ref5=_asyncToGenerator(function*(){try{const response=yield fetch(url,options);if(timedOut)return response;const result=check(response);if(result){// IgnoreTypeCheck
timer.clear();resolve(result);return result}/* eslint-disable no-use-before-define */currentlyRunningTimer=Tools.timeout(pollIntervallInSeconds*1000,wrapper);/* eslint-enable no-use-before-define *//*
                            NOTE: A timer rejection is expected. Avoid throwing
                            errors about unhandled promise rejections.
                        */currentlyRunningTimer.catch(Tools.noop)}catch(error){/* eslint-disable no-use-before-define */// IgnoreTypeCheck
timer.clear();/* eslint-enable no-use-before-define */resolve(error);return error}});return function wrapper(){return _ref5.apply(this,arguments)}}();let currentlyRunningTimer=Tools.timeout(0,wrapper);const timer=Tools.timeout(timeoutInSeconds*1000);try{yield timer}catch(error){}timedOut=true;// IgnoreTypeCheck
currentlyRunningTimer.clear();reject(`Timeout of ${timeoutInSeconds} seconds reached.`)});return function(_x4,_x5){return _ref4.apply(this,arguments)}}());try{const result=check((yield fetch(url,options)));if(result)return result}catch(error){return error}throw new Error(`Given url "${url}" is reachable.`)})()}/**
     * Send given data to a given iframe.
     * @param target - Name of the target iframe or the target iframe itself.
     * @param url - URL to send to data to.
     * @param data - Data holding object to send data to.
     * @param requestType - The forms action attribute value. If nothing is
     * provided "post" will be used as default.
     * @param removeAfterLoad - Indicates if created iframe should be removed
     * right after load event. Only works if an iframe object is given instead
     * of a simple target name.
     * @returns Returns the given target as extended dom node.
     */static sendToIFrame(target,url,data,requestType='post',removeAfterLoad=false){const $targetDomNode=typeof target==='string'?$(`iframe[name"${target}"]`):$(target);const $formDomNode=$('<form>').attr({action:url,method:requestType,target:$targetDomNode.attr('name')});for(const name in data)if(data.hasOwnProperty(name))$formDomNode.append($('<input>').attr({type:'hidden',name,value:data[name]}));/*
            NOTE: The given target form have to be injected into document
            object model to successfully submit.
        */if(removeAfterLoad)$targetDomNode.on('load',function(){return $targetDomNode.remove()});$formDomNode.insertAfter($targetDomNode);$formDomNode[0].submit();$formDomNode.remove();return $targetDomNode}/**
     * Send given data to a temporary created iframe.
     * @param url - URL to send to data to.
     * @param data - Data holding object to send data to.
     * @param requestType - The forms action attribute value. If nothing is
     * provided "post" will be used as default.
     * @param removeAfterLoad - Indicates if created iframe should be removed
     * right after load event.
     * @returns Returns the dynamically created iframe.
     */sendToExternalURL(url,data,requestType='post',removeAfterLoad=true){const $iFrameDomNode=$('<iframe>').attr('name',this.constructor.name.charAt(0).toLowerCase()+this.constructor.name.substring(1)+new Date().getTime()).hide();this.$domNode.append($iFrameDomNode);this.constructor.sendToIFrame($iFrameDomNode,url,data,requestType,removeAfterLoad);return $iFrameDomNode}// / endregion
// / region file
/**
     * Copies given source directory via path to given target directory
     * location with same target name as source file has or copy to given
     * complete target directory path.
     * @param sourcePath - Path to directory to copy.
     * @param targetPath - Target directory or complete directory location to
     * copy in.
     * @param callback - Function to invoke for each traversed file.
     * @param readOptions - Options to use for reading source file.
     * @param writeOptions - Options to use for writing to target file.
     * @returns Promise holding the determined target directory path.
     */static copyDirectoryRecursive(sourcePath,targetPath,callback=Tools.noop,readOptions={encoding:null,flag:'r'},writeOptions={encoding:'utf8',flag:'w',mode:438}){return new Promise(function(){var _ref6=_asyncToGenerator(function*(resolve,reject){// NOTE: Check if folder needs to be created or integrated.
let isDirectory;try{isDirectory=yield Tools.isDirectory(targetPath)}catch(error){return reject(error)}if(isDirectory)targetPath=path.resolve(targetPath,path.basename(sourcePath));sourcePath=path.resolve(sourcePath);fileSystem.mkdir(targetPath,function(){var _ref7=_asyncToGenerator(function*(error){if(error&&!('code'in error&&error.code==='EEXIST'))return reject(error);let files;try{files=yield Tools.walkDirectoryRecursively(sourcePath,callback)}catch(error){return reject(error)}for(const currentSourceFile of files){const currentTargetPath=path.join(targetPath,currentSourceFile.path.substring(sourcePath.length));if(currentSourceFile.stat.isDirectory())try{fileSystem.mkdirSync(currentTargetPath)}catch(error){if(!('code'in error&&error.code==='EEXIST'))throw error}else try{yield Tools.copyFile(currentSourceFile.path,currentTargetPath,readOptions,writeOptions)}catch(error){return reject(error)}}resolve(targetPath)});return function(_x8){return _ref7.apply(this,arguments)}}())});return function(_x6,_x7){return _ref6.apply(this,arguments)}}())}/**
     * Copies given source directory via path to given target directory
     * location with same target name as source file has or copy to given
     * complete target directory path.
     * @param sourcePath - Path to directory to copy.
     * @param targetPath - Target directory or complete directory location to
     * copy in.
     * @param callback - Function to invoke for each traversed file.
     * @param readOptions - Options to use for reading source file.
     * @param writeOptions - Options to use for writing to target file.
     * @returns Determined target directory path.
     */static copyDirectoryRecursiveSync(sourcePath,targetPath,callback=Tools.noop,readOptions={encoding:null,flag:'r'},writeOptions={encoding:'utf8',flag:'w',mode:438}){// Check if folder needs to be created or integrated.
sourcePath=path.resolve(sourcePath);if(Tools.isDirectorySync(targetPath))targetPath=path.resolve(targetPath,path.basename(sourcePath));fileSystem.mkdirSync(targetPath);for(const currentSourceFile of Tools.walkDirectoryRecursivelySync(sourcePath,callback)){const currentTargetPath=path.join(targetPath,currentSourceFile.path.substring(sourcePath.length));if(currentSourceFile.stat.isDirectory())fileSystem.mkdirSync(currentTargetPath);else Tools.copyFileSync(currentSourceFile.path,currentTargetPath,readOptions,writeOptions)}return targetPath}/**
     * Copies given source file via path to given target directory location
     * with same target name as source file has or copy to given complete
     * target file path.
     * @param sourcePath - Path to file to copy.
     * @param targetPath - Target directory or complete file location to copy
     * to.
     * @param readOptions - Options to use for reading source file.
     * @param writeOptions - Options to use for writing to target file.
     * @returns Determined target file path.
     */static copyFile(sourcePath,targetPath,readOptions={encoding:null,flag:'r'},writeOptions={encoding:'utf8',flag:'w',mode:438}){/*
            NOTE: If target path references a directory a new file with the
            same name will be created.
        */return new Promise(function(){var _ref8=_asyncToGenerator(function*(resolve,reject){let isDirectory;try{isDirectory=yield Tools.isDirectory(targetPath)}catch(error){return reject(error)}if(isDirectory)targetPath=path.resolve(targetPath,path.basename(sourcePath));fileSystem.readFile(sourcePath,readOptions,function(error,data){if(error)reject(error);else fileSystem.writeFile(targetPath,data,writeOptions,function(error){if(error)reject(error);else resolve(targetPath)})})});return function(_x9,_x10){return _ref8.apply(this,arguments)}}())}/**
     * Copies given source file via path to given target directory location
     * with same target name as source file has or copy to given complete
     * target file path.
     * @param sourcePath - Path to file to copy.
     * @param targetPath - Target directory or complete file location to copy
     * to.
     * @param readOptions - Options to use for reading source file.
     * @param writeOptions - Options to use for writing to target file.
     * @returns Determined target file path.
     */static copyFileSync(sourcePath,targetPath,readOptions={encoding:null,flag:'r'},writeOptions={encoding:'utf8',flag:'w',mode:438}){/*
            NOTE: If target path references a directory a new file with the
            same name will be created.
        */if(Tools.isDirectorySync(targetPath))targetPath=path.resolve(targetPath,path.basename(sourcePath));fileSystem.writeFileSync(targetPath,fileSystem.readFileSync(sourcePath,readOptions),writeOptions);return targetPath}/**
     * Checks if given path points to a valid directory.
     * @param filePath - Path to directory.
     * @returns A promise holding a boolean which indicates directory
     * existents.
     */static isDirectory(filePath){return new Promise(function(resolve,reject){return fileSystem.stat(filePath,function(error,stat){if(error){if(error.hasOwnProperty('code'// IgnoreTypeCheck
)&&['ENOENT','ENOTDIR'].includes(error.code))resolve(false);else reject(error);}else resolve(stat.isDirectory())})})}/**
     * Checks if given path points to a valid directory.
     * @param filePath - Path to directory.
     * @returns A boolean which indicates directory existents.
     */static isDirectorySync(filePath){try{return fileSystem.statSync(filePath).isDirectory()}catch(error){if(error.hasOwnProperty('code')&&['ENOENT','ENOTDIR'].includes(error.code))return false;throw error}}/**
     * Checks if given path points to a valid file.
     * @param filePath - Path to directory.
     * @returns A promise holding a boolean which indicates directory
     * existents.
     */static isFile(filePath){return new Promise(function(resolve,reject){return fileSystem.stat(filePath,function(error,stat){if(error){if(error.hasOwnProperty('code'// IgnoreTypeCheck
)&&['ENOENT','ENOTDIR'].includes(error.code))resolve(false);else reject(error);}else resolve(stat.isFile())})})}/**
     * Checks if given path points to a valid file.
     * @param filePath - Path to file.
     * @returns A boolean which indicates file existents.
     */static isFileSync(filePath){try{return fileSystem.statSync(filePath).isFile()}catch(error){if(error.hasOwnProperty('code')&&['ENOENT','ENOTDIR'].includes(error.code))return false;throw error}}/**
     * Iterates through given directory structure recursively and calls given
     * callback for each found file. Callback gets file path and corresponding
     * stat object as argument.
     * @param directoryPath - Path to directory structure to traverse.
     * @param callback - Function to invoke for each traversed file and
     * potentially manipulate further traversing.
     * @param options - Options to use for nested "readdir" calls.
     * @returns A promise holding the determined files.
     */static walkDirectoryRecursively(directoryPath,callback=Tools.noop,options='utf8'){return new Promise(function(resolve,reject){return fileSystem.readdir(directoryPath,options,function(){var _ref9=_asyncToGenerator(function*(error,fileNames){if(error)return reject(error);const files=[];const statPromises=[];for(const fileName of fileNames){const filePath=path.resolve(directoryPath,fileName);statPromises.push(new Promise(function(resolve){return fileSystem.stat(filePath,function(error,stat){files.push({directoryPath,name:fileName,path:filePath,stat:error||stat});resolve()})}))}yield Promise.all(statPromises);if(callback)/*
                        NOTE: Directories have to be iterated first to
                        potentially avoid deeper iterations.
                    */files.sort(function(firstFile,secondFile){if(firstFile.stat.isDirectory()){if(secondFile.stat.isDirectory())return 0;return-1}if(secondFile.stat.isDirectory())return 1;return 0});let finalFiles=[];for(const file of files){finalFiles.push(file);let result=callback(file);if(result===null)break;if(typeof result==='object'&&'then'in result)result=yield result;if(result===null)break;if(result!==false&&file.stat.isDirectory())finalFiles=finalFiles.concat((yield Tools.walkDirectoryRecursively(file.path,callback)))}resolve(finalFiles)});return function(_x11,_x12){return _ref9.apply(this,arguments)}}())})}/**
     * Iterates through given directory structure recursively and calls given
     * callback for each found file. Callback gets file path and corresponding
     * stat object as argument.
     * @param directoryPath - Path to directory structure to traverse.
     * @param callback - Function to invoke for each traversed file.
     * @param options - Options to use for nested "readdir" calls.
     * @returns Determined list if all files.
     */static walkDirectoryRecursivelySync(directoryPath,callback=Tools.noop,options='utf8'){let files=[];for(const fileName of fileSystem.readdirSync(directoryPath,options)){const filePath=path.resolve(directoryPath,fileName);files.push({directoryPath,name:fileName,path:filePath,stat:fileSystem.statSync(filePath)})}if(callback)/*
                NOTE: Directories have to be iterated first to potentially
                avoid deeper iterations.
            */files.sort(function(firstFile,secondFile){if(firstFile.stat.isDirectory()){if(secondFile.stat.isDirectory())return 0;return-1}if(secondFile.stat.isDirectory())return 1;return 0});let finalFiles=[];for(const file of files){finalFiles.push(file);const result=callback(file);if(result===null)break;if(result!==false&&file.stat.isDirectory())finalFiles=finalFiles.concat(Tools.walkDirectoryRecursivelySync(file.path,callback))}return finalFiles}// / endregion
// / region process handler
/**
     * Generates a one shot close handler which triggers given promise methods.
     * If a reason is provided it will be given as resolve target. An Error
     * will be generated if return code is not zero. The generated Error has
     * a property "returnCode" which provides corresponding process return
     * code.
     * @param resolve - Promise's resolve function.
     * @param reject - Promise's reject function.
     * @param reason - Promise target if process has a zero return code.
     * @param callback - Optional function to call of process has successfully
     * finished.
     * @returns Process close handler function.
     */static getProcessCloseHandler(resolve,reject,reason=null,callback=function(){}){let finished=false;return function(returnCode,...parameter){if(finished)finished=true;else{finished=true;if(typeof returnCode!=='number'||returnCode===0){callback();resolve({reason,parameter})}else{const error=new Error(`Task exited with error code ${returnCode}`);// IgnoreTypeCheck
error.returnCode=returnCode;// IgnoreTypeCheck
error.parameter=parameter;reject(error)}}}}/**
     * Forwards given child process communication channels to corresponding
     * current process communication channels.
     * @param childProcess - Child process meta data.
     * @returns Given child process meta data.
     */static handleChildProcess(childProcess){childProcess.stdout.pipe(process.stdout);childProcess.stderr.pipe(process.stderr);childProcess.on('close',function(returnCode){if(returnCode!==0)console.error(`Task exited with error code ${returnCode}`)});return childProcess}// / endregion
// endregion
// region protected methods
/* eslint-disable jsdoc/require-description-complete-sentence *//**
     * Helper method for attach event handler methods and their event handler
     * remove pendants.
     * @param parameter - Arguments object given to methods like "bind()" or
     * "unbind()".
     * @param removeEvent - Indicates if "unbind()" or "bind()" was given.
     * @param eventFunctionName - Name of function to wrap.
     * @returns Returns $'s wrapped dom node.
     */_bindEventHelper(parameter,removeEvent=false,eventFunctionName='on'){/* eslint-enable jsdoc/require-description-complete-sentence */const $domNode=$(parameter[0]);if(this.constructor.determineType(parameter[1])==='object'&&!removeEvent){for(const eventType in parameter[1])if(parameter[1].hasOwnProperty(eventType))// IgnoreTypeCheck
this[eventFunctionName]($domNode,eventType,parameter[1][eventType]);return $domNode}parameter=this.constructor.arrayMake(parameter).slice(1);if(parameter.length===0)parameter.push('');if(!parameter[0].includes('.'))parameter[0]+=`.${this.constructor.name}`;if(removeEvent)return $domNode[eventFunctionName](...parameter);return $domNode[eventFunctionName](...parameter)}// endregion
}exports.default=Tools;// endregion
// region handle $ extending
Tools.abbreviations=['html','id','url','us','de','api','href'];Tools.animationEndEventNames='animationend webkitAnimationEnd '+'oAnimationEnd MSAnimationEnd';Tools.classToTypeMapping={'[object Array]':'array','[object Boolean]':'boolean','[object Date]':'date','[object Error]':'error','[object Function]':'function','[object Map]':'map','[object Number]':'number','[object Object]':'object','[object RegExp]':'regexp','[object Set]':'set','[object String]':'string'};Tools.closeEventNames=['exit','close','uncaughtException','SIGINT','SIGTERM','SIGQUIT'];Tools.consoleMethodNames=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn'];Tools.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};Tools.maximalSupportedInternetExplorerVersion=function(){if(!('document'in $.global))return 0;const div=$.global.document.createElement('div');let version;for(version=0;version<10;version++){/*
                NOTE: We split html comment sequences to avoid wrong
                interpretation if this code is embedded in markup.
                NOTE: Internet Explorer 9 and lower sometimes doesn't
                understand conditional comments wich doesn't starts with a
                whitespace. If the conditional markup isn't in a commend.
                Otherwise there shouldn't be any whitespace!
            *//* eslint-disable no-useless-concat */div.innerHTML='<!'+`--[if gt IE ${version}]><i></i><![e`+'ndif]-'+'->';/* eslint-enable no-useless-concat */if(div.getElementsByTagName('i').length===0)break}// Try special detection for internet explorer 10 and 11.
if(version===0&&'navigator'in $.global)if($.global.navigator.appVersion.includes('MSIE 10'))return 10;else if($.global.navigator.userAgent.includes('Trident')&&$.global.navigator.userAgent.includes('rv:11'))return 11;return version}();Tools.noop='noop'in $?$.noop:function(){};Tools.plainObjectPrototypes=[Object.prototype];Tools.specialRegexSequences=['-','[',']','(',')','^','$','*','+','.','{','}'];Tools.transitionEndEventNames='transitionend '+'webkitTransitionEnd oTransitionEnd MSTransitionEnd';Tools._javaScriptDependentContentHandled=false;if('fn'in $)$.fn.Tools=function(...parameter){return new Tools().controller(Tools,parameter,this)};$.Tools=function(...parameter){return new Tools().controller(Tools,parameter)};$.Tools.class=Tools;if('fn'in $){// region prop fix for comments and text nodes
const nativePropFunction=$.fn.prop;/**
     * JQuery's native prop implementation ignores properties for text nodes,
     * comments and attribute nodes.
     * @param key - Name of property to retrieve from current dom node.
     * @param additionalParameter - Additional parameter will be forwarded to
     * native prop function also.
     * @returns Returns value if used as getter or current dom node if used as
     * setter.
     */$.fn.prop=function(key,...additionalParameter){if(additionalParameter.length<2&&this.length&&['#text','#comment'].includes(this[0].nodeName)&&key in this[0]){if(additionalParameter.length===0)return this[0][key];if(additionalParameter.length===1){this[0][key]=additionalParameter[0];return this}}return nativePropFunction.call(this,key,...additionalParameter)};// endregion
// region fix script loading errors with canceling requests after dom ready
$.readyException=function(error){if(!(typeof error==='string'&&error==='canceled'))throw error};// endregion
}// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), __webpack_require__(3), __webpack_require__(4)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_5__ === 'undefined') {var e = new Error("Cannot find module \"jQuery\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});