[{"Owner":"SpaceToast","Date":"2018-08-28T22:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs importing animations (in this case_co_ from Blender) in an assetContainer currently supported? I can see the animation data in the .babylon file_co_ but scene.animations_co_ container.animations_co_ and all mesh.animations arrays come up empty.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-29T16:40:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnimations are hosted by the nodes where they apply (So for instance by the mesh where the animation will take place)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SpaceToast","Date":"2018-08-30T16:18:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Kosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried looping through all the imported meshes_co_ looking for one with _lt_em_gt_mesh_lt_/em_gt_.animations.length &gt_sm_ 0_co_ but nothing comes up. Am I looking in the wrong place?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-30T16:25:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t think so. Can you repro in the playground so we can see the actual code you_t_re using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]