---
type: method
interface: IStructuralMemberFeatureData
member: IGetPathSegments
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of path segments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.GetPathSegmentAt
  - IStructuralMemberFeatureData.GetPathSegmentsCount
  - IStructuralMemberFeatureData.ISetPathSegments
  - IStructuralMemberFeatureData.PathSegments
keywords:
  - igetpathsegments
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - path
  - segments
  - count
  - int32
  - sketch
  - segment
---

# IStructuralMemberFeatureData.IGetPathSegments

Gets the path segments used to create this structural member.

## Signature

```csharp
SketchSegment IGetPathSegments( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of path segments

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IStructuralMemberFeatureData::GetPathSegmentsCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.GetPathSegmentAt`
- `IStructuralMemberFeatureData.GetPathSegmentsCount`
- `IStructuralMemberFeatureData.ISetPathSegments`
- `IStructuralMemberFeatureData.PathSegments`