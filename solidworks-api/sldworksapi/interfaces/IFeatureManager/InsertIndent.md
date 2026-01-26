---
type: method
interface: IFeatureManager
member: InsertIndent
returns: Feature
parameters:
  -
    name: Thickness
    type: System.Double
    description: Thickness of the indent feature
  -
    name: Clearance
    type: System.Double
    description: Distance between the tool body and target body (see Remarks )
  -
    name: Exclude
    type: System.Boolean
    description: True to exclude the selections, false to include the selections
  -
    name: ClrDir
    type: System.Boolean
    description: True to leave the direction of clearance as is, false to reverse the direction of the clearance
  -
    name: Cut
    type: System.Boolean
    description: True to cut the target body, false to not
  -
    name: CutDir
    type: System.Boolean
    description: True to reverse the direction of the cut if the tool body is a surface, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IIndentFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - indent
  - indentfeaturedata
  - iindentfeaturedata
  - insertindent
  - ifeaturemanager
  - manager
  - insert
  - thickness
  - double
  - clearance
  - exclude
  - boolean
  - clr
  - dir
  - cut
  - vb
  - net
  - vba
---

# IFeatureManager.InsertIndent

Inserts an indent feature using a selected target body and tool body regions.

## Signature

```csharp
Feature InsertIndent( 
   System.Double
Thickness
,
   System.Double
Clearance
,
   System.Boolean
Exclude
,
   System.Boolean
ClrDir
,
   System.Boolean
Cut
,
   System.Boolean
CutDir
)
```
## Parameters

- `Thickness` (System.Double): Thickness of the indent feature
- `Clearance` (System.Double): Distance between the tool body and target body (see Remarks )
- `Exclude` (System.Boolean): True to exclude the selections, false to include the selections
- `ClrDir` (System.Boolean): True to leave the direction of clearance as is, false to reverse the direction of the clearance
- `Cut` (System.Boolean): True to cut the target body, false to not
- `CutDir` (System.Boolean): True to reverse the direction of the cut if the tool body is a surface, false to not

## Return Value

Feature

## Remarks

Prior to calling this method, you must have selected the target body and tool body regions, using these selection marks:
Target body = 1
Tool body region = 4

## Examples

- Insert Indent Feature (C#) (Insert_Indent_Feature_Example_CSharp.htm)
- Insert Indent Feature (VB.NET) (Insert_Indent_Feature_Example_VBNET.htm)
- Insert Indent Feature (VBA) (Insert_Indent_Feature_Example_VB.htm)

## See Also

- `IIndentFeatureData`