import { Router } from 'express';
import { EmailController } from '../controllers/emailController';
import { EmailService } from '../services/emailService';

const router = Router();
const emailService = new EmailService();
const emailController = new EmailController(emailService);

router.post('/send-email', (req, res) => emailController.sendEmail(req, res));

export default router;
