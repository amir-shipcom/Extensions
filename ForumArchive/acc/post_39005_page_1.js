[{"Owner":"Rodrix3","Date":"2018-07-21T16:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using PBR and testing microsurface property and I don_t_t see any changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen does microsurface produce visible changes? Does the object need to be metallic or non metallic? Does the object need to have close to 0 roughness or close to 1?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo I need to set any flag on to make this property work?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-23T16:20:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-23T16:53:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmicrosurface works only if you are using the specular/glossiness workflow (meaning metallic_co_ roughness settings are left null).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis controls how blurry the reflection appears meaning exactly like roughness would do on metallic/roughness workflow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe value is 1 - roughness . So yes it is basically just a different convention to describe your material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will definitely see the impact more if your material is close to a mirror meaning the reflectivityColor being close to white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis might actually help a lot_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rodrix3","Date":"2018-07-23T17:00:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222914_qt_ data-ipsquote-contentid_eq__qt_39005_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532364823_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tmicrosurface works only if you are using the specular/glossiness workflow (meaning metallic_co_ roughness settings are left null).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis controls how blurry the reflection appears meaning exactly like roughness would do on metallic/roughness workflow.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe value is 1 - roughness . So yes it is basically just a different convention to describe your material.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou will definitely see the impact more if your material is close to a mirror meaning the reflectivityColor being close to white.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis might actually help a lot_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAh!!! Thanks for the answer _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using gltf files_co_ which by default uses the metallic workflow (I think)._lt_br /_gt_\n\tOr at least_co_ I can tell you that I am exporting via 3ds Studio Max and all my materials have a metallic texture and roughness defined.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t I guess that_t_s why I wasn_t_t seeing a difference!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs microsurface a synonym for roughness and I will get exactly the same result if I used the metallic workflow_sm__lt_br /_gt_\n\tor do you actually recommend using the specular/glossiness workflow for non-metal materials?_lt_br /_gt_\n\t(If so which? Materials like ceramic with strong reflections_co_ or would fabric materials fit in well_co_ too?).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I am now confused..thinking again_co_ gltf files internally use metallic workflow_co_ but when imported to Babylon_co_ a PhysicalMaterial is used? (correct?)._lt_br /_gt_\n\tAnd the Physical material contains both the specular/glosiness and the metallic workflow._lt_br /_gt_\n\t_lt_br /_gt_\n\tIf this is true_co_ how do I activate the specular/glosiness workflow?_lt_br /_gt_\n\tShould I literally set material.roughness_eq_ NULL and material.metallicTexture _eq_ NULL?_lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks so much  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-23T17:45:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIs microsurface a synonym for roughness and I will get exactly the same result if I used the metallic workflow_sm_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_Micorsurface is a synonym of glossiness in Babylon and is equal to 1 - roughness._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tor do you actually recommend using the specular/glossiness workflow for non-metal materials?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_I really only depends of your preferences here and in your case_co_ play with roughness instead of microsurface _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t(If so which? Materials like ceramic with strong reflections_co_ or would fabric materials fit in well_co_ too?).\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_They all fit in both workflow_co_ it is more a matter of artist choices knowing use spec gloss could lead to not physically possible materials._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tAlso_co_ I am now confused..thinking again_co_ gltf files internally use metallic workflow_co_ but when imported to Babylon_co_ a PhysicalMaterial is used? (correct?).\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_As GLTF needs a lot of functionnalities they fit more with the full PBR which can switch from MetalRough to SpecGloss._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tAnd the Physical material contains both the specular/glosiness and the metallic workflow.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_It contains both to simplify our abstraction of the uber shader we have for PBR. It is also why we created 2 smaller mats to simplify development._lt_/em_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tIf this is true_co_ how do I activate the specular/glosiness workflow?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_To reactivate spec gloss you need to put null in all those properties_dd__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_ul style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t_lt_li_gt_\n\t\t_lt_em_gt_metallic_lt_/em_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_em_gt_roughness_lt_/em_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_em_gt_metallicTexture_lt_/em_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_as stated in the documentation_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master#from-metallicroughness-to-pbrmaterial_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/physically_based_rendering_master#from-metallicroughness-to-pbrmaterial_lt_/a_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_or easier recreate a new material_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tShould I literally set material.roughness_eq_ NULL and material.metallicTexture _eq_ NULL?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt_yup_lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rodrix3","Date":"2018-07-25T04:51:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_! This was all very helpful _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em style_eq__qt_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_&gt_sm_&gt_sm_They all fit in both workflow_co_ it is more a matter of artist choices knowing use spec gloss could lead to not physically possible materials._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust to clarify_co_ choosing metal/rough or spec/gloss is an artistic choice_co_ since both give DIFFERENT render results_co_ right?_lt_br /_gt_\n\tThey are NOT just different naming conventions_co_ they are in fact different shaders that produce different render results_co_ correct?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-25T11:24:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ most of the shader is the same_co_ metal rough will be converted to spec gloss at the begining of the shader using_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmicrosurface _eq_ 1 - roughness_sm_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// Default specular reflectance at normal incidence._lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// 4% corresponds to index of refraction (IOR) of 1.50_co_ approximately equal to glass._lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_const_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_vec3_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ DefaultSpecularReflectanceDielectric _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ vec3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.04_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.04_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.04_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// Compute the converted diffuse._lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_surfaceAlbedo _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ mix(baseColor.rgb _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_*_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ (_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1.0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_-_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ DefaultSpecularReflectanceDielectric.r)_co_ vec3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_co_ metallic)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// Compute the converted reflectivity._lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_surfaceReflectivityColor _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ mix(DefaultSpecularReflectanceDielectric_co_ baseColor_co_ metallicRoughness.r)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_then everything works in specgloss mode _lt_span_gt__dd_-_lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_)_lt_/span_gt__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]