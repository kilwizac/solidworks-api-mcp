---
type: method
interface: INote
member: GetBomBalloonText
returns: System.String
parameters:
  -
    name: WhichOne
    type: System.Boolean
    description: True for the upper text, false for the lower text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IModelDocExtension.InsertBOMBalloon
  - INote.GetBalloonInfo
  - INote.GetBalloonOptions
  - INote.GetBalloonSize
  - INote.GetBalloonStack
  - INote.GetBalloonStyle
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
  - INote.IGetBalloonInfo
  - INote.IsBomBalloon
  - INote.IsStackedBalloon
  - INote.IsStackedBalloonMaster
  - INote.SetBalloon
  - INote.SetBomBalloonText
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - bill
  - materials
  - getbomballoontext
  - bom
  - balloon
  - text
  - which
  - one
  - boolean
  - string
  - vba
  - properties
  - vb
  - net
---

# INote.GetBomBalloonText

Gets the text for this BOM balloon note.

## Signature

```csharp
System.String GetBomBalloonText( 
   System.Boolean
WhichOne
)
```
## Parameters

- `WhichOne` (System.Boolean): True for the upper text, false for the lower text

## Return Value

Balloon text

## Examples

- Set BOM Balloon Text (VBA) (Set_BOM_Balloon_Example_VB.htm)
- Get BOM Balloon Properties (C#) (Get_BOM_Balloon_Properties_Example_CSharp.htm)
- Get BOM Balloon Properties (VB.NET) (Get_BOM_Balloon_Properties_Example_VBNET.htm)
- Get BOM Balloon Properties (VBA) (Get_BOM_Balloon_Properties_Example_VB.htm)

## See Also

- `IModelDocExtension.InsertBOMBalloon`
- `INote.GetBalloonInfo`
- `INote.GetBalloonOptions`
- `INote.GetBalloonSize`
- `INote.GetBalloonStack`
- `INote.GetBalloonStyle`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IGetBalloonInfo`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBalloon`
- `INote.SetBomBalloonText`