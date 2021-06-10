fuel_station_composite = [ [ [ "Station Name" ], [ "Pay Type" ], [ "Fuel Type_code" ], [ "Station Phone" ], [ "City" ] ], [0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4 ]  ]


data = " ";
ZIP = "30041";
input_value = "";

off_set = 0;
number_of_stations = 0;
cn_index = 0;

console.log( ZIP )

function get_info( ZIP_IT )
   {
    off_set = 0;
    fuel_station_composite = [ [ [ "Station Name" ], [ "Pay Type" ], [ "Fuel Type_code" ], [ "Station Phone" ], [ "City" ] ], [0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4], [ 0, 1, 2, 3, 4,], [ 0, 1, 2, 3, 4 ]  ]
    console.log("entry" + ZIP_IT)
    cn_number = 0
      // return
    fetch ( 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=5&zip=' + ZIP_IT + '&fuel_type=all&api_key=EEX0UJZ5IGFLdSdQ2lBWJoml7Vcf3uapY4wBTWgw' ,
      {
       method: 'GET',
       cache: 'no-cache',
       credentials: 'omit'
      }
     )
     .then(function (response)
        {
         return response.json();
        }
       )
     .then(function ( data )
        {
         console.log( data );
         console.log( typeof data );

         console.log( "##########################################################" );

         Object.entries( data ).map( item =>
           {
            console.log( "item 2 = " + item )
           }
          )

         console.log( "\nTitles = " + fuel_station_composite[ 0 ] + "\n" );
         console.log( "Number of Stations found = " + ( number_of_stations = data.fuel_stations.length ) );

         console.log( "##########################################################" );

         for ( i = 0; i < data.fuel_stations.length; i++ )
            {
             fuel_station_composite[ i + 1 ][ 0 ] = data.fuel_stations[ i ].station_name;
             fuel_station_composite[ i + 1 ][ 1 ] = data.fuel_stations[ i ].access_detail_code;
             fuel_station_composite[ i + 1 ][ 2 ] = data.fuel_stations[ i ].fuel_type_code;
             fuel_station_composite[ i + 1 ][ 3 ] = data.fuel_stations[ i ].station_phone;
             fuel_station_composite[ i + 1 ][ 4 ] = data.fuel_stations[ i ].city;

             console.log( "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" );

             console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 0 ] );
             console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 1 ] );
             console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 2 ] );
             console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 3 ] );
             console.log( "i = " + i + " " + fuel_station_composite[ i + 1 ][ 4 ] );

             document.getElementById( "cn1" ).innerHTML = fuel_station_composite[ 0 ][ 0 ];
             document.getElementById( "cn2" ).innerHTML = fuel_station_composite[ 0 ][ 1 ];
             document.getElementById( "cn3" ).innerHTML = fuel_station_composite[ 0 ][ 2 ];
             document.getElementById( "cn4" ).innerHTML = fuel_station_composite[ 0 ][ 3 ];
             document.getElementById( "cn5" ).innerHTML = fuel_station_composite[ 0 ][ 4 ];

             console.log( "cn_number = " + ( cn_number = ( i + 1 + off_set ) ) + ", i = " + i + ", off_set = " + off_set );
             console.log( "CN_INDEX = " + cn_index + ", " + ( cn_index = ( i + 1 ) ) );

             document.getElementById( "c" + ( cn_number + 0 ) ).innerHTML = fuel_station_composite[ cn_index ][ 0 ];
             document.getElementById( "c" + ( cn_number + 1 ) ).innerHTML = fuel_station_composite[ cn_index ][ 1 ];
             document.getElementById( "c" + ( cn_number + 2 ) ).innerHTML = fuel_station_composite[ cn_index ][ 2 ];
             document.getElementById( "c" + ( cn_number + 3 ) ).innerHTML = fuel_station_composite[ cn_index ][ 3 ];
             document.getElementById( "c" + ( cn_number + 4 ) ).innerHTML = fuel_station_composite[ cn_index ][ 4 ];

             off_set += 4;
            }

          if ( cn_number <= 21 )
            {
             console.log( "ccn_number = " + ( cn_number = ( i + 1 + off_set ) ) + ", i = " + i + ", off_set = " + off_set );
             k = i;
             cn_number = ( k + 1 + off_set )

             for ( k = i; k < 5; k++ )
               {
                console.log( "cccn_number = " + ( cn_number = ( k + 1 + off_set ) ) + ", i = " + i + ", off_set = " + off_set );

                document.getElementById( "c" + ( cn_number + 0 ) ).innerHTML = "NA"
                document.getElementById( "c" + ( cn_number + 1 ) ).innerHTML = "NA"
                document.getElementById( "c" + ( cn_number + 2 ) ).innerHTML = "NA"
                document.getElementById( "c" + ( cn_number + 3 ) ).innerHTML = "NA"
                document.getElementById( "c" + ( cn_number + 4 ) ).innerHTML = "NA"

                off_set += 4;
               }
            }

        }
      );
   }

// const input = document.querySelector('input');
// const log = document.getElementById('zipee');

// input.addEventListener('input', updateValue);

// //document.getElementById('zipee').value


// function updateValue(e)
//    {
//     console.log( log.textContent = e.target.value );
//    }

// var inputTextValue;

// window.onkeyup = keyup;

// function keyup(e)
//    {
//     //setting your input text to the global Javascript Variable for every key press
//     inputTextValue = e.target.value;

//    //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
//    if ( e.keyCode == 13 )
//      {
//       console.log("13 = " + ( input_value = e.target.value ) );
//       get_info( input_value );
//      }
//    }


//get_info( "30041" );
//get_info( "11377" );

// function pre_load( )
//    {
//     get_info( "30041" );
//     setTimeout( function() { get_info( "11377" ) } , 7000 )
//    }


// pre_load();