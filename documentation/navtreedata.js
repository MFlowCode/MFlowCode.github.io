/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "MFC", "index.html", [
    [ "Documentation", "index.html", "index" ],
    [ "Authors", "md_authors.html", null ],
    [ "Case Files", "md_case.html", [
      [ "Basic Skeleton", "md_case.html#autotoc_md2", null ],
      [ "(Optional) Accepting command line arguments", "md_case.html#autotoc_md3", null ],
      [ "Parameters", "md_case.html#autotoc_md4", [
        [ "Runtime", "md_case.html#autotoc_md5", null ],
        [ "Computational Domain", "md_case.html#autotoc_md6", null ],
        [ "Patches", "md_case.html#autotoc_md7", [
          [ "Analytical Definition of Primitive Variables", "md_case.html#autotoc_md8", null ],
          [ "Hard Coded Patches", "md_case.html#autotoc_md9", null ],
          [ "Parameter Descriptions", "md_case.html#autotoc_md10", null ]
        ] ],
        [ "Fluid Material’s", "md_case.html#autotoc_md11", null ],
        [ "Simulation Algorithm", "md_case.html#autotoc_md12", null ],
        [ "Formatted Output", "md_case.html#autotoc_md13", null ],
        [ "Acoustic Source", "md_case.html#autotoc_md14", null ],
        [ "Ensemble-Averaged Bubble Model", "md_case.html#autotoc_md15", null ],
        [ "Velocity Field Setup", "md_case.html#autotoc_md16", null ],
        [ "Phase Change Model", "md_case.html#autotoc_md17", null ]
      ] ],
      [ "Enumerations", "md_case.html#autotoc_md18", [
        [ "Boundary conditions", "md_case.html#autotoc_md19", null ],
        [ "Patch types", "md_case.html#autotoc_md20", null ],
        [ "Monopole supports", "md_case.html#autotoc_md21", null ],
        [ "Conservative Variables Ordering", "md_case.html#autotoc_md22", null ],
        [ "Primitive Variables Ordering", "md_case.html#autotoc_md23", null ]
      ] ]
    ] ],
    [ "Contributor Covenant Code of Conduct", "md_CODE__OF__CONDUCT.html", [
      [ "Our Pledge", "md_CODE__OF__CONDUCT.html#autotoc_md25", null ],
      [ "Our Standards", "md_CODE__OF__CONDUCT.html#autotoc_md26", null ],
      [ "Enforcement Responsibilities", "md_CODE__OF__CONDUCT.html#autotoc_md27", null ],
      [ "Scope", "md_CODE__OF__CONDUCT.html#autotoc_md28", null ],
      [ "Enforcement", "md_CODE__OF__CONDUCT.html#autotoc_md29", null ],
      [ "Enforcement Guidelines", "md_CODE__OF__CONDUCT.html#autotoc_md30", [
        [ "Correction", "md_CODE__OF__CONDUCT.html#autotoc_md31", null ],
        [ "Warning", "md_CODE__OF__CONDUCT.html#autotoc_md32", null ],
        [ "Temporary Ban", "md_CODE__OF__CONDUCT.html#autotoc_md33", null ],
        [ "Permanent Ban", "md_CODE__OF__CONDUCT.html#autotoc_md34", null ]
      ] ],
      [ "Attribution", "md_CODE__OF__CONDUCT.html#autotoc_md35", null ]
    ] ],
    [ "Example Cases", "md_examples.html", [
      [ "Shu-Osher problem (1D)", "md_examples.html#autotoc_md37", [
        [ "Initial Condition", "md_examples.html#autotoc_md38", null ],
        [ "Result", "md_examples.html#autotoc_md39", null ]
      ] ],
      [ "3D Weak Scaling", "md_examples.html#autotoc_md40", null ],
      [ "Isentropic vortex problem (2D)", "md_examples.html#autotoc_md41", [
        [ "Density", "md_examples.html#autotoc_md42", null ],
        [ "Density Norms", "md_examples.html#autotoc_md43", null ]
      ] ],
      [ "2D Hardcodied IC Example", "md_examples.html#autotoc_md44", [
        [ "Initial Condition", "md_examples.html#autotoc_md45", null ],
        [ "Result", "md_examples.html#autotoc_md46", null ]
      ] ],
      [ "Lid-Driven Cavity Problem (2D)", "md_examples.html#autotoc_md47", [
        [ "Final Condition", "md_examples.html#autotoc_md48", null ],
        [ "Centerline Velocities", "md_examples.html#autotoc_md49", null ]
      ] ],
      [ "2D Riemann Test (2D)", "md_examples.html#autotoc_md50", [
        [ "Density Initial Condition", "md_examples.html#autotoc_md51", null ],
        [ "Density Final Condition", "md_examples.html#autotoc_md52", null ]
      ] ],
      [ "Shock Droplet (2D)", "md_examples.html#autotoc_md53", [
        [ "Initial Condition", "md_examples.html#autotoc_md54", null ],
        [ "Result", "md_examples.html#autotoc_md55", null ]
      ] ],
      [ "Titarev-Toro problem (1D)", "md_examples.html#autotoc_md56", [
        [ "Initial Condition", "md_examples.html#autotoc_md57", null ],
        [ "Result", "md_examples.html#autotoc_md58", null ]
      ] ],
      [ "Lax shock tube problem (1D)", "md_examples.html#autotoc_md59", [
        [ "Initial Condition", "md_examples.html#autotoc_md60", null ],
        [ "Result", "md_examples.html#autotoc_md61", null ]
      ] ]
    ] ],
    [ "Performance Results", "md_expectedPerformance.html", [
      [ "Expected time-steps/hour", "md_expectedPerformance.html#autotoc_md63", null ],
      [ "Weak scaling", "md_expectedPerformance.html#autotoc_md64", [
        [ "AMD MI250X GPU", "md_expectedPerformance.html#autotoc_md65", null ],
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md66", null ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md67", null ]
      ] ],
      [ "Strong scaling", "md_expectedPerformance.html#autotoc_md68", [
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md69", [
          [ "16M Grid Points", "md_expectedPerformance.html#autotoc_md70", null ],
          [ "64M Grid Points", "md_expectedPerformance.html#autotoc_md71", null ]
        ] ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md72", null ]
      ] ]
    ] ],
    [ "Getting Started", "md_getting-started.html", [
      [ "Fetching MFC", "md_getting-started.html#autotoc_md74", null ],
      [ "Build Environment", "md_getting-started.html#autotoc_md75", null ],
      [ "Building MFC", "md_getting-started.html#autotoc_md76", null ],
      [ "Running the Test Suite", "md_getting-started.html#autotoc_md77", null ],
      [ "Running an Example Case", "md_getting-started.html#autotoc_md78", null ]
    ] ],
    [ "References", "md_references.html", null ],
    [ "Running", "md_running.html", [
      [ "Interactive Execution", "md_running.html#autotoc_md84", null ],
      [ "Batch Execution", "md_running.html#autotoc_md85", [
        [ "Profiling with NVIDIA Nsight", "md_running.html#autotoc_md86", null ],
        [ "Restarting Cases", "md_running.html#autotoc_md87", null ],
        [ "Example Runs", "md_running.html#autotoc_md88", null ]
      ] ]
    ] ],
    [ "Testing", "md_testing.html", null ],
    [ "Flow visualization", "md_visualization.html", [
      [ "Procedure", "md_visualization.html#autotoc_md93", null ],
      [ "Serial data output", "md_visualization.html#autotoc_md94", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';