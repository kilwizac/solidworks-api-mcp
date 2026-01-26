---
type: method
interface: IMacroFeatureData
member: IGetDisplayDimensions
returns: void
parameters:
  -
    name: DimCount
    type: System.Int32
    description: Number of display dimensions
  -
    name: Dims
    type: DisplayDimension
    description: in-process, unmanaged C++: Pointer to an array of display dimensions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IMacroFeatureData.GetDisplayDimensions
keywords:
  - igetdisplaydimensions
  - imacrofeaturedata
  - macro
  - feature
  - data
  - display
  - dimensions
  - dim
  - count
  - int32
  - dims
  - dimension
  - void
---

# IMacroFeatureData.IGetDisplayDimensions

Gets the display dimensions for this macro feature.

## Signature

```csharp
void IGetDisplayDimensions( 
   System.Int32
DimCount
,
   out DisplayDimension
Dims
)
```
## Parameters

- `DimCount` (System.Int32): Number of display dimensions
- `Dims` (DisplayDimension): in-process, unmanaged C++: Pointer to an array of display dimensions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetDisplayDimensionCount
to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetDisplayDimensions`