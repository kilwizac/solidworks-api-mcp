---
type: method
interface: IModelDocExtension
member: CreateStackedBalloonOptions
returns: StackedBalloonOptions
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IDrawingDoc.CreateAutoBalloonOptions
  - IModelDocExtension.CreateBalloonOptions
keywords:
  - stacked
  - balloons
  - see
  - iballoonstack
  - also
  - createstackedballoonoptions
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - balloon
  - options
  - insert
  - bom
  - table
  - vba
  - vb
  - net
---

# IModelDocExtension.CreateStackedBalloonOptions

Creates an object that stores options for stacked balloons.

## Signature

```csharp
StackedBalloonOptions CreateStackedBalloonOptions()
```
## Parameters

None.

## Return Value

IStackedBalloonOptions

## Remarks

To create a stack of balloons:
Select an item to create the first balloon of the stack.
Call this method to create an
IStackedBalloonOptions
object.
Set the properties on the IStackedBalloonOptions object.
Pass the IStackedBalloonOptions object in a call to
IModelDocExtension::InsertStackedBalloon2
.
Select one or more items to add one or more balloons to the stack.

## Examples

- Insert BOM Table and Stacked Balloon (VBA) (Insert_BOM_Table_and_Stacked_Balloon_Example_VB.htm)
- Insert BOM Table and Stacked Balloon (VB.NET) (Insert_BOM_Table_and_Stacked_Balloon_Example_VBNET.htm)
- Insert BOM Table and Stacked Balloon (C#) (Insert_BOM_Table_and_Stacked_Balloon_Example_CSharp.htm)

## See Also

- `IDrawingDoc.CreateAutoBalloonOptions`
- `IModelDocExtension.CreateBalloonOptions`