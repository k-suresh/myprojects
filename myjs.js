<script language="javascript" type="text/javascript">
<!--
// thanks to webreference
function superClass() {
  this.supertest = superTest; //attach method superTest
}

function subClass() {
  this.inheritFrom = superClass;
  this.inheritFrom();
  this.subtest = subTest; //attach method subTest
}

function superTest() {
  return "superTest";
}
  
function subTest() {
  return "subTest";
}
 
//-->
</script>
