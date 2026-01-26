---
type: method
interface: INote
member: GetName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.SetName
keywords:
  - name
  - notes
  - note
  - see
  - also
  - inote
  - names
  - getname
  - string
  - all
  - drawing
  - template
  - vba
  - remove
  - hyperlink
  - new
  - existing
  - title
  - block
  - vb
  - net
---

# INote.GetName

Gets the name of this note.

## Signature

```csharp
System.String GetName()
```
## Parameters

None.

## Return Value

Name of the note

## Remarks

This method returns an empty string if the note is part of a block.

## Examples

- Get All Notes in Drawing Template (VBA) (Get_All_Notes_in_Drawing_Template_Example_VB.htm)
- Get Note By Name (VBA) (Get_Note_By_Name_Example_VB.htm)
- Remove Hyperlink From Note in Drawing (VBA) (Remove_Hyperlink_from_Note_in_Drawing_Example_VB.htm)
- Set Note Name (VBA) (Set_Note_Name_Example.htm)
- Get Notes from New or Existing Title Block (C#) (Get_Notes_from_New_or_Existing_Title_Block_Example_CSharp.htm)
- Get Notes from New or Existing Title Block (VB.NET) (Get_Notes_from_New_or_Existing_Title_Block_Example_VBNET.htm)
- Get Notes from New or Existing Title Block (VBA) (Get_Notes_from_New_or_Existing_Title_Block_Example_VB.htm)

## See Also

- `INote.SetName`