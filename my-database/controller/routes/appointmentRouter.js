const express  = require('express')
const { 
    addAppointments, 
    getAppointments, 
    deleteAppointments, 
    editAppointments, 
    getAppointmentsTicket, 
    getAnAppointment 
} = require('../appointmentController')
const router = express.Router()

router.route('/').get(getAppointments).post(addAppointments)

router.route('/:id').delete(deleteAppointments).put(editAppointments).get(getAppointmentsTicket).get(getAnAppointment)

module.exports = router