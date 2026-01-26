---
type: method
interface: IPartingLineFeatureData
member: IGetPartingLines
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges used as parting lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.ISetPartingLines
  - IPartingLineFeatureData.PartingLines
keywords:
  - igetpartinglines
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - lines
  - count
  - int32
  - edge
---

# IPartingLineFeatureData.IGetPartingLines

Gets the edges used as parting lines.

## Signature

```csharp
Edge IGetPartingLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of edges used as parting lines

## Return Value

in-process, unmanaged C++: Pointer to an array of edges used as parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IPartingLineFeatureData::GetPartingLinesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.ISetPartingLines`
- `IPartingLineFeatureData.PartingLines`