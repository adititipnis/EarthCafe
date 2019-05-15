$(document).ready(function() {
    $("#contact").hide()

    $("#aboutHeader").on("click", function() {
        $("#contact").hide()
        $("#about").show()
        $("#aboutHeader").addClass("active")
        $("#contactHeader").removeClass("active")
    })

    $("#contactHeader").on("click", function() {
        $("#contact").show()
        $("#about").hide()
        $("#contactHeader").addClass("active")
        $("#aboutHeader").removeClass("active")
    })
})