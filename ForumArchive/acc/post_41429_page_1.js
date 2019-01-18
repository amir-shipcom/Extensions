[{"Owner":"Bladetrick","Date":"2018-11-21T18:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an OBJ file that contains a vehicle.  The vehicle has multiple layers to it (left front tire_co_ passenger door_co_ etc)_co_ each one loading up as its own mesh.  I am starting to notice that_co_ though the model loads correctly and looks fine_co_ the mesh.positions are all listed as [0_co_0_co_0].  When trying to cast a ray from some arbitrary origin vector to the closest mesh_co_ they all shoot to the world_t_s 0_co_0_co_0 and_co_ either miss the target completely (no hit) or hit some other mesh that_t_s in the way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny thoughts on how to find the real locations of these meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-11-21T20:08:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would guess something with pivots_co_ if there are multiple meshes at position {0_co_0_co_0}.  In which case the real location would be the opposite of the pivot?  Those depend on how your OBJ file is generated_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/pivots_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/pivots_lt_/a_gt__lt_br /_gt_\n\tEasy way to test is to rotate one of the meshes and see how it rotates or have a look in the inspector.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-11-21T20:19:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes .position and getAbsolutePosition() match?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs Brian pointed out_co_ it might very well be that the pivot points of the meshes are offset from 0_co_0_co_0. This can happen in the 3D-modeling software when you export_co_ reset transforms etc. but is useless if you plan on animating the individual models. You can open your model in Blender_co_ or use BabylonJS to change the pivots to the center of the different meshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-11-21T20:29:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBoth position and getAbsolutePosition() come out with 0_co_ 0_co_ 0 for all meshes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-11-21T20:37:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthis OBJ file was generated with 3DS Max.  Another odd thing i noticed is that there are multiples of each mesh.  Like there are 5-7 meshes that get generated for steering wheel_co_ for example\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-21T23:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt would be great to have a playground as it is almost impossible to help without it on this kind of issues_co_ Thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-11-21T23:49:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn 3Ds Max_co_ try changing the pivots for all the meshes to _qt_Center to object_qt_. You can do this by simply selecting everything at once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eps","Date":"2018-11-21T23:54:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you created the mesh yourself or are you using someone else_t_s file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used some Blender files I found recently but then decided to use Sketchup to create a file which then went in to Blender and then had to play with it in Blender and finally export to .babylon format.  I guess you can inspect the mesh structure similar to the way you can do so in Blender?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-11-27T18:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI apologize_co_ I didn_t_t give enough information.  Here_t_s situation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Object is loaded.  _lt_span style_eq__qt_color_dd_#1abc9c_sm__qt__gt_This works._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I read some data points in from a database and create spheres at those locations.  _lt_span style_eq__qt_color_dd_#1abc9c_sm__qt__gt_This works._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Determine closest mesh to sphere.  _lt_span style_eq__qt_color_dd_#1abc9c_sm__qt__gt_This works._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Determine closest point on closest mesh to sphere.  This is where I get the 0_co_0_co_0  _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_Doesn_t_t work so the rest don_t_t either_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. Cast ray from sphere to closest point on closest mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe meshes are stationary and will not move_co_ rotate_co_ translate_co_ etc.  The only movement is from the camera. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts probably just a matter of me coding this wrong but here_t_s a playground illustrating it_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TRAIXW%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TRAIXW#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the playground I_t_m getting them to shoot to the mesh. but it is still hitting the center and not the closest point on the mesh.  So that_t_s one problem.  Still having issues with my models having positions of 0_co_0_co_0 though on my project.  Wish I could post those.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoth rays shoot the center of the meshes instead of the closest point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\teps_co_ I inherited the meshes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRaggar_co_ I checked and all the pivot points are centered to object_co_ but I guess I don_t_t understand why it matters if there will be no transformations on the meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ side note... for some reason the rays are only visible from certain angles so you_t_ll have to rotate.  not sure why that is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-11-27T20:46:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ forget it all.  I_t_m dumb.  I_t_m so new to this still that I was making things overcomplicated and also noticed i was looking at(and using) the wrong set of coordinates.  Yes_co_ the meshes were returning 0_co_0_co_0_sm_ however_co_ the closest facet i calculated had real values that I can work with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all.  Helped a lot to work it through.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]