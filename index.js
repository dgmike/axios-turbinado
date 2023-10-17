export const authenticatedAdapter = (options, adapter) => adapter

export const cacheAdapter = (options, adapter) => adapter

export const curlAdapter = (options, adapter) => adapter

export const logAdapter = (options, adapter) => adapter

export const pipe = (firstFn, ...fns) => async (...args) =>
  fns.reduce(
    async (res, fn) => await fn(res),
    await firstFn(...args)
  )

export const retryAdapter = (options, adapter) => adapter

export const throttleAdapter = (options, adapter) => adapter

export default {
  authenticatedAdapter,
  cacheAdapter,
  curlAdapter,
  logAdapter,
  pipe,
  retryAdapter,
  throttleAdapter,
}
