class Person 

    def name
        # create a name variable
        name = "Steve"
    end 

    def age
        # create age variable here
        age = 24
    end

    def children
        # create children array here
        children = ["sab", "mel", "joe", "tim"]

    end

    def address
        # create address hash here
        address = {
            house_number: 13,
            street: "lil marco",
            town: "Richmond",
            county: "Greater London",
            postcode: "TW1 3PG",
            email_addresses: ["steve_the_man@spartaglobal.com", "dont_use_me@meow.com"],

        }

    end

    def password

        # do not change these variables
        favourite_things = ["motorbike" , "cat" , "travel"]
        memorable_stuff = {
          birth_year: 1983,
          mothers_name: "Eve",
          birth_town: "Richmond"
        }

        password = "#{favourite_things[1]} #{memorable_stuff[:birth_town]}"

    end

    my_array = ["hello", "this", "is", "an", "array", "of", "strings"]

    $i = 0
    $length = my_array.length

    while $i < $length do
        puts my_array[$i]
        $i += 1
    end

    begin
        puts my_array[$i].swapcase!
        $i += 1
    end while $i < $length

end