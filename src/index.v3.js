export default {
    install: function(app) {
        let isFullscreen = false
        app.config.globalProperties.$elementFullscreen = function(target) {
            return new Promise((resolve, reject) => {
                try {
                    if (!isFullscreen) {
                        if (target.requestFullscreen) {
                        target.requestFullscreen();
                        } else if (target.webkitRequestFullscreen) {
                        target.webkitRequestFullscreen();
                        } else if (target.msRequestFullscreen) {
                        target.msRequestFullscreen();
                        }
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    }
                    isFullscreen = !isFullscreen;
                    // Perform any asynchronous operations here
                    resolve(isFullscreen); // Resolve the promise if everything goes well
                } catch (error) {
                    reject(error); // Reject the promise if there's an error
                }
            });
        };
    }
};