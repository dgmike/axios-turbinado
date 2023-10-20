export const pipe = (firstFn, ...fns) => async (...args) =>
  fns.reduce(
    async (res, fn) => await fn(res),
    await firstFn(...args)
  )

export default {
  pipe,
}