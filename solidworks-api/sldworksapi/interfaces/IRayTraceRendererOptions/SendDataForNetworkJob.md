---
type: property
interface: IRayTraceRendererOptions
member: SendDataForNetworkJob
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
  - IRayTraceRendererOptions.OffloadedRendering
keywords:
  - senddatafornetworkjob
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - send
  - data
  - network
  - job
  - boolean
readonly: null
---

# IRayTraceRendererOptions.SendDataForNetworkJob

Gets or sets whether to send rendering data over the network.

## Signature

```csharp
System.Boolean SendDataForNetworkJob {get; set;}
```
## Parameters

None.

## Return Value

True to send rendering data over the network, false to not

## Remarks

Use this property to send rendering data over the network instead of using a
shared network directory
.
Sending rendering data over the network avoids issues with permissions and cross-platform configurations that might occur when using a shared network directory.
NOTE:
Only SOLIDWORKS Subscription Services customers can share the effort of rendering across multiple computers.

## See Also

- `IRayTraceRendererOptions.ClientWorkload`
- `IRayTraceRendererOptions.NetworkRendering`
- `IRayTraceRendererOptions.OffloadedRendering`