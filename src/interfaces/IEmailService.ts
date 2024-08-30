export interface IEmailService {
  sendEmail(destinatario: string, titulo: string, texto: string): Promise<void>;
}
