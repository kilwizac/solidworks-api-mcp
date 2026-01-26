---
type: method
interface: IDraftFeatureData2
member: ISetPartingLines
returns: void
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of parting lines
  -
    name: LineArray
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IDraftFeatureData2.GetPartingLinesCount
  - IDraftFeatureData2.IGetPartingLines
  - IDraftFeatureData2.PartingLines
keywords:
  - parting
  - lines
  - see
  - also
  - ipartinglinefeaturedata
  - drafts
  - idraftfeaturedata2
  - isetpartinglines
  - draft
  - feature
  - data2
  - count
  - int16
  - line
  - array
  - edge
  - void
---

# IDraftFeatureData2.ISetPartingLines

Sets the parting lines for this draft feature.

## Signature

```csharp
void ISetPartingLines( 
   System.Int16
Count
,
   ref Edge
LineArray
)
```
## Parameters

- `Count` (System.Int16): Number of parting lines
- `LineArray` (Edge): in-process, unmanaged C++: Pointer to an array of parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDraftFeatureData2.GetPartingLinesCount`
- `IDraftFeatureData2.IGetPartingLines`
- `IDraftFeatureData2.PartingLines`