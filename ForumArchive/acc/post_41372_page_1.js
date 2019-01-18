[{"Owner":"Ned","Date":"2018-11-19T08:59:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m a newbie on BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRecently_co_ I export the _lt_strong_gt_TOB js file_lt_/strong_gt_ from _lt_strong_gt_blender_lt_/strong_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I use MeshFactory Class to import the mesh on BJS _co_ Everything is alright. _lt_strong_gt_(pic1)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21069_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/before.png.8e9f8273b581149c3875079cb4faa67e.png_qt_ alt_eq__qt_before.png.8e9f8273b581149c3875079cb4faa67e.png_qt_ /_gt__lt_strong_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I start to apply the vertexDeform function in _lt_strong_gt_QueuedInterpolation.1.1.js _co__lt_/strong_gt_ the morphing works well in positions\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever the texture turns out discontinuous effect. _lt_strong_gt_(pic2_co_ triangle discontinuous dark shadow)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems like something incorrect. Maybe normals or shadows or something else? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21070_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/after.png.fb2ec18d1d73d7cb44764e6fd76a12cf.png_qt_ alt_eq__qt_after.png.fb2ec18d1d73d7cb44764e6fd76a12cf.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter tracing the code in QI_co_ I found that the compute normals is involved in vertexDeform related function\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I try to cut down the problematic mesh part and remove the shape group in blender and export again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust wanna try if ComputeNormals could work well or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the new TOB js shows the same outcome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Procedural is simple _dd_ (1) instance the mesh (2) Re ComputeNormals in BJS )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_(a tiny clue _dd_ the fail area is just around the boundary of two different materials_co_ don_t_t know whether it_t_s related)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCall helps for the experts in this forum\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_1. What causes this issue?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_b_gt_2. Are there any recommended solutions to deal with this problem?_lt_/b_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_b_gt_    (I_t_m afraid the vertexDeform/Morphing of Blender output mesh should always do the ComputeNormals function)_lt_/b_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe playground is as following ( Mesh.js without shape group. Just want to make sure the ComputeNormals works well or not)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//nedbenson.github.io/BJS_game/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//nedbenson.github.io/BJS_game/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-19T10:24:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYup_co_ it comes down to the computeNormals function which does only use the face information to compute normals so not necessarily ending with the result you were having in Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow let s add exporter magicians who should be able to help exporting for your use case_dd_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32589_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/_qt_ rel_eq__qt__qt__gt_@PatrickRyan_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-11-19T16:15:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh yes_co_ I am well aware of the lines coming from border of Tower of Babel shape key Groups.  See the line under the chin_co_ _lt_a href_eq__qt_https_dd_//palmer-jc.github.io/scenes/QueuedInterpolation/automaton/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  As you might know_co_ Unlike BJS morph targets_co_ which are the entire mesh_co_ you can have multiple groups on the same mesh like face_co_ left / right hands_co_ etc.  In addition to being much smaller than the whole mesh_co_ also being on the CPU vs GPU allows many more targets do to vertex shader parameter thingie limits.  I kind of doubt that you could have 24 GPU based _qt_targets_qt_ like for the Automaton tester scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat you are using is pretty old.  I have not posted in about a year. I am actively working on QI 2.0 &amp_sm_ TOB 6.0.  TOB 6.0 will now require QI_co_ which makes the generated code more clear_co_ and pushed some code out of the export &amp_sm_ into QI.  TOB 6 will also be for Blender 2.80_co_ where materials with textures must be made using nodes.  Unlike BJS_co_ I will be breaking a lot of compatibility.  Forcing all meshes to be QI.Mesh sub-classes means I can redo how mesh clone factories are implemented with almost none of the code implemented in the generated code.  More like code generated calling a QI runtime.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem here_co_ I believe_co_ is that for each state of a shape key group_co_ ComputeNormals is called to get the corresponding end point normals.  As to not interfere with other shape key groups_co_ the same vertices isolated for the positions are used to cull the vertices used for the normal state.  Then every frame of the morph_co_ the states of the 2 involved (prior &amp_sm_ next) of normals are interpolated and pasted into the normal of the entire mesh_co_ &amp_sm_ sent up to the GPU.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the list of affected vertices for a group needs to be expanded to be a little bigger to also include those which are also shared by faces of the ones which have a position change.  This list of vertices is determined by the exporter_co_ and I am looking to see if this fixes the problem for TOB 6.0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do no know when this will be published.  I am also splitting time with a Kinect data capture functionality for a Blender addin for the next MakeHuman release.  If you only have the one group_co_ and just a keys_co_ you might just use the .babylon exporter / morph targets.  The export will be bigger_co_ but should work for a low number of keys.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ned","Date":"2018-11-19T17:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for the great explanation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally looking forward to the new version you are working on !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe demo you_t_ve shown seems to have the same issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see in my playground _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe shapekey group is already removed_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thowever is still having issue after doing ComputeNormals.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it is not caused by shapekey group_co_ possibly material group or something else?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn our condition_co_ it_t_s really sad that maybe .babylon exporter is not the suitable choice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause our mesh is going to own plenty of keys and shape groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you suggest any workarounds on this topic?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-11-19T21:15:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor your playground_co_ I am pretty sure you must have exported without shape key groups_co_ or you would not have been able to mesh clone factory.  You cannot share geometry across mesh clones and morph the vertices on the CPU.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlus based on your url_co_ I kind of cheated &amp_sm_ _lt_a href_eq__qt_https_dd_//github.com/NedBenson/BJS_game/blob/master/js/UA.js_qt_ rel_eq__qt_external nofollow_qt__gt_checked _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/a_gt_.  The mesh extends BABYLON.Mesh_co_ not QI.Mesh.  Wow this is not even ES6 classes for meshes being generated yet.  TOB in repo is older than I thought.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile my long talk about shape keys still creates normal lines of their own_co_ this is not the issue here.  This would mean nothing I am planning would help.  For meshes with multi-materials_co_ Blender vertices are duplicated when exported (.babylon and .js exporter) when a blender mesh face is right next to another with a different material.  Blender assigns materials by face_co_ and the 2 adjacent faces can share the vertex.  BJS requires multiple vertices when in that case.  So this is not an exporter problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure why you need to compute normals_co_ but if you separate your mesh by materials_co_ then parent mesh might fix. This would not increase overhead much_co_ since each material is still going to be a draw call. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEither that or bake the different materials_co_ so that it is not a multi-material mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ned","Date":"2018-11-20T10:57:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your great insight._lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry I didn_t_t explain it clear. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI try to solve the ComputeNormals things because I thought shapekey morphing in TOB-output-js is done with helps of ComputeNormals function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Are there any ways to workaround? ( vertex deformation in correct material display without computing normals )_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI follow the suggestions and do some experiments independently.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(A) Separate Meshes and set them to parent mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(B) Build all materials into one \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSadly_co_ I still face the normal-line condition.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI referenced your great post reply in the past here_co_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed373214111_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/9446-ab-normals/?do_eq_embed_qt_ style_eq__qt_height_dd_216px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tYou said you faced some normal calculation problems and provide a good method_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Do you think we can solve our case with other calculating methods?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also study the great post by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ which explains the algo in an excellent way\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2630007702_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17040-the-mystery-of-computenormals/?do_eq_embed_qt_ style_eq__qt_height_dd_339px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI try some [options] inside the ComputeNormals . Still not work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_But maybe there are some chances to make it but I fail with some misunderstanding myself_lt_/strong_gt_. haha\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHopefully shape key morphing could work well regardless of vertex/material group boundaries!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your expert advice again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-11-20T13:24:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like you_t_re just experimenting the little artifact described in the linked post (mystery of _lt_em_gt_computeNormals()_lt_/em_gt_) on the edge of a surface.  You can notice it because this surface touches another one and it looks then not continuous. We would probably have not noticed it on a surface joined to nothing else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to hack this to make a smooth seam_co_ you need to set manually the normals of the edge vertices to a better value. A _qt_better value_qt_ could be the average value of the normals of each edge vertices.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ned","Date":"2018-11-21T09:10:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your reply._lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did compare the normal exported from Blender and the one derived by ComputeNormals\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll configs are the same but normals outcomes are slightly different.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe it_t_s due to the differences between two algos.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom your comments_co_ I think the smoothness/normalization of normals is the key to this case?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever I find it_t_s pretty hard to insert the _qt_average value_qt_ idea into the Normal Computing Process without manual works? Don_t_t know how to define where artifacts take place. _lt_strong_gt_Is it possible to apply entirely normalization through the long array of normals or other approaches to solve it_lt_/strong_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question here_co__lt_strong_gt_ why the bad shading mesh part turns out regularly-trimesh behavior?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(half light triangle + half dark triangle _co_ repeated ... )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again and again for your great insights _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNed \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]