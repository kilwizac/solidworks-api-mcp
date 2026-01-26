---
type: property
interface: IRayTraceRendererOptions
member: OffloadedRendering
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.ClientWorkload
  - IRayTraceRendererOptions.NetworkRendering
  - IRayTraceRendererOptions.NetworkSharedDirectory
  - IRayTraceRendererOptions.SendDataForNetworkJob
keywords:
  - offloadedrendering
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - offloaded
  - rendering
  - boolean
readonly: null
---

# IRayTraceRendererOptions.OffloadedRendering

Gets or sets whether to offload rendering to other networked machines.

## Signature

```csharp
System.Boolean OffloadedRendering {get; set;}
```
## Parameters

None.

## Return Value

True to offload rendering, false to not

## Remarks

NOTE:
Only SOLIDWORKS Subscription Services customers can share the effort of rendering across multiple computers.

## See Also

- `IRayTraceRendererOptions.ClientWorkload`
- `IRayTraceRendererOptions.NetworkRendering`
- `IRayTraceRendererOptions.NetworkSharedDirectory`
- `IRayTraceRendererOptions.SendDataForNetworkJob`