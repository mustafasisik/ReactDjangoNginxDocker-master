import logo from './logo.svg';
import './App.css';

const rawHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>HAPPY FUN CORP</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style> @import url('https://fonts.googleapis.com/css2?family=Lobster+Two&family=Montserrat&family=Open+Sans&display=swap');
  h2 {
      font-family: 'Lobster Two', cursive;
  }

  .top-text{
  	font-family: 'Montserrat', sans-serif;
  }

  .bottom-text{
  	font-family: 'Open Sans', sans-serif;
  }
</style>
</head>
<body>


<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
  <a class="navbar-brand" href="#">
    <h2><img src="https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg" alt="Logo" style="width:40px;"> HAPPY FUN CORP</h2>
  </a>
  <div class="ml-auto" id="navbarNavDropdown">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
  </div>
</nav>

<div class="container-fluid px-0">
  <div class="row">
    <div class="col-md-12">
      <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="placeholder 960" class="img-responsive w-100" />
    </div>
   </div>
</div>


<div class="container">
  <div class="row m-3">
    <div class="col-sm-4 text-center">
    	<img src="https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg" alt="Logo" style="width:100px;">
    	<p>item1</p>
    </div>
    <div class="col-sm-4 text-center">
    	<img src="https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg" alt="Logo" style="width:100px;">
    	<p>item2</p>
    </div>
    <div class="col-sm-4 text-center">
      	<img src="https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg" alt="Logo" style="width:100px;">
      	<p>item3</p>
    </div>
  </div>
  <p class="top-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p class="bottom-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

	<div class="d-flex justify-content-between">
    <button style="border-radius: 12px;">deneme</button>
    <div class="row">
      <!-- Add font awesome icons -->
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
    </div>

  </div>
</div>


</body>
</html>

`;


function App() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
    </div>
  );
}

export default App;

// Styling
const container = {
  width: 500,
  margin: '50px auto'
}
