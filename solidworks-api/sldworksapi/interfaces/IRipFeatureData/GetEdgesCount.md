---
type: method
interface: IRipFeatureData
member: GetEdgesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IRipFeatureData.Edges
  - IRipFeatureData.ISetEdges
keywords:
  - getedgescount
  - iripfeaturedata
  - rip
  - feature
  - data
  - edges
  - count
  - int32
---

# IRipFeatureData.GetEdgesCount

Gets the number of edges for this rip feature.

## Signature

```csharp
System.Int32 GetEdgesCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
IRipFeatureData::IGetEdges
to get the size of the array for that method.

## Examples

- IRipFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRipFeatureData)

## See Also

- `IRipFeatureData.Edges`
- `IRipFeatureData.ISetEdges`