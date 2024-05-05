const express = require ("express")
const contactController =require ('../controllers/contactControllers')
const appointmentController = require ("../controllers/appointmentControllers")
const reservationController = require ( "../controllers/reservationControllers")


const router = express.Router()

router.route("/addContact").post(contactController.addContact)
router.route("/appointment").post(appointmentController.addAppointment)
router.route("/reservation").post(reservationController.addReservation)

module.exports = router