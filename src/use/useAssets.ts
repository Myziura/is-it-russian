const icons = import.meta.globEager('@/assets/icons/*.png')

const defineIconSrc = (icon: string) => {
  const iconKeys = Object.keys(icons).find((key) => key.includes(icon))

  return iconKeys ? icons[iconKeys].default : ''
}

export const useAssets = () => ({ defineIconSrc })
