const apkFileName = 'BPSU-Drive-v1.0-debug.apk'

export const appDownload = {
  href: `${import.meta.env.BASE_URL}downloads/${apkFileName}`,
  fileName: apkFileName,
  version: '1.0',
  size: '8.2 MB',
  minimumAndroid: 'Android 7.0+',
  buildType: 'Debug demo build',
}
