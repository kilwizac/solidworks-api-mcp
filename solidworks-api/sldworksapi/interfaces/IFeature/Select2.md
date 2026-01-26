---
type: method
interface: IFeature
member: Select2
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the feature to the current selection list, false replaces the current selection list
  -
    name: Mark
    type: System.Int32
    description: Value you want to use as a mark; this number is used by functions that require ordered selection
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IFeature.DeSelect
  - IFeature.GetSpecificFeature2
keywords:
  - select2
  - ifeature
  - feature
  - append
  - boolean
  - mark
  - int32
  - plane
  - face
  - sketch
  - vba
  - insert
  - dxf
  - file
  - add
  - dimension
  - traverse
  - assembly
  - hide
  - all
  - sketches
  - suppress
  - component
  - vb
  - net
  - select
---

# IFeature.Select2

Selects and marks this feature.

## Signature

```csharp
System.Boolean Select2( 
   System.Boolean
Append
,
   System.Int32
Mark
)
```
## Parameters

- `Append` (System.Boolean): True appends the feature to the current selection list, false replaces the current selection list
- `Mark` (System.Int32): Value you want to use as a mark; this number is used by functions that require ordered selection

## Return Value

True if the feature was selected, false if not

## Remarks

If an object is already selected with a mark of
x
and you attempt to select the same object again using this method with Append = true and Mark =
y
, then that object remains selected with a mark with
x
. Reselecting a previously selected object does not assign a new mark value.

## Examples

- Get Plane or Face for Sketch (VBA) (Get_Plane_or_Face_for_Sketch_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Traverse Assembly and Hide All Sketches (VBA) (Traverse_Assembly_and_Hide_All_Sketches_Example_VB.htm)
- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)
- Select Plane (VBA) (Select_Plane_Example_VB.htm)
- Select Plane (VB.NET) (Select_Plane_Example_VBNET.htm)
- Select Plane (C#) (Select_Plane_Example_CSharp.htm)

## See Also

- `IFeature.DeSelect`
- `IFeature.GetSpecificFeature2`