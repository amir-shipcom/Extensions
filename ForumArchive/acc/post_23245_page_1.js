[{"Owner":"KevinBLT","Date":"2016-06-17T12:25:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everybody_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have two requests for features. I would like to know if these were possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_1. Hidden lines view_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould there be any possibility to create something like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_img alt_eq__qt_maxresdefault.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_562_qt_ src_eq__qt_https_dd_//i.ytimg.com/vi/5hVsyCu6vFw/maxresdefault.jpg_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo like defining a view point and create a flat image with only the edges visible (The faces_co_ not the triangles) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest for me would be a list of polygons and their points but a static image would be great either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_2. Create shadow map (and more?) with a raytracer_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn our application we have a static scene most of the time. It may change every 10 seconds (if the user wants so) and the recalculation time is not a problem (could be 3+ seconds for example).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo for this case the best possible quality is more important than the fastest calculation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think I would be the only one who needs some like these features.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks and have a great day!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-17T15:40:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. EdgesRenderer can be used I guess with a top/down camera (or even a non perspective one)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TYAHX%2355_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TYAHX#55_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. ShadowMaps can be computed just once and then reused. So you can create a high quality texture.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-23T09:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1_dd_ EdgesRender would work with the ortigraphic camera I think but in my case it shows the triangulation? _dd_-(\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/test.jpg.c22c2f53fe83553e2991b511d12bc265.jpg_qt_ data-fileid_eq__qt_8330_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8330_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/test.thumb.jpg.7cc5e51e44f243433d14fdf02ddc064d.jpg_qt_ alt_eq__qt_test.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this view would be more a global camera setting than one for each object. Some 3D-Viewers have this for example with an object called_dd_ _qt_Hidden lines_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd how is it done in blender for example? The have the views from each side just with the lines. I don_t_t know if I describe it well enough.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2_dd_ I already use the shadow map with refresh rate 1 but I thought it would be possible to get even better results in terms of lightning (global illumination?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.and have nice day!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-06-23T09:32:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_133625_qt_ data-ipsquote-contentid_eq__qt_23245_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1466673098_qt_ data-ipsquote-userid_eq__qt_14468_qt_ data-ipsquote-username_eq__qt_KevinBLT_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 minutes ago_co_ KevinBLT said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe have the views from each side just with the lines. I don_t_t know if I describe it well enough\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMaybe you talk about _lt_em_gt_outline _lt_/em_gt_? (orange line in this example _lt_a href_eq__qt_http_dd_//i.imgur.com/pUcTGg2.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//i.imgur.com/pUcTGg2.png)_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for the hidden edges_co_ you must write your own shader_co_ which will take edges depending of an angle limit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the point 2_co_ if you want complex lighting_co_ you must use a dedicate render engine (vray_co_ cycles_co_ arnold_co_ renderman_co_ etc etc) and bake it into lightmaps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-23T10:17:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOutline would not be enough. It_t_s like you said I need every edge depending on its angle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI already thought this must be done via shader but I am not able to do so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI mean this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_http_dd_//www.foro3d.com/tutoriales/blender/Car-Modeling_files/nissan_blueprints2.png_qt_ alt_eq__qt_nissan_blueprints2.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot use a dedicate render endgine because the entire scene is created dynamically from cubes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think if no 3D professional adds this into Babylon I have no chance _dd_-/\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for you answer\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-23T15:24:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello to solve your issue with edgesRenderer_co_ you have to think about merging your mesh to ensure that faces are well defined\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-24T11:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNormally the meshes wouldn_t_t be white and have different textures. I think I cannot merge them in this case?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ why is that_co_ even the bars are triangulated? They are simple boxes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm  I doing something wrong?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_keyDebug.registerKey(_qt_T_qt__co__qt_Test für verdeckte Kanten Ansicht_qt__co_function() {\n    var m _eq_ g3DScene.meshes_sm_\n\n    for (var i _eq_ 0_co_ mat_sm_ i &lt_sm_ m.length_sm_ i++) {\n      if (m[i].material &amp_sm_&amp_sm_ m[i].material.diffuseColor) {\n        mat _eq_ m[i].material_sm_\n        mat.diffuseColor.r _eq_ 1_sm_\n        mat.diffuseColor.g _eq_ 1_sm_\n        mat.diffuseColor.b _eq_ 1_sm_\n        mat.diffuseTexture _eq_ null_sm_\n\n        console.log(mat)_sm_\n      }\n      m[i].enableEdgesRendering()_sm_\n\n      m[i].edgesWidth _eq_ 100.0_sm_\n    }\n\n    //g3DCamera.mode _eq_ BABYLON.Camera.ORTHOGRAPHIC_CAMERA_sm_\n\n    g3DCamera.orthoTop _eq_ 50_sm_\n    g3DCamera.orthoBottom _eq_ -50_sm_\n    g3DCamera.orthoLeft _eq_ -50_sm_\n    g3DCamera.orthoRight _eq_ 50_sm_\n\n    RenderWithShadow()_sm_\n  })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI use a lot of instances if this is important. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso is the _qt_ArcRotateCamera_qt_ capable of being BABYLON.Camera.ORTHOGRAPHIC_CAMERA ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not able to create a sideview with it _dd_-/\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for help _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-24T14:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is how to define an ortho camera_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q6COD_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q6COD_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your example you need to merge your meshes or else the edges renderer will work on individual meshes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I agree on one point_dd_ boxes should look like this_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#19O9TU_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#19O9TU_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-06-25T21:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_lt_br /_gt__lt_br /_gt_\n\tUnwarp your model save the Uv (photoshop it_co_ - red lines etc.) and use this Texture as a facked wireframe layout._lt_br /_gt_\n\tOr use a wireframe modifier. The Possibilities are endless\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.google.de/?ion_eq_1&amp_sm_espv_eq_2#q_eq_wireframe%20render_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.google.de/?ion_eq_1&amp_sm_espv_eq_2#q_eq_wireframe%20render_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tViel Erfolg._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-27T11:44:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think this would be a more difficult solution than my current one _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know. I just wonder how Blender is doing this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately I don_t_t have the skills to write a super fancy shader doing everything awesomely smart.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe some 3D god will put in a suitable solution _lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the Edges Renderer problem I have found the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at this thread in _qt_Bugs_qt_ section\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23455-edges-rendering-not-working-properly-after-converttoflatshadedmesh/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tThanks and best regards\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-06-27T15:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know i see benefits in this solution_co_ you can have many materials as you need_co__lt_br /_gt_\n\tjust load a texture to your mesh_co_ its still rendered as a triangulate mesh. you can apply a texture to a simpel cube and make its looks like a car(normalmap)_co_ or football station._lt_br /_gt_\n\tswitching textures with mouseclicks (car_co_ football station_co_car_co_football station) easy and fast\n_lt_/p_gt_\n\n_lt_p_gt_\n\tArt is all about dealing with illusions._lt_br /_gt_\n\tGo for it_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TZS2D%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TZS2D#2_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tBest_lt_br /_gt_\n\tAlexander\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-06-27T16_dd_03_dd_46Z_t_ title_eq__t_06/27/2016 04_dd_03  PM_t_ data-short_eq__t_2 yr_t__gt_June 27_co_ 2016_lt_/time_gt_ by Nabroski_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_playground_dd_ emmi color change\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-28T09:58:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBecause I would have to create these textures for a lot of objects. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ many objects are created using CSG. I don_t_t know how I would have to \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcreate the appropriate textures before the calculation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is an example of how it can look in the end_dd__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/examp1.jpg.d5565823cbd7dcca4c89522c55a1b63c.jpg_qt_ data-fileid_eq__qt_8384_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8384_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/examp1.thumb.jpg.4f424197e5e5ef7fa75ef78e4e381370.jpg_qt_ alt_eq__qt_examp1.jpg_qt_ /_gt__lt_/a_gt_And this is not a static object or something. You can build this 2cm bigger for example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe balcony wood_co_ for example_co_ is made from CSG. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I have found out in another thread that edges renderer works for me with an additional parameter. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I_t_m getting closer. I may have to union all meshes for this view. But I am not time dependent in this moment\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am creating the print view (side and front).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNevertheless_co_ thanks for your advices! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]