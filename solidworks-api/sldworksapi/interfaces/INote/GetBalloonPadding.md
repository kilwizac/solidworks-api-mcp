---
type: method
interface: INote
member: GetBalloonPadding
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonOptions
  - INote.SetBalloonPadding
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - getballoonpadding
  - balloon
  - padding
  - double
  - bom
  - properties
  - vba
  - vb
  - net
---

# INote.GetBalloonPadding

Gets the balloon padding of this note.

## Signature

```csharp
System.Double GetBalloonPadding()
```
## Parameters

None.

## Return Value

Balloon padding

## Remarks

This method is valid only if
INote::GetBalloonSize
is set to
swBalloonFit_e
.swBF_Tightest.

## Examples

- Get BOM Balloon Properties (VBA) (Get_BOM_Balloon_Properties_Example_VB.htm)
- Get BOM Balloon Properties (VB.NET) (Get_BOM_Balloon_Properties_Example_VBNET.htm)
- Get BOM Balloon Properties (C#) (Get_BOM_Balloon_Properties_Example_CSharp.htm)

## See Also

- `INote.GetBalloonOptions`
- `INote.SetBalloonPadding`