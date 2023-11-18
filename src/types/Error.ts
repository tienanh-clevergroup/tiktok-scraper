export class VideoUnavailable extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, VideoUnavailable.prototype);
    }
}