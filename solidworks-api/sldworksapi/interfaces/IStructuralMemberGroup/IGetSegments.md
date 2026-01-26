---
type: method
interface: IStructuralMemberGroup
member: IGetSegments
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberGroup.ISetSegments
  - IStructuralMemberGroup.Segments
keywords:
  - igetsegments
  - istructuralmembergroup
  - structural
  - member
  - group
  - segments
  - count
  - int32
  - sketch
  - segment
---

# IStructuralMemberGroup.IGetSegments

Gets the sketch segments in this structural-member group.

## Signature

```csharp
SketchSegment IGetSegments( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before using this method, call
IStructuralMemberGroup::GetSegmentsCount
to populate the
Count
parameter.

## See Also

- `IStructuralMemberGroup.ISetSegments`
- `IStructuralMemberGroup.Segments`