$(function() {
  //  main outlet for placing content based on which nav link gets clicked
  const $mainContainer = $('#main-container');

  //  add handlers for all nav links
  registerNavHandler();

  // handlers declarations
  function registerNavHandler() {
    $('.navbar-brand-landing').click(() => {
      // add landing
    });

    $('.dropdown-item-plots').click(el => {
      // const $img = getPlots(el.target);
      const $el = $(el.target);
      let $img;
      if ($el.hasClass('dropdown-item-plot1')) {
        $img = $('<img class="mx-auto img-fluid d-block" src="./../assets/images/Fig1.png" alt="Fig 1">');
      }
      if ($el.hasClass('dropdown-item-plot2')) {
        $img = $('<img class="mx-auto img-fluid d-block" src="./../assets/images/Fig2.png" alt="Fig 2">');
      }
      if ($el.hasClass('dropdown-item-plot3')) {
        $img = $('<img class="mx-auto img-fluid d-block" src="./../assets/images/Fig3.png" alt="Fig 3">');
      }
      if ($el.hasClass('dropdown-item-plot4')) {
        $img = $('<img class="mx-auto img-fluid d-block" src="./../assets/images/Fig4.png" alt="Fig 4">');
      }
      $mainContainer.empty().append($img);
    });

    $('.nav-item-comparision').click(() => {
      $mainContainer.empty().append($comparisionContainer);
    });

    $('.nav-item-data').click(() => {
      $mainContainer.empty().append($dataContainer);
    });
  }

  function renderLanding() {
    
  }
});
