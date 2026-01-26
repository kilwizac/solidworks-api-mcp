---
type: method
interface: IPartingLineFeatureData
member: ISetPartingLines
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges to use as parting lines
  -
    name: EntIn
    type: Edge
    description: in-process, unmanaged C++: Poitner to an array of edges to use as parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.GetPartingLinesCount
  - IPartingLineFeatureData.IGetPartingLines
  - IPartingLineFeatureData.PartingLines
keywords:
  - isetpartinglines
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - lines
  - count
  - int32
  - ent
  - edge
  - void
---

# IPartingLineFeatureData.ISetPartingLines

Sets the edges to use as parting lines.

## Signature

```csharp
void ISetPartingLines( 
   System.Int32
Count
,
   ref Edge
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of edges to use as parting lines
- `EntIn` (Edge): in-process, unmanaged C++: Poitner to an array of edges to use as parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.GetPartingLinesCount`
- `IPartingLineFeatureData.IGetPartingLines`
- `IPartingLineFeatureData.PartingLines`