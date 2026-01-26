---
type: method
interface: IView
member: IGetTemporaryAxes
returns: System.Double
parameters:
  -
    name: TempAxesCount
    type: System.Int32
    description: Number of temporary axes \
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetTemporaryAxes
keywords:
  - axes
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igettemporaryaxes
  - temporary
  - temp
  - count
  - int32
  - double
---

# IView.IGetTemporaryAxes

Gets the information of the temporary axes displayed in this view.

## Signature

```csharp
System.Double IGetTemporaryAxes( 
   System.Int32
TempAxesCount
)
```
## Parameters

- `TempAxesCount` (System.Int32): Number of temporary axes \

## Return Value

Unknown.

## Remarks

Call
IView::GetTemporaryAxesCount
before calling this method to get the value for TempAxesCount.
This array contains the start and end points, in that order, of temporary axes.

## See Also

- `IView.GetTemporaryAxes`