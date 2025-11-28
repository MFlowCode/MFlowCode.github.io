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
          [ "Parameter Descriptions", "md_case.html#autotoc_md10", null ],
          [ "Elliptic Smoothing", "md_case.html#autotoc_md11", null ]
        ] ],
        [ "Immersed Boundary Patches", "md_case.html#autotoc_md12", [
          [ "Parameter Descriptions", "md_case.html#autotoc_md13", null ]
        ] ],
        [ "Fluid Material’s", "md_case.html#autotoc_md14", null ],
        [ "Simulation Algorithm", "md_case.html#autotoc_md15", [
          [ "Boundary Condition Patches", "md_case.html#autotoc_md16", null ],
          [ "Constant Time-Stepping", "md_case.html#autotoc_md17", [
            [ "Adaptive Time-Stepping", "md_case.html#autotoc_md18", null ]
          ] ]
        ] ],
        [ "Formatted Output", "md_case.html#autotoc_md19", null ],
        [ "Acoustic Source", "md_case.html#acoustic-source", null ],
        [ "Sub-grid Bubble Models", "md_case.html#autotoc_md20", [
          [ "9.1 Ensemble-Averaged Bubble Model", "md_case.html#autotoc_md21", null ],
          [ "9.2 Volume-Averaged Bubble Model", "md_case.html#autotoc_md22", null ]
        ] ],
        [ "Velocity Field Setup", "md_case.html#autotoc_md23", null ],
        [ "Phase Change Model", "md_case.html#autotoc_md24", null ],
        [ "Artificial Mach Number", "md_case.html#autotoc_md25", null ],
        [ "Body Forces", "md_case.html#autotoc_md26", null ],
        [ "Magnetohydrodynamics (MHD)", "md_case.html#autotoc_md27", null ],
        [ "Elasticity", "md_case.html#autotoc_md28", null ],
        [ "Cylindrical Coordinates", "md_case.html#autotoc_md29", null ]
      ] ],
      [ "Enumerations", "md_case.html#autotoc_md30", [
        [ "Boundary conditions", "md_case.html#autotoc_md31", null ],
        [ "Generalized Characteristic Boundary conditions", "md_case.html#autotoc_md32", null ],
        [ "Patch types", "md_case.html#autotoc_md33", null ],
        [ "Immersed Boundary Patch Types", "md_case.html#autotoc_md34", null ],
        [ "Acoustic Supports", "md_case.html#acoustic-supports", null ],
        [ "Conservative Variables Ordering", "md_case.html#autotoc_md35", null ],
        [ "Primitive Variables Ordering", "md_case.html#autotoc_md36", null ]
      ] ]
    ] ],
    [ "Containers", "md_docker.html", [
      [ "Navigating Docker", "md_docker.html#autotoc_md38", [
        [ "Docker Desktop GUI", "md_docker.html#autotoc_md39", null ],
        [ "Docker CLI", "md_docker.html#autotoc_md40", null ]
      ] ],
      [ "Details on Running Containers", "md_docker.html#autotoc_md41", [
        [ "Portability", "md_docker.html#autotoc_md42", null ]
      ] ],
      [ "Using Supercomputers/Clusters via Apptainer/Singularity", "md_docker.html#autotoc_md43", [
        [ "Interactive Shell", "md_docker.html#autotoc_md44", null ],
        [ "For Portability", "md_docker.html#autotoc_md45", null ],
        [ "Slurm Job", "md_docker.html#autotoc_md46", null ]
      ] ],
      [ "Tag Details", "md_docker.html#autotoc_md47", [
        [ "Base Images", "md_docker.html#autotoc_md48", null ],
        [ "Tag Structure", "md_docker.html#autotoc_md49", null ],
        [ "Example Tags", "md_docker.html#autotoc_md50", null ],
        [ "Architecture Support", "md_docker.html#autotoc_md51", null ]
      ] ]
    ] ],
    [ "Example Cases", "md_examples.html", [
      [ "Lax shock tube problem (1D)", "md_examples.html#autotoc_md53", [
        [ "Initial Condition", "md_examples.html#autotoc_md54", null ],
        [ "Result", "md_examples.html#autotoc_md55", null ]
      ] ],
      [ "Scaling and Performance test", "md_examples.html#autotoc_md56", [
        [ "Weak Scaling", "md_examples.html#autotoc_md57", null ],
        [ "Strong Scaling", "md_examples.html#autotoc_md58", null ],
        [ "Example", "md_examples.html#autotoc_md59", null ]
      ] ],
      [ "Rayleigh-Taylor Instability (3D)", "md_examples.html#autotoc_md60", [
        [ "Final Condition and Linear Theory", "md_examples.html#autotoc_md61", null ]
      ] ],
      [ "2D IBM CFL dt (2D)", "md_examples.html#autotoc_md62", [
        [ "Result", "md_examples.html#autotoc_md63", null ]
      ] ],
      [ "Shu-Osher problem (1D)", "md_examples.html#autotoc_md64", [
        [ "Initial Condition", "md_examples.html#autotoc_md65", null ],
        [ "Result", "md_examples.html#autotoc_md66", null ]
      ] ],
      [ "Kelvin-Helmholtz Instability (2D)", "md_examples.html#autotoc_md67", null ],
      [ "Gas Jet (2D)", "md_examples.html#autotoc_md70", [
        [ "Final Condition", "md_examples.html#autotoc_md71", null ]
      ] ],
      [ "1D Multi-Component Reactive Shock Tube", "md_examples.html#autotoc_md72", [
        [ "Initial Condition", "md_examples.html#autotoc_md73", null ],
        [ "Results", "md_examples.html#autotoc_md74", null ]
      ] ],
      [ "Forward Facing Step (2D)", "md_examples.html#autotoc_md75", [
        [ "Final Condition (Density)", "md_examples.html#autotoc_md76", null ]
      ] ],
      [ "2D Riemann Test (2D)", "md_examples.html#autotoc_md77", [
        [ "Density Initial and Final Conditions", "md_examples.html#autotoc_md78", null ]
      ] ],
      [ "Perfectly Stirred Reactor", "md_examples.html#autotoc_md79", null ],
      [ "Lid-Driven Cavity Problem (2D)", "md_examples.html#autotoc_md80", [
        [ "Final Condition", "md_examples.html#autotoc_md81", null ],
        [ "Centerline Velocities", "md_examples.html#autotoc_md82", null ]
      ] ],
      [ "Richtmyer-Meshkov Instability (2D)", "md_examples.html#autotoc_md83", null ],
      [ "Viscous Shock Tube (2D)", "md_examples.html#autotoc_md86", null ],
      [ "Isentropic vortex problem (2D)", "md_examples.html#autotoc_md89", [
        [ "Density", "md_examples.html#autotoc_md90", null ],
        [ "Density Norms", "md_examples.html#autotoc_md91", null ]
      ] ],
      [ "Titarev-Toro problem (1D)", "md_examples.html#autotoc_md92", [
        [ "Initial Condition", "md_examples.html#autotoc_md93", null ],
        [ "Result", "md_examples.html#autotoc_md94", null ]
      ] ],
      [ "2D Hardcodied IC Example", "md_examples.html#autotoc_md95", [
        [ "Initial Condition and Result", "md_examples.html#autotoc_md96", null ]
      ] ],
      [ "Backward Facing Step (2D)", "md_examples.html#autotoc_md97", [
        [ "Final Condition (Density)", "md_examples.html#autotoc_md98", null ]
      ] ],
      [ "Shock Droplet (2D)", "md_examples.html#autotoc_md99", [
        [ "Initial Condition", "md_examples.html#autotoc_md100", null ],
        [ "Result", "md_examples.html#autotoc_md101", null ]
      ] ],
      [ "Taylor-Green Vortex (3D)", "md_examples.html#autotoc_md102", [
        [ "Final Condition", "md_examples.html#autotoc_md103", null ]
      ] ],
      [ "Rayleigh-Taylor Instability (2D)", "md_examples.html#autotoc_md104", [
        [ "Final Condition and Linear Theory", "md_examples.html#autotoc_md105", null ]
      ] ],
      [ "2D Triple Point (2D)", "md_examples.html#autotoc_md106", [
        [ "Numerical Schlieren at Final Time", "md_examples.html#autotoc_md107", null ]
      ] ],
      [ "3D Turbulent Mixing layer (3D)", "md_examples.html#autotoc_md108", [
        [ "Liutex visualization at transitional state", "md_examples.html#autotoc_md109", null ]
      ] ],
      [ "1D Multi-Component Inert Shock Tube", "md_examples.html#autotoc_md110", [
        [ "Initial Condition", "md_examples.html#autotoc_md111", null ],
        [ "Results", "md_examples.html#autotoc_md112", null ]
      ] ],
      [ "IBM Bow Shock (3D)", "md_examples.html#autotoc_md113", [
        [ "Final Condition", "md_examples.html#autotoc_md114", null ]
      ] ]
    ] ],
    [ "Performance", "md_expectedPerformance.html", [
      [ "Figure of merit: Grind time performance", "md_expectedPerformance.html#autotoc_md116", null ],
      [ "Weak scaling", "md_expectedPerformance.html#autotoc_md117", [
        [ "AMD MI250X GPU", "md_expectedPerformance.html#autotoc_md118", null ],
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md119", null ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md120", null ]
      ] ],
      [ "Strong scaling", "md_expectedPerformance.html#autotoc_md121", [
        [ "NVIDIA V100 GPU", "md_expectedPerformance.html#autotoc_md122", [
          [ "16M Grid Points", "md_expectedPerformance.html#autotoc_md123", null ],
          [ "64M Grid Points", "md_expectedPerformance.html#autotoc_md124", null ]
        ] ],
        [ "IBM Power9 CPU", "md_expectedPerformance.html#autotoc_md125", null ]
      ] ]
    ] ],
    [ "Getting Started", "md_getting-started.html", [
      [ "Fetching MFC", "md_getting-started.html#autotoc_md127", null ],
      [ "Install via Homebrew (macOS)", "md_getting-started.html#autotoc_md128", null ],
      [ "Build Environment", "md_getting-started.html#autotoc_md129", null ],
      [ "Building MFC", "md_getting-started.html#autotoc_md130", null ],
      [ "Using Containers", "md_getting-started.html#autotoc_md131", null ],
      [ "Running the Test Suite", "md_getting-started.html#autotoc_md132", null ],
      [ "Running an Example Case", "md_getting-started.html#autotoc_md133", null ]
    ] ],
    [ "GPU Parallelization", "md_gpuParallelization.html", [
      [ "Macro API Documentation", "md_gpuParallelization.html#autotoc_md136", [
        [ "Data Type Meanings", "md_gpuParallelization.html#autotoc_md137", null ],
        [ "Data Flow", "md_gpuParallelization.html#autotoc_md138", null ],
        [ "Computation Macros", "md_gpuParallelization.html#autotoc_md140", null ],
        [ "Data Control Macros", "md_gpuParallelization.html#autotoc_md142", null ],
        [ "Synchronization Macros", "md_gpuParallelization.html#autotoc_md144", null ],
        [ "Miscellaneous Macros", "md_gpuParallelization.html#autotoc_md146", null ]
      ] ],
      [ "Debugging Tools and Tips for GPUs", "md_gpuParallelization.html#autotoc_md148", [
        [ "Compiler agnostic tools", "md_gpuParallelization.html#autotoc_md149", null ],
        [ "OpenMP tools", "md_gpuParallelization.html#autotoc_md150", null ],
        [ "Cray Compiler Tools", "md_gpuParallelization.html#autotoc_md151", [
          [ "Cray General Options", "md_gpuParallelization.html#autotoc_md152", null ],
          [ "Cray OpenACC Options", "md_gpuParallelization.html#autotoc_md153", null ]
        ] ],
        [ "NVHPC Compiler Options", "md_gpuParallelization.html#autotoc_md154", [
          [ "NVHPC General Options", "md_gpuParallelization.html#autotoc_md155", null ],
          [ "NVHPC OpenACC Options", "md_gpuParallelization.html#autotoc_md156", null ],
          [ "NVHPC OpenMP Options", "md_gpuParallelization.html#autotoc_md157", null ]
        ] ],
        [ "Compiler Documentation", "md_gpuParallelization.html#autotoc_md158", null ]
      ] ]
    ] ],
    [ "Papers", "md_papers.html", null ],
    [ "Documentation", "md_readme.html", [
      [ "User Documentation", "md_readme.html#autotoc_md161", null ],
      [ "Code/API Documentation", "md_readme.html#autotoc_md162", null ]
    ] ],
    [ "References", "md_references.html", null ],
    [ "Running", "md_running.html", [
      [ "Using the Homebrew package (macOS)", "md_running.html#autotoc_md165", null ],
      [ "Interactive Execution", "md_running.html#autotoc_md166", null ],
      [ "Batch Execution", "md_running.html#autotoc_md167", [
        [ "GPU Profiling", "md_running.html#autotoc_md168", [
          [ "NVIDIA GPUs", "md_running.html#autotoc_md169", null ],
          [ "AMD GPUs", "md_running.html#autotoc_md170", null ]
        ] ],
        [ "Restarting Cases", "md_running.html#autotoc_md171", null ],
        [ "Example Runs", "md_running.html#autotoc_md172", null ]
      ] ]
    ] ],
    [ "Testing", "md_testing.html", null ],
    [ "Flow visualization", "md_visualization.html", [
      [ "Visualizing with VisIt", "md_visualization.html#autotoc_md179", null ],
      [ "Serial data output", "md_visualization.html#autotoc_md180", null ],
      [ "Remote Visualization on PACE Phoenix", "md_visualization.html#autotoc_md181", [
        [ "Visualizing with Paraview", "md_visualization.html#autotoc_md177", null ],
        [ "Visualizing data in cylindrical coordinates", "md_visualization.html#autotoc_md178", null ],
        [ "Step 1: Setting up your Environment", "md_visualization.html#autotoc_md182", null ],
        [ "Step 2: Customizing the script", "md_visualization.html#autotoc_md183", null ],
        [ "Step 3: Running pace-paraview-server", "md_visualization.html#autotoc_md184", null ]
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