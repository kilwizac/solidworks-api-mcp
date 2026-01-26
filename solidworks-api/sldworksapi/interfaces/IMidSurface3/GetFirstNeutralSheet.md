---
type: method
interface: IMidSurface3
member: GetFirstNeutralSheet
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMidSurface2.GetNeutralSheetCount
  - IMidSurface2.IGetNextNeutralSheet
keywords:
  - getfirstneutralsheet
  - imidsurface3
  - mid
  - surface3
  - first
  - neutral
  - sheet
  - object
---

# IMidSurface3.GetFirstNeutralSheet

Gets the first reference surface in this midsurface }}-->feature.

## Signature

```csharp
System.Object GetFirstNeutralSheet()
```
## Parameters

None.

## Return Value

First reference surface sheet body in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered to be a sheet body. If the reference surfaces are sewn together during the creation of the midsurface feature (
IModelDoc2::InsertMidSurfaceExt
), then the midsurface feature contains only one reference surface sheet body.
The sheet body returned from this method has the normal topology that you would expect to find on a body (for example, faces, edges, and so on). See the
IBody2
object for methods that provide access to this topology.
Call
IMidSurface3::GetNextNeutralSheet
to get the next reference surface in this midsurface feature.

## See Also

- `IMidSurface2.GetNeutralSheetCount`
- `IMidSurface2.IGetNextNeutralSheet`