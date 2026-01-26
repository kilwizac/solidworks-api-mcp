---
type: method
interface: IView
member: IGetDisplayDimensions
returns: DisplayDimension
parameters:
  -
    name: NumDisplayDim
    type: System.Int32
    description: Total number of display dimensions on this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDisplayDimensions
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - annotations
  - annotation
  - iannotation
  - view
  - iview
  - igetdisplaydimensions
  - num
  - dim
  - int32
  - dimension
---

# IView.IGetDisplayDimensions

Gets all of the display dimensions on this drawing view.

## Signature

```csharp
DisplayDimension IGetDisplayDimensions( 
   System.Int32
NumDisplayDim
)
```
## Parameters

- `NumDisplayDim` (System.Int32): Total number of display dimensions on this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of display dimensions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of display dimensions all at once instead of calling
IView::GetFirstDisplayDimension5
and then repeatedly calling
IDisplayDimension::GetNext5
to obtain the remaining display dimensions on this drawing view.
Before calling this method, call
IView::GetDisplayDimensionCount
to get the value for numDisplayDim.
NOTE:
Display dimensions are not the same as
actual model dimensions
.

## See Also

- `IView.GetDisplayDimensions`