export const loading = (comp: { loading: boolean }, h: any) =>
  comp.loading ? setTimeout(() => (comp.loading = false), 0) : h;
