---
type: method
interface: IMacroFeatureData
member: GetDisplayDimensionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IMacroFeatureData.GetDisplayDimensions
keywords:
  - getdisplaydimensioncount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - display
  - dimension
  - count
  - int32
---

# IMacroFeatureData.GetDisplayDimensionCount

Gets the number of display dimensions for this macro feature.

## Signature

```csharp
System.Int32 GetDisplayDimensionCount()
```
## Parameters

None.

## Return Value

Number of display dimensions

## Remarks

Call this method before calling
IMacroFeatureData::IGetDisplayDimensions
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.GetDisplayDimensions`