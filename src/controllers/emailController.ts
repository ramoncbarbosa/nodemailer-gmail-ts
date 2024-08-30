import { Request, Response } from 'express';
import { EmailService } from '../services/emailService';

export class EmailController {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  public async sendEmail(req: Request, res: Response): Promise<void> {
    const { to, subject, text } = req.body;

    try {
      await this.emailService.sendEmail(to, subject, text);
      res.status(200).send('E-mail enviado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao enviar e-mail');
    }
  }
}
