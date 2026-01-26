---
type: method
interface: IHoleTable
member: AssignTagPrefix
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of row to which to apply TagPrefix
  -
    name: TagPrefix
    type: System.String
    description: Prefix to apply
  -
    name: ApplyTo
    type: System.Int32
    description: Apply to other holes as defined in swHoleTableTagPrefixApply_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - assigntagprefix
  - iholetable
  - hole
  - table
  - assign
  - tag
  - prefix
  - index
  - int32
  - string
  - apply
  - boolean
---

# IHoleTable.AssignTagPrefix

Prefixes the manual datum tags of specified holes with specified text.

## Signature

```csharp
System.Boolean AssignTagPrefix( 
   System.Int32
Index
,
   System.String
TagPrefix
,
   System.Int32
ApplyTo
)
```
## Parameters

- `Index` (System.Int32): Index of row to which to apply TagPrefix
- `TagPrefix` (System.String): Prefix to apply
- `ApplyTo` (System.Int32): Apply to other holes as defined in swHoleTableTagPrefixApply_e (see Remarks )

## Return Value

True if prefix successfully assigned, false if not

## Remarks

This method:
is valid only if
IHoleTable::TagStyle
is set to
swHoleTableTagStyle_e
.swHoleTable_ManualTags.
corresponds to the functionality of the
Assign Tag Prefix
dialog that pops up when you right-click on a hole table row of a manual tag.
If ApplyTo is specified with swHoleTableTagPrefixApply_e:
swHoleTableTagPrefixApply_OnlySpecifiedHole, then only the hole as specified by Index is assigned TagPrefix.
swHoleTableTagPrefixApply_AllHolesOfSameSize, then all holes that are the same size as the hole specified by Index are assigned TagPrefix.
When TagPrefix is assigned to only the hole as specified by Index, the numbering of all holes of the same size changes.
For example, if:
A model view has six holes of two different sizes, and the hole table manual tags are initially labeled:
AA1, AA2, AA3, AA4, BB1, BB2
Specify Index with the row index of AA1.
Specify TagPrefix with "AB".
Specify ApplyTo with swHoleTableTagPrefixApply_e.swHoleTableTagPrefixApply_OnlySpecifiedHole.
After calling this method:
The hole table manual tags are re-labeled:
AB1, AA1, AA2, AA3, BB1, BB2
Notice that AA1 is re-labeled to AB1, and AA2 - AA4 are re-numbered to AA1 - AA3. BB1 and BB2 are unchanged.