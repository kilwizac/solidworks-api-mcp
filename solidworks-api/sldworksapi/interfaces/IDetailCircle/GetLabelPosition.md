---
type: method
interface: IDetailCircle
member: GetLabelPosition
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
  - IDetailCircle.GetLabel
  - IDetailCircle.SetLabelPosition
keywords:
  - getlabelposition
  - idetailcircle
  - detail
  - circle
  - label
  - position
  - double
  - void
  - create
  - view
  - vba
  - vb
  - net
---

# IDetailCircle.GetLabelPosition

Gets the position of the label of this detail circle.

## Signature

```csharp
void GetLabelPosition( 
   out System.Double
XPosition
,
   out System.Double
YPosition
)
```
## Parameters

- `XPosition` (System.Double): x coordinate of the label
- `YPosition` (System.Double): y coordinate of the label

## Return Value

Unknown.

## Examples

- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)

## See Also

- `IDetailCircle.GetLabel`
- `IDetailCircle.SetLabelPosition`