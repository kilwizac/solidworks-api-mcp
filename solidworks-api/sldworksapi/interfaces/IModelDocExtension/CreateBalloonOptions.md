---
type: method
interface: IModelDocExtension
member: CreateBalloonOptions
returns: BalloonOptions
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IDrawingDoc.CreateAutoBalloonOptions
  - IModelDocExtension.CreateStackedBalloonOptions
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - createballoonoptions
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - balloon
  - options
  - insert
  - show
  - bom
  - table
  - vb
  - net
  - vba
---

# IModelDocExtension.CreateBalloonOptions

Creates an object that stores BOM balloon options.

## Signature

```csharp
BalloonOptions CreateBalloonOptions()
```
## Parameters

None.

## Return Value

IBalloonOptions

## Remarks

To create a single BOM balloon:
Select an item for which to create a BOM balloon.
Call this method to create an
IBalloonOptions
object.
Set the properties on the IBalloonOptions object.
Pass the IBalloonOptions object in a call to
IModelDocExtension::InsertBOMBalloon2
.

## Examples

- Insert and Show BOM Table and BOM Balloon (C#) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_CSharp.htm)
- Insert and Show BOM Table and BOM Balloon (VB.NET) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VB.htm)
- Insert and Show BOM Table and BOM Balloon (VBA) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VB.htm)

## See Also

- `IDrawingDoc.CreateAutoBalloonOptions`
- `IModelDocExtension.CreateStackedBalloonOptions`