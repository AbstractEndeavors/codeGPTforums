import React, { useEffect, useState } from "react";
import { Category } from "./Category/Category";
import python from './../../../assets/images/languages/python.png';
import javascript from './../../../assets/images/languages/javascript.png';
import java from './../../../assets/images/languages/java.png';
import c from './../../../assets/images/languages/c.png';
import ruby from './../../../assets/images/languages/ruby.png';
import php from './../../../assets/images/languages/php.png';
import swift from './../../../assets/images/languages/swift.png';
import kotlin from './../../../assets/images/languages/kotlin.png';
import typescript from './../../../assets/images/languages/typescript.png';
import gogolang from './../../../assets/images/languages/gogolang.png';
import r from './../../../assets/images/languages/r.png';
import rust from './../../../assets/images/languages/rust.png';
import matlab from './../../../assets/images/languages/matlab.png';
import dart from './../../../assets/images/languages/dart.png';
import scala from './../../../assets/images/languages/scala.png';
import lua from './../../../assets/images/languages/lua.png';
import groovy from './../../../assets/images/languages/groovy.png';
import haskell from './../../../assets/images/languages/haskell.png';
import perl from './../../../assets/images/languages/perl.png';
import objectivec from './../../../assets/images/languages/objectivec.png';
import sql from './../../../assets/images/languages/sql.png';
import racket from './../../../assets/images/languages/racket.png';
import julia from './../../../assets/images/languages/julia.png';
import elixir from './../../../assets/images/languages/elixir.png';
import erlang from './../../../assets/images/languages/erlang.png';
import fortran from './../../../assets/images/languages/fortran.png';
import cobol from './../../../assets/images/languages/cobol.png';
import prolog from './../../../assets/images/languages/prolog.png';
import ada from './../../../assets/images/languages/ada.png';
import crystal from './../../../assets/images/languages/crystal.png';
import elm from './../../../assets/images/languages/elm.png';
import ocaml from './../../../assets/images/languages/ocaml.png';
import delphiobjectpascal from './../../../assets/images/languages/delphiobjectpascal.png';
import labview from './../../../assets/images/languages/labview.png';
import awkgawk from './../../../assets/images/languages/awkgawk.png';
export function Categories() {
  const [categories, setCategories] = useState([]);
  
  function fetchCategories() {
    const stubbedCategories = [
  {
        $id: "swift",
        name: "swift Category",
        description: "swift",
        imageUrl: swift,
      },
{$id: "python",
name: "python Forum",
description: "python",
imageUrl: python},
{$id: "javascript",
name: "javascript Forum",
description: "javascript",
imageUrl: javascript},
{$id: "java",
name: "java Forum",
description: "java",
imageUrl: java},

{$id: "c",
name: "c Forum",
description: "c",
imageUrl: c},

{$id: "ruby",
name: "ruby Forum",
description: "ruby",
imageUrl: ruby},
{$id: "php",
name: "php Forum",
description: "php",
imageUrl: php},
{$id: "swift",
name: "swift Forum",
description: "swift",
imageUrl: swift},
{$id: "kotlin",
name: "kotlin Forum",
description: "kotlin",
imageUrl: kotlin},
{$id: "typescript",
name: "typescript Forum",
description: "typescript",
imageUrl: typescript},
{$id: "gogolang",
name: "gogolang Forum",
description: "gogolang",
imageUrl: gogolang},
{$id: "r",
name: "r Forum",
description: "r",
imageUrl: r},
{$id: "rust",
name: "rust Forum",
description: "rust",
imageUrl: rust},
{$id: "matlab",
name: "matlab Forum",
description: "matlab",
imageUrl: matlab},
{$id: "dart",
name: "dart Forum",
description: "dart",
imageUrl: dart},
{$id: "scala",
name: "scala Forum",
description: "scala",
imageUrl: scala},
{$id: "lua",
name: "lua Forum",
description: "lua",
imageUrl: lua},
{$id: "groovy",
name: "groovy Forum",
description: "groovy",
imageUrl: groovy},
{$id: "haskell",
name: "haskell Forum",
description: "haskell",
imageUrl: haskell},
{$id: "perl",
name: "perl Forum",
description: "perl",
imageUrl: perl},

{$id: "objectivec",
name: "objectivec Forum",
description: "objectivec",
imageUrl: objectivec},
{$id: "sql",
name: "sql Forum",
description: "sql",
imageUrl: sql},
{$id: "racket",
name: "racket Forum",
description: "racket",
imageUrl: racket},
{$id: "julia",
name: "julia Forum",
description: "julia",
imageUrl: julia},
{$id: "elixir",
name: "elixir Forum",
description: "elixir",
imageUrl: elixir},
{$id: "erlang",
name: "erlang Forum",
description: "erlang",
imageUrl: erlang},
{$id: "fortran",
name: "fortran Forum",
description: "fortran",
imageUrl: fortran},
{$id: "cobol",
name: "cobol Forum",
description: "cobol",
imageUrl: cobol},

{$id: "prolog",
name: "prolog Forum",
description: "prolog",
imageUrl: prolog},
{$id: "ada",
name: "ada Forum",
description: "ada",
imageUrl: ada},
{$id: "crystal",
name: "crystal Forum",
description: "crystal",
imageUrl: crystal},
{$id: "elm",
name: "elm Forum",
description: "elm",
imageUrl: elm},
{$id: "ocaml",
name: "ocaml Forum",
description: "ocaml",
imageUrl: ocaml},
{$id: "delphiobjectpascal",
name: "delphiobjectpascal Forum",
description: "delphiobjectpascal",
imageUrl: delphiobjectpascal},

{$id: "labview",
name: "labview Forum",
description: "labview",
imageUrl: labview},
{$id: "awkgawk",
name: "awkgawk Forum",
description: "awkgawk",
imageUrl: awkgawk},
    ];

    return stubbedCategories;
  }


  useEffect(() => {
    setCategories(fetchCategories());
  }, []);
  return categories.map((category) => (
        <Category key={category.$id} id={category.$id} name={category.name} description={category.description} imageUrl={category.imageUrl} />
));
  

}

