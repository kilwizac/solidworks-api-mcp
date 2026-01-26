---
type: method
interface: IExtrudeFeatureData2
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
  - IExtrudeFeatureData2.Contours
  - IExtrudeFeatureData2.ISetContours
keywords:
  - contour
  - types
  - features
  - igetcontours
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - contours
  - count
  - int32
  - object
---

# IExtrudeFeatureData2.IGetContours

Gets the selected contours for this extrude feature.

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

in-process, unmanaged C++: Pointer to an array of contours ( sketch contours and sketch regions ) of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IExtrudeFeatureData2::GetContoursCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IExtrudeFeatureData2.Contours`
- `IExtrudeFeatureData2.ISetContours`