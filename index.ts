
// The Subject interface declares a set of methods for managing Subscription 
interface Subject {
    // attach an Observer to the subject
    attach(observer: Observer): void;
    // detach an Observer to from the ubject
    detach(observer: Observer): void;
    //  notify observers about event 
    notify(): void;
}
//  Subject takes some state and notifies about event to all ov=bserver when state changes
class ConcreateSubject implements Subject {

    //  state represented as type any
    public state: any;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const obsIndex = this.observers.indexOf(observer);
        if (obsIndex === -1) {
            this.observers.push(observer);
        }
    }

    public detach(observer: Observer): void {
        const obsIndex = this.observers.indexOf(observer);
        if (obsIndex !== -1) {
            this.observers.splice(obsIndex, 1);
        }

    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

// tehe Observer interface declares the update method , for subjects

interface Observer {
    // Recieve update from Subject 
    update(subject: Subject): void;
}

