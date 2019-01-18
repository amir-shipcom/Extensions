[{"Owner":"haestflod","Date":"2017-12-19T22:40:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEDIT_dd_  Issue solved by upgrading from 3.0.7 to 3.1.1_lt_br /_gt__lt_br /_gt_\n\tHi_co_ I_t_m using an ambientTexture as a lightmap and a user has the ability to toggle between 2 different lightmaps._lt_br /_gt_\n\tI_t_m currently on babylon 3.0.7 as I havn_t_t been able to update to 3.1.1 yet._lt_br /_gt__lt_br /_gt_\n\tWhat happens is that it works for the majority of the meshes &amp_sm_ materials._lt_br /_gt_\n\tHowever for some meshes they don_t_t always correctly apply the ambient texture greyscale multiplier._lt_br /_gt_\n\tI_t_ve tried the following 3 functions_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_material.unfreeze()_sm_\nmaterial.markDirty()_sm_\nmaterial.markAsDirty( BABYLON.Material.TextureDirtyFlag )_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tIf I use the code below some seconds afterwards manually it sometimes works properly and sometimes it doesn_t_t._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.materials.forEach( (material) _eq_&gt_sm_ { material.markAsDirty( BABYLON.Material.TextureDirtyFlag ) } )_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tIs there anything else I can do to trigger the material to update?_lt_br /_gt__lt_br /_gt_\n\tThe babylon.js file is exported with the old unity exporter._lt_br /_gt_\n\tThe StandardMaterial_t_s diffuse texture has alpha enabled\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2017-12-20T14:35:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI noticed if I wasn_t__t_t looking at the meshes they would be correctly updated_co_ so if I do a 360 camera spin and then markAsDirty() the ambient texture value is properly applied_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-20T18:36:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello as I see you are playing with freezing materials which could be tricky (and no more required in 3.1 _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould you mind trying to repro the issue on the playground? It_t_s gonna be far easier for me to help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]