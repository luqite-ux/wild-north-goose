# Wild North Goose 客户站协作规则

- 本仓库只承载苏州北漠雁服饰有限公司的客户站，不修改或覆盖其他客户数据。
- 前台品牌固定使用 `WILD NORTH GOOSE`；客户未确认正式英文公司名，禁止自行创造英文法律主体名称。
- 客户已确认事实：户外与针织服装、XS–3XL、支持定制与样品、MOQ 500、支持第三方验货、常规生产周期 15–30 天、适用登山/滑雪/瑜伽。
- 禁止公开产品成本、利润，禁止虚构电话、邮箱、WhatsApp、正式域名、产能、认证、厂房规模、设备和公司历史。
- 所有 Supabase 操作必须使用环境变量中的本客户 tenant UUID 精确限定；禁止硬编码 URL、anon key、service role key 或 tenant ID。
- 产品查询必须保留静态 fallback；文章不得使用假文章 fallback；询盘必须真实写入 Supabase。
- R2 图片必须使用本客户隔离前缀与公开 HTTPS URL。
- `/admin` 使用 `hq_admin_session` 与 `hq_tenant_id` cookie，通过 303 Route Handler 登录，禁止使用登录 Server Action。
- 用户可见中文文件保持 UTF-8。编辑文件优先使用 `apply_patch`，禁止 PowerShell `Get-Content | Set-Content` 重写中文内容。
- 精确暂存修改文件；禁止 `git add .` 和 `git add -A`。
