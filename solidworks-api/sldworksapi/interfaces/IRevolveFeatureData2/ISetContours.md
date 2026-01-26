---
type: method
interface: IRevolveFeatureData2
member: ISetContours
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected contours
  -
    name: Contours
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of selected contours ( sketch contours and sketch regions ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.Contours
  - IRevolveFeatureData2.GetContoursCount
  - IRevolveFeatureData2.IGetContours
keywords:
  - isetcontours
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - contours
  - count
  - int32
  - object
  - void
---

# IRevolveFeatureData2.ISetContours

Sets the selected contours for this revolve feature.

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

- `Count` (System.Int32): Number of selected contours
- `Contours` (System.Object): in-process, unmanaged C++: Pointer to an array of selected contours ( sketch contours and sketch regions ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRevolveFeatureData2.Contours`
- `IRevolveFeatureData2.GetContoursCount`
- `IRevolveFeatureData2.IGetContours`