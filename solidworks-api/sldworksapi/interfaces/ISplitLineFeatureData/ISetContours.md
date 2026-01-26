---
type: method
interface: ISplitLineFeatureData
member: ISetContours
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of contours
  -
    name: Contours
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of contours of these types: Sketch contour Sketch region VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.Contours
  - ISplitLineFeatureData.GetContoursCount
  - ISplitLineFeatureData.IGetContours
keywords:
  - isetcontours
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - contours
  - count
  - int32
  - object
  - void
---

# ISplitLineFeatureData.ISetContours

Sets the selected contours for this split line feature.

## Signature

```csharp
void ISetContours( 
   System.Int32
Count
,
   ref System.Object
Contours
)
```
## Parameters

- `Count` (System.Int32): Number of contours
- `Contours` (System.Object): in-process, unmanaged C++: Pointer to an array of contours of these types: Sketch contour Sketch region VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.Contours`
- `ISplitLineFeatureData.GetContoursCount`
- `ISplitLineFeatureData.IGetContours`