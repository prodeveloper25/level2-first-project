import { Joi } from 'joi';
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(10)
    .regex(/^[A-Z][a-z]*$/, { name: 'capitalize' })
    .message(
      'First Name must start with a capital letter and contain only letters',
    ),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[A-Za-z]+$/, { name: 'alpha' })
    .message('Last Name must contain only letters'),
});

// Define Joi schema for Guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Define Joi schema for LocalGuardian
const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Define Joi schema for Student
const studentSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('Male', 'Female').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNumber: Joi.string().required(),
  emergencyNumber: Joi.string().required(),
  bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'O+', 'AB+'),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImage: Joi.string(),
  isActive: Joi.string().valid('Active', 'Blocked').default('Active'),
});

export default studentSchema;
