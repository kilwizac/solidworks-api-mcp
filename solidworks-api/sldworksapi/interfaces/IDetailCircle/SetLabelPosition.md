---
type: method
interface: IDetailCircle
member: SetLabelPosition
returns: void
parameters:
  -
    name: XPosition
    type: System.Double
    description: x coordinate of the label
  -
    name: YPosition
    type: System.Double
    description: y coordinate of the label
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetLabelPosition
  - IDetailCircle.SetLabel
keywords:
  - setlabelposition
  - idetailcircle
  - detail
  - circle
  - label
  - position
  - double
  - void
---

# IDetailCircle.SetLabelPosition

Sets the position of the label for this detail circle.

## Signature

```csharp
void SetLabelPosition( 
   System.Double
XPosition
,
   System.Double
YPosition
)
```
## Parameters

- `XPosition` (System.Double): x coordinate of the label
- `YPosition` (System.Double): y coordinate of the label

## Return Value

Unknown.

## See Also

- `IDetailCircle.GetLabelPosition`
- `IDetailCircle.SetLabel`