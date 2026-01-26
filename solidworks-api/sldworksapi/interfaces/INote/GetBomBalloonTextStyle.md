---
type: method
interface: INote
member: GetBomBalloonTextStyle
returns: System.Int32
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
  - INote.GetBomBalloonText
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
  - bill
  - materials
  - note
  - inote
  - notes
  - getbomballoontextstyle
  - bom
  - balloon
  - text
  - style
  - which
  - one
  - boolean
  - int32
  - vba
  - properties
  - vb
  - net
---

# INote.GetBomBalloonTextStyle

Gets the text style of this BOM balloon note.

## Signature

```csharp
System.Int32 GetBomBalloonTextStyle( 
   System.Boolean
WhichOne
)
```
## Parameters

- `WhichOne` (System.Boolean): True for the upper text, false for the lower text

## Return Value

Balloon text style as defined in swDetailingNoteTextContent_e

## Remarks

SOLIDWORKS 2001 FCS, Revision Number 9.0

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
- `INote.GetBomBalloonText`
- `INote.HasBalloon`
- `INote.IGetBalloonInfo`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBalloon`
- `INote.SetBomBalloonText`