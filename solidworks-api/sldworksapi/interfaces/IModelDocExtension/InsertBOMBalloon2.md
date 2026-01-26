---
type: method
interface: IModelDocExtension
member: InsertBOMBalloon2
returns: Note
parameters:
  -
    name: BalloonOptions
    type: BalloonOptions
    description: IBalloonOptions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IDrawingDoc.AutoBalloon5
  - IModelDocExtension.InsertStackedBalloon2
  - INote.GetBalloonOptions
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - bill
  - materials
  - insertbomballoon2
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - bom
  - balloon2
  - balloon
  - options
  - note
  - show
  - table
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertBOMBalloon2

Inserts a BOM balloon for the selected item.

## Signature

```csharp
Note InsertBOMBalloon2( 
   BalloonOptions
BalloonOptions
)
```
## Parameters

- `BalloonOptions` (BalloonOptions): IBalloonOptions

## Return Value

Note

## Remarks

To create a single BOM balloon:
Select an item for which to create a BOM balloon.
Call
IModelDocExtension::CreateBalloonOptions
to create an
IBalloonOptions
object.
Set the properties on the IBalloonOptions object.
Call this method using the IBalloonOptions object in the BalloonOptions argument.

## Examples

- Insert and Show BOM Table and BOM Balloon (VBA) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VB.htm)
- Insert and Show BOM Table and BOM Balloon (VB.NET) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VBNET.htm)
- Insert and Show BOM Table and BOM Balloon (C#) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_CSharp.htm)

## See Also

- `IDrawingDoc.AutoBalloon5`
- `IModelDocExtension.InsertStackedBalloon2`
- `INote.GetBalloonOptions`