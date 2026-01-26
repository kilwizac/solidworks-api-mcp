---
type: property
interface: IRayTraceRendererOptions
member: NetworkRendering
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.ClientWorkload
  - IRayTraceRendererOptions.NetworkSharedDirectory
  - IRayTraceRendererOptions.OffloadedRendering
  - IRayTraceRendererOptions.SendDataForNetworkJob
keywords:
  - networkrendering
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - network
  - rendering
  - boolean
readonly: null
---

# IRayTraceRendererOptions.NetworkRendering

Gets or sets whether to enable network rendering.

## Signature

```csharp
System.Boolean NetworkRendering {get; set;}
```
## Parameters

None.

## Return Value

True to enable network rendering, false to not

## Remarks

Only SOLIDWORKS Subscription Services customers can share the effort of rendering across multiple computers.

## See Also

- `IRayTraceRendererOptions.ClientWorkload`
- `IRayTraceRendererOptions.NetworkSharedDirectory`
- `IRayTraceRendererOptions.OffloadedRendering`
- `IRayTraceRendererOptions.SendDataForNetworkJob`