[{"Owner":"qqdarren","Date":"2015-06-09T21:59:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I want a box to spit out words. After trying it with a custom plane_co_ and not getting very far in two hours_co_ I realized particles already do everything I am trying to do_co_ and in 5 minutes I had hacked one of the playground demos_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SHP80_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SHP80_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Q1. How inefficient is this? Particles are fun_co_ but I can get away with just one at a time_co_ so how much am I paying for what I don_t_t need? (I need the final animation to work on mobile... just tried the above on a Nexus 7_co_ and get between 25fps and 58fps - very sensitive to screen size and orientation_co_ it seems.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Q2. Do I need to run one ParticleSystem instance for each word (i.e. for each texture)? As you can see in the above demo I tried to change the texture_co_ dynamically_co_ on mouse click_co_ but it does not work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-10T17:36:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You don_t_t pay a lot as the system is pretty well optimized _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if you cannot change texture on per particle basis (for optmization reason) so to do this you will end up using billboard I guess _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-10T18:39:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_just an idea about this_co_ issuing from my knowledge of Phaser which uses a webGL renderer also_dd__lt_/p_gt__lt_p_gt_maybe could we (could I ?) investigate about a texture atlas_co_ as for sprites_co_ for particules_co_ so different textures could be use per particle_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_example here _dd_ _lt_a href_eq__qt_http_dd_//phaser.io/examples/v2/particles/collision_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//phaser.io/examples/v2/particles/collision_lt_/a_gt__lt_/p_gt__lt_p_gt_here the texture atlas is a spritesheet_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-10T22:08:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The optimization David refers to (I am guessing) is that all visible particles must use the same texture. But the texture itself can be changed at any time_co_ it seems_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SHP80%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SHP80#6_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Click the box to rotate between four text strings and an image. Notice that the active particles change as soon as you click. (That may be desirable_co_ it may not...)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-06-11T03:27:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ on that note_co_ does anyone know of any projects that implement particle effects using regular meshes_co_ or instances? (that is_co_ without using ParticleSystem?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I ask because I was about to do this_co_ but I_t_d much rather reuse someone_t_s code. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-06-11T07:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hack_dd_  _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/pharticles02.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/pharticles02.htm_lt_/a_gt_  (stutters badly these days on my new puter_co_ dunno why)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To get to the grit... _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/js/particleSystem2_02.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/js/particleSystem2_02.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Search for // Add new ones_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See the _lt_em_gt__lt_em_gt_particle _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ .2_co_ this._scene)_lt_/em_gt__lt_/em_gt_   ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sure ya do.  Also notice the turned-off vertexBuffer (vbo). There_t_s lots of things turned-off... because emitting BJS standard mesh... is quite a bit different from transforming little geo-sections of dynamicVertexBuffers.  My box particles really don_t_t fly.  They just fall out of the emitter.  The standard particleSystem _qt_flyer funcs_qt_ are not ready for flying standard BJS CreatedShapes.  So that_t_s one part of this hack... that is not complete.  Sorry._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This (my code/way) is a terrible abuse of a particle system_co_ and it_t_s cpu-heavy as hell.  Let it be known that this code was _lt_u_gt_my first-ever attempt_lt_/u_gt_ to emit _lt_u_gt_standard_lt_/u_gt_ BJS mesh... instead of quads that are all stored in the same dynamicVertexBuffer...  separated only by the lack of indices connecting them together.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And_co_ of course_co_ putting a particleSystem on each particle of a particleSystem (the smoke)... is just plain demented.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In a way_co_ particles are a single ground grid... with half of its indices missing_co_ right? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_They are grid cells that are _lt_u_gt_de_lt_/u_gt_tached from each other (yet still part of a single mesh_co_ sort-of).  And that_t_s why they are FAST!  Vrrrooooooooomm!  A single ground-grid object... exploded into separate 2-triangle face-pairs.   (huh?)  Quads.  StupidPlanes.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ Wingy_co_ how do we FLY (position/rotate/scale) the cell grids of a ground... without moving each other? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TransformCoodinates!  Wow!  Why position_co_ rotate and scale an entire mesh... when you can do such things to _lt_u_gt_only 4 points_lt_/u_gt_ of a mesh_co_ right?  Do enough 4-point transforms_co_ and you are flying particles!  YAY!  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.js#L74_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.js#L74_lt_/a_gt_  Lines 78 and 84 are the transformers_co_ and I can feel the power radiating from them_co_ can_t_t you?  They are beefy dynamicVertexBuffer-bending power tools_co_ not intended for children or drunks.  Hard hats and steel-toed boots_co_ please!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ain_t_t it amazing?  I recently told somebody how to make hexagon-shaped particles... hundreds of them... for a map grid-o-hexagons.  I hope he tries it... because I have a feeling it is going to be friggin_t_ blazing fast... just like our standard particles.  I don_t_t know why our hex-grid-making friend would need it to be lightning fast_co_ but by-gosh_co_ he_t_s got the speed if he needs it.  heh   And_co_ he_t_s got HUGE grid-size capabilities... because particles are lightweight._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But now_co_ back to you_co_ Fen.  Wanna do it more correctly?  Then DON_t_T use standard Babylon mesh for particles.  The fastest way is to build the mesh _qt_geometry_qt_ in a single vertexBuffer just like standard particles... but make it whatever shape you wish. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IF YOUR wanted particle shape and indices _qt_pattern_qt_ that is used to make your mesh... isn_t_t based-upon 4-point geometries_co_ then you need to rewrite the transformers in the BJS particle code (the geometry flyers). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For example... each particle trajectory_co_ scale_co_ z-spin_co_ color/texture transforms_co_ and all the indices of a standard particle... are 4-point related/specialized.  If you want to use 3d things like boxes... it will take all 8-point transforms (things that get updated).  It will take a more-serious particleSystem hack... to get it to do speeds comparable-with our current particles.  You will find out quickly... that you lose 50% of the particleSystem speed... by using BJS standard mesh.  Using thin-mesh like our current particleSystem does... it will cook... but it_t_s harder to code_co_ I suspect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You probably know most of this already_co_ Fen.  Sorry for the over-explaining_co_ if so.  Be well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-11T11:14:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/12925-fenomas/_qt_ title_eq__qt__qt__gt__lt_span_gt_fenomas_lt_/span_gt__lt_/a_gt_ Which part of the particle system did you want to be _lt_/span_gt_3D-ified?\tIn a sense_co_ this demo is full of 3D mesh _qt_particles_qt__dd_   _lt_a href_eq__qt_http_dd_//www.sitepoint.com/understanding-collisions-physics-babylon-js-oimo-js/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.sitepoint.com/understanding-collisions-physics-babylon-js-oimo-js/_lt_/a_gt_   (I *think* that if you specify no bounding box_co_ or a very tiny one in the middle of the balls_co_ then they will pass through each other_co_ and in that case you just use the physics engine for the trajectory and gravity aspects of the particles.) _lt_p_gt_(Going in a different direction_co_ the poor man_t_s version might be to render a 3D view of your mesh to a 2D canvas_co_ and use that as the particle texture.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-06-11T11:24:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi chaps_co_ sorry I should have been more clear. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just want to have some particles that composite normally (i.e. don_t_t get drawn on top of meshes with alpha). I suppsed the quickest way would be to make a quad with the particle texture_co_ then spawn lots of instances (or clones? not sure it matters) that float around and then disappear. So that_t_s what I was about to write_co_ but I wondered if it had been done already._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_qqdarren_co_ that_t_s a killer demo_co_ I_t_d forgotten about it. Well beyond what I was going to do though _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingy_dd_ to be honest you lost me there somewhat. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ If I_t_m just using simple quads for particles (with billboard mode_co_ I expect)_co_ do you think managing all their vertices in a VBO would work out better than just making meshes? I guess it would take a custom shader_co_ right? Can that be done without the draw becoming a separate step (as with the built-in particles)?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2015-06-11T11:53:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just to wrap up my original question_co_ here is a particle system that spits out 4 different sentences at the same time_dd_   _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KDJUH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KDJUH#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is simply 4 particle system objects with the same settings! They are in sync because the lifetime is not randomized. This version adds that random factor_co_ to set them free_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KDJUH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KDJUH#2_lt_/a_gt__lt_br_gt__lt_br_gt_You can increase capacity to have more than one of each sentence on screen at the same time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(These demos are just thrown together_sm_ I_t_d love feedback on ways I_t_m being inefficient with either CPU or memory_co_ by someone who understands the underlying code better than me.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-11T12:19:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@fenomas _dd__lt_/p_gt__lt_p_gt_I just read quickly the particle system code._lt_/p_gt__lt_p_gt_As you imagined it_co_ each particle seem to be a quad (I don_t_t really know what is a quad therefore _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_co_ at least a tiny square composed with two triangles _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L97_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L97_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_then textured further ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The used blend mode is set at the start with this line (see constant values lines 14 and 15) _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L43_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L43_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The draw order and draw call are done here _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L385_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L385_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_it_t_s based on _lt_em_gt_forceDepthWrite_lt_/em_gt_ boolean and _lt_em_gt_blendmode_lt_/em_gt_ value._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So maybe could you just do a test with changing the blend mode value of the _lt_em_gt_blendmode_lt_/em_gt_ public property to _lt_em_gt_BLENDMODE_STANDARD_lt_/em_gt_ and _lt_em_gt_forceDepthWrite_lt_/em_gt_ to _lt_em_gt_true_lt_/em_gt_ and check if it behaves as you expect ?_lt_/p_gt__lt_p_gt_Don_t_t really know... but I believe it_t_s almost what you suggested about quads and normal compositing_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-06-11T13:15:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingy_dd_ to be honest you lost me there somewhat. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ If I_t_m just using simple quads for particles (with billboard mode_co_ I expect)_co_ do you think managing all their vertices in a VBO would work out better than just making meshes? I guess it would take a custom shader_co_ right? Can that be done without the draw becoming a separate step (as with the built-in particles)?_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ohhh_co_ yeah_co_ you wanted a different material on each particle_co_ or the freedom to do that?  Or was that qqdarren?  I_t_m confused now.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_projects that implement particle effects using regular meshes_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Careful here_co_  _qt_particle effects_qt_ is an extra feature of particleSystems.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  But I think you mean making standard mesh act like particles used in particleSystems._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Materials get limits when using the VBO method_co_ it seems. But this talk is at my edu-edge_co_ so I could be saying all sorts of wrong things.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The VBO system gives you less versatility per particle_co_ but it gives what appears to be MUCH faster performance.  So_co_ if your mesh emitter/sprayer needs FEW particles_co_ no problems.  You can fly a few parabola trajectories with standard shapes_co_ and call it a day.  (Jerome recently made a cannon with cannonball bounce_co_ and showed it to us in The Wingnut Chronicles_co_ so that might be usable for you.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if you are putting 10_co_000 particles on-screen at once_co_ then it might be wise to look at different (and industrial-grade) options (like VBO and transformCoords)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In certain situations (not too many particles)_co_ you can make a physics explosion_co_ too.  For example_co_ stack a pile of invisible boxes_co_ then BOOM!  SetPhysicsState on all boxes_co_ make them all visible_co_ and applyImpulse in a random upward direction on all of them... instantly.  Actually_co_ you make the stack_co_ setPhysicsState on all_co_ and then SLAM another mesh into the bottom of them_co_ using a powerful applyImpulse on that _qt_impactor_qt_ mesh.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_They_t_ll fly and bounce at about half the speed of Jerome_t_s non-physics-yet-still-bounces cannon shot.  *shrug*  Its another possible option to get standard mesh flying._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry for the topic swerve_co_ QQD.  That was my fault.  That text sprayer looks kind of cool_co_ eh?  I like it.  Quite an advertising machine.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Stack a few more PS atop_co_ spraying confetti_co_ streamers_co_ and balloons_co_ and you have a serious _qt_hoopla_qt_ generator._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-11T18:55:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I read again the particle system code._lt_/p_gt__lt_p_gt_I believe I understand some things so far and don_t_t understand others ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_AFAI_co_ the particle system is to be seen as a single big mesh. Its faces are pair of triangles making small squared which are then textured. These squares aren_t_t stuck to others like in a classical volume mesh but have their own coordinates (positions) evolving with time._lt_/p_gt__lt_p_gt_So many little independant squares in a big mesh._lt_/p_gt__lt_p_gt_Am I right so far ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The idea coming to my mind is that it wouldn_t_t be maybe not that complex to set UV for each vertex at creation so we could use a kind of texture atlas instead of a unique image for the particles. The goal would be to have different images within the same emitter for different particles._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The thing I don_t_t get_co_ reading the code_co_ is where the particule orientation (ever facing the cam...like billboard mode) is done ? Perhaps_co_ it even doesn_t_t exist and as we use usually small images for particles_co_ we just believe they all face us but they don_t_t !  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However looking closely at qqdaren_t_s PG  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KDJUH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KDJUH#2_lt_/a_gt_ _co_ the large text particles seemto always face the cam.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-11T19:09:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@fenomas ... I was wrong with _lt_em_gt_forceDepthWrite_lt_/em_gt_ _dd_ it doesn_t_t solve this problem  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#156EO%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#156EO#2_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-06-12T08:14:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow! Thanks for doing deep thinking about this Wingy and Jerome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_QQ_co_ sorry I kind of hijacked your thread - I thought you were done with it and I was adding a trivial footnote. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Hope your side is taken care of._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingy_dd_ concerning VBOs and whatnot_co_ I barely understand this stuff but I think what_t_s going on here is_dd_ for typical meshes the vertices go into a VBO and never change_co_ and the mesh is moved around with a transform matrix_co_ which changes each frame. So for lots of plain quads you have lots of small static VBOs and lots of transform matrices. With particle system_co_ instead it fills a VBO with particle locations and then updates them each frame_co_ but in return there_t_s only one transform matrix for the whole system_co_ rather than each particle. Thus the whole set of particles can then be drawn in one call (i.e. as far as the GPU is concerned the particle system is like a single mesh whose vertices move around). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ since the system_t_s one draw call takes place after the rest of the scene is drawn_co_ it doesn_t_t composite_co_ except with pixels that are opaque (which I guess works due to the depth buffer). I don_t_t know how _lt_em_gt_forceDepthWrite_lt_/em_gt_ fits into all this - no idea what it does_co_ but I guess it_t_s not something relevant to this. (Thanks for the demo jerome! I_t_d wanted to try that.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally_co_ Jerome for your question about orientation_co_ I believe ParticleSystem particles never get their orientation fixed because they never had it set to begin with. For normal meshes their 3d position and rotation get transformed_co_ and afterwards if they have a billboard mode they are then oriented towards the camera. But particles undergo a separate process_co_ and don_t_t have any 3d rotation to transform. Their position is transformed to screen coords and then their texture is drawn in screenspace._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway that_t_s how I take this to work. Code and solutions in a follow-up post._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T08:32:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok understood about the different process for particle system (no 3d rotation to transform and direct clipping)_lt_/p_gt__lt_p_gt_I think I will try something mesh based _dd_ an updatable mesh wich will be the _qt_emitter_qt__lt_/p_gt__lt_p_gt_it will be build with many independent faces_co_ billboarded or not_co_ (or pyramids - the most little volume doable with triangles - or cubes) which will be the particles_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_then some stress tests will be done to check how much such a system could be loaded with this kind of particles_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-06-12T08:33:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On to code_dd_ when I asked this question I had in mind something like this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#156EO%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#156EO#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nothing interesting_co_ just a bunch of instances of a mesh with a texture being added_co_ moved around_co_ and then disposed. For small numbers of particles (i.e. dozens) this shouldn_t_t kill performance_co_ and obviously it composites normally since it_t_s just regular meshes. If the meshes have transparency then it would get heavier due to sorting their draw order. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I_t_m not sure using a blend mode for regular meshes like this. I guess it could be done but as I understand it there are no mesh properties to set_co_ you_t_d have to hook into the render function and dynamically twiddle engine settings depending on which mesh was about to be rendered_co_ so it_t_d be pretty unwieldy.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now with all that said_co_ if particles like this were to scale well they_t_d have to be drawn like particle system does - with one VBO for the system_co_ but drawn during scene composition rather than on top afterwards. But knowing whether this would be possible goes beyond my understanding of BJS internals. If it can be done it_t_d be a neat hack._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T13:27:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_here is my first test today (too bored to write an article about BJS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11VPQD_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11VPQD_lt_/a_gt__lt_/p_gt__lt_p_gt_This test runs faster outside the PG (as for _lt_em_gt_computeNormals_lt_/em_gt_ optimization_co_ I noticed the PG editor may have side effects on performance) on my computer._lt_/p_gt__lt_p_gt_It runs at 60 fps in Chrome and 37fps+ in FF on my computer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What do we have here ?_lt_/p_gt__lt_p_gt_Only a single mesh._lt_/p_gt__lt_p_gt_Each of its faces (triangles) are independent and their positions are updated each frame. I just set it to BILLBOARDMODE_Y_lt_/p_gt__lt_p_gt_Since it is a real mesh_co_ it is managed by BJS as other meshes in terms of z-depth and compositing_co_ as you can check with the two boxes (transparent and opaque)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this PG_co_ 5000 particles are emitted and permanently recycled. So there are always 5000 flying particles._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 80 _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_  // Particle system  var PS _eq_ new ParticleSystem(5000_co_ 1_co_ mat_co_ scene)_sm_  PS.start(1.5)_sm__lt_/pre_gt__lt_p_gt_5000 _dd_ particle number_lt_/p_gt__lt_p_gt_1 _dd_ triangle size_lt_/p_gt__lt_p_gt_mat _dd_ particle material_co_ please note the normals ARE recomputed on each particle each frame here (may be disabled)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_on start_co_ 1.5 is the particle initial velocity_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T13:51:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_stress test of this model here in Chrome _dd__lt_/p_gt__lt_p_gt_particle size _eq_ 1_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_20K particles _eq_&gt_sm_ 60 fps_lt_/p_gt__lt_p_gt_25K particles _eq_&gt_sm_ 50 fps_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ this is not as powerful as the current particle system_co_ but it has the advantages of a real mesh (and therefore only 1 draw call like the current system)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So it might be an alternative for those needing accuracy over power._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try to make squares (quads ?) instead of triangle and implement a way to set UV on these squares_co_ so we will be able to use an image as a texture atlas_co_ and so have different textures per particle_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-06-12T13:58:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is what should also be for Babylon. a particle system with meshes. Is that_t_s what you plan to Jerome? It would be really excellent._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T13:59:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11VPQD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11VPQD#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_just added a higher initial vertical speed so the particle fountain is prettier_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_size _eq_ 0.5_lt_/p_gt__lt_p_gt_nb _eq_ 10K_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T14:01:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Dad72_lt_/p_gt__lt_p_gt_Why not adding it to BJS (it_t_s quite light in terms of LOC for now)_lt_/p_gt__lt_p_gt_But I need to make many many tests before to optmize it and to add this texture feature_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-06-12T15:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_85787_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15088_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1434115675_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_here is my first test today (too bored to write an article about BJS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11VPQD_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11VPQD_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wowza! This seems amazing! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s bedtime for me but I_t_ll dig into this tomorrow and try to figure out what you did_co_ and whether I can help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T15:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_courage_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m working at making textured squares instead of triangles now_lt_/p_gt__lt_p_gt_I probably won_t_t code sat+sunday_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BILLBOARDMODE_ALL is better... else we can_t_t see the particles from the ceiling _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-06-12T15:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you Jerome. Particle with mesh is an interesting thing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-06-12T15:23:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_de nada _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]