/**
 * Created by Jery on 02.08.2016.
 */
const storage = window.localStorage;

class Storage {
    constructor(key) {
        this.key = key;
    }

    get() {
        return JSON.parse(storage.getItem(this.key));
    }

    set(state) {
        var json = JSON.stringify(state);
        storage.setItem(this.key, json);
    }

    change(handler) {
        var listener = (e) => {
            if (e.storageArea === storage && e.key === this.key) {
                handler(e);
            }
        };

        window.addEventListener('storage', listener);
    }
}

export default Storage;