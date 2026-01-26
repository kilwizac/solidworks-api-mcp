---
type: method
interface: IMacroFeatureData
member: SetSelections2
returns: void
parameters:
  -
    name: Objects
    type: System.Object
    description: Array of objects as defined in swSelectType_e to select (see Remarks )
  -
    name: SelMarks
    type: System.Object
    description: Array of selection marks (integers or longs) for the objects (see Remarks )
  -
    name: DrViews
    type: System.Object
    description: Array of drawing views (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMacroFeatureData.GetSelectionCount
  - IMacroFeatureData.GetSelections3
  - IMacroFeatureData.IGetSelections3
  - IMacroFeatureData.ISetSelections2
keywords:
  - setselections2
  - imacrofeaturedata
  - macro
  - feature
  - data
  - selections2
  - objects
  - object
  - sel
  - marks
  - dr
  - views
  - void
  - cut
  - body
  - half
  - using
  - vba
---

# IMacroFeatureData.SetSelections2

Sets the selected objects for the macro feature.

## Signature

```csharp
void SetSelections2( 
   System.Object
Objects
,
   System.Object
SelMarks
,
   System.Object
DrViews
)
```
## Parameters

- `Objects` (System.Object): Array of objects as defined in swSelectType_e to select (see Remarks )
- `SelMarks` (System.Object): Array of selection marks (integers or longs) for the objects (see Remarks )
- `DrViews` (System.Object): Array of drawing views (see Remarks )

## Return Value

Unknown.

## Remarks

Early bind the Objects, SelMarks, and DrViews arrays when declaring them to avoid possible problems when using other IMacroFeatureData methods.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IMacroFeatureData.GetSelectionCount`
- `IMacroFeatureData.GetSelections3`
- `IMacroFeatureData.IGetSelections3`
- `IMacroFeatureData.ISetSelections2`