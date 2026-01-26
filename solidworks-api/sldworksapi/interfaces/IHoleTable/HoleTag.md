---
type: property
interface: IHoleTable
member: HoleTag
returns: System.String
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of the row in which you want to change the name of the tag
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IHoleTable.HoleTagsVisible
  - IHoleTable.TagStyle
keywords:
  - hole
  - tables
  - see
  - also
  - iholetable
  - tags
  - holetag
  - table
  - tag
  - row
  - int32
  - string
  - change
  - vb
  - net
  - vba
readonly: null
---

# IHoleTable.HoleTag

Gets or sets the name of the specified tag in a hole table.

## Signature

```csharp
System.String HoleTag( 
   System.Int32
Row
) {get; set;}
```
## Parameters

- `Row` (System.Int32): 0-based index of the row in which you want to change the name of the tag

## Return Value

Tag name

## Remarks

IHoleTable::CombineTags
must be false for IHoleTable::HoleTag to work.
If you plan on changing many hole tags, then consider setting
IHoleTable::EnableUpdate
to false to avoid a possible degradation in performance. After changing all of the hole tags, set IHoleTable::EnableUpdate to true to update the hole table and model view.

## Examples

- Change Tags in Hole Table (VB.NET) (Change_Tags_in_Hole_Table_Example_VBNET.htm)
- Change Tags in Hole Table (VBA) (Change_Tags_in_Hole_Table_Example_VB.htm)
- Change Tags in Hole Table (C#) (Change_Tags_in_Hole_Table_Example_CSharp.htm)

## See Also

- `IHoleTable.HoleTagsVisible`
- `IHoleTable.TagStyle`