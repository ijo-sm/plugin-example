/**
 * Example Plugin
 * Each plugins need to implements load, unload, enable and disable method
 */
module.exports = {
    log: null,
    enabled: false,
    load: (core) => {
        this.log = core.log;
        this.log.debug("Example Plugin Loaded");
    },
    unload: () => {
        this.log.debug("Example Plugin Unloaded");
    },
    enable: () => {
        this.enabled = true;
        this.log.debug("Example Plugin enabled");
    },
    disable: () => {
        this.enabled = false;
        this.log.debug("Example Plugin disabled");
    },
    status: () => {
        return {
            enabled: this.enabled,
        };
    },
    help: () => {
        return {
            enable: "Enable Plugin",
            disable: "Disable Plugin",
            status: "Show plugin status",
            help: "Show this help"
        };
    }
};
