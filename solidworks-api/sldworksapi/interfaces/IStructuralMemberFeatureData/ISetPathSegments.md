---
type: method
interface: IStructuralMemberFeatureData
member: ISetPathSegments
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of path segments
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
  - IStructuralMemberFeatureData.GetPathSegmentAt
  - IStructuralMemberFeatureData.GetPathSegmentsCount
  - IStructuralMemberFeatureData.IGetPathSegments
  - IStructuralMemberFeatureData.PathSegments
keywords:
  - isetpathsegments
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - path
  - segments
  - count
  - int32
  - seg
  - arr
  - sketch
  - segment
  - void
---

# IStructuralMemberFeatureData.ISetPathSegments

Sets the path segments to use to create this structural member.

## Signature

```csharp
void ISetPathSegments( 
   System.Int32
Count
,
   ref SketchSegment
SegArr
)
```
## Parameters

- `Count` (System.Int32): Number of path segments
- `SegArr` (SketchSegment): in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.GetPathSegmentAt`
- `IStructuralMemberFeatureData.GetPathSegmentsCount`
- `IStructuralMemberFeatureData.IGetPathSegments`
- `IStructuralMemberFeatureData.PathSegments`