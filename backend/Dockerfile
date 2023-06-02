FROM python:3.11-bullseye

WORKDIR /api

RUN pip install poetry

COPY . .

RUN poetry install

EXPOSE 8000
