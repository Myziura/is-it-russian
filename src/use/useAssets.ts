const icons = import.meta.glob('@/assets/icons/*')

const defineIconSrc = (icon: string) => {
  const iconPath = Object.keys(icons).find((key) => key.includes(icon))

  return iconPath || ''
}

export const useAssets = () => ({ defineIconSrc })
