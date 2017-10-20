// json5
module.exports = `{
  // Styles of debugger window
  fontFamily: 'monaco, Consolas, Lucida Console, monospace',
  fontSize: 12,

  // Settings of debugger window, 
  windowBounds: {
    // width: 1024,
    // height: 750,

    // Show frame for debugger window
    // but due to https://github.com/electron/electron/issues/3647
    // so we can't have custom title bar if no frame
    frame: true,
  },

  // Auto check update on RNDebugger startup
  autoUpdate: true,

  // RNDebugger will open debugger window with the ports when app launched
  defaultRNPakcagerPorts: [8081],

  // Env for
  // open React DevTools source file link
  // and enable open in editor for console log for RNDebugger
  editor: '',

  // Set default react-devtools theme (default is match Chrome DevTools theme)
  // but the default theme doesn't change manually changed theme
  // see https://github.com/facebook/react-devtools/blob/master/frontend/Themes/Themes.js to get more 
  defaultReactDevToolsTheme: 'RNDebugger',

  defaultNetworkInspect: false,
}
`;