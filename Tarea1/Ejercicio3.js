const Logger = (function () {

  const LEVELS = {
    INFO: 0,
    WARN: 1,
    ERROR: 2
  };

  let currentLevel = LEVELS.INFO;
  let output = "console"; 

  let fileBuffer = [];

  function shouldLog(level) {
    return level >= currentLevel;
  }

  function write(message) {
    if (output === "console") {
      console.log(message);
    } else if (output === "file") {
      fileBuffer.push(message);
    }
  }

  function format(type, msg) {
    const time = new Date().toISOString();
    return `[${time}] [${type}] ${msg}`;
  }

  return {
    setLevel(level) {
      currentLevel = LEVELS[level];
    },

    setOutput(dest) {
      output = dest;
    },

    info(msg) {
      if (shouldLog(LEVELS.INFO)) {
        write(format("INFO", msg));
      }
    },

    warn(msg) {
      if (shouldLog(LEVELS.WARN)) {
        write(format("WARN", msg));
      }
    },

    error(msg) {
      if (shouldLog(LEVELS.ERROR)) {
        write(format("ERROR", msg));
      }
    },

    getFileLogs() {
      return [...fileBuffer];
    },

    clearFileLogs() {
      fileBuffer = [];
    }
  };
})();
