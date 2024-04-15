/* config-overrides.js */

module.exports = function override(config, env) {
    console.log("React app rewired works!")
    config.resolve.fallback = {
      fs: false,
      zlib: false,
      net: 'empty',
      stream: false,
      tls: false,
      canvg: false,
      dompurify: false,
      crypto: false
    };
    return config;
  };