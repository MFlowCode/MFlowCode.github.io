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
            [ "Parameter Descriptions", "case.html#autotoc_md24", null ],
            [ "Particle Clouds", "case.html#autotoc_md25", null ]
          ] ],
          [ "5. Fluid Material's", "case.html#sec-fluid-materials", null ],
          [ "6. Simulation Algorithm", "case.html#sec-simulation-algorithm", [
            [ "Boundary Condition Patches", "case.html#boundary-condition-patches", null ],
            [ "Constant Time-Stepping", "case.html#autotoc_md26", [
              [ "Adaptive Time-Stepping", "case.html#autotoc_md27", null ]
            ] ]
          ] ],
          [ "7. Formatted Output", "case.html#sec-formatted-output", null ],
          [ "8. Acoustic Source", "case.html#sec-acoustic-source", null ],
          [ "9. Sub-grid Bubble Models", "case.html#sec-bubble-models", [
            [ "9.1 Ensemble-Averaged Bubble Model", "case.html#autotoc_md28", null ],
            [ "9.2 Volume-Averaged Bubble Model", "case.html#autotoc_md29", null ]
          ] ],
          [ "10. Velocity Field Setup", "case.html#sec-velocity-field-setup", null ],
          [ "11. Phase Change Model", "case.html#sec-phase-change", null ],
          [ "12. Artificial Mach Number", "case.html#sec-artificial-mach-number", null ],
          [ "13. Body Forces", "case.html#autotoc_md30", null ],
          [ "14. Magnetohydrodynamics (MHD)", "case.html#autotoc_md31", null ],
          [ "15. Elasticity", "case.html#autotoc_md32", null ],
          [ "16. Cylindrical Coordinates", "case.html#autotoc_md33", null ],
          [ "17. Chemistry", "case.html#autotoc_md34", null ],
          [ "18. Chemistry-Specific Boundary Conditions", "case.html#autotoc_md35", null ],
          [ "19. Non-Newtonian (Herschel-Bulkley) Viscosity", "case.html#sec-non-newtonian", null ],
          [ "20. GPU Performance (NVIDIA UVM)", "case.html#autotoc_md36", null ],
          [ "20. Synthetic Turbulence", "case.html#autotoc_md37", null ]
        ] ],
        [ "Enumerations", "case.html#autotoc_md38", [
          [ "Boundary conditions", "case.html#boundary-conditions", null ],
          [ "Generalized Characteristic Boundary conditions", "case.html#autotoc_md39", null ],
          [ "Patch types", "case.html#patch-types", null ],
          [ "Immersed Boundary Patch Types", "case.html#immersed-boundary-patch-types", null ],
          [ "Acoustic Supports", "case.html#acoustic-supports", null ],
          [ "Conservative Variables Ordering", "case.html#autotoc_md40", null ],
          [ "Primitive Variables Ordering", "case.html#autotoc_md41", null ]
        ] ]
      ] ]
    ] ],
    [ "Case Creator Guide", "case_constraints.html", [
      [ "Case Creator Guide", "case_constraints.html#autotoc_md42", [
        [ "🧩 Case Design Playbook", "case_constraints.html#case-design-playbook", [
          [ "🟢 Beginner Examples", "case_constraints.html#autotoc_md43", null ],
          [ "🟡 Intermediate Examples", "case_constraints.html#autotoc_md44", null ],
          [ "🔴 Advanced Examples", "case_constraints.html#autotoc_md45", null ]
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
      [ "CLI Reference", "cli-reference.html#autotoc_md47", [
        [ "Overview", "cli-reference.html#autotoc_md48", null ],
        [ "Quick Reference", "cli-reference.html#autotoc_md49", null ],
        [ "Commands", "cli-reference.html#autotoc_md50", [
          [ "build", "cli-reference.html#build", null ],
          [ "run", "cli-reference.html#run", null ],
          [ "test", "cli-reference.html#test", null ],
          [ "clean", "cli-reference.html#clean", null ],
          [ "validate", "cli-reference.html#validate", null ]
        ] ],
        [ "Utility Commands", "cli-reference.html#autotoc_md56", [
          [ "new", "cli-reference.html#new", null ],
          [ "viz", "cli-reference.html#viz", null ],
          [ "params", "cli-reference.html#params", null ],
          [ "packer", "cli-reference.html#packer", [
            [ "packer pack", "cli-reference.html#autotoc_md60", null ],
            [ "packer compare", "cli-reference.html#autotoc_md61", null ]
          ] ],
          [ "completion", "cli-reference.html#completion", null ],
          [ "generate", "cli-reference.html#generate", null ]
        ] ],
        [ "Development Commands", "cli-reference.html#autotoc_md65", [
          [ "lint", "cli-reference.html#lint", null ],
          [ "format", "cli-reference.html#format", null ],
          [ "spelling", "cli-reference.html#spelling", null ],
          [ "precheck", "cli-reference.html#precheck", null ],
          [ "count", "cli-reference.html#count", null ],
          [ "count_diff", "cli-reference.html#count_diff", null ]
        ] ],
        [ "CI Commands", "cli-reference.html#autotoc_md72", [
          [ "bench", "cli-reference.html#bench", null ],
          [ "bench_diff", "cli-reference.html#bench_diff", null ]
        ] ],
        [ "Other Commands", "cli-reference.html#autotoc_md75", [
          [ "load", "cli-reference.html#load", null ]
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
          [ "Build Toolchain", "contributing.html#autotoc_md88", null ],
          [ "How the Build Fits Together", "contributing.html#autotoc_md89", null ]
        ] ],
        [ "Development Workflow", "contributing.html#autotoc_md90", [
          [ "Commit Messages", "contributing.html#autotoc_md91", null ]
        ] ],
        [ "Coding Standards", "contributing.html#autotoc_md92", [
          [ "Hard Rules", "contributing.html#autotoc_md93", null ],
          [ "Soft Guidelines", "contributing.html#autotoc_md94", null ]
        ] ],
        [ "Common Pitfalls", "contributing.html#autotoc_md95", [
          [ "Array Bounds and Indexing", "contributing.html#autotoc_md96", null ],
          [ "Precision and Type Safety", "contributing.html#autotoc_md97", null ],
          [ "Memory and Allocation", "contributing.html#autotoc_md98", null ],
          [ "MPI Correctness", "contributing.html#autotoc_md99", null ],
          [ "Physics and Model Consistency", "contributing.html#autotoc_md100", null ],
          [ "Python Toolchain", "contributing.html#autotoc_md101", null ],
          [ "Compiler Portability", "contributing.html#autotoc_md102", null ],
          [ "Architecture Notes", "contributing.html#autotoc_md103", null ]
        ] ],
        [ "Fypp and GPU", "contributing.html#autotoc_md104", null ],
        [ "How-To Guides", "contributing.html#autotoc_md105", [
          [ "How to Add a New Simulation Parameter", "contributing.html#autotoc_md106", null ],
          [ "How to Write a GPU Parallel Loop", "contributing.html#autotoc_md107", null ],
          [ "How to Allocate and Manage GPU Arrays", "contributing.html#autotoc_md108", null ],
          [ "How to Add a Test Case", "contributing.html#autotoc_md109", null ],
          [ "How to Create a New Fortran Module", "contributing.html#autotoc_md110", null ],
          [ "Working with the Precision System", "contributing.html#autotoc_md111", null ],
          [ "How to Extend MPI Halo Exchange", "contributing.html#autotoc_md112", null ],
          [ "How to Add a Post-Processing Output Variable", "contributing.html#autotoc_md113", null ],
          [ "Modifying <span class=\"tt\">src/common/</span>", "contributing.html#autotoc_md114", null ],
          [ "Debugging", "contributing.html#autotoc_md115", null ],
          [ "How to Document Physics Constraints", "contributing.html#how-to-document-physics-constraints", null ]
        ] ],
        [ "Testing", "contributing.html#autotoc_md116", null ],
        [ "CI Pipeline", "contributing.html#autotoc_md117", [
          [ "Lint Gate (runs first, blocks all other jobs)", "contributing.html#autotoc_md118", null ],
          [ "Build and Test Matrix", "contributing.html#autotoc_md119", null ],
          [ "Common CI Failures", "contributing.html#autotoc_md120", null ]
        ] ],
        [ "Documentation", "contributing.html#autotoc_md121", null ],
        [ "Submitting a Pull Request", "contributing.html#autotoc_md122", null ],
        [ "Code Review and Merge", "contributing.html#autotoc_md123", null ]
      ] ]
    ] ],
    [ "Containers", "docker.html", [
      [ "Containers", "docker.html#autotoc_md124", [
        [ "Navigating Docker", "docker.html#autotoc_md125", [
          [ "Docker Desktop GUI", "docker.html#autotoc_md126", null ],
          [ "Docker CLI", "docker.html#autotoc_md127", null ]
        ] ],
        [ "Details on Running Containers", "docker.html#autotoc_md128", [
          [ "Portability", "docker.html#autotoc_md129", null ]
        ] ],
        [ "Using Supercomputers/Clusters via Apptainer/Singularity", "docker.html#autotoc_md130", [
          [ "Interactive Shell", "docker.html#autotoc_md131", null ],
          [ "For Portability", "docker.html#autotoc_md132", null ],
          [ "Slurm Job", "docker.html#autotoc_md133", null ]
        ] ],
        [ "Tag Details", "docker.html#autotoc_md134", [
          [ "Base Images", "docker.html#autotoc_md135", null ],
          [ "Tag Structure", "docker.html#autotoc_md136", null ],
          [ "Example Tags", "docker.html#autotoc_md137", null ],
          [ "Architecture Support", "docker.html#autotoc_md138", null ]
        ] ]
      ] ]
    ] ],
    [ "Equations", "equations.html", [
      [ "MFC: Comprehensive Equations Reference", "equations.html#autotoc_md139", [
        [ "1. Overview", "equations.html#autotoc_md141", null ],
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
        [ "2. Governing PDEs", "equations.html#autotoc_md144", [
          [ "2.1 Five-Equation Model (<span class=\"tt\">model_eqns = 2</span>)", "equations.html#autotoc_md145", null ],
          [ "2.2 Six-Equation Model (<span class=\"tt\">model_eqns = 3</span>)", "equations.html#autotoc_md146", null ],
          [ "2.3 Other Model Variants", "equations.html#autotoc_md147", null ]
        ] ],
        [ "3. Equations of State", "equations.html#autotoc_md149", [
          [ "3.1 Stiffened Gas EOS (<a class=\"el\" href=\"citelist.html#CITEREF_menikoff89\">[35]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_lemetayer04\">[27]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 2.2)", "equations.html#autotoc_md150", null ],
          [ "3.2 Ideal Gas EOS (Chemistry, <span class=\"tt\">chemistry = .true.</span>)", "equations.html#autotoc_md151", null ]
        ] ],
        [ "4. Viscous Stress Tensor (<span class=\"tt\">viscous = .true.</span>)", "equations.html#autotoc_md153", null ],
        [ "5. Cylindrical Coordinates (<span class=\"tt\">cyl_coord = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 2.3)", "equations.html#autotoc_md155", null ],
        [ "6. Sub-Grid Bubble Dynamics (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1)", "equations.html#autotoc_md157", [
          [ "6.1 Euler-Euler Bubbles (<span class=\"tt\">bubbles_euler = .true.</span>)", "equations.html#autotoc_md158", [
            [ "6.1.1 Method of Classes (<a class=\"el\" href=\"citelist.html#CITEREF_commander89\">[13]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_ando11\">[2]</a>)", "equations.html#autotoc_md159", null ],
            [ "6.1.2 Rayleigh-Plesset (<span class=\"tt\">bubble_model = 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rayleigh17\">[29]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_plesset49\">[40]</a>)", "equations.html#autotoc_md160", null ],
            [ "6.1.3 Keller-Miksis (<span class=\"tt\">bubble_model = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_keller80\">[26]</a>)", "equations.html#autotoc_md161", null ],
            [ "6.1.4 Gilmore (<span class=\"tt\">bubble_model = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gilmore52\">[17]</a>)", "equations.html#autotoc_md162", null ],
            [ "6.1.5 Non-Polytropic Thermal Model (<span class=\"tt\">polytropic = .false.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_preston07\">[41]</a>)", "equations.html#autotoc_md163", null ],
            [ "6.1.6 QBMM Moment Transport (<span class=\"tt\">qbmm = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_bryngelson20\">[7]</a>)", "equations.html#autotoc_md164", null ]
          ] ],
          [ "6.2 Euler-Lagrange Bubbles (<span class=\"tt\">bubbles_lagrange = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_maeda18\">[31]</a>)", "equations.html#autotoc_md165", null ]
        ] ],
        [ "7. Fluid-Structure Interaction", "equations.html#autotoc_md167", [
          [ "7.1 Hypoelastic Model (<span class=\"tt\">hypoelasticity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rodriguez19\">[42]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.6)", "equations.html#autotoc_md168", null ]
        ] ],
        [ "8. Phase Change (<span class=\"tt\">relax = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.3)", "equations.html#autotoc_md169", [
          [ "8.1 pT-Relaxation (<span class=\"tt\">relax_model = 5</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_saurel08\">[44]</a>)", "equations.html#autotoc_md170", null ],
          [ "8.2 pTg-Relaxation (<span class=\"tt\">relax_model = 6</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_zein10\">[60]</a>)", "equations.html#autotoc_md171", null ]
        ] ],
        [ "9. Chemistry and Combustion (<span class=\"tt\">chemistry = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.7)", "equations.html#autotoc_md173", null ],
        [ "10. Surface Tension (<span class=\"tt\">surface_tension = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_schmidmayer17\">[46]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.8)", "equations.html#autotoc_md175", null ],
        [ "11. Magnetohydrodynamics", "equations.html#autotoc_md177", [
          [ "11.1 Ideal MHD (<span class=\"tt\">mhd = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.9)", "equations.html#autotoc_md178", null ],
          [ "11.2 Relativistic MHD (<span class=\"tt\">relativity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.10)", "equations.html#autotoc_md179", null ]
        ] ],
        [ "12. Information Geometric Regularization (<span class=\"tt\">igr = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong25a\">[58]</a>)", "equations.html#autotoc_md181", null ],
        [ "13. Body Forces (<span class=\"tt\">bf_x</span>, <span class=\"tt\">bf_y</span>, <span class=\"tt\">bf_z</span>)", "equations.html#autotoc_md183", null ],
        [ "14. Acoustic Sources (<span class=\"tt\">acoustic_source = .true.</span>)", "equations.html#autotoc_md185", null ],
        [ "15. Numerical Methods", "equations.html#autotoc_md187", [
          [ "15.1 Spatial Reconstruction", "equations.html#autotoc_md188", [
            [ "WENO (<span class=\"tt\">weno_order = 3, 5, 7</span>)", "equations.html#autotoc_md189", null ],
            [ "MUSCL (<span class=\"tt\">muscl_order = 2</span>)", "equations.html#autotoc_md190", null ],
            [ "IGR Reconstruction", "equations.html#autotoc_md191", null ]
          ] ],
          [ "15.2 Riemann Solvers", "equations.html#autotoc_md192", [
            [ "HLL (<span class=\"tt\">riemann_solver = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_harten83\">[21]</a>)", "equations.html#autotoc_md193", null ],
            [ "HLLC (<span class=\"tt\">riemann_solver = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_toro94\">[55]</a>)", "equations.html#autotoc_md194", null ],
            [ "Exact (<span class=\"tt\">riemann_solver = 3</span>)", "equations.html#autotoc_md195", null ],
            [ "HLLD (<span class=\"tt\">riemann_solver = 4</span>, MHD or hypoelasticity)", "equations.html#autotoc_md196", null ],
            [ "Developer Notes on Non-Conservative Term Implementation", "equations.html#autotoc_md197", null ]
          ] ],
          [ "15.3 Time Integration", "equations.html#autotoc_md198", [
            [ "TVD Runge-Kutta (<span class=\"tt\">time_stepper = 1, 2, 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gottlieb98\">[18]</a>)", "equations.html#autotoc_md199", null ],
            [ "Adaptive Time Stepping (<span class=\"tt\">adap_dt = .true.</span>)", "equations.html#autotoc_md200", null ],
            [ "Strang Splitting (<a class=\"el\" href=\"citelist.html#CITEREF_strang68\">[49]</a>) (for stiff bubble dynamics)", "equations.html#autotoc_md201", null ]
          ] ],
          [ "15.4 CFL Condition", "equations.html#autotoc_md202", null ],
          [ "15.5 Finite Differences (<span class=\"tt\">fd_order = 1, 2, 4</span>)", "equations.html#autotoc_md203", null ]
        ] ],
        [ "16. Boundary Conditions", "equations.html#autotoc_md205", [
          [ "16.1 Simple BCs", "equations.html#autotoc_md206", null ],
          [ "16.2 Characteristic BCs (<a class=\"el\" href=\"citelist.html#CITEREF_thompson87\">[52]</a>, <a class=\"el\" href=\"citelist.html#CITEREF_thompson90\">[53]</a>; <span class=\"tt\">bc_x%beg = -5</span> to <span class=\"tt\">-12</span>)", "equations.html#autotoc_md207", null ],
          [ "16.3 Immersed Boundary Method (<span class=\"tt\">ib = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_tseng03\">[57]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_mittal05\">[36]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.1.1)", "equations.html#autotoc_md208", null ]
        ] ],
        [ "17. Low Mach Number Corrections (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[59]</a> Sec. 4.2.4)", "equations.html#autotoc_md210", null ],
        [ "18. Flux Limiting", "equations.html#autotoc_md212", null ]
      ] ]
    ] ],
    [ "Example Cases", "examples.html", [
      [ "Example Cases", "examples.html#autotoc_md213", [
        [ "Viscous Shock Tube (2D)", "examples.html#autotoc_md214", null ],
        [ "Backward Facing Step (2D)", "examples.html#autotoc_md217", [
          [ "Final Condition (Density)", "examples.html#autotoc_md218", null ]
        ] ],
        [ "Lax shock tube problem (1D)", "examples.html#autotoc_md219", [
          [ "Initial Condition", "examples.html#autotoc_md220", null ],
          [ "Result", "examples.html#autotoc_md221", null ]
        ] ],
        [ "1D Multi-Component Reactive Shock Tube", "examples.html#autotoc_md222", [
          [ "Initial Condition", "examples.html#autotoc_md223", null ],
          [ "Results", "examples.html#autotoc_md224", null ]
        ] ],
        [ "Lid-Driven Cavity Problem (2D)", "examples.html#autotoc_md225", [
          [ "Final Condition", "examples.html#autotoc_md226", null ],
          [ "Centerline Velocities", "examples.html#autotoc_md227", null ]
        ] ],
        [ "2D Riemann Test (2D)", "examples.html#autotoc_md228", [
          [ "Density Initial and Final Conditions", "examples.html#autotoc_md229", null ]
        ] ],
        [ "IBM Bow Shock (3D)", "examples.html#autotoc_md230", [
          [ "Final Condition", "examples.html#autotoc_md231", null ]
        ] ],
        [ "2D Power-Law (Shear-Thickening) Poiseuille Channel", "examples.html#autotoc_md232", [
          [ "Regime and parameters", "examples.html#autotoc_md233", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md234", null ],
          [ "How to run", "examples.html#autotoc_md235", null ],
          [ "Validation result", "examples.html#autotoc_md236", null ],
          [ "References", "examples.html#autotoc_md237", null ]
        ] ],
        [ "1D Multi-Component Inert Shock Tube", "examples.html#autotoc_md238", [
          [ "Initial Condition", "examples.html#autotoc_md239", null ],
          [ "Results", "examples.html#autotoc_md240", null ]
        ] ],
        [ "Rayleigh-Taylor Instability (3D)", "examples.html#autotoc_md241", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md242", null ]
        ] ],
        [ "Taylor-Green Vortex (3D)", "examples.html#autotoc_md243", [
          [ "Final Condition", "examples.html#autotoc_md244", null ]
        ] ],
        [ "Perfectly Stirred Reactor", "examples.html#autotoc_md245", [
          [ "Validation", "examples.html#autotoc_md246", null ]
        ] ],
        [ "2D Bingham (Yield-Stress) Poiseuille Channel", "examples.html#autotoc_md247", [
          [ "Regime and parameters", "examples.html#autotoc_md248", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md249", null ],
          [ "How to run", "examples.html#autotoc_md250", null ],
          [ "Validation result", "examples.html#autotoc_md251", null ],
          [ "References", "examples.html#autotoc_md252", null ]
        ] ],
        [ "Isentropic vortex problem (2D)", "examples.html#autotoc_md253", [
          [ "Density", "examples.html#autotoc_md254", null ],
          [ "Density Norms", "examples.html#autotoc_md255", null ]
        ] ],
        [ "Rayleigh-Taylor Instability (2D)", "examples.html#autotoc_md256", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md257", null ]
        ] ],
        [ "Titarev-Toro problem (1D)", "examples.html#autotoc_md258", [
          [ "Initial Condition", "examples.html#autotoc_md259", null ],
          [ "Result", "examples.html#autotoc_md260", null ]
        ] ],
        [ "2D Triple Point (2D)", "examples.html#autotoc_md261", [
          [ "Numerical Schlieren at Final Time", "examples.html#autotoc_md262", null ]
        ] ],
        [ "2D Shear-Thinning Lid-Driven Cavity", "examples.html#autotoc_md263", [
          [ "Regime and parameters", "examples.html#autotoc_md264", null ],
          [ "Governing physics", "examples.html#autotoc_md265", null ],
          [ "How to run", "examples.html#autotoc_md266", null ],
          [ "References", "examples.html#autotoc_md267", null ]
        ] ],
        [ "2D Power-Law (Shear-Thinning) Poiseuille Channel", "examples.html#autotoc_md268", [
          [ "Regime and parameters", "examples.html#autotoc_md269", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md270", null ],
          [ "How to run", "examples.html#autotoc_md271", null ],
          [ "Validation result", "examples.html#autotoc_md272", null ],
          [ "References", "examples.html#autotoc_md273", null ]
        ] ],
        [ "2D Hardcodied IC Example", "examples.html#autotoc_md274", [
          [ "Initial Condition and Result", "examples.html#autotoc_md275", null ]
        ] ],
        [ "3D Turbulent Mixing layer (3D)", "examples.html#autotoc_md276", [
          [ "Liutex visualization at transitional state", "examples.html#autotoc_md277", null ]
        ] ],
        [ "Scaling and Performance test", "examples.html#autotoc_md278", [
          [ "Weak Scaling", "examples.html#autotoc_md279", null ],
          [ "Strong Scaling", "examples.html#autotoc_md280", null ],
          [ "Example", "examples.html#autotoc_md281", null ]
        ] ],
        [ "2D IBM CFL dt (2D)", "examples.html#autotoc_md282", [
          [ "Result", "examples.html#autotoc_md283", null ]
        ] ],
        [ "Kelvin-Helmholtz Instability (2D)", "examples.html#autotoc_md284", null ],
        [ "Shock Droplet (2D)", "examples.html#autotoc_md287", [
          [ "Initial Condition", "examples.html#autotoc_md288", null ],
          [ "Result", "examples.html#autotoc_md289", null ]
        ] ],
        [ "2D General Herschel-Bulkley Poiseuille Channel", "examples.html#autotoc_md290", [
          [ "Regime and parameters", "examples.html#autotoc_md291", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md292", null ],
          [ "How to run", "examples.html#autotoc_md293", null ],
          [ "Validation result", "examples.html#autotoc_md294", null ],
          [ "References", "examples.html#autotoc_md295", null ]
        ] ],
        [ "Gas Jet (2D)", "examples.html#autotoc_md296", [
          [ "Final Condition", "examples.html#autotoc_md297", null ]
        ] ],
        [ "Richtmyer-Meshkov Instability (2D)", "examples.html#autotoc_md298", null ],
        [ "Shu-Osher problem (1D)", "examples.html#autotoc_md301", [
          [ "Initial Condition", "examples.html#autotoc_md302", null ],
          [ "Result", "examples.html#autotoc_md303", null ]
        ] ],
        [ "Forward Facing Step (2D)", "examples.html#autotoc_md304", [
          [ "Final Condition (Density)", "examples.html#autotoc_md305", null ]
        ] ],
        [ "2D IBM-Walled Power-Law Poiseuille Channel", "examples.html#autotoc_md306", [
          [ "Geometry and parameters", "examples.html#autotoc_md307", null ],
          [ "Analytic solution", "examples.html#autotoc_md308", null ],
          [ "How to run", "examples.html#autotoc_md309", null ],
          [ "Validation results", "examples.html#autotoc_md310", null ],
          [ "References", "examples.html#autotoc_md311", null ]
        ] ]
      ] ]
    ] ],
    [ "Performance", "expectedPerformance.html", [
      [ "Performance", "expectedPerformance.html#autotoc_md312", [
        [ "Achieving Maximum Performance", "expectedPerformance.html#autotoc_md314", [
          [ "Case Optimization (Recommended)", "expectedPerformance.html#autotoc_md315", [
            [ "When to use case optimization", "expectedPerformance.html#autotoc_md316", null ]
          ] ],
          [ "Other Optimization Flags", "expectedPerformance.html#autotoc_md317", null ],
          [ "Profiling for Optimization", "expectedPerformance.html#autotoc_md318", null ],
          [ "Performance Checklist", "expectedPerformance.html#autotoc_md319", null ]
        ] ],
        [ "Benchmark Results", "expectedPerformance.html#autotoc_md321", [
          [ "Figure of merit: Grind time performance", "expectedPerformance.html#autotoc_md322", null ]
        ] ],
        [ "Weak scaling", "expectedPerformance.html#autotoc_md323", [
          [ "GPU weak scaling", "expectedPerformance.html#autotoc_md324", null ],
          [ "NVIDIA V100 GPU (historical)", "expectedPerformance.html#autotoc_md325", null ],
          [ "IBM Power9 CPU (historical)", "expectedPerformance.html#autotoc_md326", null ]
        ] ],
        [ "Strong scaling", "expectedPerformance.html#autotoc_md327", [
          [ "NVIDIA V100 GPU", "expectedPerformance.html#autotoc_md328", [
            [ "16M Grid Points", "expectedPerformance.html#autotoc_md329", null ],
            [ "64M Grid Points", "expectedPerformance.html#autotoc_md330", null ]
          ] ],
          [ "IBM Power9 CPU", "expectedPerformance.html#autotoc_md331", null ]
        ] ]
      ] ]
    ] ],
    [ "Getting Started", "getting-started.html", [
      [ "Getting Started", "getting-started.html#autotoc_md332", [
        [ "Fetching MFC", "getting-started.html#autotoc_md333", null ],
        [ "Install via Homebrew (macOS)", "getting-started.html#autotoc_md334", null ],
        [ "Build Environment", "getting-started.html#autotoc_md335", null ],
        [ "Building MFC", "getting-started.html#autotoc_md336", null ],
        [ "Using Containers", "getting-started.html#autotoc_md337", null ],
        [ "Running the Test Suite", "getting-started.html#autotoc_md338", null ],
        [ "Running an Example Case", "getting-started.html#autotoc_md339", null ],
        [ "Units and Dimensions", "getting-started.html#autotoc_md340", null ],
        [ "Visualizing Results", "getting-started.html#autotoc_md341", null ],
        [ "Helpful Tools", "getting-started.html#autotoc_md342", [
          [ "Parameter Lookup", "getting-started.html#autotoc_md343", null ],
          [ "Creating a New Case", "getting-started.html#autotoc_md344", null ],
          [ "Shell Completion", "getting-started.html#autotoc_md345", null ]
        ] ]
      ] ]
    ] ],
    [ "GPU Parallelization", "gpuParallelization.html", [
      [ "GPU Parallelization", "gpuParallelization.html#autotoc_md346", [
        [ "Macro API Documentation", "gpuParallelization.html#autotoc_md348", [
          [ "Data Type Meanings", "gpuParallelization.html#autotoc_md349", null ],
          [ "Data Flow", "gpuParallelization.html#autotoc_md350", null ],
          [ "Computation Macros", "gpuParallelization.html#autotoc_md352", null ],
          [ "Data Control Macros", "gpuParallelization.html#autotoc_md354", null ],
          [ "Synchronization Macros", "gpuParallelization.html#autotoc_md356", null ],
          [ "Miscellaneous Macros", "gpuParallelization.html#autotoc_md358", null ]
        ] ],
        [ "Writing GPU_ROUTINE Device Helpers", "gpuParallelization.html#autotoc_md360", null ]
      ] ],
      [ "Debugging Tools and Tips for GPUs", "gpuParallelization.html#autotoc_md362", [
        [ "Compiler agnostic tools", "gpuParallelization.html#autotoc_md363", null ],
        [ "OpenMP tools", "gpuParallelization.html#autotoc_md364", null ],
        [ "Cray Compiler Tools", "gpuParallelization.html#autotoc_md365", [
          [ "Cray General Options", "gpuParallelization.html#autotoc_md366", null ],
          [ "Cray OpenACC Options", "gpuParallelization.html#autotoc_md367", null ]
        ] ],
        [ "NVHPC Compiler Options", "gpuParallelization.html#autotoc_md368", [
          [ "NVHPC General Options", "gpuParallelization.html#autotoc_md369", null ],
          [ "NVHPC OpenACC Options", "gpuParallelization.html#autotoc_md370", null ],
          [ "NVHPC OpenMP Options", "gpuParallelization.html#autotoc_md371", null ]
        ] ],
        [ "Compiler Documentation", "gpuParallelization.html#autotoc_md372", null ]
      ] ]
    ] ],
    [ "Papers", "papers.html", [
      [ "Papers", "papers.html#autotoc_md373", null ]
    ] ],
    [ "Case Parameters", "parameters.html", [
      [ "Case Parameters", "parameters.html#autotoc_md374", [
        [ "Overview", "parameters.html#autotoc_md375", null ],
        [ "Parameter Families", "parameters.html#autotoc_md376", null ],
        [ "patch_icpp", "parameters.html#patch_icpp", [
          [ "Patterns", "parameters.html#autotoc_md378", null ]
        ] ],
        [ "fluid_pp", "parameters.html#fluid_pp", [
          [ "Patterns", "parameters.html#autotoc_md380", null ]
        ] ],
        [ "patch_bc", "parameters.html#patch_bc", [
          [ "Patterns", "parameters.html#autotoc_md382", null ]
        ] ],
        [ "acoustic", "parameters.html#acoustic", [
          [ "Patterns", "parameters.html#autotoc_md384", null ]
        ] ],
        [ "chem_wrt_Y", "parameters.html#chem_wrt_Y", [
          [ "Patterns", "parameters.html#autotoc_md386", null ]
        ] ],
        [ "simplex_params", "parameters.html#simplex_params", [
          [ "Patterns", "parameters.html#autotoc_md388", null ]
        ] ],
        [ "synth_amp_shell", "parameters.html#synth_amp_shell", [
          [ "Patterns", "parameters.html#autotoc_md390", null ]
        ] ],
        [ "synth_k_shell", "parameters.html#synth_k_shell", [
          [ "Patterns", "parameters.html#autotoc_md392", null ]
        ] ],
        [ "synth_n_waves_per_shell", "parameters.html#synth_n_waves_per_shell", [
          [ "Patterns", "parameters.html#autotoc_md394", null ]
        ] ],
        [ "bc_x", "parameters.html#bc_x", [
          [ "Patterns", "parameters.html#autotoc_md396", null ]
        ] ],
        [ "bc_y", "parameters.html#bc_y", [
          [ "Patterns", "parameters.html#autotoc_md398", null ]
        ] ],
        [ "bc_z", "parameters.html#bc_z", [
          [ "Patterns", "parameters.html#autotoc_md400", null ]
        ] ],
        [ "probe", "parameters.html#probe", [
          [ "Patterns", "parameters.html#autotoc_md402", null ]
        ] ],
        [ "synth_L", "parameters.html#synth_L", [
          [ "Patterns", "parameters.html#autotoc_md404", null ]
        ] ],
        [ "turb_pos", "parameters.html#turb_pos", [
          [ "Patterns", "parameters.html#autotoc_md406", null ]
        ] ],
        [ "patch_ib", "parameters.html#patch_ib", [
          [ "Patterns", "parameters.html#autotoc_md408", null ]
        ] ],
        [ "spatial_bf", "parameters.html#spatial_bf", [
          [ "Patterns", "parameters.html#autotoc_md410", null ]
        ] ],
        [ "bub_pp", "parameters.html#bub_pp", null ],
        [ "lag_params", "parameters.html#lag_params", null ],
        [ "particle_cloud", "parameters.html#particle_cloud", null ],
        [ "alpha_rho_e_wrt", "parameters.html#alpha_rho_e_wrt", [
          [ "Patterns", "parameters.html#autotoc_md415", null ]
        ] ],
        [ "alpha_rho_wrt", "parameters.html#alpha_rho_wrt", [
          [ "Patterns", "parameters.html#autotoc_md417", null ]
        ] ],
        [ "alpha_wrt", "parameters.html#alpha_wrt", [
          [ "Patterns", "parameters.html#autotoc_md419", null ]
        ] ],
        [ "fluid_rho", "parameters.html#fluid_rho", [
          [ "Patterns", "parameters.html#autotoc_md421", null ]
        ] ],
        [ "schlieren_alpha", "parameters.html#schlieren_alpha", [
          [ "Patterns", "parameters.html#autotoc_md423", null ]
        ] ],
        [ "stl_models", "parameters.html#stl_models", [
          [ "Patterns", "parameters.html#autotoc_md425", null ]
        ] ],
        [ "chem_params", "parameters.html#chem_params", null ],
        [ "rburn", "parameters.html#rburn", null ],
        [ "ib_airfoil", "parameters.html#ib_airfoil", null ],
        [ "flux_wrt", "parameters.html#flux_wrt", [
          [ "Patterns", "parameters.html#autotoc_md430", null ]
        ] ],
        [ "mom_wrt", "parameters.html#mom_wrt", [
          [ "Patterns", "parameters.html#autotoc_md432", null ]
        ] ],
        [ "omega_wrt", "parameters.html#omega_wrt", [
          [ "Patterns", "parameters.html#autotoc_md434", null ]
        ] ],
        [ "vel_wrt", "parameters.html#vel_wrt", [
          [ "Patterns", "parameters.html#autotoc_md436", null ]
        ] ],
        [ "x_domain", "parameters.html#x_domain", null ],
        [ "x_output", "parameters.html#x_output", null ],
        [ "y_domain", "parameters.html#y_domain", null ],
        [ "y_output", "parameters.html#y_output", null ],
        [ "z_domain", "parameters.html#z_domain", null ],
        [ "z_output", "parameters.html#z_output", null ],
        [ "general", "parameters.html#general", null ],
        [ "CLI Reference", "parameters.html#autotoc_md445", null ]
      ] ]
    ] ],
    [ "Physics Constraints", "physics_constraints.html", [
      [ "Physics Constraints Reference", "physics_constraints.html#autotoc_md446", [
        [ "Thermodynamic Constraints", "physics_constraints.html#autotoc_md448", [
          [ "Stiffened EOS Positivity", "physics_constraints.html#autotoc_md449", null ],
          [ "EOS Parameter Sanity (Transformed Gamma)", "physics_constraints.html#autotoc_md450", null ],
          [ "Patch Initial Condition Constraints", "physics_constraints.html#autotoc_md451", null ]
        ] ],
        [ "Mixture Constraints", "physics_constraints.html#autotoc_md453", [
          [ "Volume Fraction Sum", "physics_constraints.html#autotoc_md454", null ],
          [ "Alpha-Rho Consistency", "physics_constraints.html#autotoc_md455", null ]
        ] ],
        [ "Domain and Geometry", "physics_constraints.html#autotoc_md457", [
          [ "Domain Bounds", "physics_constraints.html#autotoc_md458", null ],
          [ "Dimensionality", "physics_constraints.html#autotoc_md459", null ],
          [ "Domain Extents Specified", "physics_constraints.html#autotoc_md460", null ],
          [ "Patch Within Domain", "physics_constraints.html#autotoc_md461", null ]
        ] ],
        [ "Velocity and Dimensional Consistency", "physics_constraints.html#autotoc_md463", [
          [ "Velocity Components in Inactive Dimensions", "physics_constraints.html#autotoc_md464", null ]
        ] ],
        [ "Model Equations", "physics_constraints.html#autotoc_md466", [
          [ "Model Equation Selection", "physics_constraints.html#autotoc_md467", null ]
        ] ],
        [ "Boundary Conditions", "physics_constraints.html#autotoc_md469", [
          [ "Boundary Condition Compatibility", "physics_constraints.html#autotoc_md470", null ]
        ] ],
        [ "Bubble Physics", "physics_constraints.html#autotoc_md472", [
          [ "Euler-Euler Bubble Model", "physics_constraints.html#autotoc_md473", null ],
          [ "Bubble Simulation Constraints", "physics_constraints.html#autotoc_md474", null ],
          [ "Euler-Lagrange Bubble Model", "physics_constraints.html#autotoc_md475", null ]
        ] ],
        [ "Feature Compatibility", "physics_constraints.html#autotoc_md477", [
          [ "Magnetohydrodynamics (MHD)", "physics_constraints.html#autotoc_md478", null ],
          [ "Surface Tension", "physics_constraints.html#autotoc_md479", null ],
          [ "Hypoelasticity", "physics_constraints.html#autotoc_md480", null ],
          [ "Phase Change", "physics_constraints.html#autotoc_md481", null ],
          [ "Alternative Sound Speed", "physics_constraints.html#autotoc_md482", null ],
          [ "Iterative Generalized Riemann (IGR)", "physics_constraints.html#autotoc_md483", null ],
          [ "Non-Newtonian (Herschel-Bulkley) Viscosity", "physics_constraints.html#autotoc_md484", null ],
          [ "Synthetic Turbulence Forcing", "physics_constraints.html#autotoc_md485", null ]
        ] ],
        [ "Numerical Schemes", "physics_constraints.html#autotoc_md487", [
          [ "WENO Reconstruction", "physics_constraints.html#autotoc_md488", null ],
          [ "MUSCL Reconstruction", "physics_constraints.html#autotoc_md489", null ],
          [ "Time Stepping", "physics_constraints.html#autotoc_md490", null ],
          [ "Viscosity", "physics_constraints.html#autotoc_md491", null ]
        ] ],
        [ "Acoustic Sources", "physics_constraints.html#autotoc_md493", [
          [ "Acoustic Sources", "physics_constraints.html#autotoc_md494", null ]
        ] ],
        [ "Post-Processing", "physics_constraints.html#autotoc_md496", [
          [ "Vorticity Output", "physics_constraints.html#autotoc_md497", null ],
          [ "FFT Output", "physics_constraints.html#autotoc_md498", null ]
        ] ],
        [ "Combustion", "physics_constraints.html#autotoc_md500", [
          [ "Condensed-Phase Reactive Burn", "physics_constraints.html#autotoc_md501", null ]
        ] ],
        [ "IC Extrusion", "physics_constraints.html#autotoc_md503", [
          [ "IC Extrusion File Parameters", "physics_constraints.html#autotoc_md504", null ]
        ] ]
      ] ]
    ] ],
    [ "Running", "running.html", [
      [ "Running", "running.html#autotoc_md511", [
        [ "Using the Homebrew package (macOS)", "running.html#autotoc_md512", null ],
        [ "Interactive Execution", "running.html#autotoc_md514", null ],
        [ "Running on GPUs", "running.html#autotoc_md516", [
          [ "Building with GPU Support", "running.html#autotoc_md517", null ],
          [ "Running on GPUs", "running.html#autotoc_md518", null ],
          [ "Supported Compilers", "running.html#autotoc_md519", null ],
          [ "Environment Setup", "running.html#autotoc_md520", null ],
          [ "Verifying GPU Detection", "running.html#autotoc_md521", null ],
          [ "GPU Profiling", "running.html#autotoc_md522", [
            [ "NVIDIA GPUs", "running.html#autotoc_md523", null ],
            [ "AMD GPUs", "running.html#autotoc_md524", null ]
          ] ]
        ] ],
        [ "Batch Execution", "running.html#autotoc_md526", [
          [ "Basic Usage", "running.html#autotoc_md527", null ],
          [ "Batch Options", "running.html#autotoc_md528", null ],
          [ "Examples", "running.html#autotoc_md529", null ],
          [ "Computer Templates", "running.html#autotoc_md530", null ],
          [ "Scheduler Notes", "running.html#autotoc_md531", null ]
        ] ],
        [ "Restarting Cases", "running.html#autotoc_md533", null ],
        [ "Example Runs", "running.html#autotoc_md535", null ]
      ] ]
    ] ],
    [ "Testing", "testing.html", null ],
    [ "Troubleshooting Guide", "troubleshooting.html", [
      [ "Troubleshooting Guide", "troubleshooting.html#autotoc_md539", [
        [ "Quick Reference", "troubleshooting.html#autotoc_md540", [
          [ "Debugging Flags", "troubleshooting.html#autotoc_md541", null ],
          [ "Profiling Flags", "troubleshooting.html#autotoc_md542", null ],
          [ "Useful Commands", "troubleshooting.html#autotoc_md543", null ]
        ] ],
        [ "Debugging Workflow", "troubleshooting.html#autotoc_md545", [
          [ "Build Fails?", "troubleshooting.html#autotoc_md546", null ],
          [ "Run Fails?", "troubleshooting.html#autotoc_md547", null ],
          [ "Test Fails?", "troubleshooting.html#autotoc_md548", null ]
        ] ],
        [ "Build Debugging", "troubleshooting.html#autotoc_md550", [
          [ "Verbosity Levels", "troubleshooting.html#autotoc_md551", null ],
          [ "Debug Builds", "troubleshooting.html#autotoc_md552", null ],
          [ "Code Coverage", "troubleshooting.html#autotoc_md553", null ],
          [ "Isolating Issues", "troubleshooting.html#autotoc_md554", null ],
          [ "Clean Rebuild", "troubleshooting.html#autotoc_md555", null ]
        ] ],
        [ "Runtime Debugging", "troubleshooting.html#autotoc_md557", [
          [ "Case Validation", "troubleshooting.html#autotoc_md558", null ],
          [ "Verbose Runs", "troubleshooting.html#autotoc_md559", null ],
          [ "Debug Log", "troubleshooting.html#autotoc_md560", null ],
          [ "Running with Fewer Ranks", "troubleshooting.html#autotoc_md561", null ]
        ] ],
        [ "Test Debugging", "troubleshooting.html#autotoc_md563", [
          [ "Running Specific Tests", "troubleshooting.html#autotoc_md564", null ],
          [ "Serial Test Execution", "troubleshooting.html#autotoc_md565", null ],
          [ "Test Output Location", "troubleshooting.html#autotoc_md566", null ],
          [ "Regenerating Golden Files", "troubleshooting.html#autotoc_md567", null ],
          [ "Understanding Test Failures", "troubleshooting.html#autotoc_md568", null ]
        ] ],
        [ "Performance Profiling", "troubleshooting.html#autotoc_md570", [
          [ "NVIDIA GPU Profiling", "troubleshooting.html#autotoc_md571", null ],
          [ "AMD GPU Profiling", "troubleshooting.html#autotoc_md572", null ],
          [ "Performance vs Correctness", "troubleshooting.html#autotoc_md573", null ]
        ] ],
        [ "Common Build Errors", "troubleshooting.html#autotoc_md575", [
          [ "\"CMake could not find MPI\"", "troubleshooting.html#autotoc_md576", null ],
          [ "\"CMake could not find a Fortran compiler\"", "troubleshooting.html#autotoc_md577", null ],
          [ "\"Fypp preprocessing failed\"", "troubleshooting.html#autotoc_md578", null ],
          [ "Build fails with GPU/OpenACC errors", "troubleshooting.html#autotoc_md579", null ],
          [ "\"Module not found\" on HPC", "troubleshooting.html#autotoc_md580", null ]
        ] ],
        [ "Common Runtime Errors", "troubleshooting.html#autotoc_md582", [
          [ "\"Case parameter constraint violations\"", "troubleshooting.html#autotoc_md583", null ],
          [ "\"NaN detected\"", "troubleshooting.html#autotoc_md584", null ],
          [ "GPU not detected", "troubleshooting.html#autotoc_md585", null ],
          [ "MPI errors or hangs", "troubleshooting.html#autotoc_md586", null ]
        ] ],
        [ "Visualization Issues", "troubleshooting.html#autotoc_md588", [
          [ "\"No 'binary/' or 'silo_hdf5/' directory found\"", "troubleshooting.html#autotoc_md589", null ],
          [ "\"Variable 'X' not found\"", "troubleshooting.html#autotoc_md590", null ],
          [ "\"h5py is required to read Silo-HDF5 files\"", "troubleshooting.html#autotoc_md591", null ],
          [ "Visualization looks wrong or has artifacts", "troubleshooting.html#autotoc_md592", null ]
        ] ],
        [ "Getting Help", "troubleshooting.html#autotoc_md594", null ]
      ] ]
    ] ],
    [ "Flow visualization", "visualization.html", [
      [ "Flow visualization", "visualization.html#autotoc_md595", [
        [ "Quick visualization with <span class=\"tt\">./mfc.sh viz</span>", "visualization.html#autotoc_md597", [
          [ "Basic usage", "visualization.html#autotoc_md598", null ],
          [ "Exploring available data", "visualization.html#autotoc_md599", null ],
          [ "Timestep selection", "visualization.html#autotoc_md600", null ],
          [ "Rendering options", "visualization.html#autotoc_md601", null ],
          [ "3D slicing", "visualization.html#autotoc_md602", null ],
          [ "Video generation", "visualization.html#autotoc_md603", null ],
          [ "Tiled 1D rendering", "visualization.html#autotoc_md604", null ],
          [ "Interactive mode", "visualization.html#autotoc_md605", null ],
          [ "Terminal UI (TUI)", "visualization.html#autotoc_md606", null ],
          [ "Plot styling", "visualization.html#autotoc_md607", null ],
          [ "Format selection", "visualization.html#autotoc_md608", null ],
          [ "Complete option reference", "visualization.html#autotoc_md609", null ]
        ] ],
        [ "Visualizing with ParaView", "visualization.html#autotoc_md611", [
          [ "Visualizing data in cylindrical coordinates", "visualization.html#autotoc_md612", null ]
        ] ],
        [ "Visualizing with VisIt", "visualization.html#autotoc_md613", null ],
        [ "Serial data output", "visualization.html#autotoc_md614", null ],
        [ "Remote Visualization on PACE Phoenix", "visualization.html#autotoc_md615", [
          [ "Step 1: Setting up your Environment", "visualization.html#autotoc_md616", null ],
          [ "Step 2: Customizing the script", "visualization.html#autotoc_md617", null ],
          [ "Step 3: Running pace-paraview-server", "visualization.html#autotoc_md618", null ]
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
"physics_constraints.html#autotoc_md480"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';