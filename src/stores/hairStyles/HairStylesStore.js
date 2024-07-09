// src/stores/hairStyles/HairStylesStore.js
import { makeObservable, observable, action } from 'mobx';

class HairStylesStore {
  savedStyles = [];

  constructor() {
    makeObservable(this, {
      savedStyles: observable,
      toggleSaveStyle: action,
    });
  }

  toggleSaveStyle(id) {
    if (this.savedStyles.includes(id)) {
      this.savedStyles = this.savedStyles.filter((styleId) => styleId !== id);
    } else {
      this.savedStyles.push(id);
    }
  }
}

export const hairStylesStore = new HairStylesStore();
