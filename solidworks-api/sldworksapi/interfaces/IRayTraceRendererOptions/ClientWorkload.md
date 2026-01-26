---
type: property
interface: IRayTraceRendererOptions
member: ClientWorkload
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.OffloadedRendering
keywords:
  - clientworkload
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - client
  - workload
  - int32
readonly: null
---

# IRayTraceRendererOptions.ClientWorkload

Gets or sets how many buckets (sections of rendering) are sent to each client processor.

## Signature

```csharp
System.Int32 ClientWorkload {get; set;}
```
## Parameters

None.

## Return Value

Number of buckets sent to each client processor (see Remarks )

## Remarks

A high client workload setting is appropriate if the client machines are more powerful than the coordinator machine.
Using a
shared network directory
for
network renders
:
can be faster when using many client machines.
avoids having to
send scene asset data to each node on the network
.
NOTE:
Only SOLIDWORKS Subscription Services customers can share the effort of rendering across multiple computers.

## See Also

- `IRayTraceRendererOptions.OffloadedRendering`