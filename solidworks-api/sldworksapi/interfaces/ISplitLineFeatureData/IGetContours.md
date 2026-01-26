---
type: method
interface: ISplitLineFeatureData
member: IGetContours
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected contours
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.Contours
  - ISplitLineFeatureData.ISetContours
keywords:
  - igetcontours
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - contours
  - count
  - int32
  - object
---

# ISplitLineFeatureData.IGetContours

Gets the selected contours for this split line feature.

## Signature

```csharp
System.Object IGetContours( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of selected contours

## Return Value

in-process, unmanaged C++: Pointer to an array of contours of these types: Sketch contour Sketch region VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISplitLineFeatureData::GetContoursCount
before calling this method to determine the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.Contours`
- `ISplitLineFeatureData.ISetContours`