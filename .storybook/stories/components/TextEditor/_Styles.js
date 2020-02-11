import React from "react";

const Styles = () => (
  <style>
    {`
        .editor {
            background-color: #fdfdfd;
            border-radius: 2px;
            border: 1px solid #EBEBEB;
        }
        
        .slate {
            padding: 12px 8px;
            min-height: 60px;
        }
        
        .slate table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .slate td {
            border: 1px solid #696969;
            padding: 2px;
        }
        
        .slate thead {
            background-color: #EBEBEB;
        }
        
        .slate p:first-child {
            margin-top: 0;
        }
        
        .slate p:last-child {
            margin-bottom: 0;
        }
        
        .toolbar {
            padding: 8px;
            padding-bottom: 0;
            border-bottom: 1px solid #EBEBEB;
        }
        
        .toolbar button {
            border: none;
            margin: 0;
            padding: 0;
            width: auto;
            overflow: visible;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: normal;
            -webkit-font-smoothing: inherit;
            -moz-osx-font-smoothing: inherit;
            -webkit-appearance: none;
        
            font-family: monospace;
            font-size: 0.8rem;
            background-color: #EBEBEB;
            padding: 8px;
            border-radius: 2px;
            margin-right: 8px;
            margin-bottom: 8px;
            cursor: pointer;
        }
        
        .toolbar button::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
        
        .toolbar button[disabled] {
            cursor: not-allowed;
            opacity: 0.4;
        }
        `}
  </style>
);

export default Styles;
