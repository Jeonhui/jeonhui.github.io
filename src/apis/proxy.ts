import axios from "axios"
import { PROXY_SERVER_URL } from "@env"

const proxyAxios = axios.create()

type CreateProxyServerUrlWithTargetUrlProps = {
  targetUrl?: string
}

const createProxyServerUrlWithTargetUrl = ({
  targetUrl,
}: CreateProxyServerUrlWithTargetUrlProps) => {
  return `${PROXY_SERVER_URL}?target=${targetUrl}`
}

proxyAxios.interceptors.request.use(
  (config) => {
    config.url = createProxyServerUrlWithTargetUrl({ targetUrl: config.url })
    return config
  },
  (error) => Promise.reject(error),
)

export { createProxyServerUrlWithTargetUrl }
export default proxyAxios
