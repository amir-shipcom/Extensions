[{"Owner":"Simon_Kunz","Date":"2016-04-04T12:42:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pretty new to babylon and 3D graphics in general. Right now I_t_m evaluating if babylon could fit the needs of a current project I_t_m involved in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe project is about visualizing different kinds of technical products in 3d within the context of an online product configurator. So far_co_ I_t_m pretty optimistic_co_ that babylon will do the job for me_co_ and I absolutely love this project. So thanks for all the great work to the whole community.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now there_t_s one major problem_co_ that I couldn_t_t solve by myself so far. Maybe it_t_s just a lack of common vocabulary to search for and maybe it_t_s pretty obvious for the pros in this forum_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s assume i have some sort of component looking like the one in the attached picture (of course this would already be a 3d-object exported from 3ds max).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I want to scale the object depending on the values the user has entered within the configurator. For example I just want the blue area labeled _qt_a_qt_ to be longer_co_ without changes the overall scale of the object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to achieve something like this with babylon? My 3d objects are imported from Autodesk Revit to 3ds max and then to .babylon. Within Revit you can kind of _qt_parameterize_qt_ your objects. Is there maybe even a way to use those parameters within babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance for your answers!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/example.png.e6331173478f336686460c13044073fd.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7147_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/example.png.e6331173478f336686460c13044073fd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_example.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-04T16:42:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome in the family _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding your question_co_ you have several options_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Export multiple separate objects from 3dsMax\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Edit the internal buffer with mesh.getVerticesData (no that easy_co_ though)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Simon_Kunz","Date":"2016-04-04T17:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and thank you for the fast reply. I saw some of your videos about babylonjs on youtube and they really helped me getting startet_co_ so thanks for that too!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I_t_d choose to export seperate objects_co_ that would mean I_t_ll have to reposition them everytime I scale one of them_co_ is that right? I_t_m afraid this wont work out for me_co_ because this way I_t_ll have to do some coding for every part we need. I would need some kind of more generic method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was hoping_co_ that maybe there is some standardized way of doing that_co_ so a technician could create some sort of parameters for a object within 3ds max and those parameters would then be filled by the configurator in a generic way. (Example for parameters_dd_ \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_344_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/aelQRyUpBuI?feature_eq_oembed_qt_ width_eq__qt_459_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut maybe that_t_s just not a thing you_t_ll need in a game-framework. I think features like that are more common in a more cad-like background.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I_t_ll take a look at your second suggestion_co_ but I_t_m afraid this will be too low-level for me as a beginner.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-04T17:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually not sure you need to reposition as long as you setup the axis of your mesh correctly in 3ds max\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it make sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]