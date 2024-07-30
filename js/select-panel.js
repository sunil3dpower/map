        jQuery(document).ready(function($) {
            function updateMapDivs() {
                var yearSelected = $('#year-select').val();
                var electionTypeSelected = $('#election-type-select').val();
                $('.map-div').hide(); 
                if (yearSelected && electionTypeSelected) {
                    $('#' + yearSelected + '-' + electionTypeSelected).show(); 
                }
            }


            $('#year-select').on('change', function() {
                var yearSelected = $(this).val();
                if (yearSelected) {
                    $('#election-type-select').prop('disabled', false);
                    updateMapDivs(); 
                } else {
                    $('#election-type-select').prop('disabled', true);
                    $('.map-div').hide(); 
                }
            });


            $('#election-type-select').on('change', function() {
                updateMapDivs();
            });


            $('.map-div').hide();


            updateMapDivs();
        });
