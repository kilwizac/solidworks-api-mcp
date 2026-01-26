---
type: method
interface: IStructuralMemberFeatureData
member: GetPathSegmentsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.GetPathSegmentAt
  - IStructuralMemberFeatureData.ISetPathSegments
  - IStructuralMemberFeatureData.PathSegments
keywords:
  - getpathsegmentscount
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - path
  - segments
  - count
  - int32
---

# IStructuralMemberFeatureData.GetPathSegmentsCount

Gets the number of path segments for this structural member.

## Signature

```csharp
System.Int32 GetPathSegmentsCount()
```
## Parameters

None.

## Return Value

Number of path segments

## Remarks

Call this method before calling
IStructuralMemberFeatureData::IGetPathSegments
to get the size of the array for that method.

## See Also

- `IStructuralMemberFeatureData.GetPathSegmentAt`
- `IStructuralMemberFeatureData.ISetPathSegments`
- `IStructuralMemberFeatureData.PathSegments`