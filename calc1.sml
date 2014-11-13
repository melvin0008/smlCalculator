 fun fact n =
        let 
        fun fac acc 0 = acc : LargeInt.int
        | fac acc n =fac (acc*n) (n-1);
        in
          IntInf.toString(fac 1 n)
        end

val x =fact 25000
