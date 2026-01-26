---
type: method
interface: IDetailCircle
member: SetLabel
returns: System.Boolean
parameters:
  -
    name: Label
    type: System.String
    description: Label for this detail view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetLabel
  - IDetailCircle.SetLabelPosition
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.ICreateDetailViewAt3
keywords:
  - setlabel
  - idetailcircle
  - detail
  - circle
  - label
  - string
  - boolean
---

# IDetailCircle.SetLabel

Sets the label for this detail circle.

## Signature

```csharp
System.Boolean SetLabel( 
   System.String
Label
)
```
## Parameters

- `Label` (System.String): Label for this detail view

## Return Value

True if label is set, false if not

## Remarks

Setting the detail circle label also updates the detail view label.

## See Also

- `IDetailCircle.GetLabel`
- `IDetailCircle.SetLabelPosition`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.ICreateDetailViewAt3`