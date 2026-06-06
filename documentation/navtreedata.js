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
    [ "MFC Documentation", "index.html", null ],
    [ "Code Architecture", "architecture.html", [
      [ "Three-Phase Pipeline", "architecture.html#autotoc_md0", null ],
      [ "Directory Layout", "architecture.html#autotoc_md1", null ],
      [ "Key Data Structures", "architecture.html#autotoc_md2", null ],
      [ "The Simulation Loop", "architecture.html#autotoc_md3", [
        [ "What happens at each stage", "architecture.html#autotoc_md4", null ]
      ] ],
      [ "Module Map", "architecture.html#autotoc_md5", [
        [ "Solver Core", "architecture.html#autotoc_md6", null ],
        [ "Physics Models", "architecture.html#autotoc_md7", null ],
        [ "Boundary Conditions", "architecture.html#autotoc_md8", null ],
        [ "I/O and Startup", "architecture.html#autotoc_md9", null ],
        [ "Infrastructure", "architecture.html#autotoc_md10", null ],
        [ "Pre-Process", "architecture.html#autotoc_md11", null ]
      ] ],
      [ "MPI Parallelization", "architecture.html#autotoc_md12", null ],
      [ "Adding New Physics", "architecture.html#autotoc_md13", null ]
    ] ],
    [ "Authors", "authors.html", null ],
    [ "Case Files", "case.html", [
      [ "Case Files", "case.html#autotoc_md15", [
        [ "Basic Skeleton", "case.html#autotoc_md16", null ],
        [ "(Optional) Accepting command line arguments", "case.html#autotoc_md17", null ],
        [ "Parameters", "case.html#autotoc_md18", null ],
        [ "Feature Compatibility", "case.html#autotoc_md19", [
          [ "1. Runtime", "case.html#sec-runtime", null ],
          [ "2. Computational Domain", "case.html#sec-computational-domain", null ],
          [ "3. Patches", "case.html#sec-patches", [
            [ "Analytical Definition of Primitive Variables", "case.html#autotoc_md20", null ],
            [ "Hard Coded Patches", "case.html#autotoc_md21", null ],
            [ "Parameter Descriptions", "case.html#autotoc_md22", null ],
            [ "Elliptic Smoothing", "case.html#autotoc_md23", null ]
          ] ],
          [ "4. Immersed Boundary Patches", "case.html#sec-immersed-boundary-patches", [
            [ "Parameter Descriptions", "case.html#autotoc_md24", null ]
          ] ],
          [ "5. Fluid Material's", "case.html#sec-fluid-materials", null ],
          [ "6. Simulation Algorithm", "case.html#sec-simulation-algorithm", [
            [ "Boundary Condition Patches", "case.html#boundary-condition-patches", null ],
            [ "Constant Time-Stepping", "case.html#autotoc_md25", [
              [ "Adaptive Time-Stepping", "case.html#autotoc_md26", null ]
            ] ]
          ] ],
          [ "7. Formatted Output", "case.html#sec-formatted-output", null ],
          [ "8. Acoustic Source", "case.html#sec-acoustic-source", null ],
          [ "9. Sub-grid Bubble Models", "case.html#sec-bubble-models", [
            [ "9.1 Ensemble-Averaged Bubble Model", "case.html#autotoc_md27", null ],
            [ "9.2 Volume-Averaged Bubble Model", "case.html#autotoc_md28", null ]
          ] ],
          [ "10. Velocity Field Setup", "case.html#sec-velocity-field-setup", null ],
          [ "11. Phase Change Model", "case.html#sec-phase-change", null ],
          [ "12. Artificial Mach Number", "case.html#sec-artificial-mach-number", null ],
          [ "13. Body Forces", "case.html#autotoc_md29", null ],
          [ "14. Magnetohydrodynamics (MHD)", "case.html#autotoc_md30", null ],
          [ "15. Elasticity", "case.html#autotoc_md31", null ],
          [ "16. Cylindrical Coordinates", "case.html#autotoc_md32", null ],
          [ "17. Chemistry", "case.html#autotoc_md33", null ],
          [ "18. Chemistry-Specific Boundary Conditions", "case.html#autotoc_md34", null ],
          [ "19. GPU Performance (NVIDIA UVM)", "case.html#autotoc_md35", null ]
        ] ],
        [ "Enumerations", "case.html#autotoc_md36", [
          [ "Boundary conditions", "case.html#boundary-conditions", null ],
          [ "Generalized Characteristic Boundary conditions", "case.html#autotoc_md37", null ],
          [ "Patch types", "case.html#patch-types", null ],
          [ "Immersed Boundary Patch Types", "case.html#immersed-boundary-patch-types", null ],
          [ "Acoustic Supports", "case.html#acoustic-supports", null ],
          [ "Conservative Variables Ordering", "case.html#autotoc_md38", null ],
          [ "Primitive Variables Ordering", "case.html#autotoc_md39", null ]
        ] ]
      ] ]
    ] ],
    [ "Case Creator Guide", "case_constraints.html", [
      [ "Case Creator Guide", "case_constraints.html#autotoc_md40", [
        [ "🧩 Case Design Playbook", "case_constraints.html#case-design-playbook", [
          [ "🟢 Beginner Examples", "case_constraints.html#autotoc_md41", null ],
          [ "🟡 Intermediate Examples", "case_constraints.html#autotoc_md42", null ],
          [ "🔴 Advanced Examples", "case_constraints.html#autotoc_md43", null ]
        ] ],
        [ "🚀 Common Configuration Patterns", "case_constraints.html#common-configuration-patterns", null ],
        [ "📊 Feature Compatibility", "case_constraints.html#feature-compatibility", [
          [ "Physics Models", "case_constraints.html#compat-physics-models", null ],
          [ "Bubble Models", "case_constraints.html#compat-bubble-models", null ],
          [ "Numerics", "case_constraints.html#compat-numerics", null ],
          [ "Geometry", "case_constraints.html#compat-geometry", null ]
        ] ],
        [ "🔢 Model Equations", "case_constraints.html#model-equations", null ],
        [ "⚙️ Riemann Solvers", "case_constraints.html#riemann-solvers", null ],
        [ "💧 Bubble Models", "case_constraints.html#bubble-models", null ],
        [ "📖 Quick Parameter Reference", "case_constraints.html#quick-parameter-reference", null ],
        [ "⚠️ Physics Warnings", "case_constraints.html#physics-warnings", null ]
      ] ]
    ] ],
    [ "CLI Reference", "cli-reference.html", [
      [ "CLI Reference", "cli-reference.html#autotoc_md45", [
        [ "Overview", "cli-reference.html#autotoc_md46", null ],
        [ "Quick Reference", "cli-reference.html#autotoc_md47", null ],
        [ "Commands", "cli-reference.html#autotoc_md48", [
          [ "build", "cli-reference.html#build", null ],
          [ "run", "cli-reference.html#run", null ],
          [ "test", "cli-reference.html#test", null ],
          [ "clean", "cli-reference.html#clean", null ],
          [ "validate", "cli-reference.html#validate", null ]
        ] ],
        [ "Utility Commands", "cli-reference.html#autotoc_md54", [
          [ "new", "cli-reference.html#new", null ],
          [ "viz", "cli-reference.html#viz", null ],
          [ "params", "cli-reference.html#params", null ],
          [ "packer", "cli-reference.html#packer", [
            [ "packer pack", "cli-reference.html#autotoc_md58", null ],
            [ "packer compare", "cli-reference.html#autotoc_md59", null ]
          ] ],
          [ "completion", "cli-reference.html#completion", null ],
          [ "help", "cli-reference.html#help", null ],
          [ "generate", "cli-reference.html#generate", null ]
        ] ],
        [ "Development Commands", "cli-reference.html#autotoc_md64", [
          [ "lint", "cli-reference.html#lint", null ],
          [ "format", "cli-reference.html#format", null ],
          [ "spelling", "cli-reference.html#spelling", null ],
          [ "precheck", "cli-reference.html#precheck", null ],
          [ "count", "cli-reference.html#count", null ],
          [ "count_diff", "cli-reference.html#count_diff", null ]
        ] ],
        [ "CI Commands", "cli-reference.html#autotoc_md71", [
          [ "bench", "cli-reference.html#bench", null ],
          [ "bench_diff", "cli-reference.html#bench_diff", null ]
        ] ],
        [ "Other Commands", "cli-reference.html#autotoc_md74", [
          [ "load", "cli-reference.html#load", null ],
          [ "interactive", "cli-reference.html#interactive", null ]
        ] ],
        [ "Common Options", "cli-reference.html#autotoc_md77", [
          [ "Target Selection (<span class=\"tt\">-t, --targets</span>)", "cli-reference.html#autotoc_md78", null ],
          [ "Build Configuration Flags", "cli-reference.html#autotoc_md79", null ],
          [ "Verbosity (<span class=\"tt\">-v, --verbose</span>)", "cli-reference.html#autotoc_md80", null ],
          [ "Debug Logging (<span class=\"tt\">-d, --debug-log</span>)", "cli-reference.html#autotoc_md81", null ]
        ] ]
      ] ]
    ] ],
    [ "Contributing", "contributing.html", [
      [ "Contributing to MFC", "contributing.html#autotoc_md82", [
        [ "Getting Set Up", "contributing.html#autotoc_md83", null ],
        [ "Architecture Overview", "contributing.html#autotoc_md84", [
          [ "Three-Phase Pipeline", "contributing.html#autotoc_md85", null ],
          [ "Directory Layout", "contributing.html#autotoc_md86", null ],
          [ "Simulation Data Flow", "contributing.html#autotoc_md87", null ],
          [ "Build Toolchain", "contributing.html#autotoc_md88", null ]
        ] ],
        [ "Development Workflow", "contributing.html#autotoc_md89", [
          [ "Commit Messages", "contributing.html#autotoc_md90", null ]
        ] ],
        [ "Coding Standards", "contributing.html#autotoc_md91", [
          [ "Hard Rules", "contributing.html#autotoc_md92", null ],
          [ "Soft Guidelines", "contributing.html#autotoc_md93", null ]
        ] ],
        [ "Common Pitfalls", "contributing.html#autotoc_md94", [
          [ "Array Bounds and Indexing", "contributing.html#autotoc_md95", null ],
          [ "Precision and Type Safety", "contributing.html#autotoc_md96", null ],
          [ "Memory and Allocation", "contributing.html#autotoc_md97", null ],
          [ "MPI Correctness", "contributing.html#autotoc_md98", null ],
          [ "Physics and Model Consistency", "contributing.html#autotoc_md99", null ],
          [ "Python Toolchain", "contributing.html#autotoc_md100", null ],
          [ "Compiler Portability", "contributing.html#autotoc_md101", null ],
          [ "Architecture Notes", "contributing.html#autotoc_md102", null ]
        ] ],
        [ "Fypp and GPU", "contributing.html#autotoc_md103", null ],
        [ "How-To Guides", "contributing.html#autotoc_md104", [
          [ "How to Add a New Simulation Parameter", "contributing.html#autotoc_md105", null ],
          [ "How to Write a GPU Parallel Loop", "contributing.html#autotoc_md106", null ],
          [ "How to Allocate and Manage GPU Arrays", "contributing.html#autotoc_md107", null ],
          [ "How to Add a Test Case", "contributing.html#autotoc_md108", null ],
          [ "How to Create a New Fortran Module", "contributing.html#autotoc_md109", null ],
          [ "Working with the Precision System", "contributing.html#autotoc_md110", null ],
          [ "How to Extend MPI Halo Exchange", "contributing.html#autotoc_md111", null ],
          [ "How to Add a Post-Processing Output Variable", "contributing.html#autotoc_md112", null ],
          [ "Modifying <span class=\"tt\">src/common/</span>", "contributing.html#autotoc_md113", null ],
          [ "Debugging", "contributing.html#autotoc_md114", null ],
          [ "How to Document Physics Constraints", "contributing.html#how-to-document-physics-constraints", null ]
        ] ],
        [ "Testing", "contributing.html#autotoc_md115", null ],
        [ "CI Pipeline", "contributing.html#autotoc_md116", [
          [ "Lint Gate (runs first, blocks all other jobs)", "contributing.html#autotoc_md117", null ],
          [ "Build and Test Matrix", "contributing.html#autotoc_md118", null ],
          [ "Common CI Failures", "contributing.html#autotoc_md119", null ]
        ] ],
        [ "Documentation", "contributing.html#autotoc_md120", null ],
        [ "Submitting a Pull Request", "contributing.html#autotoc_md121", null ],
        [ "Code Review and Merge", "contributing.html#autotoc_md122", null ]
      ] ]
    ] ],
    [ "Containers", "docker.html", [
      [ "Containers", "docker.html#autotoc_md123", [
        [ "Navigating Docker", "docker.html#autotoc_md124", [
          [ "Docker Desktop GUI", "docker.html#autotoc_md125", null ],
          [ "Docker CLI", "docker.html#autotoc_md126", null ]
        ] ],
        [ "Details on Running Containers", "docker.html#autotoc_md127", [
          [ "Portability", "docker.html#autotoc_md128", null ]
        ] ],
        [ "Using Supercomputers/Clusters via Apptainer/Singularity", "docker.html#autotoc_md129", [
          [ "Interactive Shell", "docker.html#autotoc_md130", null ],
          [ "For Portability", "docker.html#autotoc_md131", null ],
          [ "Slurm Job", "docker.html#autotoc_md132", null ]
        ] ],
        [ "Tag Details", "docker.html#autotoc_md133", [
          [ "Base Images", "docker.html#autotoc_md134", null ],
          [ "Tag Structure", "docker.html#autotoc_md135", null ],
          [ "Example Tags", "docker.html#autotoc_md136", null ],
          [ "Architecture Support", "docker.html#autotoc_md137", null ]
        ] ]
      ] ]
    ] ],
    [ "Equations", "equations.html", [
      [ "MFC: Comprehensive Equations Reference", "equations.html#autotoc_md138", [
        [ "1. Overview", "equations.html#autotoc_md140", null ],
        [ "1b. Units, Dimensions, and Non-Dimensionalization", "equations.html#sec-units-dimensions", [
          [ "General Users: Dimensional Handling", "equations.html#sec-dimensional-handling", [
            [ "Dimensions In = Dimensions Out", "equations.html#sec-dimensions-in-out", null ],
            [ "Stored Parameter Conventions", "equations.html#sec-stored-forms", null ],
            [ "Common Material Values", "equations.html#sec-material-values", null ],
            [ "Unit Consistency", "equations.html#sec-unit-consistency", null ]
          ] ],
          [ "Bubble Users: Non-Dimensional Framework", "equations.html#sec-bubble-nondim", [
            [ "Non-Dimensional Bubble Dynamics", "equations.html#sec-nondim-bubble-dynamics", null ],
            [ "Reference Scales", "equations.html#sec-reference-scales", null ],
            [ "Non-Dimensionalization of Input Parameters", "equations.html#sec-nondim-inputs", null ],
            [ "Flow Parameters with Bubbles", "equations.html#sec-flow-params-bubbles", null ],
            [ "Two Different Viscosity Parameters", "equations.html#sec-two-viscosities", null ]
          ] ],
          [ "Worked Examples", "equations.html#sec-nondim-example", [
            [ "Example: Non-Dimensionalizing a Bubble Case", "equations.html#sec-bubble-example", null ]
          ] ]
        ] ],
        [ "2. Governing PDEs", "equations.html#autotoc_md143", [
          [ "2.1 Five-Equation Model (<span class=\"tt\">model_eqns = 2</span>)", "equations.html#autotoc_md144", null ],
          [ "2.2 Six-Equation Model (<span class=\"tt\">model_eqns = 3</span>)", "equations.html#autotoc_md145", null ],
          [ "2.3 Other Model Variants", "equations.html#autotoc_md146", null ]
        ] ],
        [ "3. Equations of State", "equations.html#autotoc_md148", [
          [ "3.1 Stiffened Gas EOS (<a class=\"el\" href=\"citelist.html#CITEREF_menikoff89\">[33]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_lemetayer04\">[27]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 2.2)", "equations.html#autotoc_md149", null ],
          [ "3.2 Ideal Gas EOS (Chemistry, <span class=\"tt\">chemistry = .true.</span>)", "equations.html#autotoc_md150", null ]
        ] ],
        [ "4. Viscous Stress Tensor (<span class=\"tt\">viscous = .true.</span>)", "equations.html#autotoc_md152", null ],
        [ "5. Cylindrical Coordinates (<span class=\"tt\">cyl_coord = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 2.3)", "equations.html#autotoc_md154", null ],
        [ "6. Sub-Grid Bubble Dynamics (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1)", "equations.html#autotoc_md156", [
          [ "6.1 Euler-Euler Bubbles (<span class=\"tt\">bubbles_euler = .true.</span>)", "equations.html#autotoc_md157", [
            [ "6.1.1 Method of Classes (<a class=\"el\" href=\"citelist.html#CITEREF_commander89\">[13]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_ando11\">[2]</a>)", "equations.html#autotoc_md158", null ],
            [ "6.1.2 Rayleigh-Plesset (<span class=\"tt\">bubble_model = 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rayleigh17\">[28]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_plesset49\">[37]</a>)", "equations.html#autotoc_md159", null ],
            [ "6.1.3 Keller-Miksis (<span class=\"tt\">bubble_model = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_keller80\">[26]</a>)", "equations.html#autotoc_md160", null ],
            [ "6.1.4 Gilmore (<span class=\"tt\">bubble_model = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gilmore52\">[17]</a>)", "equations.html#autotoc_md161", null ],
            [ "6.1.5 Non-Polytropic Thermal Model (<span class=\"tt\">polytropic = .false.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_preston07\">[38]</a>)", "equations.html#autotoc_md162", null ],
            [ "6.1.6 QBMM Moment Transport (<span class=\"tt\">qbmm = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_bryngelson20\">[7]</a>)", "equations.html#autotoc_md163", null ]
          ] ],
          [ "6.2 Euler-Lagrange Bubbles (<span class=\"tt\">bubbles_lagrange = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_maeda18\">[30]</a>)", "equations.html#autotoc_md164", null ]
        ] ],
        [ "7. Fluid-Structure Interaction", "equations.html#autotoc_md166", [
          [ "7.1 Hypoelastic Model (<span class=\"tt\">hypoelasticity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rodriguez19\">[39]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.6)", "equations.html#autotoc_md167", null ],
          [ "7.2 Hyperelastic Model (<span class=\"tt\">hyperelasticity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_kamrin12\">[24]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.6)", "equations.html#autotoc_md168", null ]
        ] ],
        [ "8. Phase Change (<span class=\"tt\">relax = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.3)", "equations.html#autotoc_md170", [
          [ "8.1 pT-Relaxation (<span class=\"tt\">relax_model = 5</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_saurel08\">[40]</a>)", "equations.html#autotoc_md171", null ],
          [ "8.2 pTg-Relaxation (<span class=\"tt\">relax_model = 6</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_zein10\">[55]</a>)", "equations.html#autotoc_md172", null ]
        ] ],
        [ "9. Chemistry and Combustion (<span class=\"tt\">chemistry = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.7)", "equations.html#autotoc_md174", null ],
        [ "10. Surface Tension (<span class=\"tt\">surface_tension = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_schmidmayer17\">[42]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.8)", "equations.html#autotoc_md176", null ],
        [ "11. Magnetohydrodynamics", "equations.html#autotoc_md178", [
          [ "11.1 Ideal MHD (<span class=\"tt\">mhd = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.9)", "equations.html#autotoc_md179", null ],
          [ "11.2 Relativistic MHD (<span class=\"tt\">relativity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.10)", "equations.html#autotoc_md180", null ]
        ] ],
        [ "12. Information Geometric Regularization (<span class=\"tt\">igr = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong25a\">[53]</a>)", "equations.html#autotoc_md182", null ],
        [ "13. Body Forces (<span class=\"tt\">bf_x</span>, <span class=\"tt\">bf_y</span>, <span class=\"tt\">bf_z</span>)", "equations.html#autotoc_md184", null ],
        [ "14. Acoustic Sources (<span class=\"tt\">acoustic_source = .true.</span>)", "equations.html#autotoc_md186", null ],
        [ "15. Numerical Methods", "equations.html#autotoc_md188", [
          [ "15.1 Spatial Reconstruction", "equations.html#autotoc_md189", [
            [ "WENO (<span class=\"tt\">weno_order = 3, 5, 7</span>)", "equations.html#autotoc_md190", null ],
            [ "MUSCL (<span class=\"tt\">muscl_order = 2</span>)", "equations.html#autotoc_md191", null ],
            [ "IGR Reconstruction", "equations.html#autotoc_md192", null ]
          ] ],
          [ "15.2 Riemann Solvers", "equations.html#autotoc_md193", [
            [ "HLL (<span class=\"tt\">riemann_solver = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_harten83\">[20]</a>)", "equations.html#autotoc_md194", null ],
            [ "HLLC (<span class=\"tt\">riemann_solver = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_toro94\">[50]</a>)", "equations.html#autotoc_md195", null ],
            [ "Exact (<span class=\"tt\">riemann_solver = 3</span>)", "equations.html#autotoc_md196", null ],
            [ "HLLD (<span class=\"tt\">riemann_solver = 4</span>, MHD only)", "equations.html#autotoc_md197", null ]
          ] ],
          [ "15.3 Time Integration", "equations.html#autotoc_md198", [
            [ "TVD Runge-Kutta (<span class=\"tt\">time_stepper = 1, 2, 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gottlieb98\">[18]</a>)", "equations.html#autotoc_md199", null ],
            [ "Adaptive Time Stepping (<span class=\"tt\">adap_dt = .true.</span>)", "equations.html#autotoc_md200", null ],
            [ "Strang Splitting (<a class=\"el\" href=\"citelist.html#CITEREF_strang68\">[44]</a>) (for stiff bubble dynamics)", "equations.html#autotoc_md201", null ]
          ] ],
          [ "15.4 CFL Condition", "equations.html#autotoc_md202", null ],
          [ "15.5 Finite Differences (<span class=\"tt\">fd_order = 1, 2, 4</span>)", "equations.html#autotoc_md203", null ]
        ] ],
        [ "16. Boundary Conditions", "equations.html#autotoc_md205", [
          [ "16.1 Simple BCs", "equations.html#autotoc_md206", null ],
          [ "16.2 Characteristic BCs (<a class=\"el\" href=\"citelist.html#CITEREF_thompson87\">[47]</a>, <a class=\"el\" href=\"citelist.html#CITEREF_thompson90\">[48]</a>; <span class=\"tt\">bc_x%beg = -5</span> to <span class=\"tt\">-12</span>)", "equations.html#autotoc_md207", null ],
          [ "16.3 Immersed Boundary Method (<span class=\"tt\">ib = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_tseng03\">[52]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_mittal05\">[34]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.1.1)", "equations.html#autotoc_md208", null ]
        ] ],
        [ "17. Low Mach Number Corrections (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[54]</a> Sec. 4.2.4)", "equations.html#autotoc_md210", null ],
        [ "18. Flux Limiting", "equations.html#autotoc_md212", null ]
      ] ]
    ] ],
    [ "Example Cases", "examples.html", [
      [ "Example Cases", "examples.html#autotoc_md213", [
        [ "1D Multi-Component Inert Shock Tube", "examples.html#autotoc_md214", [
          [ "Initial Condition", "examples.html#autotoc_md215", null ],
          [ "Results", "examples.html#autotoc_md216", null ]
        ] ],
        [ "Shock Droplet (2D)", "examples.html#autotoc_md217", [
          [ "Initial Condition", "examples.html#autotoc_md218", null ],
          [ "Result", "examples.html#autotoc_md219", null ]
        ] ],
        [ "Backward Facing Step (2D)", "examples.html#autotoc_md220", [
          [ "Final Condition (Density)", "examples.html#autotoc_md221", null ]
        ] ],
        [ "Lid-Driven Cavity Problem (2D)", "examples.html#autotoc_md222", [
          [ "Final Condition", "examples.html#autotoc_md223", null ],
          [ "Centerline Velocities", "examples.html#autotoc_md224", null ]
        ] ],
        [ "Viscous Shock Tube (2D)", "examples.html#autotoc_md225", null ],
        [ "2D Triple Point (2D)", "examples.html#autotoc_md228", [
          [ "Numerical Schlieren at Final Time", "examples.html#autotoc_md229", null ]
        ] ],
        [ "Perfectly Stirred Reactor", "examples.html#autotoc_md230", [
          [ "Validation", "examples.html#autotoc_md231", null ]
        ] ],
        [ "Shu-Osher problem (1D)", "examples.html#autotoc_md232", [
          [ "Initial Condition", "examples.html#autotoc_md233", null ],
          [ "Result", "examples.html#autotoc_md234", null ]
        ] ],
        [ "2D Hardcodied IC Example", "examples.html#autotoc_md235", [
          [ "Initial Condition and Result", "examples.html#autotoc_md236", null ]
        ] ],
        [ "Scaling and Performance test", "examples.html#autotoc_md237", [
          [ "Weak Scaling", "examples.html#autotoc_md238", null ],
          [ "Strong Scaling", "examples.html#autotoc_md239", null ],
          [ "Example", "examples.html#autotoc_md240", null ]
        ] ],
        [ "2D Riemann Test (2D)", "examples.html#autotoc_md241", [
          [ "Density Initial and Final Conditions", "examples.html#autotoc_md242", null ]
        ] ],
        [ "Rayleigh-Taylor Instability (2D)", "examples.html#autotoc_md243", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md244", null ]
        ] ],
        [ "Gas Jet (2D)", "examples.html#autotoc_md245", [
          [ "Final Condition", "examples.html#autotoc_md246", null ]
        ] ],
        [ "Forward Facing Step (2D)", "examples.html#autotoc_md247", [
          [ "Final Condition (Density)", "examples.html#autotoc_md248", null ]
        ] ],
        [ "3D Turbulent Mixing layer (3D)", "examples.html#autotoc_md249", [
          [ "Liutex visualization at transitional state", "examples.html#autotoc_md250", null ]
        ] ],
        [ "IBM Bow Shock (3D)", "examples.html#autotoc_md251", [
          [ "Final Condition", "examples.html#autotoc_md252", null ]
        ] ],
        [ "Isentropic vortex problem (2D)", "examples.html#autotoc_md253", [
          [ "Density", "examples.html#autotoc_md254", null ],
          [ "Density Norms", "examples.html#autotoc_md255", null ]
        ] ],
        [ "Richtmyer-Meshkov Instability (2D)", "examples.html#autotoc_md256", null ],
        [ "2D IBM CFL dt (2D)", "examples.html#autotoc_md259", [
          [ "Result", "examples.html#autotoc_md260", null ]
        ] ],
        [ "1D Multi-Component Reactive Shock Tube", "examples.html#autotoc_md261", [
          [ "Initial Condition", "examples.html#autotoc_md262", null ],
          [ "Results", "examples.html#autotoc_md263", null ]
        ] ],
        [ "Lax shock tube problem (1D)", "examples.html#autotoc_md264", [
          [ "Initial Condition", "examples.html#autotoc_md265", null ],
          [ "Result", "examples.html#autotoc_md266", null ]
        ] ],
        [ "Rayleigh-Taylor Instability (3D)", "examples.html#autotoc_md267", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md268", null ]
        ] ],
        [ "Kelvin-Helmholtz Instability (2D)", "examples.html#autotoc_md269", null ],
        [ "Taylor-Green Vortex (3D)", "examples.html#autotoc_md272", [
          [ "Final Condition", "examples.html#autotoc_md273", null ]
        ] ],
        [ "Titarev-Toro problem (1D)", "examples.html#autotoc_md274", [
          [ "Initial Condition", "examples.html#autotoc_md275", null ],
          [ "Result", "examples.html#autotoc_md276", null ]
        ] ]
      ] ]
    ] ],
    [ "Performance", "expectedPerformance.html", [
      [ "Performance", "expectedPerformance.html#autotoc_md277", [
        [ "Achieving Maximum Performance", "expectedPerformance.html#autotoc_md279", [
          [ "Case Optimization (Recommended)", "expectedPerformance.html#autotoc_md280", [
            [ "When to use case optimization", "expectedPerformance.html#autotoc_md281", null ]
          ] ],
          [ "Other Optimization Flags", "expectedPerformance.html#autotoc_md282", null ],
          [ "Profiling for Optimization", "expectedPerformance.html#autotoc_md283", null ],
          [ "Performance Checklist", "expectedPerformance.html#autotoc_md284", null ]
        ] ],
        [ "Benchmark Results", "expectedPerformance.html#autotoc_md286", [
          [ "Figure of merit: Grind time performance", "expectedPerformance.html#autotoc_md287", null ]
        ] ],
        [ "Weak scaling", "expectedPerformance.html#autotoc_md288", [
          [ "GPU weak scaling", "expectedPerformance.html#autotoc_md289", null ],
          [ "NVIDIA V100 GPU (historical)", "expectedPerformance.html#autotoc_md290", null ],
          [ "IBM Power9 CPU (historical)", "expectedPerformance.html#autotoc_md291", null ]
        ] ],
        [ "Strong scaling", "expectedPerformance.html#autotoc_md292", [
          [ "NVIDIA V100 GPU", "expectedPerformance.html#autotoc_md293", [
            [ "16M Grid Points", "expectedPerformance.html#autotoc_md294", null ],
            [ "64M Grid Points", "expectedPerformance.html#autotoc_md295", null ]
          ] ],
          [ "IBM Power9 CPU", "expectedPerformance.html#autotoc_md296", null ]
        ] ]
      ] ]
    ] ],
    [ "Getting Started", "getting-started.html", [
      [ "Getting Started", "getting-started.html#autotoc_md297", [
        [ "Fetching MFC", "getting-started.html#autotoc_md298", null ],
        [ "Install via Homebrew (macOS)", "getting-started.html#autotoc_md299", null ],
        [ "Build Environment", "getting-started.html#autotoc_md300", null ],
        [ "Building MFC", "getting-started.html#autotoc_md301", null ],
        [ "Using Containers", "getting-started.html#autotoc_md302", null ],
        [ "Running the Test Suite", "getting-started.html#autotoc_md303", null ],
        [ "Running an Example Case", "getting-started.html#autotoc_md304", null ],
        [ "Units and Dimensions", "getting-started.html#autotoc_md305", null ],
        [ "Visualizing Results", "getting-started.html#autotoc_md306", null ],
        [ "Helpful Tools", "getting-started.html#autotoc_md307", [
          [ "Parameter Lookup", "getting-started.html#autotoc_md308", null ],
          [ "Creating a New Case", "getting-started.html#autotoc_md309", null ],
          [ "Shell Completion", "getting-started.html#autotoc_md310", null ]
        ] ]
      ] ]
    ] ],
    [ "GPU Parallelization", "gpuParallelization.html", [
      [ "GPU Parallelization", "gpuParallelization.html#autotoc_md311", [
        [ "Macro API Documentation", "gpuParallelization.html#autotoc_md313", [
          [ "Data Type Meanings", "gpuParallelization.html#autotoc_md314", null ],
          [ "Data Flow", "gpuParallelization.html#autotoc_md315", null ],
          [ "Computation Macros", "gpuParallelization.html#autotoc_md317", null ],
          [ "Data Control Macros", "gpuParallelization.html#autotoc_md319", null ],
          [ "Synchronization Macros", "gpuParallelization.html#autotoc_md321", null ],
          [ "Miscellaneous Macros", "gpuParallelization.html#autotoc_md323", null ]
        ] ]
      ] ],
      [ "Debugging Tools and Tips for GPUs", "gpuParallelization.html#autotoc_md325", [
        [ "Compiler agnostic tools", "gpuParallelization.html#autotoc_md326", null ],
        [ "OpenMP tools", "gpuParallelization.html#autotoc_md327", null ],
        [ "Cray Compiler Tools", "gpuParallelization.html#autotoc_md328", [
          [ "Cray General Options", "gpuParallelization.html#autotoc_md329", null ],
          [ "Cray OpenACC Options", "gpuParallelization.html#autotoc_md330", null ]
        ] ],
        [ "NVHPC Compiler Options", "gpuParallelization.html#autotoc_md331", [
          [ "NVHPC General Options", "gpuParallelization.html#autotoc_md332", null ],
          [ "NVHPC OpenACC Options", "gpuParallelization.html#autotoc_md333", null ],
          [ "NVHPC OpenMP Options", "gpuParallelization.html#autotoc_md334", null ]
        ] ],
        [ "Compiler Documentation", "gpuParallelization.html#autotoc_md335", null ]
      ] ]
    ] ],
    [ "Papers", "papers.html", [
      [ "Papers", "papers.html#autotoc_md336", null ]
    ] ],
    [ "Case Parameters", "parameters.html", [
      [ "Case Parameters", "parameters.html#autotoc_md337", [
        [ "Overview", "parameters.html#autotoc_md338", null ],
        [ "Parameter Families", "parameters.html#autotoc_md339", null ],
        [ "patch_icpp", "parameters.html#patch_icpp", [
          [ "Patterns", "parameters.html#autotoc_md341", null ]
        ] ],
        [ "fluid_pp", "parameters.html#fluid_pp", [
          [ "Patterns", "parameters.html#autotoc_md343", null ]
        ] ],
        [ "patch_bc", "parameters.html#patch_bc", [
          [ "Patterns", "parameters.html#autotoc_md345", null ]
        ] ],
        [ "acoustic", "parameters.html#acoustic", [
          [ "Patterns", "parameters.html#autotoc_md347", null ]
        ] ],
        [ "chem_wrt_Y", "parameters.html#chem_wrt_Y", [
          [ "Patterns", "parameters.html#autotoc_md349", null ]
        ] ],
        [ "simplex_params", "parameters.html#simplex_params", [
          [ "Patterns", "parameters.html#autotoc_md351", null ]
        ] ],
        [ "bc_x", "parameters.html#bc_x", [
          [ "Patterns", "parameters.html#autotoc_md353", null ]
        ] ],
        [ "bc_y", "parameters.html#bc_y", [
          [ "Patterns", "parameters.html#autotoc_md355", null ]
        ] ],
        [ "bc_z", "parameters.html#bc_z", [
          [ "Patterns", "parameters.html#autotoc_md357", null ]
        ] ],
        [ "integral", "parameters.html#integral", [
          [ "Patterns", "parameters.html#autotoc_md359", null ]
        ] ],
        [ "probe", "parameters.html#probe", [
          [ "Patterns", "parameters.html#autotoc_md361", null ]
        ] ],
        [ "patch_ib", "parameters.html#patch_ib", [
          [ "Patterns", "parameters.html#autotoc_md363", null ]
        ] ],
        [ "bub_pp", "parameters.html#bub_pp", null ],
        [ "lag_params", "parameters.html#lag_params", null ],
        [ "particle_cloud", "parameters.html#particle_cloud", null ],
        [ "alpha_rho_e_wrt", "parameters.html#alpha_rho_e_wrt", [
          [ "Patterns", "parameters.html#autotoc_md368", null ]
        ] ],
        [ "alpha_rho_wrt", "parameters.html#alpha_rho_wrt", [
          [ "Patterns", "parameters.html#autotoc_md370", null ]
        ] ],
        [ "alpha_wrt", "parameters.html#alpha_wrt", [
          [ "Patterns", "parameters.html#autotoc_md372", null ]
        ] ],
        [ "fluid_rho", "parameters.html#fluid_rho", [
          [ "Patterns", "parameters.html#autotoc_md374", null ]
        ] ],
        [ "schlieren_alpha", "parameters.html#schlieren_alpha", [
          [ "Patterns", "parameters.html#autotoc_md376", null ]
        ] ],
        [ "stl_models", "parameters.html#stl_models", [
          [ "Patterns", "parameters.html#autotoc_md378", null ]
        ] ],
        [ "chem_params", "parameters.html#chem_params", null ],
        [ "ib_airfoil", "parameters.html#ib_airfoil", null ],
        [ "flux_wrt", "parameters.html#flux_wrt", [
          [ "Patterns", "parameters.html#autotoc_md382", null ]
        ] ],
        [ "mom_wrt", "parameters.html#mom_wrt", [
          [ "Patterns", "parameters.html#autotoc_md384", null ]
        ] ],
        [ "omega_wrt", "parameters.html#omega_wrt", [
          [ "Patterns", "parameters.html#autotoc_md386", null ]
        ] ],
        [ "vel_wrt", "parameters.html#vel_wrt", [
          [ "Patterns", "parameters.html#autotoc_md388", null ]
        ] ],
        [ "x_domain", "parameters.html#x_domain", null ],
        [ "x_output", "parameters.html#x_output", null ],
        [ "y_domain", "parameters.html#y_domain", null ],
        [ "y_output", "parameters.html#y_output", null ],
        [ "z_domain", "parameters.html#z_domain", null ],
        [ "z_output", "parameters.html#z_output", null ],
        [ "general", "parameters.html#general", null ],
        [ "CLI Reference", "parameters.html#autotoc_md397", null ]
      ] ]
    ] ],
    [ "Physics Constraints", "physics_constraints.html", [
      [ "Physics Constraints Reference", "physics_constraints.html#autotoc_md398", [
        [ "Thermodynamic Constraints", "physics_constraints.html#autotoc_md400", [
          [ "Stiffened EOS Positivity", "physics_constraints.html#autotoc_md401", null ],
          [ "EOS Parameter Sanity (Transformed Gamma)", "physics_constraints.html#autotoc_md402", null ],
          [ "Patch Initial Condition Constraints", "physics_constraints.html#autotoc_md403", null ]
        ] ],
        [ "Mixture Constraints", "physics_constraints.html#autotoc_md405", [
          [ "Volume Fraction Sum", "physics_constraints.html#autotoc_md406", null ],
          [ "Alpha-Rho Consistency", "physics_constraints.html#autotoc_md407", null ]
        ] ],
        [ "Domain and Geometry", "physics_constraints.html#autotoc_md409", [
          [ "Domain Bounds", "physics_constraints.html#autotoc_md410", null ],
          [ "Dimensionality", "physics_constraints.html#autotoc_md411", null ],
          [ "Patch Within Domain", "physics_constraints.html#autotoc_md412", null ]
        ] ],
        [ "Velocity and Dimensional Consistency", "physics_constraints.html#autotoc_md414", [
          [ "Velocity Components in Inactive Dimensions", "physics_constraints.html#autotoc_md415", null ]
        ] ],
        [ "Model Equations", "physics_constraints.html#autotoc_md417", [
          [ "Model Equation Selection", "physics_constraints.html#autotoc_md418", null ]
        ] ],
        [ "Boundary Conditions", "physics_constraints.html#autotoc_md420", [
          [ "Boundary Condition Compatibility", "physics_constraints.html#autotoc_md421", null ]
        ] ],
        [ "Bubble Physics", "physics_constraints.html#autotoc_md423", [
          [ "Euler-Euler Bubble Model", "physics_constraints.html#autotoc_md424", null ],
          [ "Bubble Simulation Constraints", "physics_constraints.html#autotoc_md425", null ],
          [ "Euler-Lagrange Bubble Model", "physics_constraints.html#autotoc_md426", null ]
        ] ],
        [ "Feature Compatibility", "physics_constraints.html#autotoc_md428", [
          [ "Magnetohydrodynamics (MHD)", "physics_constraints.html#autotoc_md429", null ],
          [ "Surface Tension", "physics_constraints.html#autotoc_md430", null ],
          [ "Hypoelasticity", "physics_constraints.html#autotoc_md431", null ],
          [ "Phase Change", "physics_constraints.html#autotoc_md432", null ],
          [ "Alternative Sound Speed", "physics_constraints.html#autotoc_md433", null ],
          [ "Iterative Generalized Riemann (IGR)", "physics_constraints.html#autotoc_md434", null ]
        ] ],
        [ "Numerical Schemes", "physics_constraints.html#autotoc_md436", [
          [ "WENO Reconstruction", "physics_constraints.html#autotoc_md437", null ],
          [ "MUSCL Reconstruction", "physics_constraints.html#autotoc_md438", null ],
          [ "Time Stepping", "physics_constraints.html#autotoc_md439", null ],
          [ "Viscosity", "physics_constraints.html#autotoc_md440", null ]
        ] ],
        [ "Acoustic Sources", "physics_constraints.html#autotoc_md442", [
          [ "Acoustic Sources", "physics_constraints.html#autotoc_md443", null ]
        ] ],
        [ "Post-Processing", "physics_constraints.html#autotoc_md445", [
          [ "Vorticity Output", "physics_constraints.html#autotoc_md446", null ],
          [ "FFT Output", "physics_constraints.html#autotoc_md447", null ]
        ] ]
      ] ]
    ] ],
    [ "Running", "running.html", [
      [ "Running", "running.html#autotoc_md454", [
        [ "Using the Homebrew package (macOS)", "running.html#autotoc_md455", null ],
        [ "Interactive Execution", "running.html#autotoc_md457", null ],
        [ "Running on GPUs", "running.html#autotoc_md459", [
          [ "Building with GPU Support", "running.html#autotoc_md460", null ],
          [ "Running on GPUs", "running.html#autotoc_md461", null ],
          [ "Supported Compilers", "running.html#autotoc_md462", null ],
          [ "Environment Setup", "running.html#autotoc_md463", null ],
          [ "Verifying GPU Detection", "running.html#autotoc_md464", null ],
          [ "GPU Profiling", "running.html#autotoc_md465", [
            [ "NVIDIA GPUs", "running.html#autotoc_md466", null ],
            [ "AMD GPUs", "running.html#autotoc_md467", null ]
          ] ]
        ] ],
        [ "Batch Execution", "running.html#autotoc_md469", [
          [ "Basic Usage", "running.html#autotoc_md470", null ],
          [ "Batch Options", "running.html#autotoc_md471", null ],
          [ "Examples", "running.html#autotoc_md472", null ],
          [ "Computer Templates", "running.html#autotoc_md473", null ],
          [ "Scheduler Notes", "running.html#autotoc_md474", null ]
        ] ],
        [ "Restarting Cases", "running.html#autotoc_md476", null ],
        [ "Example Runs", "running.html#autotoc_md478", null ]
      ] ]
    ] ],
    [ "Testing", "testing.html", null ],
    [ "Troubleshooting Guide", "troubleshooting.html", [
      [ "Troubleshooting Guide", "troubleshooting.html#autotoc_md482", [
        [ "Quick Reference", "troubleshooting.html#autotoc_md483", [
          [ "Debugging Flags", "troubleshooting.html#autotoc_md484", null ],
          [ "Profiling Flags", "troubleshooting.html#autotoc_md485", null ],
          [ "Useful Commands", "troubleshooting.html#autotoc_md486", null ]
        ] ],
        [ "Debugging Workflow", "troubleshooting.html#autotoc_md488", [
          [ "Build Fails?", "troubleshooting.html#autotoc_md489", null ],
          [ "Run Fails?", "troubleshooting.html#autotoc_md490", null ],
          [ "Test Fails?", "troubleshooting.html#autotoc_md491", null ]
        ] ],
        [ "Build Debugging", "troubleshooting.html#autotoc_md493", [
          [ "Verbosity Levels", "troubleshooting.html#autotoc_md494", null ],
          [ "Debug Builds", "troubleshooting.html#autotoc_md495", null ],
          [ "Code Coverage", "troubleshooting.html#autotoc_md496", null ],
          [ "Isolating Issues", "troubleshooting.html#autotoc_md497", null ],
          [ "Clean Rebuild", "troubleshooting.html#autotoc_md498", null ]
        ] ],
        [ "Runtime Debugging", "troubleshooting.html#autotoc_md500", [
          [ "Case Validation", "troubleshooting.html#autotoc_md501", null ],
          [ "Verbose Runs", "troubleshooting.html#autotoc_md502", null ],
          [ "Debug Log", "troubleshooting.html#autotoc_md503", null ],
          [ "Running with Fewer Ranks", "troubleshooting.html#autotoc_md504", null ]
        ] ],
        [ "Test Debugging", "troubleshooting.html#autotoc_md506", [
          [ "Running Specific Tests", "troubleshooting.html#autotoc_md507", null ],
          [ "Serial Test Execution", "troubleshooting.html#autotoc_md508", null ],
          [ "Test Output Location", "troubleshooting.html#autotoc_md509", null ],
          [ "Regenerating Golden Files", "troubleshooting.html#autotoc_md510", null ],
          [ "Understanding Test Failures", "troubleshooting.html#autotoc_md511", null ]
        ] ],
        [ "Performance Profiling", "troubleshooting.html#autotoc_md513", [
          [ "NVIDIA GPU Profiling", "troubleshooting.html#autotoc_md514", null ],
          [ "AMD GPU Profiling", "troubleshooting.html#autotoc_md515", null ],
          [ "Performance vs Correctness", "troubleshooting.html#autotoc_md516", null ]
        ] ],
        [ "Common Build Errors", "troubleshooting.html#autotoc_md518", [
          [ "\"CMake could not find MPI\"", "troubleshooting.html#autotoc_md519", null ],
          [ "\"CMake could not find a Fortran compiler\"", "troubleshooting.html#autotoc_md520", null ],
          [ "\"Fypp preprocessing failed\"", "troubleshooting.html#autotoc_md521", null ],
          [ "Build fails with GPU/OpenACC errors", "troubleshooting.html#autotoc_md522", null ],
          [ "\"Module not found\" on HPC", "troubleshooting.html#autotoc_md523", null ]
        ] ],
        [ "Common Runtime Errors", "troubleshooting.html#autotoc_md525", [
          [ "\"Case parameter constraint violations\"", "troubleshooting.html#autotoc_md526", null ],
          [ "\"NaN detected\"", "troubleshooting.html#autotoc_md527", null ],
          [ "GPU not detected", "troubleshooting.html#autotoc_md528", null ],
          [ "MPI errors or hangs", "troubleshooting.html#autotoc_md529", null ]
        ] ],
        [ "Visualization Issues", "troubleshooting.html#autotoc_md531", [
          [ "\"No 'binary/' or 'silo_hdf5/' directory found\"", "troubleshooting.html#autotoc_md532", null ],
          [ "\"Variable 'X' not found\"", "troubleshooting.html#autotoc_md533", null ],
          [ "\"h5py is required to read Silo-HDF5 files\"", "troubleshooting.html#autotoc_md534", null ],
          [ "Visualization looks wrong or has artifacts", "troubleshooting.html#autotoc_md535", null ]
        ] ],
        [ "Getting Help", "troubleshooting.html#autotoc_md537", null ]
      ] ]
    ] ],
    [ "Flow visualization", "visualization.html", [
      [ "Flow visualization", "visualization.html#autotoc_md538", [
        [ "Quick visualization with <span class=\"tt\">./mfc.sh viz</span>", "visualization.html#autotoc_md540", [
          [ "Basic usage", "visualization.html#autotoc_md541", null ],
          [ "Exploring available data", "visualization.html#autotoc_md542", null ],
          [ "Timestep selection", "visualization.html#autotoc_md543", null ],
          [ "Rendering options", "visualization.html#autotoc_md544", null ],
          [ "3D slicing", "visualization.html#autotoc_md545", null ],
          [ "Video generation", "visualization.html#autotoc_md546", null ],
          [ "Tiled 1D rendering", "visualization.html#autotoc_md547", null ],
          [ "Interactive mode", "visualization.html#autotoc_md548", null ],
          [ "Terminal UI (TUI)", "visualization.html#autotoc_md549", null ],
          [ "Plot styling", "visualization.html#autotoc_md550", null ],
          [ "Format selection", "visualization.html#autotoc_md551", null ],
          [ "Complete option reference", "visualization.html#autotoc_md552", null ]
        ] ],
        [ "Visualizing with ParaView", "visualization.html#autotoc_md554", [
          [ "Visualizing data in cylindrical coordinates", "visualization.html#autotoc_md555", null ]
        ] ],
        [ "Visualizing with VisIt", "visualization.html#autotoc_md556", null ],
        [ "Serial data output", "visualization.html#autotoc_md557", null ],
        [ "Remote Visualization on PACE Phoenix", "visualization.html#autotoc_md558", [
          [ "Step 1: Setting up your Environment", "visualization.html#autotoc_md559", null ],
          [ "Step 2: Customizing the script", "visualization.html#autotoc_md560", null ],
          [ "Step 3: Running pace-paraview-server", "visualization.html#autotoc_md561", null ]
        ] ]
      ] ]
    ] ],
    [ "Bibliography", "citelist.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"architecture.html",
"examples.html#autotoc_md217",
"troubleshooting.html#autotoc_md497"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';