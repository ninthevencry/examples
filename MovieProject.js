const arrayAverage = array => array.reduce((a, b) => a + b) / array.length;

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        return arrayAverage(this._ratings);
    }

    toggleCheckOutStatus() {
        // if (this._isCheckedOut) {
        //     this._isCheckedOut = false;
        // } else {
        //     this._isCheckedOut = true;
        // }
        //above works, however below uses the getter and setter to toggle the value
        //!this.isCheckedOut will return the current value i.e. true/false and the not (!) will reverse it.
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(title, director, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }
    get director() {
        return this._director;
    }
    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const myBook = new Book("Immortal Dragon", "Vince Henry", 100);
myBook.addRating(5);
myBook.addRating(10);
myBook.addRating(2);
console.log(myBook.getAverageRating());
console.log(myBook.author);
console.log(myBook.isCheckedOut);
myBook.toggleCheckOutStatus();
console.log(myBook.isCheckedOut);
myBook.toggleCheckOutStatus();
console.log(myBook.isCheckedOut);
