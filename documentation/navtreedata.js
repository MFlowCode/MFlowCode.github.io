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
    [ "Adaptive Mesh Refinement", "amr.html", "amr" ],
    [ "Code Architecture", "architecture.html", [
      [ "Three-Phase Pipeline", "architecture.html#autotoc_md11", null ],
      [ "Directory Layout", "architecture.html#autotoc_md12", null ],
      [ "Key Data Structures", "architecture.html#autotoc_md13", null ],
      [ "The Simulation Loop", "architecture.html#autotoc_md14", [
        [ "What happens at each stage", "architecture.html#autotoc_md15", null ]
      ] ],
      [ "Module Map", "architecture.html#autotoc_md16", [
        [ "Solver Core", "architecture.html#autotoc_md17", null ],
        [ "Physics Models", "architecture.html#autotoc_md18", null ],
        [ "Boundary Conditions", "architecture.html#autotoc_md19", null ],
        [ "I/O and Startup", "architecture.html#autotoc_md20", null ],
        [ "Infrastructure", "architecture.html#autotoc_md21", null ],
        [ "Pre-Process", "architecture.html#autotoc_md22", null ]
      ] ],
      [ "MPI Parallelization", "architecture.html#autotoc_md23", null ],
      [ "Adding New Physics", "architecture.html#autotoc_md24", null ]
    ] ],
    [ "Authors", "authors.html", null ],
    [ "Case Files", "case.html", [
      [ "Case Files", "case.html#autotoc_md26", [
        [ "Basic Skeleton", "case.html#autotoc_md27", null ],
        [ "(Optional) Accepting command line arguments", "case.html#autotoc_md28", null ],
        [ "Parameters", "case.html#autotoc_md29", null ],
        [ "Feature Compatibility", "case.html#autotoc_md30", [
          [ "1. Runtime", "case.html#sec-runtime", null ],
          [ "2. Computational Domain", "case.html#sec-computational-domain", null ],
          [ "3. Patches", "case.html#sec-patches", [
            [ "Analytical Definition of Primitive Variables", "case.html#autotoc_md31", null ],
            [ "Hard Coded Patches", "case.html#autotoc_md32", null ],
            [ "Parameter Descriptions", "case.html#autotoc_md33", null ],
            [ "Elliptic Smoothing", "case.html#autotoc_md34", null ]
          ] ],
          [ "4. Immersed Boundary Patches", "case.html#sec-immersed-boundary-patches", [
            [ "Parameter Descriptions", "case.html#autotoc_md35", null ],
            [ "Particle Clouds", "case.html#autotoc_md36", null ]
          ] ],
          [ "5. Fluid Material's", "case.html#sec-fluid-materials", null ],
          [ "6. Simulation Algorithm", "case.html#sec-simulation-algorithm", [
            [ "Boundary Condition Patches", "case.html#boundary-condition-patches", null ],
            [ "Constant Time-Stepping", "case.html#autotoc_md37", [
              [ "Adaptive Time-Stepping", "case.html#autotoc_md38", null ]
            ] ]
          ] ],
          [ "7. Formatted Output", "case.html#sec-formatted-output", [
            [ "Immersed-boundary force history", "case.html#sec-ib-force-history", null ],
            [ "Immersed-boundary heat history", "case.html#sec-ib-heat-history", null ]
          ] ],
          [ "7.1. Adaptive Mesh Refinement (AMR)", "case.html#sec-amr", null ],
          [ "8. Acoustic Source", "case.html#sec-acoustic-source", null ],
          [ "9. Sub-grid Bubble Models", "case.html#sec-bubble-models", [
            [ "9.1 Ensemble-Averaged Bubble Model", "case.html#autotoc_md39", null ],
            [ "9.2 Volume-Averaged Bubble Model", "case.html#autotoc_md40", null ],
            [ "9.3 Euler-Lagrange Solid Particle Model", "case.html#autotoc_md41", null ]
          ] ],
          [ "10. Velocity Field Setup", "case.html#sec-velocity-field-setup", null ],
          [ "11. Phase Change Model", "case.html#sec-phase-change", null ],
          [ "12. Artificial Mach Number", "case.html#sec-artificial-mach-number", null ],
          [ "13. Body Forces", "case.html#autotoc_md42", [
            [ "Mean pressure gradient forcing", "case.html#autotoc_md43", null ],
            [ "Mean gas temperature source (thermostat)", "case.html#autotoc_md44", null ]
          ] ],
          [ "14. Magnetohydrodynamics (MHD)", "case.html#autotoc_md45", null ],
          [ "15. Elasticity", "case.html#autotoc_md46", null ],
          [ "16. Cylindrical Coordinates", "case.html#autotoc_md47", null ],
          [ "17. Chemistry", "case.html#autotoc_md48", null ],
          [ "18. Chemistry-Specific Boundary Conditions", "case.html#autotoc_md49", null ],
          [ "19. Non-Newtonian (Herschel-Bulkley) Viscosity", "case.html#sec-non-newtonian", null ],
          [ "20. GPU Performance (NVIDIA UVM)", "case.html#autotoc_md50", null ],
          [ "20. Synthetic Turbulence", "case.html#autotoc_md51", null ]
        ] ],
        [ "Enumerations", "case.html#autotoc_md52", [
          [ "Boundary conditions", "case.html#boundary-conditions", null ],
          [ "Generalized Characteristic Boundary conditions", "case.html#autotoc_md53", null ],
          [ "Patch types", "case.html#patch-types", null ],
          [ "Immersed Boundary Patch Types", "case.html#immersed-boundary-patch-types", null ],
          [ "Acoustic Supports", "case.html#acoustic-supports", null ],
          [ "Conservative Variables Ordering", "case.html#autotoc_md54", null ],
          [ "Primitive Variables Ordering", "case.html#autotoc_md55", null ]
        ] ]
      ] ]
    ] ],
    [ "Case Creator Guide", "case_constraints.html", [
      [ "Case Creator Guide", "case_constraints.html#autotoc_md56", [
        [ "🧩 Case Design Playbook", "case_constraints.html#case-design-playbook", [
          [ "🟢 Beginner Examples", "case_constraints.html#autotoc_md57", null ],
          [ "🟡 Intermediate Examples", "case_constraints.html#autotoc_md58", null ],
          [ "🔴 Advanced Examples", "case_constraints.html#autotoc_md59", null ]
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
      [ "CLI Reference", "cli-reference.html#autotoc_md61", [
        [ "Overview", "cli-reference.html#autotoc_md62", null ],
        [ "Quick Reference", "cli-reference.html#autotoc_md63", null ],
        [ "Commands", "cli-reference.html#autotoc_md64", [
          [ "build", "cli-reference.html#build", null ],
          [ "run", "cli-reference.html#run", null ],
          [ "test", "cli-reference.html#test", null ],
          [ "clean", "cli-reference.html#clean", null ],
          [ "validate", "cli-reference.html#validate", null ]
        ] ],
        [ "Utility Commands", "cli-reference.html#autotoc_md70", [
          [ "new", "cli-reference.html#new", null ],
          [ "viz", "cli-reference.html#viz", null ],
          [ "params", "cli-reference.html#params", null ],
          [ "packer", "cli-reference.html#packer", [
            [ "packer pack", "cli-reference.html#autotoc_md74", null ],
            [ "packer compare", "cli-reference.html#autotoc_md75", null ]
          ] ],
          [ "completion", "cli-reference.html#completion", null ],
          [ "generate", "cli-reference.html#generate", null ]
        ] ],
        [ "Development Commands", "cli-reference.html#autotoc_md79", [
          [ "amr_check", "cli-reference.html#amr_check", null ],
          [ "lint", "cli-reference.html#lint", null ],
          [ "format", "cli-reference.html#format", null ],
          [ "spelling", "cli-reference.html#spelling", null ],
          [ "precheck", "cli-reference.html#precheck", null ],
          [ "count", "cli-reference.html#count", null ],
          [ "count_diff", "cli-reference.html#count_diff", null ]
        ] ],
        [ "CI Commands", "cli-reference.html#autotoc_md87", [
          [ "bench", "cli-reference.html#bench", null ],
          [ "bench_diff", "cli-reference.html#bench_diff", null ]
        ] ],
        [ "Other Commands", "cli-reference.html#autotoc_md90", [
          [ "load", "cli-reference.html#load", null ]
        ] ],
        [ "Common Options", "cli-reference.html#autotoc_md92", [
          [ "Target Selection (<span class=\"tt\">-t, --targets</span>)", "cli-reference.html#autotoc_md93", null ],
          [ "Build Configuration Flags", "cli-reference.html#autotoc_md94", null ],
          [ "Verbosity (<span class=\"tt\">-v, --verbose</span>)", "cli-reference.html#autotoc_md95", null ],
          [ "Debug Logging (<span class=\"tt\">-d, --debug-log</span>)", "cli-reference.html#autotoc_md96", null ]
        ] ]
      ] ]
    ] ],
    [ "Contributing", "contributing.html", [
      [ "Contributing to MFC", "contributing.html#autotoc_md97", [
        [ "Getting Set Up", "contributing.html#autotoc_md98", null ],
        [ "Architecture Overview", "contributing.html#autotoc_md99", [
          [ "Three-Phase Pipeline", "contributing.html#autotoc_md100", null ],
          [ "Directory Layout", "contributing.html#autotoc_md101", null ],
          [ "Simulation Data Flow", "contributing.html#autotoc_md102", null ],
          [ "Build Toolchain", "contributing.html#autotoc_md103", null ],
          [ "How the Build Fits Together", "contributing.html#autotoc_md104", null ]
        ] ],
        [ "Development Workflow", "contributing.html#autotoc_md105", [
          [ "Commit Messages", "contributing.html#autotoc_md106", null ]
        ] ],
        [ "Coding Standards", "contributing.html#autotoc_md107", [
          [ "Hard Rules", "contributing.html#autotoc_md108", null ],
          [ "Soft Guidelines", "contributing.html#autotoc_md109", null ]
        ] ],
        [ "Common Pitfalls", "contributing.html#autotoc_md110", [
          [ "Array Bounds and Indexing", "contributing.html#autotoc_md111", null ],
          [ "Precision and Type Safety", "contributing.html#autotoc_md112", null ],
          [ "Memory and Allocation", "contributing.html#autotoc_md113", null ],
          [ "MPI Correctness", "contributing.html#autotoc_md114", null ],
          [ "Physics and Model Consistency", "contributing.html#autotoc_md115", null ],
          [ "Python Toolchain", "contributing.html#autotoc_md116", null ],
          [ "Parameter Plumbing", "contributing.html#autotoc_md117", null ],
          [ "Compiler Portability", "contributing.html#autotoc_md118", null ],
          [ "Architecture Notes", "contributing.html#autotoc_md119", null ]
        ] ],
        [ "Fypp and GPU", "contributing.html#autotoc_md120", null ],
        [ "How-To Guides", "contributing.html#autotoc_md121", [
          [ "How to Add a New Simulation Parameter", "contributing.html#autotoc_md122", null ],
          [ "How to Write a GPU Parallel Loop", "contributing.html#autotoc_md123", null ],
          [ "How to Allocate and Manage GPU Arrays", "contributing.html#autotoc_md124", null ],
          [ "How to Add an Equation of State", "contributing.html#autotoc_md125", null ],
          [ "How to Add a Test Case", "contributing.html#autotoc_md126", null ],
          [ "How to Create a New Fortran Module", "contributing.html#autotoc_md127", null ],
          [ "Working with the Precision System", "contributing.html#autotoc_md128", null ],
          [ "How to Extend MPI Halo Exchange", "contributing.html#autotoc_md129", null ],
          [ "How to Add a Post-Processing Output Variable", "contributing.html#autotoc_md130", null ],
          [ "Modifying <span class=\"tt\">src/common/</span>", "contributing.html#autotoc_md131", null ],
          [ "Debugging", "contributing.html#autotoc_md132", null ],
          [ "How to Document Physics Constraints", "contributing.html#how-to-document-physics-constraints", null ]
        ] ],
        [ "Testing", "contributing.html#autotoc_md133", null ],
        [ "CI Pipeline", "contributing.html#autotoc_md134", [
          [ "Lint Gate (runs first, blocks the build and test jobs)", "contributing.html#autotoc_md135", null ],
          [ "Build and Test Matrix", "contributing.html#autotoc_md136", null ],
          [ "Common CI Failures", "contributing.html#autotoc_md137", null ]
        ] ],
        [ "Documentation", "contributing.html#autotoc_md138", null ],
        [ "Submitting a Pull Request", "contributing.html#autotoc_md139", null ],
        [ "Code Review and Merge", "contributing.html#autotoc_md140", null ]
      ] ]
    ] ],
    [ "Containers", "docker.html", [
      [ "Containers", "docker.html#autotoc_md141", [
        [ "Navigating Docker", "docker.html#autotoc_md142", [
          [ "Docker Desktop GUI", "docker.html#autotoc_md143", null ],
          [ "Docker CLI", "docker.html#autotoc_md144", null ]
        ] ],
        [ "Details on Running Containers", "docker.html#autotoc_md145", [
          [ "Portability", "docker.html#autotoc_md146", null ]
        ] ],
        [ "Using Supercomputers/Clusters via Apptainer/Singularity", "docker.html#autotoc_md147", [
          [ "Interactive Shell", "docker.html#autotoc_md148", null ],
          [ "For Portability", "docker.html#autotoc_md149", null ],
          [ "Slurm Job", "docker.html#autotoc_md150", null ]
        ] ],
        [ "Tag Details", "docker.html#autotoc_md151", [
          [ "Base Images", "docker.html#autotoc_md152", null ],
          [ "Tag Structure", "docker.html#autotoc_md153", null ],
          [ "Example Tags", "docker.html#autotoc_md154", null ],
          [ "Architecture Support", "docker.html#autotoc_md155", null ]
        ] ]
      ] ]
    ] ],
    [ "Equations", "equations.html", [
      [ "MFC: Comprehensive Equations Reference", "equations.html#autotoc_md156", [
        [ "1. Overview", "equations.html#autotoc_md158", null ],
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
        [ "2. Governing PDEs", "equations.html#autotoc_md161", [
          [ "2.1 Five-Equation Model (<span class=\"tt\">model_eqns = 2</span>)", "equations.html#autotoc_md162", null ],
          [ "2.2 Six-Equation Model (<span class=\"tt\">model_eqns = 3</span>)", "equations.html#autotoc_md163", null ],
          [ "2.3 Other Model Variants", "equations.html#autotoc_md164", null ]
        ] ],
        [ "3. Equations of State", "equations.html#autotoc_md166", [
          [ "3.1 Stiffened Gas EOS (<a class=\"el\" href=\"citelist.html#CITEREF_menikoff89\">[58]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_lemetayer04\">[42]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 2.2)", "equations.html#autotoc_md167", null ],
          [ "3.2 Ideal Gas EOS (Chemistry, <span class=\"tt\">chemistry = .true.</span>)", "equations.html#autotoc_md168", null ]
        ] ],
        [ "4. Viscous Stress Tensor (<span class=\"tt\">viscous = .true.</span>)", "equations.html#autotoc_md170", null ],
        [ "4a. Fourier Heat Conduction (<span class=\"tt\">fluid_pp(i)%k_therm</span>)", "equations.html#autotoc_md172", null ],
        [ "5. Cylindrical Coordinates (<span class=\"tt\">cyl_coord = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 2.3)", "equations.html#autotoc_md174", null ],
        [ "6. Sub-Grid Bubble Dynamics (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1)", "equations.html#autotoc_md176", [
          [ "6.1 Euler-Euler Bubbles (<span class=\"tt\">bubbles_euler = .true.</span>)", "equations.html#autotoc_md177", [
            [ "6.1.1 Method of Classes (<a class=\"el\" href=\"citelist.html#CITEREF_commander89\">[17]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_ando11\">[2]</a>)", "equations.html#autotoc_md178", null ],
            [ "6.1.2 Rayleigh-Plesset (<span class=\"tt\">bubble_model = 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rayleigh17\">[45]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_plesset49\">[67]</a>)", "equations.html#autotoc_md179", null ],
            [ "6.1.3 Keller-Miksis (<span class=\"tt\">bubble_model = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_keller80\">[39]</a>)", "equations.html#autotoc_md180", null ],
            [ "6.1.4 Gilmore (<span class=\"tt\">bubble_model = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gilmore52\">[27]</a>)", "equations.html#autotoc_md181", null ],
            [ "6.1.5 Non-Polytropic Thermal Model (<span class=\"tt\">polytropic = .false.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_preston07\">[69]</a>)", "equations.html#autotoc_md182", null ],
            [ "6.1.6 QBMM Moment Transport (<span class=\"tt\">qbmm = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_bryngelson20\">[9]</a>)", "equations.html#autotoc_md183", null ]
          ] ],
          [ "6.2 Euler-Lagrange Bubbles (<span class=\"tt\">bubbles_lagrange = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_maeda18\">[49]</a>)", "equations.html#autotoc_md184", null ]
        ] ],
        [ "7. Fluid-Structure Interaction", "equations.html#autotoc_md186", [
          [ "7.1 Hypoelastic Model (<span class=\"tt\">hypoelasticity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_rodriguez19\">[70]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.6)", "equations.html#autotoc_md187", null ],
          [ "7.2 Continuum Damage (<span class=\"tt\">cont_damage = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_cao19\">[12]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_spratt24\">[82]</a> Sec. 4.1.2)", "equations.html#autotoc_md188", null ]
        ] ],
        [ "8. Phase Change (<span class=\"tt\">relax = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.3)", "equations.html#autotoc_md189", [
          [ "8.1 pT-Relaxation (<span class=\"tt\">relax_model = 5</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_saurel08\">[74]</a>)", "equations.html#autotoc_md190", null ],
          [ "8.2 pTg-Relaxation (<span class=\"tt\">relax_model = 6</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_zein10\">[105]</a>)", "equations.html#autotoc_md191", null ]
        ] ],
        [ "9. Chemistry and Combustion (<span class=\"tt\">chemistry = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.7)", "equations.html#autotoc_md193", null ],
        [ "10. Surface Tension (<span class=\"tt\">surface_tension = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_schmidmayer17\">[76]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.8)", "equations.html#autotoc_md195", null ],
        [ "11. Magnetohydrodynamics", "equations.html#autotoc_md197", [
          [ "11.1 Ideal MHD (<span class=\"tt\">mhd = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.9)", "equations.html#autotoc_md198", null ],
          [ "11.2 Relativistic MHD (<span class=\"tt\">relativity = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.10)", "equations.html#autotoc_md199", null ]
        ] ],
        [ "12. Information Geometric Regularization (<span class=\"tt\">igr = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong25a\">[101]</a>)", "equations.html#autotoc_md201", null ],
        [ "13. Body Forces (<span class=\"tt\">bf_x</span>, <span class=\"tt\">bf_y</span>, <span class=\"tt\">bf_z</span>)", "equations.html#autotoc_md203", null ],
        [ "14. Acoustic Sources (<span class=\"tt\">acoustic_source = .true.</span>)", "equations.html#autotoc_md205", null ],
        [ "15. Numerical Methods", "equations.html#autotoc_md207", [
          [ "15.1 Spatial Reconstruction", "equations.html#autotoc_md208", [
            [ "WENO (<span class=\"tt\">weno_order = 3, 5, 7</span>)", "equations.html#autotoc_md209", null ],
            [ "MUSCL (<span class=\"tt\">muscl_order = 2</span>)", "equations.html#autotoc_md210", null ],
            [ "IGR Reconstruction", "equations.html#autotoc_md211", null ]
          ] ],
          [ "15.2 Riemann Solvers", "equations.html#autotoc_md212", [
            [ "HLL (<span class=\"tt\">riemann_solver = 1</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_harten83\">[32]</a>)", "equations.html#autotoc_md213", null ],
            [ "HLLC (<span class=\"tt\">riemann_solver = 2</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_toro94\">[96]</a>)", "equations.html#autotoc_md214", null ],
            [ "Exact (<span class=\"tt\">riemann_solver = 3</span>)", "equations.html#autotoc_md215", null ],
            [ "HLLD (<span class=\"tt\">riemann_solver = 4</span>, MHD or hypoelasticity)", "equations.html#autotoc_md216", null ],
            [ "Developer Notes on Non-Conservative Term Implementation", "equations.html#autotoc_md217", null ]
          ] ],
          [ "15.3 Time Integration", "equations.html#autotoc_md218", [
            [ "TVD Runge-Kutta (<span class=\"tt\">time_stepper = 1, 2, 3</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_gottlieb98\">[28]</a>)", "equations.html#autotoc_md219", null ],
            [ "Adaptive Time Stepping (<span class=\"tt\">adap_dt = .true.</span>)", "equations.html#autotoc_md220", null ],
            [ "Strang Splitting (<a class=\"el\" href=\"citelist.html#CITEREF_strang68\">[85]</a>) (for stiff bubble dynamics)", "equations.html#autotoc_md221", null ]
          ] ],
          [ "15.4 CFL Condition", "equations.html#autotoc_md222", null ],
          [ "15.5 Finite Differences (<span class=\"tt\">fd_order = 1, 2, 4</span>)", "equations.html#autotoc_md223", null ]
        ] ],
        [ "16. Boundary Conditions", "equations.html#autotoc_md225", [
          [ "16.1 Simple BCs", "equations.html#autotoc_md226", null ],
          [ "16.2 Characteristic BCs (<a class=\"el\" href=\"citelist.html#CITEREF_thompson87\">[93]</a>, <a class=\"el\" href=\"citelist.html#CITEREF_thompson90\">[94]</a>; <span class=\"tt\">bc_x%beg = -5</span> to <span class=\"tt\">-12</span>)", "equations.html#autotoc_md227", null ],
          [ "16.3 Immersed Boundary Method (<span class=\"tt\">ib = .true.</span>) (<a class=\"el\" href=\"citelist.html#CITEREF_tseng03\">[99]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_mittal05\">[59]</a>; <a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.1.1)", "equations.html#autotoc_md228", null ]
        ] ],
        [ "17. Low Mach Number Corrections (<a class=\"el\" href=\"citelist.html#CITEREF_wilfong26\">[102]</a> Sec. 4.2.4)", "equations.html#autotoc_md230", null ],
        [ "18. Flux Limiting", "equations.html#autotoc_md232", null ]
      ] ]
    ] ],
    [ "Example Cases", "examples.html", [
      [ "Example Cases", "examples.html#autotoc_md233", [
        [ "1D Multi-Component Reactive Shock Tube", "examples.html#autotoc_md234", [
          [ "Initial Condition", "examples.html#autotoc_md235", null ],
          [ "Results", "examples.html#autotoc_md236", null ],
          [ "Comparison with the reference", "examples.html#autotoc_md237", null ]
        ] ],
        [ "2D Conservation with AMR in a Periodic Box", "examples.html#autotoc_md238", null ],
        [ "Taylor-Green Vortex (3D)", "examples.html#autotoc_md239", [
          [ "Final Condition", "examples.html#autotoc_md240", null ]
        ] ],
        [ "Water Disk Advected in Air", "examples.html#autotoc_md241", null ],
        [ "2D Cylinder Wake with AMR: Drag and Strouhal Number, Re 100", "examples.html#autotoc_md242", [
          [ "Run", "examples.html#autotoc_md243", null ],
          [ "Results", "examples.html#autotoc_md244", null ]
        ] ],
        [ "Probe files across a re-run", "examples.html#autotoc_md245", [
          [ "Reproducing", "examples.html#autotoc_md246", null ],
          [ "The fix", "examples.html#autotoc_md247", null ],
          [ "Why it matters beyond tidiness", "examples.html#autotoc_md248", null ]
        ] ],
        [ "2D Power-Law (Shear-Thickening) Poiseuille Channel", "examples.html#autotoc_md249", [
          [ "Regime and parameters", "examples.html#autotoc_md250", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md251", null ],
          [ "How to run", "examples.html#autotoc_md252", null ],
          [ "Validation result", "examples.html#autotoc_md253", null ],
          [ "References", "examples.html#autotoc_md254", null ]
        ] ],
        [ "IBM Bow Shock (3D)", "examples.html#autotoc_md255", [
          [ "Final Condition", "examples.html#autotoc_md256", null ]
        ] ],
        [ "Backward Facing Step (2D)", "examples.html#autotoc_md257", [
          [ "Final Condition (Density)", "examples.html#autotoc_md258", null ]
        ] ],
        [ "Gas Jet (2D)", "examples.html#autotoc_md259", [
          [ "Final Condition", "examples.html#autotoc_md260", null ]
        ] ],
        [ "2D Isothermal Conduction Annulus: Image-Point Interpolation", "examples.html#autotoc_md261", [
          [ "Results", "examples.html#autotoc_md262", null ],
          [ "Run", "examples.html#autotoc_md263", null ],
          [ "Limits", "examples.html#autotoc_md264", null ]
        ] ],
        [ "2D Cold Cylinder in Hot Gas: Heat Absorbed with the Wall Conduction Column", "examples.html#autotoc_md265", [
          [ "Run", "examples.html#autotoc_md266", null ],
          [ "Results", "examples.html#autotoc_md267", null ]
        ] ],
        [ "1D Brio-Wu MHD shock tube (HLLD)", "examples.html#autotoc_md268", [
          [ "Run", "examples.html#autotoc_md269", null ]
        ] ],
        [ "Scaling and Performance test", "examples.html#autotoc_md270", [
          [ "Weak Scaling", "examples.html#autotoc_md271", null ],
          [ "Strong Scaling", "examples.html#autotoc_md272", null ],
          [ "Example", "examples.html#autotoc_md273", null ]
        ] ],
        [ "2D Circular Cylinder, Re 20-100: Drag, Wake, Shedding and Nusselt Number", "examples.html#autotoc_md274", [
          [ "Run", "examples.html#autotoc_md275", null ],
          [ "Results", "examples.html#autotoc_md276", null ],
          [ "Lumped-temperature cooling", "examples.html#autotoc_md277", null ]
        ] ],
        [ "3D Turbulent Mixing layer (3D)", "examples.html#autotoc_md278", [
          [ "Liutex visualization at transitional state", "examples.html#autotoc_md279", null ]
        ] ],
        [ "Perfectly Stirred Reactor", "examples.html#autotoc_md280", [
          [ "Validation", "examples.html#autotoc_md281", null ]
        ] ],
        [ "2D Power-Law (Shear-Thinning) Poiseuille Channel", "examples.html#autotoc_md282", [
          [ "Regime and parameters", "examples.html#autotoc_md283", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md284", null ],
          [ "How to run", "examples.html#autotoc_md285", null ],
          [ "Validation result", "examples.html#autotoc_md286", null ],
          [ "References", "examples.html#autotoc_md287", null ]
        ] ],
        [ "1D Gaussian acoustic pulse from a planar source", "examples.html#autotoc_md288", [
          [ "Run", "examples.html#autotoc_md289", null ],
          [ "Result", "examples.html#autotoc_md290", null ]
        ] ],
        [ "Burning Carbon Cylinder and Sphere Against a 1D Radial Reference", "examples.html#autotoc_md291", null ],
        [ "1D hypoelastic water shock tube", "examples.html#autotoc_md292", [
          [ "Run", "examples.html#autotoc_md293", null ]
        ] ],
        [ "Water-Air Shock Tube", "examples.html#autotoc_md294", null ],
        [ "1D Species Diffusion and Heat Conduction Verification", "examples.html#autotoc_md295", [
          [ "Run", "examples.html#autotoc_md296", null ],
          [ "Results", "examples.html#autotoc_md297", null ]
        ] ],
        [ "1D Fourier conduction convergence", "examples.html#autotoc_md298", [
          [ "Exact solution", "examples.html#autotoc_md299", null ],
          [ "Running", "examples.html#autotoc_md300", null ],
          [ "Observed convergence", "examples.html#autotoc_md301", null ]
        ] ],
        [ "Boundary-condition patch geometry has to match the dimensionality", "examples.html#autotoc_md302", [
          [ "Running it", "examples.html#autotoc_md303", null ],
          [ "A second trap in the same corner", "examples.html#autotoc_md304", null ],
          [ "Scope", "examples.html#autotoc_md305", null ]
        ] ],
        [ "2D Circular Blast with Two AMR Levels", "examples.html#autotoc_md306", null ],
        [ "1D Multi-Component Inert Shock Tube", "examples.html#autotoc_md307", [
          [ "Initial Condition", "examples.html#autotoc_md308", null ],
          [ "Results", "examples.html#autotoc_md309", null ]
        ] ],
        [ "3D Soft-Sphere Collision of a Heavy Sphere with a Wall", "examples.html#autotoc_md310", [
          [ "Run", "examples.html#autotoc_md311", null ],
          [ "Limits", "examples.html#autotoc_md312", null ]
        ] ],
        [ "Sedov-Taylor blast with AMR", "examples.html#autotoc_md313", null ],
        [ "H2/air Constant-Volume Ignition Against Cantera", "examples.html#autotoc_md314", null ],
        [ "2D Constant Acceleration of a Two-Way Immersed Circle", "examples.html#autotoc_md315", [
          [ "Run", "examples.html#autotoc_md316", null ],
          [ "Limits", "examples.html#autotoc_md317", null ]
        ] ],
        [ "2D IBM-Walled Power-Law Poiseuille Channel", "examples.html#autotoc_md318", [
          [ "Geometry and parameters", "examples.html#autotoc_md319", null ],
          [ "Analytic solution", "examples.html#autotoc_md320", null ],
          [ "How to run", "examples.html#autotoc_md321", null ],
          [ "Validation results", "examples.html#autotoc_md322", null ],
          [ "References", "examples.html#autotoc_md323", null ]
        ] ],
        [ "Azimuthal Fourier conduction convergence (3D cylindrical)", "examples.html#autotoc_md324", [
          [ "Exact solution", "examples.html#autotoc_md325", null ],
          [ "Running", "examples.html#autotoc_md326", null ],
          [ "Observed results", "examples.html#autotoc_md327", null ]
        ] ],
        [ "2D Orszag-Tang vortex with hyperbolic divergence cleaning", "examples.html#autotoc_md328", [
          [ "Run", "examples.html#autotoc_md329", null ]
        ] ],
        [ "Lid-Driven Cavity Problem (2D)", "examples.html#autotoc_md330", [
          [ "Final Condition", "examples.html#autotoc_md331", null ],
          [ "Centerline Velocities", "examples.html#autotoc_md332", null ]
        ] ],
        [ "2D hypoelastic shear contact", "examples.html#autotoc_md333", [
          [ "Run", "examples.html#autotoc_md334", null ]
        ] ],
        [ "2D Moving Immersed Boundary: Gas-Mass Budget and Galilean Twin", "examples.html#autotoc_md335", [
          [ "Run", "examples.html#autotoc_md336", null ],
          [ "Results", "examples.html#autotoc_md337", null ],
          [ "Limits", "examples.html#autotoc_md338", null ]
        ] ],
        [ "Freely Propagating H2/air Flame Speed Against Cantera", "examples.html#autotoc_md339", null ],
        [ "Rayleigh-Taylor Instability (3D)", "examples.html#autotoc_md340", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md341", null ]
        ] ],
        [ "2D General Herschel-Bulkley Poiseuille Channel", "examples.html#autotoc_md342", [
          [ "Regime and parameters", "examples.html#autotoc_md343", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md344", null ],
          [ "How to run", "examples.html#autotoc_md345", null ],
          [ "Validation result", "examples.html#autotoc_md346", null ],
          [ "References", "examples.html#autotoc_md347", null ]
        ] ],
        [ "3D Sphere, Re 20-300, Mach 0.2: Drag and Nusselt Number", "examples.html#autotoc_md348", [
          [ "Run", "examples.html#autotoc_md349", null ],
          [ "Results", "examples.html#autotoc_md350", null ],
          [ "Limits", "examples.html#autotoc_md351", null ]
        ] ],
        [ "3D Temporal Reacting Mixing Layer (H2/N2 - air, Mc = 1.5)", "examples.html#autotoc_md352", [
          [ "Configuration", "examples.html#autotoc_md353", null ],
          [ "Initial condition", "examples.html#autotoc_md354", null ],
          [ "Running", "examples.html#autotoc_md355", null ]
        ] ],
        [ "1D Riemann Problems Against the Exact Solution", "examples.html#autotoc_md356", null ],
        [ "Premixed H2/Air Flame and a Vortex Ring (3D)", "examples.html#autotoc_md357", null ],
        [ "1D Sod Shock Tube with AMR Against the Exact Riemann Solution", "examples.html#autotoc_md358", null ],
        [ "Shu-Osher Problem (1D, WENO5-Z)", "examples.html#autotoc_md359", null ],
        [ "2D Thermally Developed Plane Channel", "examples.html#autotoc_md360", [
          [ "Run", "examples.html#autotoc_md361", null ],
          [ "Limits", "examples.html#autotoc_md362", null ]
        ] ],
        [ "2D Hardcodied IC Example", "examples.html#autotoc_md363", [
          [ "Initial Condition and Result", "examples.html#autotoc_md364", null ]
        ] ],
        [ "Shu-Osher problem (1D)", "examples.html#autotoc_md365", [
          [ "Initial Condition", "examples.html#autotoc_md366", null ],
          [ "Result", "examples.html#autotoc_md367", null ]
        ] ],
        [ "Expansion Tube with Phase Change", "examples.html#autotoc_md368", null ],
        [ "2D Taylor-Green Vortex (viscous decay)", "examples.html#autotoc_md369", null ],
        [ "2D Plane Poiseuille Flow Between Two Flat Immersed Walls", "examples.html#autotoc_md370", [
          [ "Run", "examples.html#autotoc_md371", null ],
          [ "Limits", "examples.html#autotoc_md372", null ]
        ] ],
        [ "1D Chapman-Jouguet Detonation Against the Equilibrium CJ Solution", "examples.html#autotoc_md373", null ],
        [ "Periodic Arrays of Fixed Particles: Drag, Force Spread and Nusselt Number", "examples.html#autotoc_md374", [
          [ "Run", "examples.html#autotoc_md375", null ],
          [ "Results", "examples.html#autotoc_md376", null ]
        ] ],
        [ "Shock Through a Fixed Curtain of Particles (2D cylinders, 3D spheres, single sphere)", "examples.html#autotoc_md377", [
          [ "Run", "examples.html#autotoc_md378", null ],
          [ "Results", "examples.html#autotoc_md379", null ]
        ] ],
        [ "Bubble Collapse in a Uniform Bubbly Liquid (Keller-Miksis)", "examples.html#autotoc_md380", null ],
        [ "Immersed-boundary force on a thin plate (issue #1849)", "examples.html#autotoc_md381", [
          [ "Running the sweep", "examples.html#autotoc_md382", null ],
          [ "What the sweep shows", "examples.html#autotoc_md383", null ],
          [ "Why a zero-reference check is not available here", "examples.html#autotoc_md384", null ],
          [ "Related", "examples.html#autotoc_md385", null ]
        ] ],
        [ "2D Inviscid Flow Around a Fixed Slip Cylinder: Mass Budget and Exact Vortex", "examples.html#autotoc_md386", [
          [ "Run", "examples.html#autotoc_md387", null ],
          [ "Results", "examples.html#autotoc_md388", null ]
        ] ],
        [ "2D axisymmetric focused transducer", "examples.html#autotoc_md389", [
          [ "Run", "examples.html#autotoc_md390", null ]
        ] ],
        [ "Richtmyer-Meshkov Instability (2D)", "examples.html#autotoc_md391", null ],
        [ "2D Lumped Cylinder Cooling in a Gas Stream", "examples.html#autotoc_md394", [
          [ "What it shows", "examples.html#autotoc_md395", null ],
          [ "Setup", "examples.html#autotoc_md396", null ],
          [ "Run", "examples.html#autotoc_md397", null ],
          [ "Limitations", "examples.html#autotoc_md398", null ],
          [ "Cooling in a cross flow, against the time constant of the fixed-wall Nusselt number", "examples.html#autotoc_md399", null ]
        ] ],
        [ "Shock Droplet (2D)", "examples.html#autotoc_md400", [
          [ "Initial Condition", "examples.html#autotoc_md401", null ],
          [ "Result", "examples.html#autotoc_md402", null ]
        ] ],
        [ "Premixed H2/Air Flame and a Vortex Pair (2D)", "examples.html#autotoc_md403", null ],
        [ "2D Triple Point (2D)", "examples.html#autotoc_md404", [
          [ "Numerical Schlieren at Final Time", "examples.html#autotoc_md405", null ]
        ] ],
        [ "Kelvin-Helmholtz Instability (2D)", "examples.html#autotoc_md406", null ],
        [ "2D Blast Wave Through a Particle Half-Ring", "examples.html#autotoc_md409", [
          [ "Result", "examples.html#autotoc_md410", null ]
        ] ],
        [ "2D Bingham (Yield-Stress) Poiseuille Channel", "examples.html#autotoc_md411", [
          [ "Regime and parameters", "examples.html#autotoc_md412", null ],
          [ "Governing physics and analytic solution", "examples.html#autotoc_md413", null ],
          [ "How to run", "examples.html#autotoc_md414", null ],
          [ "Validation result", "examples.html#autotoc_md415", null ],
          [ "References", "examples.html#autotoc_md416", null ]
        ] ],
        [ "Viscous Shock Tube (2D)", "examples.html#autotoc_md417", null ],
        [ "Isentropic vortex through AMR blocks", "examples.html#autotoc_md420", null ],
        [ "2D Shear-Thinning Lid-Driven Cavity", "examples.html#autotoc_md421", [
          [ "Regime and parameters", "examples.html#autotoc_md422", null ],
          [ "Governing physics", "examples.html#autotoc_md423", null ],
          [ "How to run", "examples.html#autotoc_md424", null ],
          [ "References", "examples.html#autotoc_md425", null ]
        ] ],
        [ "Bow-Shock Stand-Off of a Cylinder and a Sphere, Mach 1.5-3", "examples.html#autotoc_md426", [
          [ "Run", "examples.html#autotoc_md427", null ],
          [ "Results", "examples.html#autotoc_md428", null ],
          [ "Limits", "examples.html#autotoc_md429", null ]
        ] ],
        [ "Forward Facing Step (2D)", "examples.html#autotoc_md430", [
          [ "Final Condition (Density)", "examples.html#autotoc_md431", null ]
        ] ],
        [ "Isentropic vortex problem (2D)", "examples.html#autotoc_md432", [
          [ "Density", "examples.html#autotoc_md433", null ],
          [ "Density Norms", "examples.html#autotoc_md434", null ],
          [ "Order of accuracy (<span class=\"tt\">--convect</span>)", "examples.html#autotoc_md435", null ]
        ] ],
        [ "2D Shock–Particle Curtain Interaction", "examples.html#autotoc_md436", [
          [ "Result", "examples.html#autotoc_md437", null ]
        ] ],
        [ "2D Riemann Test (2D)", "examples.html#autotoc_md438", [
          [ "Density Initial and Final Conditions", "examples.html#autotoc_md439", null ]
        ] ],
        [ "2D Gas-Mass Budget of a Reacting Immersed Boundary", "examples.html#autotoc_md440", [
          [ "What it shows", "examples.html#autotoc_md441", null ],
          [ "Run", "examples.html#autotoc_md442", null ],
          [ "Limits", "examples.html#autotoc_md443", null ]
        ] ],
        [ "Lax shock tube problem (1D)", "examples.html#autotoc_md444", [
          [ "Initial Condition", "examples.html#autotoc_md445", null ],
          [ "Result", "examples.html#autotoc_md446", null ]
        ] ],
        [ "2D IBM CFL dt (2D)", "examples.html#autotoc_md447", [
          [ "Result", "examples.html#autotoc_md448", null ]
        ] ],
        [ "2D Taylor-Couette Flow Between Two Immersed Walls", "examples.html#autotoc_md449", [
          [ "Run", "examples.html#autotoc_md450", null ],
          [ "Limits", "examples.html#autotoc_md451", null ]
        ] ],
        [ "Rayleigh-Taylor Instability (2D)", "examples.html#autotoc_md452", [
          [ "Final Condition and Linear Theory", "examples.html#autotoc_md453", null ],
          [ "Linear growth rate", "examples.html#autotoc_md454", null ]
        ] ],
        [ "1D circularly polarized Alfven wave", "examples.html#autotoc_md455", [
          [ "Run", "examples.html#autotoc_md456", null ]
        ] ],
        [ "Titarev-Toro problem (1D)", "examples.html#autotoc_md457", [
          [ "Initial Condition", "examples.html#autotoc_md458", null ],
          [ "Result", "examples.html#autotoc_md459", null ]
        ] ],
        [ "Axisymmetric Fourier conduction convergence", "examples.html#autotoc_md460", [
          [ "Exact solution", "examples.html#autotoc_md461", null ],
          [ "The grid at the axis", "examples.html#autotoc_md462", null ],
          [ "Running", "examples.html#autotoc_md463", null ],
          [ "Observed results", "examples.html#autotoc_md464", null ]
        ] ],
        [ "Automatic <span class=\"tt\">ib_neighborhood_radius</span> when ranks are not cubes", "examples.html#autotoc_md465", [
          [ "The case", "examples.html#autotoc_md466", null ],
          [ "Running it", "examples.html#autotoc_md467", null ],
          [ "It is not only this case", "examples.html#autotoc_md468", null ],
          [ "Scope", "examples.html#autotoc_md469", null ]
        ] ],
        [ "Laplace Pressure Jump of a 2D Drop", "examples.html#autotoc_md470", null ]
      ] ]
    ] ],
    [ "Performance", "expectedPerformance.html", [
      [ "Performance", "expectedPerformance.html#autotoc_md471", [
        [ "Achieving Maximum Performance", "expectedPerformance.html#autotoc_md473", [
          [ "Case Optimization (Recommended)", "expectedPerformance.html#autotoc_md474", [
            [ "When to use case optimization", "expectedPerformance.html#autotoc_md475", null ]
          ] ],
          [ "Other Optimization Flags", "expectedPerformance.html#autotoc_md476", null ],
          [ "Profiling for Optimization", "expectedPerformance.html#autotoc_md477", null ],
          [ "Performance Checklist", "expectedPerformance.html#autotoc_md478", null ]
        ] ],
        [ "Benchmark Results", "expectedPerformance.html#autotoc_md480", [
          [ "Figure of merit: Grind time performance", "expectedPerformance.html#autotoc_md481", null ]
        ] ],
        [ "Weak scaling", "expectedPerformance.html#autotoc_md482", [
          [ "GPU weak scaling", "expectedPerformance.html#autotoc_md483", null ],
          [ "NVIDIA V100 GPU (historical)", "expectedPerformance.html#autotoc_md484", null ],
          [ "IBM Power9 CPU (historical)", "expectedPerformance.html#autotoc_md485", null ]
        ] ],
        [ "Strong scaling", "expectedPerformance.html#autotoc_md486", [
          [ "NVIDIA V100 GPU", "expectedPerformance.html#autotoc_md487", [
            [ "16M Grid Points", "expectedPerformance.html#autotoc_md488", null ],
            [ "64M Grid Points", "expectedPerformance.html#autotoc_md489", null ]
          ] ],
          [ "IBM Power9 CPU", "expectedPerformance.html#autotoc_md490", null ]
        ] ]
      ] ]
    ] ],
    [ "Getting Started", "getting-started.html", [
      [ "Getting Started", "getting-started.html#autotoc_md491", [
        [ "Fetching MFC", "getting-started.html#autotoc_md492", null ],
        [ "Install via Homebrew (macOS)", "getting-started.html#autotoc_md493", null ],
        [ "Build Environment", "getting-started.html#autotoc_md494", null ],
        [ "Building MFC", "getting-started.html#autotoc_md495", null ],
        [ "Using Containers", "getting-started.html#autotoc_md496", null ],
        [ "Running the Test Suite", "getting-started.html#autotoc_md497", null ],
        [ "Running an Example Case", "getting-started.html#autotoc_md498", null ],
        [ "Units and Dimensions", "getting-started.html#autotoc_md499", null ],
        [ "Visualizing Results", "getting-started.html#autotoc_md500", null ],
        [ "Helpful Tools", "getting-started.html#autotoc_md501", [
          [ "Parameter Lookup", "getting-started.html#autotoc_md502", null ],
          [ "Creating a New Case", "getting-started.html#autotoc_md503", null ],
          [ "Shell Completion", "getting-started.html#autotoc_md504", null ]
        ] ]
      ] ]
    ] ],
    [ "GPU Parallelization", "gpuParallelization.html", [
      [ "GPU Parallelization", "gpuParallelization.html#autotoc_md505", [
        [ "Macro API Documentation", "gpuParallelization.html#autotoc_md507", [
          [ "Data Type Meanings", "gpuParallelization.html#autotoc_md508", null ],
          [ "Data Flow", "gpuParallelization.html#autotoc_md509", null ],
          [ "Computation Macros", "gpuParallelization.html#autotoc_md511", null ],
          [ "Data Control Macros", "gpuParallelization.html#autotoc_md513", null ],
          [ "Synchronization Macros", "gpuParallelization.html#autotoc_md515", null ],
          [ "Miscellaneous Macros", "gpuParallelization.html#autotoc_md517", null ]
        ] ],
        [ "Writing GPU_ROUTINE Device Helpers", "gpuParallelization.html#autotoc_md519", null ],
        [ "Module boundaries and NVHPC inlining", "gpuParallelization.html#autotoc_md520", null ]
      ] ],
      [ "Debugging Tools and Tips for GPUs", "gpuParallelization.html#autotoc_md522", [
        [ "Compiler agnostic tools", "gpuParallelization.html#autotoc_md523", null ],
        [ "OpenMP tools", "gpuParallelization.html#autotoc_md524", null ],
        [ "Cray Compiler Tools", "gpuParallelization.html#autotoc_md525", [
          [ "Cray General Options", "gpuParallelization.html#autotoc_md526", null ],
          [ "Cray OpenACC Options", "gpuParallelization.html#autotoc_md527", null ]
        ] ],
        [ "NVHPC Compiler Options", "gpuParallelization.html#autotoc_md528", [
          [ "NVHPC General Options", "gpuParallelization.html#autotoc_md529", null ],
          [ "NVHPC OpenACC Options", "gpuParallelization.html#autotoc_md530", null ],
          [ "NVHPC OpenMP Options", "gpuParallelization.html#autotoc_md531", null ]
        ] ],
        [ "AMD flang (amdflang) Known Issues", "gpuParallelization.html#autotoc_md532", [
          [ "Whole-image device codegen instability (worked around in the build)", "gpuParallelization.html#autotoc_md533", null ],
          [ "Contended atomics and launch cost (measured on MI300A, AFAR 24.3)", "gpuParallelization.html#autotoc_md534", null ],
          [ "Target regions inside Fortran BLOCK constructs are silently dropped", "gpuParallelization.html#autotoc_md535", null ]
        ] ],
        [ "Silent-Failure Traps", "gpuParallelization.html#silent-failure-traps", null ],
        [ "Compiler Documentation", "gpuParallelization.html#autotoc_md537", null ]
      ] ]
    ] ],
    [ "Accuracy Limits of the Ghost-Cell Immersed Boundary", "ib_accuracy_limits.html", [
      [ "Accuracy limits of the ghost-cell immersed boundary", "ib_accuracy_limits.html#autotoc_md538", [
        [ "Purpose", "ib_accuracy_limits.html#autotoc_md539", null ],
        [ "Measured orders", "ib_accuracy_limits.html#autotoc_md540", null ],
        [ "What to set", "ib_accuracy_limits.html#autotoc_md541", null ],
        [ "What does not help", "ib_accuracy_limits.html#autotoc_md542", null ],
        [ "Known limitations of the measurements", "ib_accuracy_limits.html#autotoc_md543", null ],
        [ "Reproduce", "ib_accuracy_limits.html#autotoc_md544", null ]
      ] ]
    ] ],
    [ "Immersed Boundaries", "ibm.html", [
      [ "Immersed Boundaries", "ibm.html#autotoc_md545", [
        [ "Motion", "ibm.html#autotoc_md546", null ],
        [ "Wall treatment", "ibm.html#autotoc_md547", null ],
        [ "Heat transfer and chemistry", "ibm.html#autotoc_md548", null ],
        [ "Output and restart", "ibm.html#autotoc_md549", null ]
      ] ]
    ] ],
    [ "Papers", "papers.html", [
      [ "Papers", "papers.html#autotoc_md550", null ]
    ] ],
    [ "Case Parameters", "parameters.html", [
      [ "Case Parameters", "parameters.html#autotoc_md551", [
        [ "Overview", "parameters.html#autotoc_md552", null ],
        [ "Parameter Families", "parameters.html#autotoc_md553", null ],
        [ "patch_icpp", "parameters.html#patch_icpp", [
          [ "Patterns", "parameters.html#autotoc_md555", null ]
        ] ],
        [ "fluid_pp", "parameters.html#fluid_pp", [
          [ "Patterns", "parameters.html#autotoc_md557", null ]
        ] ],
        [ "probe", "parameters.html#probe", [
          [ "Patterns", "parameters.html#autotoc_md559", null ]
        ] ],
        [ "patch_bc", "parameters.html#patch_bc", [
          [ "Patterns", "parameters.html#autotoc_md561", null ]
        ] ],
        [ "acoustic", "parameters.html#acoustic", [
          [ "Patterns", "parameters.html#autotoc_md563", null ]
        ] ],
        [ "chem_wrt_Y", "parameters.html#chem_wrt_Y", [
          [ "Patterns", "parameters.html#autotoc_md565", null ]
        ] ],
        [ "simplex_params", "parameters.html#simplex_params", [
          [ "Patterns", "parameters.html#autotoc_md567", null ]
        ] ],
        [ "patch_ib", "parameters.html#patch_ib", [
          [ "Patterns", "parameters.html#autotoc_md569", null ]
        ] ],
        [ "synth_amp_shell", "parameters.html#synth_amp_shell", [
          [ "Patterns", "parameters.html#autotoc_md571", null ]
        ] ],
        [ "synth_k_shell", "parameters.html#synth_k_shell", [
          [ "Patterns", "parameters.html#autotoc_md573", null ]
        ] ],
        [ "synth_n_waves_per_shell", "parameters.html#synth_n_waves_per_shell", [
          [ "Patterns", "parameters.html#autotoc_md575", null ]
        ] ],
        [ "bc_x", "parameters.html#bc_x", [
          [ "Patterns", "parameters.html#autotoc_md577", null ]
        ] ],
        [ "bc_y", "parameters.html#bc_y", [
          [ "Patterns", "parameters.html#autotoc_md579", null ]
        ] ],
        [ "bc_z", "parameters.html#bc_z", [
          [ "Patterns", "parameters.html#autotoc_md581", null ]
        ] ],
        [ "particle_params", "parameters.html#particle_params", [
          [ "Patterns", "parameters.html#autotoc_md583", null ]
        ] ],
        [ "synth_L", "parameters.html#synth_L", [
          [ "Patterns", "parameters.html#autotoc_md585", null ]
        ] ],
        [ "turb_pos", "parameters.html#turb_pos", [
          [ "Patterns", "parameters.html#autotoc_md587", null ]
        ] ],
        [ "spatial_bf", "parameters.html#spatial_bf", [
          [ "Patterns", "parameters.html#autotoc_md589", null ]
        ] ],
        [ "bub_pp", "parameters.html#bub_pp", null ],
        [ "lag_params", "parameters.html#lag_params", null ],
        [ "particle_cloud", "parameters.html#particle_cloud", null ],
        [ "alpha_rho_e_wrt", "parameters.html#alpha_rho_e_wrt", [
          [ "Patterns", "parameters.html#autotoc_md594", null ]
        ] ],
        [ "alpha_rho_wrt", "parameters.html#alpha_rho_wrt", [
          [ "Patterns", "parameters.html#autotoc_md596", null ]
        ] ],
        [ "alpha_wrt", "parameters.html#alpha_wrt", [
          [ "Patterns", "parameters.html#autotoc_md598", null ]
        ] ],
        [ "fluid_rho", "parameters.html#fluid_rho", [
          [ "Patterns", "parameters.html#autotoc_md600", null ]
        ] ],
        [ "schlieren_alpha", "parameters.html#schlieren_alpha", [
          [ "Patterns", "parameters.html#autotoc_md602", null ]
        ] ],
        [ "chem_params", "parameters.html#chem_params", null ],
        [ "stl_models", "parameters.html#stl_models", [
          [ "Patterns", "parameters.html#autotoc_md605", null ]
        ] ],
        [ "rburn", "parameters.html#rburn", null ],
        [ "ib_airfoil", "parameters.html#ib_airfoil", null ],
        [ "amr_block_beg", "parameters.html#amr_block_beg", [
          [ "Patterns", "parameters.html#autotoc_md609", null ]
        ] ],
        [ "amr_block_end", "parameters.html#amr_block_end", [
          [ "Patterns", "parameters.html#autotoc_md611", null ]
        ] ],
        [ "flux_wrt", "parameters.html#flux_wrt", [
          [ "Patterns", "parameters.html#autotoc_md613", null ]
        ] ],
        [ "mean_dpdx", "parameters.html#mean_dpdx", [
          [ "Patterns", "parameters.html#autotoc_md615", null ]
        ] ],
        [ "mean_mflux", "parameters.html#mean_mflux", [
          [ "Patterns", "parameters.html#autotoc_md617", null ]
        ] ],
        [ "mom_wrt", "parameters.html#mom_wrt", [
          [ "Patterns", "parameters.html#autotoc_md619", null ]
        ] ],
        [ "omega_wrt", "parameters.html#omega_wrt", [
          [ "Patterns", "parameters.html#autotoc_md621", null ]
        ] ],
        [ "vel_wrt", "parameters.html#vel_wrt", [
          [ "Patterns", "parameters.html#autotoc_md623", null ]
        ] ],
        [ "x_domain", "parameters.html#x_domain", null ],
        [ "x_output", "parameters.html#x_output", null ],
        [ "y_domain", "parameters.html#y_domain", null ],
        [ "y_output", "parameters.html#y_output", null ],
        [ "z_domain", "parameters.html#z_domain", null ],
        [ "z_output", "parameters.html#z_output", null ],
        [ "particle_pp", "parameters.html#particle_pp", null ],
        [ "general", "parameters.html#general", null ],
        [ "CLI Reference", "parameters.html#autotoc_md633", null ]
      ] ]
    ] ],
    [ "Physics Constraints", "physics_constraints.html", [
      [ "Physics Constraints Reference", "physics_constraints.html#autotoc_md634", [
        [ "Thermodynamic Constraints", "physics_constraints.html#autotoc_md636", [
          [ "Stiffened EOS Positivity", "physics_constraints.html#autotoc_md637", null ],
          [ "Initial States Inside a State-Dependent Equation of State", "physics_constraints.html#autotoc_md638", null ],
          [ "Equation of State Selector", "physics_constraints.html#autotoc_md639", null ],
          [ "EOS Parameter Sanity (Transformed Gamma)", "physics_constraints.html#autotoc_md640", null ],
          [ "Patch Initial Condition Constraints", "physics_constraints.html#autotoc_md641", null ]
        ] ],
        [ "Mixture Constraints", "physics_constraints.html#autotoc_md643", [
          [ "Volume Fraction Sum", "physics_constraints.html#autotoc_md644", null ],
          [ "Alpha-Rho Consistency", "physics_constraints.html#autotoc_md645", null ]
        ] ],
        [ "Domain and Geometry", "physics_constraints.html#autotoc_md647", [
          [ "Domain Bounds", "physics_constraints.html#autotoc_md648", null ],
          [ "Dimensionality", "physics_constraints.html#autotoc_md649", null ],
          [ "Domain Extents Specified", "physics_constraints.html#autotoc_md650", null ],
          [ "Patch Within Domain", "physics_constraints.html#autotoc_md651", null ]
        ] ],
        [ "Velocity and Dimensional Consistency", "physics_constraints.html#autotoc_md653", [
          [ "Velocity Components in Inactive Dimensions", "physics_constraints.html#autotoc_md654", null ]
        ] ],
        [ "Model Equations", "physics_constraints.html#autotoc_md656", [
          [ "Model Equation Selection", "physics_constraints.html#autotoc_md657", null ]
        ] ],
        [ "Boundary Conditions", "physics_constraints.html#autotoc_md659", [
          [ "Inflow Ramp", "physics_constraints.html#autotoc_md660", null ],
          [ "Boundary Condition Compatibility", "physics_constraints.html#autotoc_md661", null ]
        ] ],
        [ "Bubble Physics", "physics_constraints.html#autotoc_md663", [
          [ "Euler-Euler Bubble Model", "physics_constraints.html#autotoc_md664", null ],
          [ "Bubble Simulation Constraints", "physics_constraints.html#autotoc_md665", null ],
          [ "Euler-Lagrange Bubble Model", "physics_constraints.html#autotoc_md666", null ]
        ] ],
        [ "Feature Compatibility", "physics_constraints.html#autotoc_md668", [
          [ "Magnetohydrodynamics (MHD)", "physics_constraints.html#autotoc_md669", null ],
          [ "Surface Tension", "physics_constraints.html#autotoc_md670", null ],
          [ "Hypoelasticity", "physics_constraints.html#autotoc_md671", null ],
          [ "Phase Change", "physics_constraints.html#autotoc_md672", null ],
          [ "Alternative Sound Speed", "physics_constraints.html#autotoc_md673", null ],
          [ "Iterative Generalized Riemann (IGR)", "physics_constraints.html#autotoc_md674", null ],
          [ "Non-Newtonian (Herschel-Bulkley) Viscosity", "physics_constraints.html#autotoc_md675", null ],
          [ "Mean Pressure Gradient Forcing", "physics_constraints.html#autotoc_md676", null ],
          [ "Mean Gas Temperature Source", "physics_constraints.html#autotoc_md677", null ],
          [ "Synthetic Turbulence Forcing", "physics_constraints.html#autotoc_md678", null ]
        ] ],
        [ "Numerical Schemes", "physics_constraints.html#autotoc_md680", [
          [ "WENO Reconstruction", "physics_constraints.html#autotoc_md681", null ],
          [ "MUSCL Reconstruction", "physics_constraints.html#autotoc_md682", null ],
          [ "Time Stepping", "physics_constraints.html#autotoc_md683", null ],
          [ "Viscosity", "physics_constraints.html#autotoc_md684", null ],
          [ "Fourier Heat Conduction", "physics_constraints.html#autotoc_md685", null ]
        ] ],
        [ "Acoustic Sources", "physics_constraints.html#autotoc_md687", [
          [ "Acoustic Sources", "physics_constraints.html#autotoc_md688", null ]
        ] ],
        [ "Post-Processing", "physics_constraints.html#autotoc_md690", [
          [ "Vorticity Output", "physics_constraints.html#autotoc_md691", null ],
          [ "FFT Output", "physics_constraints.html#autotoc_md692", null ]
        ] ],
        [ "Adaptive Mesh Refinement", "physics_constraints.html#autotoc_md694", [
          [ "Adaptive Mesh Refinement (AMR)", "physics_constraints.html#autotoc_md695", null ]
        ] ],
        [ "Combustion", "physics_constraints.html#autotoc_md697", [
          [ "Condensed-Phase Reactive Burn", "physics_constraints.html#autotoc_md698", null ]
        ] ],
        [ "IC Extrusion", "physics_constraints.html#autotoc_md700", [
          [ "IC Extrusion File Parameters", "physics_constraints.html#autotoc_md701", null ]
        ] ],
        [ "Particle Physics", "physics_constraints.html#autotoc_md703", [
          [ "Euler-Lagrange Particle Model", "physics_constraints.html#autotoc_md704", null ]
        ] ]
      ] ]
    ] ],
    [ "Running", "running.html", [
      [ "Running", "running.html#autotoc_md711", [
        [ "Using the Homebrew package (macOS)", "running.html#autotoc_md712", null ],
        [ "Interactive Execution", "running.html#autotoc_md714", null ],
        [ "Running on GPUs", "running.html#autotoc_md716", [
          [ "Building with GPU Support", "running.html#autotoc_md717", null ],
          [ "Running on GPUs", "running.html#autotoc_md718", null ],
          [ "Supported Compilers", "running.html#autotoc_md719", null ],
          [ "Environment Setup", "running.html#autotoc_md720", null ],
          [ "Verifying GPU Detection", "running.html#autotoc_md721", null ],
          [ "GPU Profiling", "running.html#autotoc_md722", [
            [ "NVIDIA GPUs", "running.html#autotoc_md723", null ],
            [ "AMD GPUs", "running.html#autotoc_md724", null ]
          ] ]
        ] ],
        [ "Batch Execution", "running.html#autotoc_md726", [
          [ "Basic Usage", "running.html#autotoc_md727", null ],
          [ "Batch Options", "running.html#autotoc_md728", null ],
          [ "Examples", "running.html#autotoc_md729", null ],
          [ "Computer Templates", "running.html#autotoc_md730", null ],
          [ "Scheduler Notes", "running.html#autotoc_md731", null ]
        ] ],
        [ "Restarting Cases", "running.html#autotoc_md733", null ],
        [ "Example Runs", "running.html#autotoc_md735", null ]
      ] ]
    ] ],
    [ "Testing", "testing.html", null ],
    [ "Thermochemistry implementation", "thermochemistry.html", [
      [ "Mechanism generation", "thermochemistry.html#autotoc_md739", null ],
      [ "Surface chemistry", "thermochemistry.html#autotoc_md740", null ],
      [ "Mixing-layer initial conditions", "thermochemistry.html#autotoc_md741", null ],
      [ "Validation", "thermochemistry.html#autotoc_md742", null ]
    ] ],
    [ "Troubleshooting Guide", "troubleshooting.html", [
      [ "Troubleshooting Guide", "troubleshooting.html#autotoc_md743", [
        [ "Quick Reference", "troubleshooting.html#autotoc_md744", [
          [ "Debugging Flags", "troubleshooting.html#autotoc_md745", null ],
          [ "Profiling Flags", "troubleshooting.html#autotoc_md746", null ],
          [ "Useful Commands", "troubleshooting.html#autotoc_md747", null ]
        ] ],
        [ "Debugging Workflow", "troubleshooting.html#autotoc_md749", [
          [ "Build Fails?", "troubleshooting.html#autotoc_md750", null ],
          [ "Run Fails?", "troubleshooting.html#autotoc_md751", null ],
          [ "Test Fails?", "troubleshooting.html#autotoc_md752", null ]
        ] ],
        [ "Build Debugging", "troubleshooting.html#autotoc_md754", [
          [ "Verbosity Levels", "troubleshooting.html#autotoc_md755", null ],
          [ "Debug Builds", "troubleshooting.html#autotoc_md756", null ],
          [ "Code Coverage", "troubleshooting.html#autotoc_md757", null ],
          [ "Isolating Issues", "troubleshooting.html#autotoc_md758", null ],
          [ "Stale Remembered Configuration", "troubleshooting.html#autotoc_md759", null ],
          [ "Clean Rebuild", "troubleshooting.html#autotoc_md760", null ]
        ] ],
        [ "Runtime Debugging", "troubleshooting.html#autotoc_md762", [
          [ "Case Validation", "troubleshooting.html#autotoc_md763", null ],
          [ "Verbose Runs", "troubleshooting.html#autotoc_md764", null ],
          [ "Debug Log", "troubleshooting.html#autotoc_md765", null ],
          [ "Running with Fewer Ranks", "troubleshooting.html#autotoc_md766", null ]
        ] ],
        [ "Test Debugging", "troubleshooting.html#autotoc_md768", [
          [ "Running Specific Tests", "troubleshooting.html#autotoc_md769", null ],
          [ "Serial Test Execution", "troubleshooting.html#autotoc_md770", null ],
          [ "Test Output Location", "troubleshooting.html#autotoc_md771", null ],
          [ "Regenerating Golden Files", "troubleshooting.html#autotoc_md772", null ],
          [ "Understanding Test Failures", "troubleshooting.html#autotoc_md773", null ]
        ] ],
        [ "Performance Profiling", "troubleshooting.html#autotoc_md775", [
          [ "NVIDIA GPU Profiling", "troubleshooting.html#autotoc_md776", null ],
          [ "AMD GPU Profiling", "troubleshooting.html#autotoc_md777", null ],
          [ "Performance vs Correctness", "troubleshooting.html#autotoc_md778", null ]
        ] ],
        [ "Common Build Errors", "troubleshooting.html#autotoc_md780", [
          [ "\"CMake could not find MPI\"", "troubleshooting.html#autotoc_md781", null ],
          [ "\"CMake could not find a Fortran compiler\"", "troubleshooting.html#autotoc_md782", null ],
          [ "\"Fypp preprocessing failed\"", "troubleshooting.html#autotoc_md783", null ],
          [ "Build fails with GPU/OpenACC errors", "troubleshooting.html#autotoc_md784", null ],
          [ "NVHPC 26.5 GPU build is rejected", "troubleshooting.html#autotoc_md785", null ],
          [ "NVHPC GPU link fails with \"multiple definition\" errors", "troubleshooting.html#autotoc_md786", null ],
          [ "<span class=\"tt\">--no-gpu</span> build still uses NVHPC", "troubleshooting.html#autotoc_md787", null ],
          [ "\"Module not found\" on HPC", "troubleshooting.html#autotoc_md788", null ]
        ] ],
        [ "Common Runtime Errors", "troubleshooting.html#autotoc_md790", [
          [ "\"Case parameter constraint violations\"", "troubleshooting.html#autotoc_md791", null ],
          [ "\"NaN detected\"", "troubleshooting.html#autotoc_md792", null ],
          [ "GPU not detected", "troubleshooting.html#autotoc_md793", null ],
          [ "MPI errors or hangs", "troubleshooting.html#autotoc_md794", null ],
          [ "hcoll initialisation error at start-up with NVHPC's Open MPI", "troubleshooting.html#autotoc_md795", null ]
        ] ],
        [ "Visualization Issues", "troubleshooting.html#autotoc_md797", [
          [ "\"No 'binary/' or 'silo_hdf5/' directory found\"", "troubleshooting.html#autotoc_md798", null ],
          [ "\"Variable 'X' not found\"", "troubleshooting.html#autotoc_md799", null ],
          [ "\"h5py is required to read Silo-HDF5 files\"", "troubleshooting.html#autotoc_md800", null ],
          [ "Visualization looks wrong or has artifacts", "troubleshooting.html#autotoc_md801", null ]
        ] ],
        [ "Getting Help", "troubleshooting.html#autotoc_md803", null ]
      ] ]
    ] ],
    [ "Validation", "validation.html", [
      [ "Validation", "validation.html#autotoc_md804", [
        [ "Moving-body kinematics", "validation.html#sec-validation-moving-kinematics", [
          [ "Constant acceleration", "validation.html#sec-validation-moving-kinematics-accel", null ],
          [ "Sphere-wall collision", "validation.html#sec-validation-moving-kinematics-collision", null ],
          [ "Reproduce", "validation.html#sec-validation-moving-kinematics-run", null ]
        ] ],
        [ "Thermally developed channel", "validation.html#sec-validation-mean-forcing-channel", [
          [ "Reproduce", "validation.html#sec-validation-mean-forcing-channel-run", null ]
        ] ],
        [ "Circular cylinder drag and Nusselt number", "validation.html#sec-validation-cyl-drag-nu", null ],
        [ "Periodic particle arrays", "validation.html#sec-validation-particle-array", null ],
        [ "Shock through a dense particle curtain", "validation.html#sec-validation-shock-curtain", null ],
        [ "Accuracy limits of the ghost-cell immersed boundary", "validation.html#sec-validation-ib-limits", null ],
        [ "Slip immersed walls", "validation.html#sec-validation-slip-walls", null ],
        [ "Species diffusion, conduction and the transport time step", "validation.html#sec-validation-species-transport", null ],
        [ "Solid-wall thermal models", "validation.html#sec-validation-wall-thermal", null ],
        [ "Moving-body gas-mass budget and Galilean twin", "validation.html#sec-validation-moving-body-budget", null ],
        [ "Sphere drag and Nusselt number", "validation.html#sec-validation-sphere-drag-nu", null ],
        [ "Bow-shock stand-off", "validation.html#sec-validation-standoff", null ],
        [ "Two-fluid shock tube, interface advection and phase-change equilibrium", "validation.html#sec-validation-multiphase-riemann", null ],
        [ "Bubble dynamics", "validation.html#sec-validation-bubbles", null ],
        [ "Surface tension", "validation.html#sec-validation-surface-tension", null ],
        [ "Interface instabilities", "validation.html#sec-validation-interface-instabilities", null ],
        [ "Acoustic sources", "validation.html#sec-validation-acoustics", null ],
        [ "Ideal MHD", "validation.html#sec-validation-mhd", null ],
        [ "Elastic waves", "validation.html#sec-validation-elastic-waves", null ],
        [ "Axisymmetric coordinates and stretched grids", "validation.html#sec-validation-coordinates", null ],
        [ "Shock tubes", "validation.html#sec-validation-shock-tubes", null ],
        [ "Smooth-flow order of accuracy", "validation.html#sec-validation-vortex-order", null ],
        [ "Circular blast wave", "validation.html#sec-validation-blast", null ],
        [ "Adaptive mesh refinement", "validation.html#sec-validation-amr", null ],
        [ "Other families", "validation.html#autotoc_md805", null ],
        [ "Adding a section", "validation.html#autotoc_md806", null ],
        [ "Keeping the goldens current", "validation.html#autotoc_md807", null ]
      ] ]
    ] ],
    [ "Validation: Acoustic Sources", "validation_acoustics.html", [
      [ "Acoustic sources: planar pulses and a focused transducer", "validation_acoustics.html#autotoc_md808", [
        [ "Source model", "validation_acoustics.html#autotoc_md809", null ],
        [ "Planar Gaussian and sine pulses", "validation_acoustics.html#sec-validation-acoustics-planar", null ],
        [ "Focused transducer", "validation_acoustics.html#autotoc_md810", null ],
        [ "Reproduce", "validation_acoustics.html#sec-validation-acoustics-run", null ]
      ] ]
    ] ],
    [ "Adaptive mesh refinement", "validation_amr.html", [
      [ "AMR validation", "validation_amr.html#autotoc_md811", [
        [ "Sod shock tube against the exact Riemann solution", "validation_amr.html#sec-validation-amr-sod", null ],
        [ "Conservation in a periodic box", "validation_amr.html#sec-validation-amr-conservation", [
          [ "Reproduce", "validation_amr.html#sec-validation-amr-run", null ]
        ] ],
        [ "Smooth flow across block seams", "validation_amr.html#sec-validation-amr-vortex", [
          [ "Reproduce", "validation_amr.html#sec-validation-amr-vortex-run", null ]
        ] ],
        [ "Sedov-Taylor blast", "validation_amr.html#sec-validation-amr-sedov", [
          [ "Reproduce", "validation_amr.html#sec-validation-amr-sedov-run", null ]
        ] ],
        [ "Cylinder wake", "validation_amr.html#sec-validation-amr-wake", [
          [ "Reproduce", "validation_amr.html#sec-validation-amr-wake-run", null ]
        ] ]
      ] ]
    ] ],
    [ "Validation: Circular Blast Wave", "validation_blast.html", [
      [ "Circular blast wave against a radial reference, uniform and adaptive grids", "validation_blast.html#autotoc_md812", [
        [ "Purpose", "validation_blast.html#autotoc_md813", null ],
        [ "Setup", "validation_blast.html#autotoc_md814", null ],
        [ "Results", "validation_blast.html#autotoc_md815", null ],
        [ "Assessment", "validation_blast.html#autotoc_md816", null ],
        [ "Known limitations", "validation_blast.html#autotoc_md817", null ],
        [ "Reproduce", "validation_blast.html#autotoc_md818", null ]
      ] ]
    ] ],
    [ "Validation: Bubble Dynamics", "validation_bubbles.html", [
      [ "Bubble dynamics: Keller-Miksis collapse in a uniform bubbly liquid", "validation_bubbles.html#autotoc_md819", [
        [ "Purpose", "validation_bubbles.html#autotoc_md820", null ],
        [ "Setup", "validation_bubbles.html#autotoc_md821", null ],
        [ "Results", "validation_bubbles.html#autotoc_md822", null ],
        [ "Assessment", "validation_bubbles.html#autotoc_md823", null ],
        [ "Known limitations", "validation_bubbles.html#autotoc_md824", null ],
        [ "Reproduce", "validation_bubbles.html#autotoc_md825", null ]
      ] ]
    ] ],
    [ "Burning carbon body", "validation_burning_body.html", [
      [ "Burning carbon body validation", "validation_burning_body.html#autotoc_md826", [
        [ "Setup", "validation_burning_body.html#sec-validation-burning-body-setup", [
          [ "Cylinder", "validation_burning_body.html#autotoc_md827", null ],
          [ "Sphere", "validation_burning_body.html#autotoc_md828", null ]
        ] ],
        [ "Known limitations", "validation_burning_body.html#sec-validation-burning-body-limits", null ]
      ] ]
    ] ],
    [ "Validation: Axisymmetric Focusing and Stretched Grids", "validation_coordinates.html", [
      [ "Coordinates and grids: axisymmetric focusing and a stretched 1D grid", "validation_coordinates.html#autotoc_md829", [
        [ "Axisymmetric focused transducer", "validation_coordinates.html#sec-validation-coordinates-focus", null ],
        [ "Stretched grid", "validation_coordinates.html#sec-validation-coordinates-stretched", null ],
        [ "Reproduce", "validation_coordinates.html#sec-validation-coordinates-run", null ]
      ] ]
    ] ],
    [ "Validation: Circular Cylinder Drag and Nusselt Number", "validation_cyl_drag_nu.html", [
      [ "Circular cylinder, Re 20-100: drag, wake, shedding and heat transfer", "validation_cyl_drag_nu.html#autotoc_md830", [
        [ "Purpose", "validation_cyl_drag_nu.html#autotoc_md831", null ],
        [ "Setup", "validation_cyl_drag_nu.html#autotoc_md832", null ],
        [ "Reference data", "validation_cyl_drag_nu.html#autotoc_md833", null ],
        [ "Quantities", "validation_cyl_drag_nu.html#autotoc_md834", null ],
        [ "Results", "validation_cyl_drag_nu.html#autotoc_md835", null ],
        [ "Assessment", "validation_cyl_drag_nu.html#autotoc_md836", null ],
        [ "Known limitations", "validation_cyl_drag_nu.html#autotoc_md837", null ],
        [ "Reproduce", "validation_cyl_drag_nu.html#autotoc_md838", null ]
      ] ]
    ] ],
    [ "Detonation", "validation_detonation.html", [
      [ "Detonation validation", "validation_detonation.html#autotoc_md839", [
        [ "One-dimensional CJ wave", "validation_detonation.html#sec-validation-detonation-cj", null ],
        [ "H2/air at 1 atm", "validation_detonation.html#sec-validation-detonation-h2air", null ],
        [ "Two-dimensional cell width", "validation_detonation.html#sec-validation-detonation-cells", null ],
        [ "Known limitations", "validation_detonation.html#sec-validation-detonation-limits", null ]
      ] ]
    ] ],
    [ "Validation: Hypoelastic Wave Speeds", "validation_elastic_waves.html", [
      [ "Hypoelastic solids: longitudinal and shear Riemann problems", "validation_elastic_waves.html#autotoc_md840", [
        [ "Longitudinal waves", "validation_elastic_waves.html#sec-validation-elastic-longitudinal", null ],
        [ "Shear waves", "validation_elastic_waves.html#sec-validation-elastic-shear", null ],
        [ "Reproduce", "validation_elastic_waves.html#sec-validation-elastic-run", null ]
      ] ]
    ] ],
    [ "Flame-vortex interaction", "validation_flame_vortex.html", [
      [ "Flame-vortex interaction validation", "validation_flame_vortex.html#autotoc_md841", [
        [ "Setup", "validation_flame_vortex.html#sec-validation-flame-vortex-setup", null ],
        [ "2D vortex pair", "validation_flame_vortex.html#sec-validation-flame-vortex-2d", null ],
        [ "3D vortex ring", "validation_flame_vortex.html#sec-validation-flame-vortex-3d", null ],
        [ "Known limitations", "validation_flame_vortex.html#sec-validation-flame-vortex-limits", null ]
      ] ]
    ] ],
    [ "Gas-phase chemistry", "validation_gas_chemistry.html", [
      [ "Gas-phase chemistry validation", "validation_gas_chemistry.html#autotoc_md842", [
        [ "Constant-volume ignition", "validation_gas_chemistry.html#sec-validation-gas-chemistry-ignition", null ],
        [ "One-dimensional premixed flame speed", "validation_gas_chemistry.html#sec-validation-gas-chemistry-flame", null ],
        [ "Reactive shock tube", "validation_gas_chemistry.html#sec-validation-gas-chemistry-shocktube", [
          [ "Reproduce", "validation_gas_chemistry.html#sec-validation-gas-chemistry-run", null ]
        ] ]
      ] ]
    ] ],
    [ "Validation: Interface Instabilities", "validation_interface_instabilities.html", [
      [ "Interface instabilities: viscous Rayleigh-Taylor growth rate", "validation_interface_instabilities.html#autotoc_md843", [
        [ "Purpose", "validation_interface_instabilities.html#autotoc_md844", null ],
        [ "Setup", "validation_interface_instabilities.html#autotoc_md845", null ],
        [ "Results", "validation_interface_instabilities.html#autotoc_md846", null ],
        [ "Assessment", "validation_interface_instabilities.html#autotoc_md847", null ],
        [ "Known limitations", "validation_interface_instabilities.html#autotoc_md848", null ],
        [ "Reproduce", "validation_interface_instabilities.html#autotoc_md849", null ]
      ] ]
    ] ],
    [ "Validation: Ideal MHD", "validation_mhd.html", [
      [ "Ideal MHD: Alfven wave, Brio-Wu shock tube, Orszag-Tang divergence error", "validation_mhd.html#autotoc_md850", [
        [ "Circularly polarized Alfven wave", "validation_mhd.html#sec-validation-mhd-alfven", null ],
        [ "Brio-Wu shock tube", "validation_mhd.html#sec-validation-mhd-briowu", null ],
        [ "Orszag-Tang vortex: divergence error", "validation_mhd.html#sec-validation-mhd-orszag-tang", null ],
        [ "Reproduce", "validation_mhd.html#sec-validation-mhd-run", null ]
      ] ]
    ] ],
    [ "Validation: Moving-Body Mass Budget and Galilean Twin", "validation_moving_body_budget.html", [
      [ "Moving immersed boundary: gas mass created at the surface, and the heat and force of a body against its Galilean twin", "validation_moving_body_budget.html#autotoc_md851", [
        [ "Purpose", "validation_moving_body_budget.html#autotoc_md852", null ],
        [ "Setup", "validation_moving_body_budget.html#autotoc_md853", null ],
        [ "Reference data", "validation_moving_body_budget.html#autotoc_md854", null ],
        [ "Quantities", "validation_moving_body_budget.html#autotoc_md855", null ],
        [ "Results", "validation_moving_body_budget.html#autotoc_md856", null ],
        [ "Assessment", "validation_moving_body_budget.html#autotoc_md857", null ],
        [ "Known limitations", "validation_moving_body_budget.html#autotoc_md858", null ],
        [ "Reproduce", "validation_moving_body_budget.html#autotoc_md859", null ]
      ] ]
    ] ],
    [ "Validation: Two-Fluid Shock Tube, Interface Advection and Phase-Change Equilibrium", "validation_multiphase_riemann.html", [
      [ "Two-fluid flows: shock tube, interface advection, phase-change equilibrium", "validation_multiphase_riemann.html#autotoc_md860", [
        [ "Water-air shock tube", "validation_multiphase_riemann.html#sec-validation-mp-riemann", null ],
        [ "Interface advection", "validation_multiphase_riemann.html#sec-validation-mp-advection", null ],
        [ "Phase-change equilibrium", "validation_multiphase_riemann.html#sec-validation-mp-phase-change", null ],
        [ "Reproduce", "validation_multiphase_riemann.html#sec-validation-mp-run", null ]
      ] ]
    ] ],
    [ "Validation: Periodic Particle Arrays", "validation_particle_array.html", [
      [ "Periodic arrays of fixed particles: drag, heat transfer and the reacting-array budget", "validation_particle_array.html#autotoc_md861", [
        [ "Purpose", "validation_particle_array.html#autotoc_md862", null ],
        [ "Setup", "validation_particle_array.html#autotoc_md863", null ],
        [ "Reference data", "validation_particle_array.html#autotoc_md864", null ],
        [ "Quantities", "validation_particle_array.html#autotoc_md865", null ],
        [ "Results", "validation_particle_array.html#autotoc_md866", [
          [ "Nusselt number", "validation_particle_array.html#autotoc_md867", null ],
          [ "Burning array (not repeated on <span class=\"tt\">master</span>)", "validation_particle_array.html#autotoc_md868", null ]
        ] ],
        [ "Assessment", "validation_particle_array.html#autotoc_md869", null ],
        [ "Known limitations", "validation_particle_array.html#autotoc_md870", null ],
        [ "Reproduce", "validation_particle_array.html#autotoc_md871", null ]
      ] ]
    ] ],
    [ "Validation: Shock-Particle Interaction and Dense Curtains", "validation_shock_curtain.html", [
      [ "Shock-particle interaction: unsteady drag of a sphere and a shock through a dense curtain", "validation_shock_curtain.html#autotoc_md872", [
        [ "Purpose", "validation_shock_curtain.html#autotoc_md873", null ],
        [ "Setup", "validation_shock_curtain.html#autotoc_md874", null ],
        [ "Reference data", "validation_shock_curtain.html#autotoc_md875", null ],
        [ "Quantities", "validation_shock_curtain.html#autotoc_md876", null ],
        [ "Results", "validation_shock_curtain.html#autotoc_md877", null ],
        [ "Assessment", "validation_shock_curtain.html#autotoc_md878", null ],
        [ "Known limitations", "validation_shock_curtain.html#autotoc_md879", null ],
        [ "Reproduce", "validation_shock_curtain.html#autotoc_md880", null ]
      ] ]
    ] ],
    [ "Validation: Shock Tubes and the Shu-Osher Problem", "validation_shock_tubes.html", [
      [ "1D Riemann problems against the exact solution, and the Shu-Osher problem", "validation_shock_tubes.html#autotoc_md881", [
        [ "Purpose", "validation_shock_tubes.html#autotoc_md882", null ],
        [ "Setup", "validation_shock_tubes.html#autotoc_md883", null ],
        [ "Results", "validation_shock_tubes.html#autotoc_md884", [
          [ "Grid convergence (WENO5-M, HLLC)", "validation_shock_tubes.html#autotoc_md885", null ],
          [ "Reconstruction and Riemann solver (Sod)", "validation_shock_tubes.html#autotoc_md886", null ],
          [ "The examples as shipped", "validation_shock_tubes.html#autotoc_md887", null ],
          [ "CPU and GPU", "validation_shock_tubes.html#autotoc_md888", null ]
        ] ],
        [ "Shu-Osher problem", "validation_shock_tubes.html#autotoc_md889", null ],
        [ "Assessment", "validation_shock_tubes.html#autotoc_md890", null ],
        [ "Known limitations", "validation_shock_tubes.html#autotoc_md891", null ],
        [ "Reproduce", "validation_shock_tubes.html#autotoc_md892", null ]
      ] ]
    ] ],
    [ "Validation: Slip Immersed Walls", "validation_slip_walls.html", [
      [ "Slip immersed walls: mass conservation, curvature pressure and the CCST ghost state", "validation_slip_walls.html#autotoc_md893", [
        [ "Purpose", "validation_slip_walls.html#autotoc_md894", null ],
        [ "Setup", "validation_slip_walls.html#autotoc_md895", null ],
        [ "Reference data", "validation_slip_walls.html#autotoc_md896", null ],
        [ "Quantities", "validation_slip_walls.html#autotoc_md897", null ],
        [ "Results", "validation_slip_walls.html#autotoc_md898", null ],
        [ "Assessment", "validation_slip_walls.html#autotoc_md899", null ],
        [ "Known limitations", "validation_slip_walls.html#autotoc_md900", null ],
        [ "Reproduce", "validation_slip_walls.html#autotoc_md901", null ]
      ] ]
    ] ],
    [ "Validation: Species Diffusion, Heat Conduction and the Transport Time Step", "validation_species_transport.html", [
      [ "1D species diffusion, conduction and <span class=\"tt\">chem_params%transport_dt</span>", "validation_species_transport.html#autotoc_md902", [
        [ "Purpose", "validation_species_transport.html#autotoc_md903", null ],
        [ "Setup", "validation_species_transport.html#autotoc_md904", null ],
        [ "Reference data", "validation_species_transport.html#autotoc_md905", null ],
        [ "Quantities", "validation_species_transport.html#autotoc_md906", null ],
        [ "Results", "validation_species_transport.html#autotoc_md907", null ],
        [ "Assessment", "validation_species_transport.html#autotoc_md908", null ],
        [ "Known limitations", "validation_species_transport.html#autotoc_md909", null ],
        [ "Reproduce", "validation_species_transport.html#autotoc_md910", null ]
      ] ]
    ] ],
    [ "Validation: Sphere Drag and Nusselt Number", "validation_sphere_drag_nu.html", [
      [ "Sphere at Mach 0.2, Re 20 and 100: drag, wake and heat transfer", "validation_sphere_drag_nu.html#autotoc_md911", [
        [ "Purpose", "validation_sphere_drag_nu.html#autotoc_md912", null ],
        [ "Setup", "validation_sphere_drag_nu.html#autotoc_md913", null ],
        [ "Reference data", "validation_sphere_drag_nu.html#autotoc_md914", null ],
        [ "Quantities", "validation_sphere_drag_nu.html#autotoc_md915", null ],
        [ "Results", "validation_sphere_drag_nu.html#autotoc_md916", null ],
        [ "Assessment", "validation_sphere_drag_nu.html#autotoc_md917", null ],
        [ "Known limitations", "validation_sphere_drag_nu.html#autotoc_md918", null ],
        [ "Reproduce", "validation_sphere_drag_nu.html#autotoc_md919", null ]
      ] ]
    ] ],
    [ "Validation: Bow-Shock Stand-Off of a Cylinder and a Sphere", "validation_standoff.html", [
      [ "Supersonic bluff bodies: bow-shock stand-off at Mach 1.5-3 (documented over-prediction)", "validation_standoff.html#autotoc_md920", [
        [ "Purpose", "validation_standoff.html#autotoc_md921", null ],
        [ "Setup", "validation_standoff.html#autotoc_md922", null ],
        [ "Reference data", "validation_standoff.html#autotoc_md923", null ],
        [ "Quantities", "validation_standoff.html#autotoc_md924", null ],
        [ "Results", "validation_standoff.html#autotoc_md925", null ],
        [ "Assessment", "validation_standoff.html#autotoc_md926", null ],
        [ "Known limitations", "validation_standoff.html#autotoc_md927", null ],
        [ "Reproduce", "validation_standoff.html#autotoc_md928", null ]
      ] ]
    ] ],
    [ "Validation: Surface Tension", "validation_surface_tension.html", [
      [ "Surface tension: Laplace pressure jump of a static drop", "validation_surface_tension.html#autotoc_md929", [
        [ "Purpose", "validation_surface_tension.html#autotoc_md930", null ],
        [ "Setup", "validation_surface_tension.html#autotoc_md931", null ],
        [ "Results", "validation_surface_tension.html#autotoc_md932", null ],
        [ "Assessment", "validation_surface_tension.html#autotoc_md933", null ],
        [ "Known limitations", "validation_surface_tension.html#autotoc_md934", null ],
        [ "Reproduce", "validation_surface_tension.html#autotoc_md935", null ]
      ] ]
    ] ],
    [ "Isothermal Conduction Annulus: Image-Point Interpolation", "validation_tsc_annulus.html", [
      [ "Isothermal Conduction Annulus: Image-Point Interpolation", "validation_tsc_annulus.html#autotoc_md936", [
        [ "Purpose", "validation_tsc_annulus.html#autotoc_md937", null ],
        [ "Setup", "validation_tsc_annulus.html#autotoc_md938", null ],
        [ "Reference", "validation_tsc_annulus.html#autotoc_md939", null ],
        [ "Quantities", "validation_tsc_annulus.html#autotoc_md940", null ],
        [ "Results", "validation_tsc_annulus.html#autotoc_md941", null ],
        [ "Assessment", "validation_tsc_annulus.html#autotoc_md942", null ],
        [ "Known limitations", "validation_tsc_annulus.html#autotoc_md943", null ],
        [ "Reproduce", "validation_tsc_annulus.html#autotoc_md944", null ]
      ] ]
    ] ],
    [ "Validation: Isentropic Vortex Order of Accuracy and Taylor-Green Decay", "validation_vortex_order.html", [
      [ "Smooth-flow accuracy: the translating isentropic vortex and the viscous Taylor-Green vortex", "validation_vortex_order.html#autotoc_md945", [
        [ "Purpose", "validation_vortex_order.html#autotoc_md946", null ],
        [ "Isentropic vortex", "validation_vortex_order.html#autotoc_md947", null ],
        [ "2D Taylor-Green vortex", "validation_vortex_order.html#autotoc_md948", null ],
        [ "Assessment", "validation_vortex_order.html#autotoc_md949", null ],
        [ "Known limitations", "validation_vortex_order.html#autotoc_md950", null ],
        [ "Reproduce", "validation_vortex_order.html#autotoc_md951", null ]
      ] ]
    ] ],
    [ "Wall-Normal Ghost Velocity at Viscous Walls", "validation_wall_order_couette.html", [
      [ "Wall-Normal Ghost Velocity at Viscous Walls", "validation_wall_order_couette.html#autotoc_md952", [
        [ "Setup", "validation_wall_order_couette.html#autotoc_md953", null ],
        [ "Reference data", "validation_wall_order_couette.html#autotoc_md954", null ],
        [ "Quantities", "validation_wall_order_couette.html#autotoc_md955", null ],
        [ "Results", "validation_wall_order_couette.html#autotoc_md956", [
          [ "Flat channel, Mach 0.05", "validation_wall_order_couette.html#autotoc_md957", null ],
          [ "Taylor-Couette annulus, Mach 0.05", "validation_wall_order_couette.html#autotoc_md958", null ],
          [ "Order 2 wall shear: options, Mach number and compressibility", "validation_wall_order_couette.html#autotoc_md959", null ],
          [ "Rotating inner wall with the optional wall treatments, Mach 0.01", "validation_wall_order_couette.html#autotoc_md960", null ]
        ] ],
        [ "Assessment", "validation_wall_order_couette.html#autotoc_md961", null ],
        [ "Known limitations and open issues", "validation_wall_order_couette.html#autotoc_md962", null ],
        [ "Reproduce", "validation_wall_order_couette.html#autotoc_md963", null ]
      ] ]
    ] ],
    [ "Validation: Solid-Wall Thermal Models", "validation_wall_thermal.html", [
      [ "Lumped cooling of a cylinder, and a cold wall in hot gas", "validation_wall_thermal.html#autotoc_md964", [
        [ "Purpose", "validation_wall_thermal.html#autotoc_md965", null ],
        [ "Setup", "validation_wall_thermal.html#autotoc_md966", null ],
        [ "Reference data", "validation_wall_thermal.html#autotoc_md967", null ],
        [ "Quantities", "validation_wall_thermal.html#autotoc_md968", null ],
        [ "Results", "validation_wall_thermal.html#autotoc_md969", null ],
        [ "Assessment", "validation_wall_thermal.html#autotoc_md970", null ],
        [ "Known limitations", "validation_wall_thermal.html#autotoc_md971", null ],
        [ "Reproduce", "validation_wall_thermal.html#autotoc_md972", null ]
      ] ]
    ] ],
    [ "Flow visualization", "visualization.html", [
      [ "Flow visualization", "visualization.html#autotoc_md973", [
        [ "Quick visualization with <span class=\"tt\">./mfc.sh viz</span>", "visualization.html#autotoc_md975", [
          [ "Basic usage", "visualization.html#autotoc_md976", null ],
          [ "Exploring available data", "visualization.html#autotoc_md977", null ],
          [ "Timestep selection", "visualization.html#autotoc_md978", null ],
          [ "Rendering options", "visualization.html#autotoc_md979", null ],
          [ "3D slicing", "visualization.html#autotoc_md980", null ],
          [ "Video generation", "visualization.html#autotoc_md981", null ],
          [ "Tiled 1D rendering", "visualization.html#autotoc_md982", null ],
          [ "Interactive mode", "visualization.html#autotoc_md983", null ],
          [ "Terminal UI (TUI)", "visualization.html#autotoc_md984", null ],
          [ "Plot styling", "visualization.html#autotoc_md985", null ],
          [ "Format selection", "visualization.html#autotoc_md986", null ],
          [ "Complete option reference", "visualization.html#autotoc_md987", null ]
        ] ],
        [ "Visualizing with ParaView", "visualization.html#autotoc_md989", [
          [ "Visualizing data in cylindrical coordinates", "visualization.html#autotoc_md990", null ]
        ] ],
        [ "Visualizing with VisIt", "visualization.html#autotoc_md991", null ],
        [ "Serial data output", "visualization.html#autotoc_md992", null ],
        [ "Remote Visualization on PACE Phoenix", "visualization.html#autotoc_md993", [
          [ "Step 1: Setting up your Environment", "visualization.html#autotoc_md994", null ],
          [ "Step 2: Customizing the script", "visualization.html#autotoc_md995", null ],
          [ "Step 3: Running pace-paraview-server", "visualization.html#autotoc_md996", null ]
        ] ]
      ] ]
    ] ],
    [ "Bibliography", "citelist.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"amr.html",
"equations.html#autotoc_md213",
"examples.html#autotoc_md457",
"running.html#autotoc_md729",
"validation_species_transport.html#autotoc_md902"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';