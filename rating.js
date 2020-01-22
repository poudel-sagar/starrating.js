<!DOCTYPE html>
<html>
<head>
<title>
</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous"/>
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
<style>

*{margin: 0; padding:0; box-sizing: border-box; font-family:'Josefin Sans', sans-serif;}
h1{ text-align: center; padding: 15px 0; position: absolute; left: 50%; transform: translateX(-50%);}

.star-rating{
    width: 100%;
    height:  100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-grandient(90deg, rgbs(2,0,36,1) 0%, rgbs(0, 235,102,0.8575805322128851) 0%, rgbs(30,143,170,0.7819502801120448) 100%);
}
.stars{
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

}
.star{list-style: none; font-size: 4rem; padding-left:20px;
color: orangered}

.star:first-child{padding: 0}
img{-webkit-box-shadow: 1px -6px 22px 1px rgbs(77,71,77,1);
   -moz-box-shadow: 1px -6px 22px 1px rgba(77,71,77,1);
   box-shadow: 1px -6px 22px 1px rgba(77,71,77,1)

   .output{ width: 400px; height: 50px; line-height: 50px; text-align: center;
    background: #00b894;
     font-size: 1.2rem;
   -webkit-box-shadow: 1px 5px 7px 2px rgba(77,71,77,1);
   -moz-box-shadow: 1px 5px 7px 2px rgba(77,71,77,1);
   box-shadow: 1px 5px 7px 2px rgba(77,71,77,1);}

   .next { width: 100px; height: 40px; line-height: 40px;
   text-align: center; background: #00b894; font-size: 1.2rem; outline: none
   border: none;}

   .next:hover{
       color: #00b894;
       background: white;
       border: 2px solid #00b894; cursor: pointer;
   }
}

</style>
</head>
<body>
<h1> Rate Your Favourite Picture </h1>
<div class="star rating">

<img src="https://picsum.photos/400/300/?random"/>
<Ul class="stars">
    <li class="star"><i class="fa fa-star"></i></li>
    <li class="star"><i class="fa fa-star"></i></li>
    <li class="star"><i class="fa fa-star"></i></li>
    <li class="star"><i class="fa fa-star"></i></li>
    <li class="star"><i class="fa fa-star"></i></li>
</Ul>
<p class="output"> Ratings</p>
<br>
<button class="next">NEXT </button>
</div>
<script>
</script>



</body>


</html>
