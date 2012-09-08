var app = {
    initialize: function() {
        this.bind();
        
        document.ontouchmove = function(event){
            event.preventDefault();
        }

        var update = function() {
            var minutes = parseInt($('#minutes_idling').val());

            var price_of_gasoline = parseFloat($('#price_of_gasoline').val());

            var gasoline_cost = (0.04 * minutes * price_of_gasoline).toFixed(2);
            $('.gasoline_cost_value').text(gasoline_cost);

            var fine = (minutes < 3 ? 0.00 : 179.00).toFixed(2);
            $('.fine').text(fine);

            var carbon_emissions = (8.721 * minutes).toFixed(2);
            $('.carbon_emissions').text(carbon_emissions);
        };

        $('#minutes_idling').live('change', function() {
            update();
        });

        $('#price_of_gasoline').live('change', function() {
            update();
        });


        update();

    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};
