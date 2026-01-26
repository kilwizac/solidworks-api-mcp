---
type: method
interface: IModelDocExtension
member: InsertStackedBalloon2
returns: Note
parameters:
  -
    name: BalloonOptions
    type: StackedBalloonOptions
    description: IStackedBalloonOptions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IBalloonStack
  - IDrawingDoc.AutoBalloon5
  - IModelDocExtension.InsertBOMBalloon2
  - INote.GetBalloonOptions
  - INote.IsStackedBalloon
  - INote.MakeStackedBalloon
keywords:
  - stacked
  - balloons
  - see
  - iballoonstack
  - also
  - insertstackedballoon2
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - balloon2
  - balloon
  - options
  - note
  - bom
  - table
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertStackedBalloon2

Inserts a stack of balloons for selected items.

## Signature

```csharp
Note InsertStackedBalloon2( 
   StackedBalloonOptions
BalloonOptions
)
```
## Parameters

- `BalloonOptions` (StackedBalloonOptions): IStackedBalloonOptions

## Return Value

Note

## Remarks

To create a stack of balloons:
Select an item to insert the first balloon on the stack.
Call
IModelDocExtension::CreateStackedBalloonOptions
to create an
IStackedBalloonOptions
object.
Set the properties on the IStackedBalloonOptions object.
Call this method using the IStackedBalloonOptions object in the BalloonOptions argument.
Select one or more items to add one or more balloons to the stack.

## Examples

- Insert BOM Table and Stacked Balloon (VBA) (Insert_BOM_Table_and_Stacked_Balloon_Example_VB.htm)
- Insert BOM Table and Stacked Balloon (VB.NET) (Insert_BOM_Table_and_Stacked_Balloon_Example_VBNET.htm)
- Insert BOM Table and Stacked Balloon (C#) (Insert_BOM_Table_and_Stacked_Balloon_Example_CSharp.htm)

## See Also

- `IBalloonStack`
- `IDrawingDoc.AutoBalloon5`
- `IModelDocExtension.InsertBOMBalloon2`
- `INote.GetBalloonOptions`
- `INote.IsStackedBalloon`
- `INote.MakeStackedBalloon`