---
type: method
interface: IDrawingDoc
member: AutoBalloon5
returns: System.Object
parameters:
  -
    name: BalloonOptions
    type: AutoBalloonOptions
    description: IAutoBalloonOptions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IModelDocExtension.InsertBOMBalloon2
  - IModelDocExtension.InsertStackedBalloon2
keywords:
  - annotation
  - see
  - also
  - iannotation
  - autoballoons
  - automatic
  - balloons
  - iballoonstack
  - autoballoon5
  - idrawingdoc
  - drawing
  - doc
  - auto
  - balloon5
  - balloon
  - options
  - object
  - add
  - vba
  - vb
  - net
---

# IDrawingDoc.AutoBalloon5

Automatically inserts BOM balloons in selected drawing views.

## Signature

```csharp
System.Object AutoBalloon5( 
   AutoBalloonOptions
BalloonOptions
)
```
## Parameters

- `BalloonOptions` (AutoBalloonOptions): IAutoBalloonOptions

## Return Value

Array of INotes

## Remarks

This method automatically inserts BOM balloons for bill of materials items in selected drawing views. If a drawing sheet is selected, BOM balloons are automatically inserted for all of the drawing views on that drawing sheet.
To automatically insert BOM balloons:
Select one or more views or sheets for which to automatically create BOM balloons.
Call
IDrawingDoc::CreateAutoBalloonOptions
to create an
IAutoBalloonOptions
object.
Set the properties on the IAutoBalloonOptions object.
Call this method using the IAutoBalloonOptions object in the BalloonOptions argument.

## Examples

- Add Autoballoons to Drawing (VBA) (Add_Autoballoon_to_Face_Example_VB.htm)
- Add Autoballoons to Drawing (VB.NET) (Add_Autoballoon_to_Face_Example_VBNET.htm)
- Add Autoballoons to Drawing (C#) (Add_Autoballoon_to_Face_Example_CSharp.htm)

## See Also

- `IModelDocExtension.InsertBOMBalloon2`
- `IModelDocExtension.InsertStackedBalloon2`