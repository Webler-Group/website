// forked from GitHub/DonDejvo for loading reasons

/* 
    event-manager.js
    version 0.4 (only an early draft!)
    A javascript library that helps you to keep track of all of your events and manage them.
    How to use:
    
    - To add an event, you can use Element.on(type, handler [, options]). Example: 
      > window.on("load", function() { do something })
      Also, method chaining is supported, means that you can call multiple methods at once:
      > window.on("load", () => {})
      >     .on("resize", someOtherFunction)
      >     .on("unload", function() {});
    - To remove events, use Element.off(type?, handler?)
      > document.off("click", anyFunctionName);
      > document.off("click");  // no handler, removes all click elements from document
      > document.off();  // no type and handler, removes all events from document
    - To get an overview over the applied events, call Element.events:
      > console.log(yourElement.events);  // logs a JSON string
*/


let globals = [window, document, HTMLElement.prototype],
    funcID = -1;

window.__eventFunctions = {};

EventTarget.prototype.nativeAddEvent = EventTarget.prototype.addEventListener,
EventTarget.prototype.nativeRemoveEvent = EventTarget.prototype.removeEventListener;

EventTarget.prototype.addEventListener = function(type, listener, ...options) {
    if (!__eventFunctions.hasOwnProperty(type)) {
        Object.defineProperty(__eventFunctions, type, {
            value: {},
            writable: true,
            enumerable: true,
            configurable: true
        });
    }
    __eventFunctions[type]["__event_" + ++funcID] = listener;
    this.nativeAddEvent(type, listener, options);
    let done = false;
    for (const[k, v] of this.__events) {
        if (k == type) {
            v.push((!listener.name.length ? "__event_" + funcID : listener.name) + "()");
            done = true;
        }
        else continue;
    }
    !done ? this.__events.set(type.toString(), [(!listener.name.length ? "__event_" + funcID : listener.name) + "()"]) : null;
}

EventTarget.prototype.removeEventListener = function(type = null, listener = null, ...options) {
    if (type === null && listener === null) {
        for (ev in __eventFunctions) {
            for (func in __eventFunctions[ev]) {
                this.nativeRemoveEvent(ev, __eventFunctions[ev][func]);
            } 
        }
        this.__events.clear();
    } else if (listener === null) {
        for (func in __eventFunctions[type]) {
            this.nativeRemoveEvent(type, __eventFunctions[type][func]);
        }
        this.__events.delete(type);
    } else {
        this.nativeRemoveEvent(type, listener, options);
        for (const[k, v] of this.__events.entries()) {
            if (k == type) {
                v.splice(v.findIndex(f => f == listener.name), 1);
                if (v.length == 0) this.__events.delete(k);
            }
            else continue;
        }
    }
}

for (let global of globals) {
    Object.defineProperties(global, {
        "on": {
            value: function(type, listener) {
                try {
                    global.addEventListener(type, listener);
                } catch (err) {
                    console.log(`Couldn't add event of type ${type} to ${Object.keys(global)[0]}: ${err}`);
                }
                return this;
            }
        },
        "off": {
            value: function(type, listener = null) {
                try {
                    global.removeEventListener(type, listener);
                    
                } catch (err) {
                    console.log(`Couldn't remove event of type ${type} to ${Object.keys(global)[0]}: ${err}`);
                }
                return this;
            }
        },
        "events": {
            get: function() { 
                let info = {};
                for (const[k, v] of this.__events.entries()) {
                    info[k] = v;
                }
                return JSON.stringify(info, null, 4);
            },
        },
        "__events": {
            value: new Map()
        }
    });
}