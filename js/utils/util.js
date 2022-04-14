function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.superclass = Parent.prototype;
}
