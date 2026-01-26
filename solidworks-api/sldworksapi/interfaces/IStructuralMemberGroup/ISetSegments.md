---
type: method
interface: IStructuralMemberGroup
member: ISetSegments
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments
  -
    name: SegArr
    type: SketchSegment
    description: in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberGroup.IGetSegments
  - IStructuralMemberGroup.Segments
keywords:
  - isetsegments
  - istructuralmembergroup
  - structural
  - member
  - group
  - segments
  - count
  - int32
  - seg
  - arr
  - sketch
  - segment
  - void
---

# IStructuralMemberGroup.ISetSegments

Sets the sketch segments to use in this structural-member group.

## Signature

```csharp
void ISetSegments( 
   System.Int32
Count
,
   ref SketchSegment
SegArr
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments
- `SegArr` (SketchSegment): in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before using this method, call
IStructuralMemberGroup::GetSegmentsCount
to populate the
Count
parameter.

## See Also

- `IStructuralMemberGroup.IGetSegments`
- `IStructuralMemberGroup.Segments`