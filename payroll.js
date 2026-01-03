const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    base: { type: Number, default: 0 },
    hra: { type: Number, default: 0 },
    allowances: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    currency: { type: String, default: 'INR' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payroll', payrollSchema);
