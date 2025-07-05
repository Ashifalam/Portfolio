# 📧 Email Setup Instructions for Contact Form

Your portfolio contact form is ready to send real emails! Follow these steps to enable email functionality using EmailJS.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (starts with "user_" or similar)
3. Copy this key

### Step 5: Update Configuration
1. Open `src/config/emailjs.js` in your project
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',     // From Step 2
  templateId: 'your_actual_template_id',   // From Step 3
  publicKey: 'your_actual_public_key',     // From Step 4
};
```

### Step 6: Test Your Setup
1. Save the file and refresh your portfolio
2. Fill out the contact form and click "Send Message"
3. Check your email inbox for the message!

## 🔧 Template Variables

Your email template can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Your email (ashifalam470@gmail.com)

## 📝 Example Template

Here's a professional email template you can use:

```html
Subject: Portfolio Contact: {{subject}}

Hello ashif,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
Reply to: {{from_email}}
```

## 🐛 Troubleshooting

### Form shows "success" but no email received:
- Check your spam/junk folder
- Verify all IDs are correct in `emailjs.js`
- Make sure your email service is properly connected

### Getting errors in console:
- Check browser console for detailed error messages
- Verify your EmailJS public key is correct
- Ensure your email service is active

### Still not working?
- Check EmailJS dashboard for delivery logs
- Try sending a test email from EmailJS dashboard
- Contact EmailJS support if needed

## 💡 Tips

1. **Free Plan Limits**: EmailJS free plan allows 200 emails/month
2. **Custom Domain**: You can use your own domain for professional emails
3. **Auto-Reply**: Set up auto-reply templates for better user experience
4. **Analytics**: Track email delivery and open rates in EmailJS dashboard

## 🔒 Security

- Your EmailJS credentials are safe to use in frontend code
- EmailJS handles all email delivery securely
- No sensitive information is exposed

---

Once configured, your contact form will send real emails to your inbox! 🎉
