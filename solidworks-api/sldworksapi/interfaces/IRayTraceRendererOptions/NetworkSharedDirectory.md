---
type: property
interface: IRayTraceRendererOptions
member: NetworkSharedDirectory
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.OffloadedRendering
keywords:
  - networkshareddirectory
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - network
  - shared
  - directory
  - string
readonly: null
---

# IRayTraceRendererOptions.NetworkSharedDirectory

Gets or sets the name of the shared network directory for network renders.

## Signature

```csharp
System.String NetworkSharedDirectory {get; set;}
```
## Parameters

None.

## Return Value

Name of the shared network directory for network renders

## Remarks

Using a shared network directory for network renders:
avoids having to
send scene asset data to each node on the network
.
can be faster when using many
client machines
.
NOTE:
Only SOLIDWORKS Subscription Services customers can share the effort of rendering across multiple computers.

## See Also

- `IRayTraceRendererOptions.OffloadedRendering`