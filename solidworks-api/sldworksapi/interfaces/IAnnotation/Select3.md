---
type: method
interface: IAnnotation
member: Select3
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends this selection to the current selection list, false replaces the current selection list with this selection
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - selections
related: []
keywords:
  - select3
  - iannotation
  - annotation
  - append
  - boolean
  - data
  - select
  - corresponding
  - note
  - assembly
  - vba
  - part
  - insert
  - model
  - annotations
  - vb
  - net
  - all
  - center
  - marks
---

# IAnnotation.Select3

Selects this annotation and marks it.

## Signature

```csharp
System.Boolean Select3( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends this selection to the current selection list, false replaces the current selection list with this selection
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the annotation was selected, false if not

## Examples

- Get Corresponding Note in Assembly (VBA) (Get_Corresponding_Note_in_Assembly_Example_VB.htm)
- Get Corresponding Note in Part (VBA) (Get_Corresponding_Note_in_Part_Example_VB.htm)
- Insert Model Annotations (C#) (Insert_Model_Annotations_Example_CSharp.htm)
- Insert Model Annotations (VB.NET) (Insert_Model_Annotations_Example_VBNET.htm)
- Insert Model Annotations (VBA) (Insert_Model_Annotations_Example_VB.htm)
- Select All Center Marks (C#) (Select_All_Center_Marks_Example_CSharp.htm)
- Select All Center Marks (VB.NET) (Select_All_Center_Marks_Example_VBNET.htm)
- Select All Center Marks (VBA) (Select_All_Center_Marks_Example_VB.htm)