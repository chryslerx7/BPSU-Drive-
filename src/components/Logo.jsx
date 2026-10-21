function Logo({ variant = 'default', showWordmark = true }) {
  const isInverse = variant === 'inverse'

  return (
    <span className={`brand ${isInverse ? 'brand--inverse' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="presentation" focusable="false">
          <rect
            width="40"
            height="40"
            rx="11"
            fill={isInverse ? '#FFFFFF' : '#B5121B'}
          />
          <path
            d="M14 9.5h8.2l6.3 6.3v12.7a1.5 1.5 0 0 1-1.5 1.5H14a1.5 1.5 0 0 1-1.5-1.5v-17A1.5 1.5 0 0 1 14 9.5Z"
            fill={isInverse ? '#B5121B' : '#FFFFFF'}
          />
          <path
            d="M22.2 9.5v5.3a1 1 0 0 0 1 1h5.3"
            fill="none"
            stroke={isInverse ? '#FFFFFF' : '#B5121B'}
            strokeWidth="1.5"
          />
          <path
            d="M16.5 19.5h6.5M16.5 23.5h4.5"
            stroke={isInverse ? '#FFFFFF' : '#B5121B'}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="27" cy="28" r="5.2" fill={isInverse ? '#8F1018' : '#1F7A46'} />
          <path
            d="m24.6 28 1.6 1.6 3-3.3"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="brand-name">
          BPSU <span>Drive</span>
        </span>
      )}
    </span>
  )
}

export default Logo
