
val _ = print ("<html><head><style >#tf{word-wrap: break-word;}</style></head><body><h1>Factorial</h1>" ^ 
               "Enter the Number:<input type='text' id='no'><br/>" ^
               "Length: <div id='length'></div><br/>" ^
               "Factorial:<div id='fact'></div></body></html>")

fun get id = 
    case Js.getElementById Js.document id of
      SOME e => e
    | NONE => raise Fail ("Missing id in document: " ^ id)

val elemC = get "no"

val () = Js.setStyle elemC ("backgroundColor", "green")

 fun fact n =
        let 
        fun fac acc 0 = acc : IntInf.int
        | fac acc n =fac (acc*n) (n-1);
        in
          IntInf.toString (fac 1 n)
        end
 


fun comp1 ()=    
  let   
    
    val elemF = get "fact"
    val length = get "length"
    val n = Js.value elemC
    val j = valOf( LargeInt.fromString n)
    val x= fact j    
    val len= Int.toString(String.size x)
  in     
    Js.innerHTML length len;false

  end
fun square n =
  Js.innerHTML n*n; false
  

val () = Js.installEventHandler elemC Js.onchange comp1
