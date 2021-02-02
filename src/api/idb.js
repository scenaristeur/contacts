//https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
//https://github.com/cfjedimaster/vue-demos
const DB_NAME = 'workspace';
const DB_VERSION = 1;
let DB;

export default {

	async getDb(key) {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};

			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};

			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore(key, { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteItem(key,item) {

		let db = await this.getDb(key);

		return new Promise(resolve => {

			let trans = db.transaction([key],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore(key);
			store.delete(item.id);
		});
	},
	async getItems(key) {

		let db = await this.getDb(key);

		return new Promise(resolve => {

			let trans = db.transaction([key],'readonly');
			trans.oncomplete = () => {
				resolve(items);
			};

			let store = trans.objectStore(key);
			let items = [];

			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					items.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveItem(key, item) {

		let db = await this.getDb(key);

		return new Promise(resolve => {

			let trans = db.transaction([key],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore(key);
			store.put(item);

		});

	}

}
