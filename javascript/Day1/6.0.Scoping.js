function scope() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  

    //Creating a block scope which only scopes let and const
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }

  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}


scope()


//What happends when we put scope in a block?