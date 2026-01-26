---
type: method
interface: IDrawingDoc
member: CreateAutoBalloonOptions
returns: AutoBalloonOptions
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IModelDocExtension.CreateBalloonOptions
  - IModelDocExtension.CreateStackedBalloonOptions
keywords:
  - annotation
  - see
  - also
  - iannotation
  - autoballoons
  - automatic
  - balloons
  - iballoonstack
  - createautoballoonoptions
  - idrawingdoc
  - drawing
  - doc
  - create
  - auto
  - balloon
  - options
  - add
  - vb
  - net
  - vba
---

# IDrawingDoc.CreateAutoBalloonOptions

Creates an object that stores auto balloon options.

## Signature

```csharp
AutoBalloonOptions CreateAutoBalloonOptions()
```
## Parameters

None.

## Return Value

IAutoBalloonOptions

## Remarks

To automatically create BOM balloons:
Select one or more views or sheets for which to automatically create BOM balloons.
Call this method to create an
IAutoBalloonOptions
object.
Set the properties on the IAutoBalloonOptions object.
Pass the IAutoBalloonOptions object in a call to
IDrawingDoc::AutoBalloon5
.

## Examples

- Add Autoballoons to Drawing (C#) (Add_Autoballoon_to_Face_Example_CSharp.htm)
- Add Autoballoons to Drawing (VB.NET) (Add_Autoballoon_to_Face_Example_VBNET.htm)
- Add Autoballoons to Drawing (VBA) (Add_Autoballoon_to_Face_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateBalloonOptions`
- `IModelDocExtension.CreateStackedBalloonOptions`