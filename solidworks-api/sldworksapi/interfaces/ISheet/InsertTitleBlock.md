---
type: method
interface: ISheet
member: InsertTitleBlock
returns: TitleBlock
parameters:
  -
    name: Notes
    type: System.Object
    description: Array of notes or nothing (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.TitleBlock
keywords:
  - inserttitleblock
  - isheet
  - sheet
  - insert
  - title
  - block
  - notes
  - object
  - new
  - existing
  - vb
  - net
  - vba
---

# ISheet.InsertTitleBlock

Inserts a title block into this drawing sheet.

## Signature

```csharp
TitleBlock InsertTitleBlock( 
   System.Object
Notes
)
```
## Parameters

- `Notes` (System.Object): Array of notes or nothing (see Remarks )

## Return Value

Title block

## Remarks

The Notes parameter can contain one or more more notes or nothing. If the Notes parameter contains a note, or notes, then the note, or notes, is expected to be a Dispatch pointer, or pointers, to the
INote
object, or objects, to include as part of the title block being created.
Only one title block can exist in a sheet.

## Examples

- Get Notes from New or Existing Title Block (C#) (Get_Notes_from_New_or_Existing_Title_Block_Example_CSharp.htm)
- Get Notes from New or Existing Title Block (VB.NET) (Get_Notes_from_New_or_Existing_Title_Block_Example_VBNET.htm)
- Get Notes from New or Existing Title Block (VBA) (Get_Notes_from_New_or_Existing_Title_Block_Example_VB.htm)

## See Also

- `ISheet.TitleBlock`