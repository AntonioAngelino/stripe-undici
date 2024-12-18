FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y fuse3 openssl sqlite3 ca-certificates git vim curl gnupg

# Required by Stripe CLI
RUN curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | tee /usr/share/keyrings/stripe.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | tee -a /etc/apt/sources.list.d/stripe.list && \
    apt-get update && apt-get install -y stripe
