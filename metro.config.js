const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');
sourceExts: ['js', 'json', 'ts', 'tsx'];
module.exports = defaultConfig;
