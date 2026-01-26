---
type: method
interface: IHemFeatureData
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
  - IHemFeatureData.Edges
  - IHemFeatureData.ISetEdges
keywords:
  - getedgescount
  - ihemfeaturedata
  - hem
  - feature
  - data
  - edges
  - count
  - int32
---

# IHemFeatureData.GetEdgesCount

Gets the number of edges for this hem.

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
IHemFeatureData::IGetEdges
.

## See Also

- `IHemFeatureData.Edges`
- `IHemFeatureData.ISetEdges`