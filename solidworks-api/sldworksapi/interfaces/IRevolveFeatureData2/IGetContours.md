---
type: method
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.Contours
  - IRevolveFeatureData2.ISetContours
keywords:
  - igetcontours
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - contours
  - count
  - int32
  - object
---

# IRevolveFeatureData2.IGetContours

Gets the selected contours for this revolve feature.

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

in-process, unmanaged C++: Pointer to an array of selected contours ( sketch contours and sketch regions ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRevolveFeatureData2::GetContoursCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRevolveFeatureData2.Contours`
- `IRevolveFeatureData2.ISetContours`