// Your code here

function ArraySequence(a) {
    this.container = a;
}
ArraySequence.prototype.begin = function () {
    this.curr_idx = 0;
    return this.curr_idx;
};
ArraySequence.prototype.end = function () {
    return this.container.length;
};
ArraySequence.prototype.next = function () {
    ++this.curr_idx
    return this.curr_idx;
};
ArraySequence.prototype.valueAt = function (iterator) {
    return iterator < this.container.length ? this.container[iterator] : undefined;
};


function RangeSequence(from, to) {
    this.container = [];
    for(var i=from; i<=to; ++i) {
        this.container.push(i);
    }
}
RangeSequence.prototype = Object.create(ArraySequence.prototype);


function logFive(seq) {
    var c = 0;
    for(var i=seq.begin(); i!=seq.end() && c<5; i=seq.next(), ++c) {
        console.log(seq.valueAt(i));
    }
}

logFive(new ArraySequence([1, 2]));
logFive(new RangeSequence(100, 1000));