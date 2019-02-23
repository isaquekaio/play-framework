FROM openjdk:8-jre-alpine

MAINTAINER Jorgiano Vidal "jorgiano.vidal@ifrn.edu.br"

EXPOSE 9000

# Instala 'bash' para executar dist gerada pelo sbt (Scala Build Tool).
# 'shadow' permite modificações de usuário
RUN apk add --no-cache --update \
      bash \
      shadow && \
    rm -rf /var/cache/apk/*

RUN adduser -D ihair

USER ihair

ADD --chown=ihair svc/*SNAPSHOT/bin /home/ihair/bin
ADD --chown=ihair svc/*SNAPSHOT/conf /home/ihair/conf
ADD --chown=ihair svc/*SNAPSHOT/lib /home/ihair/lib
ADD --chown=ihair svc/*SNAPSHOT/share /home/ihair/share

RUN cd /home/ihair && chown -R ihair . && \
    mkdir logs && \
    touch logs/application.log

WORKDIR /home/ihair

CMD /home/ihair/bin/ihair -Dconfig.resource=production.conf
