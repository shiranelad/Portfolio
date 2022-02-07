'use strict'

$(onInit);

function onInit(){
    renderProjs();
}

function renderProjs(){
    var projs = getProjs()
    var strHtmls = projs.map( proj => 
         `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${proj.img}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>`)

  var $elDiv = $('.portfolio-items')
  return $elDiv.html(strHtmls)
}

function renderModal(id){
    var proj = getProjById(id)
    var $elModal = $('.modal-body')
   var strHtmls = ` <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto img-modal" src="${proj.img}" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.date}</li>
                  <li><button class="btn btn-liveview btn-primary" onclick="window.open('${proj.url}','_blank')">Check it out!</button></li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>`
    return $elModal.html(strHtmls);
}

function getContactValues(){
    var $emailVal = $('#formControlEmail').val()
    var $subjectVal = $('#formControlSubject').val()
    var $bodyVal = $('#formControlBody').val() + ' ' + $emailVal

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=shiranelad@gmail.com&su=${$subjectVal}&body=${$bodyVal}`
    window.open(url, '_blank')
}