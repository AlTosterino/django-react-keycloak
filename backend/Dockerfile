FROM python:3.11-bullseye

ENV PYTHONBUFFERED=1

WORKDIR /api

RUN pip install poetry

COPY . .

RUN poetry install

EXPOSE 8000
