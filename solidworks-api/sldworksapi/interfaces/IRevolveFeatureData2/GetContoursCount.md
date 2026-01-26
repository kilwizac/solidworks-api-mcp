---
type: method
interface: IRevolveFeatureData2
member: GetContoursCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.Contours
  - IRevolveFeatureData2.ISetContours
keywords:
  - getcontourscount
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - contours
  - count
  - int32
---

# IRevolveFeatureData2.GetContoursCount

Gets the number of selected contours for this revolve feature.

## Signature

```csharp
System.Int32 GetContoursCount()
```
## Parameters

None.

## Return Value

Number of selected contours

## Remarks

This method returns the total number of sketch contours and sketch regions used in the base sketch for this feature.
Call this method before calling
IRevolveFeatureData2::IGetContours
to get the size of the array for that method.

## See Also

- `IRevolveFeatureData2.Contours`
- `IRevolveFeatureData2.ISetContours`