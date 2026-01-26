---
type: method
interface: IView
member: GetLineCount2
returns: System.Int32
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetLines4
  - IView.IGetLines4
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - lines
  - view
  - getlinecount2
  - line
  - count2
  - cross
  - hatch
  - option
  - int16
  - int32
  - polylines
  - information
  - vba
---

# IView.GetLineCount2

Gets the number of lines in this view with an option to include or exclude crosshatch lines.

## Signature

```csharp
System.Int32 GetLineCount2( 
   System.Int16
CrossHatchOption
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e

## Return Value

Number of lines

## Remarks

Call this method before calling
IView::IGetLines4
to get the size of the array for that method.

## Examples

- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `IView.GetLines4`
- `IView.IGetLines4`