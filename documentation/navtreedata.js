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
        [ "Immersed Boundary Patches", "md_case.html#autotoc_md11", [
          [ "Parameter Descriptions", "md_case.html#autotoc_md12", null ]
        ] ],
        [ "Fluid Material’s", "md_case.html#autotoc_md13", null ],
        [ "Simulation Algorithm", "md_case.html#autotoc_md14", [
          [ "Constant Time-Stepping", "md_case.html#autotoc_md15", [
            [ "Adaptive Time-Stepping", "md_case.html#autotoc_md16", null ]
          ] ]
        ] ],
        [ "Formatted Output", "md_case.html#autotoc_md17", null ],
        [ "Acoustic Source", "md_case.html#acoustic-source", null ],
        [ "Ensemble-Averaged Bubble Model", "md_case.html#autotoc_md18", null ],
        [ "Velocity Field Setup", "md_case.html#autotoc_md19", null ],
        [ "Phase Change Model", "md_case.html#autotoc_md20", null ],
        [ "Artificial Mach Number", "md_case.html#autotoc_md21", null ],
        [ "Body Forces", "md_case.html#autotoc_md22", null ]
      ] ],
      [ "Enumerations", "md_case.html#autotoc_md23", [
        [ "Boundary conditions", "md_case.html#autotoc_md24", null ],
        [ "Patch types", "md_case.html#autotoc_md25", null ],
        [ "Immersed Boundary Patch Types", "md_case.html#autotoc_md26", null ],
        [ "Acoustic Supports", "md_case.html#acoustic-supports", null ],
        [ "Conservative Variables Ordering", "md_case.html#autotoc_md27", null ],
        [ "Primitive Variables Ordering", "md_case.html#autotoc_md28", null ]
      ] ]
    ] ],
    [ "Example Cases", "md_examples.html", [
      [ "Isentropic vortex problem (2D)", "md_examples.html#autotoc_md30", [
        [ "Density", "md_examples.html#autotoc_md31", null ],
        [ "Density Norms", "md_examples.html#autotoc_md32", null ]
      ] ],
      [ "Lid-Driven Cavity Problem (2D)", "md_examples.html#autotoc_md33", [
        [ "Final Condition", "md_examples.html#autotoc_md34", null ],
        [ "Centerline Velocities", "md_examples.html#autotoc_md35", null ]
      ] ],
      [ "Shu-Osher problem (1D)", "md_examples.html#autotoc_md36", [
        [ "Initial Condition", "md_examples.html#autotoc_md37", null ],
        [ "Result", "md_examples.html#autotoc_md38", null ]
      ] ],
      [ "Rayleigh-Taylor Instability (2D)", "md_examples.html#autotoc_md39", [
        [ "Final Condition", "md_examples.html#autotoc_md40", null ],
        [ "Centerline Velocities", "md_examples.html#autotoc_md41", null ]
      ] ],
      [ "Taylor-Green Vortex (3D)", "md_examples.html#autotoc_md42", [
        [ "Final Condition", "md_examples.html#autotoc_md43", null ]
      ] ],
      [ "Titarev-Toro problem (1D)", "md_examples.html#autotoc_md44", [
        [ "Initial Condition", "md_examples.html#autotoc_md45", null ],
        [ "Result", "md_examples.html#autotoc_md46", null ]
      ] ],
      [ "Strong- & Weak-scaling", "md_examples.html#autotoc_md47", [
        [ "Weak Scaling", "md_examples.html#autotoc_md48", null ],
        [ "Strong Scaling", "md_examples.html#autotoc_md49", null ],
        [ "Example", "md_examples.html#autotoc_md50", null ]
      ] ],
      [ "2D Riemann Test (2D)", "md_examples.html#autotoc_md51", [
        [ "Density Initial Condition", "md_examples.html#autotoc_md52", null ],
        [ "Density Final Condition", "md_examples.html#autotoc_md53", null ]
      ] ],
      [ "IBM Bow Shock (3D)", "md_examples.html#autotoc_md54", [
        [ "Final Condition", "md_examples.html#autotoc_md55", null ]
      ] ],
      [ "Rayleigh-Taylor Instability (3D)", "md_examples.html#autotoc_md56", [
        [ "Final Condition", "md_examples.html#autotoc_md57", null ],
        [ "Centerline Velocities", "md_examples.html#autotoc_md58", null ]
      ] ],
      [ "2D IBM CFL dt (2D)", "md_examples.html#autotoc_md59", [
        [ "Result", "md_examples.html#autotoc_md60", null ]
      ] ],
      [ "2D Hardcodied IC Example", "md_examples.html#autotoc_md61", [
        [ "Initial Condition", "md_examples.html#autotoc_md62", null ],
        [ "Result", "md_examples.html#autotoc_md63", null ]
      ] ],
      [ "Lax shock tube problem (1D)", "md_examples.html#autotoc_md64", [
        [ "Initial Condition", "md_examples.html#autotoc_md65", null ],
        [ "Result", "md_examples.html#autotoc_md66", null ]
      ] ],
      [ "Shock Droplet (2D)", "md_examples.html#autotoc_md67", [
        [ "Initial Condition", "md_examples.html#autotoc_md68", null ],
        [ "Result", "md_examples.html#autotoc_md69", null ]
      ] ]
    ] ],
    [ "Performance", "md_expectedPerformance.html", [
      [ "Figure of merit: Grind time performance", "md_expectedPerformance.html#autotoc_md71", null ],
      [ "Weak scaling", "md_expectedPerformance.html#autotoc_md72", [
        [ "AMD MI250X GPU", "md_expectedPerformance.html#autotoc_md73", null ],
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md74", null ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md75", null ]
      ] ],
      [ "Strong scaling", "md_expectedPerformance.html#autotoc_md76", [
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md77", [
          [ "16M Grid Points", "md_expectedPerformance.html#autotoc_md78", null ],
          [ "64M Grid Points", "md_expectedPerformance.html#autotoc_md79", null ]
        ] ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md80", null ]
      ] ]
    ] ],
    [ "Getting Started", "md_getting-started.html", [
      [ "Fetching MFC", "md_getting-started.html#autotoc_md82", null ],
      [ "Build Environment", "md_getting-started.html#autotoc_md83", null ],
      [ "Building MFC", "md_getting-started.html#autotoc_md84", null ],
      [ "Running the Test Suite", "md_getting-started.html#autotoc_md85", null ],
      [ "Running an Example Case", "md_getting-started.html#autotoc_md86", null ]
    ] ],
    [ "Papers", "md_papers.html", null ],
    [ "Documentation", "md_readme.html", [
      [ "User Documentation", "md_readme.html#autotoc_md89", null ],
      [ "Code/API Documentation", "md_readme.html#autotoc_md90", null ]
    ] ],
    [ "References", "md_references.html", null ],
    [ "Running", "md_running.html", [
      [ "Interactive Execution", "md_running.html#autotoc_md93", null ],
      [ "Batch Execution", "md_running.html#autotoc_md94", [
        [ "GPU Profiling", "md_running.html#autotoc_md95", [
          [ "NVIDIA GPUs", "md_running.html#autotoc_md96", null ],
          [ "AMD GPUs", "md_running.html#autotoc_md97", null ]
        ] ],
        [ "Restarting Cases", "md_running.html#restarting_cases", null ],
        [ "Example Runs", "md_running.html#autotoc_md98", null ]
      ] ]
    ] ],
    [ "Testing", "md_testing.html", null ],
    [ "Flow visualization", "md_visualization.html", [
      [ "Procedure", "md_visualization.html#autotoc_md103", null ],
      [ "Serial data output", "md_visualization.html#autotoc_md104", null ],
      [ "Remote Visualization on PACE Phoenix", "md_visualization.html#autotoc_md105", [
        [ "Step 1: Setting up your Environment", "md_visualization.html#autotoc_md106", null ],
        [ "Step 2: Customizing the script", "md_visualization.html#autotoc_md107", null ],
        [ "Step 3: Running pace-paraview-server", "md_visualization.html#autotoc_md108", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';