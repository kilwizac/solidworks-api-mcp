---
type: method
interface: IView
member: MergeBendTags
returns: System.Boolean
parameters:
  -
    name: Merge
    type: System.Boolean
    description: True to merge bend tags, false to unmerge a merged bend tag
  -
    name: BendNotes
    type: System.Object
    description: Array of two or more bend tags to merge or an array of one merged bend tag to unmerge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - INote.IsBendLineNote
keywords:
  - bends
  - tags
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - bend
  - view
  - iview
  - note
  - inote
  - mergebendtags
  - merge
  - boolean
  - notes
  - object
  - unmerge
  - vb
  - net
  - vba
---

# IView.MergeBendTags

Merges or unmerges bend tags in drawings of sheet metal parts.

## Signature

```csharp
System.Boolean MergeBendTags( 
   System.Boolean
Merge
,
   System.Object
BendNotes
)
```
## Parameters

- `Merge` (System.Boolean): True to merge bend tags, false to unmerge a merged bend tag
- `BendNotes` (System.Object): Array of two or more bend tags to merge or an array of one merged bend tag to unmerge

## Return Value

True if the bend tags are merged or a merged bend tag is unmerged, false if not

## Remarks

To...
Do...
Merge two or more bend tags
Select the bend tags to merge.
Select the drawing view in which the bend tags exist.
Call this method with the Merge parameter set to true.
Rebuild the drawing.
Unmerge a merged bend tag
Select the drawing view in which the merged bend tag exists.
Activate the drawing view in which the merged bend tag exists.
Select the merged bend tag to unmerge.
Call this method with the Merge parameter set to false.

## Examples

- Merge and Unmerge Bend Tags (C#) (Merge_and_Unmerge_Bend_Tags_Example_CSharp.htm)
- Merge and Unmerge Bend Tags (VB.NET) (Merge_and_Unmerge_Bend_Tags_Example_VBNET.htm)
- Merge and Unmerge Bend Tags (VBA) (Merge_and_Unmerge_Bend_Tags_Example_VB.htm)

## See Also

- `INote.IsBendLineNote`