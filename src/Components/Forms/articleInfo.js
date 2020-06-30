import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from '../Forms/taskEdit';
import $ from 'jquery';

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

class ArticleInfo extends Component {

  render() {
      return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'/>
<link href='style.css' rel='stylesheet' type='text/css'/>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>


<div className="hero" style={{background:'url('+`${this.props.item.image}`+') no-repeat center center fixed'}}>

      <h1 className='estiloH'><span className='colorcito'>Emotionner</span><br/>{this.props.item.title}</h1>

</div>

<div className="row-info content">
    <p className="titletry d-flex justify-content-center" style={{color:'#107385'}}>{this.props.item.title}</p>
    <p className='info'>{this.props.item.article}</p>
</div>
      </div>
    )
  }
}

export default ArticleInfo