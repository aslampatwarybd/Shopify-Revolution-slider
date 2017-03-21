/* Rev Slider Activation Sripts Start */

  /* https://learn.jquery.com/using-jquery-core/document-ready/ */
  jQuery(document).ready(function() {

    /* initialize the slider based on the Slider's ID attribute from the wrapper above */
    var api = jQuery('#rev_slider_1').show().revolution({

      /* options are 'auto', 'fullwidth' or 'fullscreen' */
      sliderLayout: '{{settings.home_rev_slide_layout_md}}',
      {%if settings.home_rev_slide_layout_md == 'auto' %}
        {%if settings.home_rev_slide_md_min_height%}
          minHeight: '{{settings.home_rev_slide_md_min_height}}',
        {%else%}
          autoHeight: 'on',
        {%endif%}
      {%endif%}
      
      /* basic navigation arrows and bullets */
      navigation: {
        keyboardNavigation: '{{settings.home_rev_slide_nav_keyboardNavigation}}',
        keyboard_direction: '{{settings.home_rev_slide_nav_keyboard_direction}}',
        onHoverStop: '{{settings[home_rev_slide_nav_onHoverStop]}}',
        arrows: {
          enable: {{settings.home_rev_slide_nav}},
          style: "{{settings.home_rev_slide_nav_arrow_style}}",
          hide_onleave: false
        },

        bullets: {
          enable: {{settings.home_rev_slide_nav_bullets}},
          style: "{{settings.home_rev_slide_nav_bullets_style}}",
          hide_onleave: false,
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 20,
          space: 5

        }
      }
    });
    

    
if('ontouchend' in document) {
 
    var screenSize = jQuery(window).width(),
        layout;
 
    /* desktop screen size */
    if(screenSize > 1024) {
        /* layout options are "fullscreen", "fullwidth" and "auto" */
        layout = '{{settings.home_rev_slide_layout_md}}';
        {%if settings.home_rev_slide_layout_md == 'auto' %}
          {%if settings.home_rev_slide_md_min_height%}
            minHeight = '{{settings.home_rev_slide_md_min_height}}';
          {%else%}
            autoHeight: 'on';
          {%endif%}
      	{%endif%}
 console.log(layout);
    }
    /* Small Touch Device screen size */
    else if(screenSize > 767 & screenSize <= 1024){
    	/* layout options are "fullscreen", "fullwidth" and "auto" */
        layout = '{{settings.home_rev_slide_layout_sm}}';
        {%if settings.home_rev_slide_layout_sm == 'auto' %}
          {%if settings.home_rev_slide_sm_min_height%}
            minHeight = '{{settings.home_rev_slide_sm_min_height}}';
          {%else%}
            autoHeight: 'on';
          {%endif%}
      	{%endif%}
    console.log(layout);
    }
    /* mobile screen size */
    else {
        /* layout options are "fullscreen", "fullwidth" and "auto" */
        layout = '{{settings.home_rev_slide_layout_xs}}';
        {%if settings.home_rev_slide_layout_xs == 'auto' %}
          {%if settings.home_rev_slide_xs_min_height%}
            minHeight = '{{settings.home_rev_slide_xs_min_height}}';
          {%else%}
            autoHeight: 'on';
          {%endif%}
      	{%endif%}
      console.log(layout);
    }
 
    var sliderSettings = api.data('opt') || api[0].opt;
    /* console.log(sliderSettings); */
 
    sliderSettings.sliderLayout = layout;
    
 
}    
    
  });

/* Rev Slider Activation Sripts End */