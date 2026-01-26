---
type: method
interface: INote
member: GetNext
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.IGetNext
  - IView.GetFirstNote
  - IView.IGetFirstNote
keywords:
  - note
  - see
  - also
  - inote
  - next
  - getnext
  - object
  - change
  - text
  - vba
  - all
  - notes
  - drawing
  - template
---

# INote.GetNext

Gets the next note in drawing view.

## Signature

```csharp
System.Object GetNext()
```
## Parameters

None.

## Return Value

Next note

## Remarks

The sheet must be visible. See
ISheet::SheetFormatVisible.

## Examples

- Change Note Text (VBA) (Change_Note_Text_Example_VB.htm)
- Get All Notes in Drawing Template (VBA) (Get_All_Notes_in_Drawing_Template_Example_VB.htm)

## See Also

- `INote.IGetNext`
- `IView.GetFirstNote`
- `IView.IGetFirstNote`