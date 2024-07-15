const db = require('@supabase/supabase-js')
const dotenv = require('dotenv').config()
const database = db.createClient(process.env.DB_URL, process.env.DB_KEY)


module.exports = database