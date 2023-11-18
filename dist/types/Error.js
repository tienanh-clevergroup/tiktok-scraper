"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VideoUnavailable extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, VideoUnavailable.prototype);
    }
}
exports.VideoUnavailable = VideoUnavailable;
//# sourceMappingURL=Error.js.map