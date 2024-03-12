'use client'

export default function getJWT() {
    return localStorage.getItem('userJWT')
}