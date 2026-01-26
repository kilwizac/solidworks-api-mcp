---
type: method
interface: ISheet
member: ReloadTemplate
returns: System.Int32
parameters:
  -
    name: KeepNoteChanges
    type: System.Boolean
    description: True to keep note modifications made to the sheet format and reload all other elements from the original sheet format template, false to reload all elements from the original sheet format template and discard any note modifications made to the sheet format
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingDoc.EditTemplate
  - ISheet.SaveFormat
keywords:
  - templates
  - sheets
  - sheet
  - see
  - also
  - isheet
  - format
  - drawing
  - reloadtemplate
  - reload
  - template
  - keep
  - note
  - changes
  - boolean
  - int32
  - modify
  - vb
  - net
  - vba
---

# ISheet.ReloadTemplate

Reloads the sheet format from the original sheet format template.

## Signature

```csharp
System.Int32 ReloadTemplate( 
   System.Boolean
KeepNoteChanges
)
```
## Parameters

- `KeepNoteChanges` (System.Boolean): True to keep note modifications made to the sheet format and reload all other elements from the original sheet format template, false to reload all elements from the original sheet format template and discard any note modifications made to the sheet format

## Return Value

Status as defined in swReloadTemplateResult_e

## Remarks

If new notes are added or existing notes modified or deleted on the sheet format, then specifying true for KeepNoteChanges:
adds the new notes to the sheet format template, but does not duplicate the new notes on the sheet format.
restores any deleted notes from the sheet format template on the sheet format.
duplicates all other notes in their original position from the sheet format template on the sheet format.

## Examples

- Modify and Reload Sheet Format Template (C#) (Modify_and_Reload_Sheet_Format_Template_Example_CSharp.htm)
- Modify and Reload Sheet Format Template (VB.NET) (Modify_and_Reload_Sheet_Format_Template_Example_VBNET.htm)
- Modify and Reload Sheet Format Template (VBA) (Modify_and_Reload_Sheet_Format_Template_Example_VB.htm)

## See Also

- `IDrawingDoc.EditTemplate`
- `ISheet.SaveFormat`